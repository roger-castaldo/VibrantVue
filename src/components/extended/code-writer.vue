<template>
    <div class="editor" ref="container" />
</template>

<script lang="ts" setup>
    import { watch, computed, onMounted, markRaw, ref,inject } from 'vue';
    import { useAceJS } from '../shared';
    import { AutoCompleteEntry } from './typeDefinitions';
    import { loadNonEs6Module } from '../utilities';

    const aceJS = `${useAceJS(inject)}src-noconflict/ace.js`;

    const props = withDefaults(defineProps<{
        language?:string,
        autocompletes?:AutoCompleteEntry[],
        readonly?:boolean,
        value:string
    }>(),{
        readonly:false
    });

    const emit = defineEmits<{
        'value_changed':[value:string]
    }>();

    const container = ref(null);
    const editor  = ref<any|null>(null);

    const getValue = function () {
        return (editor.getValue() == '' ? null : editor.getValue());
    };
    const setValue = function (value) {
        editor.setValue((value == null ? '' : value));
    };

    watch([props.readonly], (val) => {
        editor.setReadOnly((val == null || val == undefined ? false : val));
    });
    watch([props.value], (val) => {
        setValue(val);
    });
    watch([props.language], (val) => {
        editor.getSession().setMode(val);
    });

    const MinAutoCompleteLength = computed(() => {
        let ret = Number.MAX_SAFE_INTEGER;
        if (props.autocompletes != undefined && props.autocompletes != null) {
            for (let x = 0; x < props.autocompletes.length; x++) {
                if (props.autocompletes[x].Method.indexOf('.')>=0) {
                    ret = Math.min(ret, props.autocompletes[x].Method.indexOf('.'));
                } else {
                    ret = Math.min(ret, props.autocompletes[x].Method.length);
                }
            }
            if (ret > 3 && props.autocompletes.length > 0) {
                let allSame = true;
                let start = props.autocompletes[0].Method.substring(0, 3);
                for (let x = 0; x < props.autocompletes.length; x++) {
                    if (props.autocompletes[x].Method.substring(0, 3) != start) {
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

    defineExpose({ getValue, setValue });

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

        editor.on('change', () => emit('value_changed', getValue()));

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
                                .filter(ac=>ac.Method.toUpperCase().startsWith(prefix)
                                && ac.Method.length>prefix.legend)
                                .map(ac=>{
                                    return {
                                        caption: ac.Method + (ac.Description === null || ac.Description === undefined ? '' : '->' + ac.Description),
                                        value: ac.Method,
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