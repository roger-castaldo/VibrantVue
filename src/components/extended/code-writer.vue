<template>
    <div class="editor" ref="container" />
</template>

<script lang="ts" setup>
/**
 * Used to create a Code Writer interface based on acejs
 * 
 * @displayName CodeWriter
 */
    import { watch, computed, onMounted, markRaw, ref,inject } from 'vue';
    import { useAceJS } from '../shared';
    import { AutoCompleteEntry } from './typeDefinitions';
    import { loadNonEs6Module } from '../utilities';

    const aceJS = `${useAceJS(inject)}src-noconflict/ace.js`;

    const props = withDefaults(defineProps<{
        /**
         * What code language to use
         */
        language?:string,
        /**
         * Provided auto complete entries to supply
         */
        autocompletes?:AutoCompleteEntry[],
        /**
         * Inidicates if the code writer is readonly
         */
        readonly?:boolean,
        /**
         * The value of the code writer content
         */
        value?:string
    }>(),{
        readonly:false,
        value:''
    });

    const emit = defineEmits<{
        /**
         * Emitted when the content of the code has changed.  Provides the new content value.
         */
        'valueChanged':[value:string]
    }>();

    const container = ref(null);
    const editor  = ref<any|null>(null);

    const getValue = function () {
        return (editor.value.getValue() == '' ? null : editor.value.getValue());
    };
    const setValue = function (value) {
        editor.value.setValue((value == null ? '' : value));
    };

    watch(()=>props.readonly, (val) => {
        editor.value.setReadOnly((val == null || val == undefined ? false : val));
    });
    watch(()=>props.value, (val) => {
        setValue(val);
    });
    watch(()=>props.language, (val) => {
        editor.value.getSession().setMode(val);
    });

    const MinAutoCompleteLength = computed(() => {
        let ret = Number.MAX_SAFE_INTEGER;
        if (props.autocompletes != undefined && props.autocompletes != null) {
            for (let x = 0; x < props.autocompletes.length; x++) {
                if (props.autocompletes[x].method.indexOf('.')>=0) {
                    ret = Math.min(ret, props.autocompletes[x].method.indexOf('.'));
                } else {
                    ret = Math.min(ret, props.autocompletes[x].method.length);
                }
            }
            if (ret > 3 && props.autocompletes.length > 0) {
                let allSame = true;
                let start = props.autocompletes[0].method.substring(0, 3);
                for (let x = 0; x < props.autocompletes.length; x++) {
                    if (props.autocompletes[x].method.substring(0, 3) != start) {
                        allSame = false;
                        break;
                    }
                }
                if (allSame)
                    ret = 3;
            }
        }
        return ret;
    });

    defineExpose({ 
        /**
         * Gets the current value 
         */
        getValue, 
        /**
         * Sets the current value
         * 
         * @param value string|null
         */
        setValue 
    });

    onMounted(async () => {
        const {ace} =  await loadNonEs6Module(aceJS,['ace']);
        editor.value = markRaw(ace.edit(container.value.$el, {
            mode: props.language,
            selectionStyle: 'text',
            minLines: 20,
            maxLines: 50,
            enableBasicAutocompletion: true
        }));

        editor.value.setReadOnly(props.readonly === undefined || props.readonly === null ? false : props.readonly);

        if (props.value !== null && props.value !== undefined) {
            editor.value.setValue(props.value);
        }

        editor.value.on('change', () => emit('valueChanged', getValue()));

        if (props.autocompletes !== null && props.autocompletes !== undefined) {
            editor.value.setOptions({
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true
            });

            editor.value.completers = [{
                identifierRegexps: [/[a-zA-Z0-9_\.]+/],
                getCompletions: function (editor, session, pos, prefix, callback) {
                    var completes:any[] = [];
                    prefix = prefix.toUpperCase();
                    if (prefix.length >= MinAutoCompleteLength) {
                        completes = props.autocompletes!
                                .filter(ac=>ac.method.toUpperCase().startsWith(prefix)
                                && ac.method.length>prefix.legend)
                                .map(ac=>{
                                    return {
                                        caption: ac.method + (ac.description === null || ac.description === undefined ? '' : '->' + ac.description),
                                        value: ac.method,
                                        meta: 'autos'
                                    }
                                });
                    }
                    if (completes.length === 0) { callback(null, []); return; }
                    callback(null, completes.map(function (word) {
                        return word;
                    }));
                }
            }];
        }
    });
</script>