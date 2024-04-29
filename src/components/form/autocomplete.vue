<template>
    <div class="control autocomplete" v-on:blur="clear" v-on:click="focusInput">
        <div class="tagsfield field input is-grouped is-grouped-multiline">
            <div class="control" v-for="(value,index) in selected">
                <div class="tags has-addons">
                    <a class="tag is-link">{{Translator(value.name)}}</a>
                    <a class="tag is-delete" v-if="!value.readonly" v-on:click="removeSelected(index)"></a>
                </div>
            </div>
            <div  v-if="!props.disabled">
                <span ref="contentSpan" v-bind:placeholder="Translator(props.title??'')" contenteditable v-show="selected.length<props.limit || props.limit==null" v-bind:class="classes" v-on:focus="classes='is-focused';" v-on:blur="classes=null;" v-on:keydown="keyPress" v-on:paste="paste"/>
            </div>
        </div>
        <div class="dropdown" v-bind:class="{'is-active':results!=null&&searchString!=null&&searchString!=''}">
            <div class="dropdown-menu">
                <div class="dropdown-content">
                    <template v-if="results!=null && results.length>0">
                        <a class="dropdown-item" v-for="value in results" v-on:click="addSelected(value)">{{Translator(value.name)}}</a>
                    </template>
                    <template v-else>
                        <a class="dropdown-item">No Results</a>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { watch, ref, inject} from 'vue';
    import 'jquery';
    import { commonFieldProps,useTranslator } from './common';
    import { ValueChangedEvent } from './typesDefinitions';

    type AutoCompleteItem = {
        id:string,
        name:string,
        readonly?:boolean
    };

    interface fieldProps extends commonFieldProps {
        title:string,
        limit?:number|null,
        callbackurl?:string,
        values?:AutoCompleteItem[],
        fetch?:(url:string,init?: RequestInit) => Promise<Response>
    };
</script>

<script lang="ts" setup>
    const emit = defineEmits<{
         valueChanged:[data:ValueChangedEvent]
    }>();

    const props = defineProps<fieldProps>();

    const Translator = useTranslator(props,inject);

    const selected = ref<AutoCompleteItem[]>([]);
    const searchString = ref<string|null>(null);
    const results = ref<AutoCompleteItem[]|null>(null);
    const classes = ref<string|null>(null);

    const contentSpan = ref(null);

    watch(searchString, async (val) => {
        if (val != null) {
            if (val.length >= 2) {
                if (props.values != undefined && props.values != null) {
                    let data = [];
                    for (let x = 0; x < props.values.length; x++) {
                        if (props.values[x].name.toUpperCase().indexOf(val.toUpperCase()) >= 0
                            || props.values[x].id.toUpperCase().indexOf(val.toUpperCase()) >= 0) {
                            data.push(props.values[x]);
                        }
                        if (data.length == 10) {
                            break;
                        }
                    }
                    results.value = data;
                } else {
                    const response = await (props.fetch??fetch)(`${props.callbackurl}?q=${encodeURIComponent(val)}`);
                    let data = await response.json();
                    if (data.length > 10) {
                        data.splice(10, data.length - 10);
                    }
                    results.value = data;
                }
            }
        } else {
            results.value = null;
            $(contentSpan.value).empty();
        }
    });

    const getValue = () : any|any[]|null => {
        if (selected.value.length == 0)
            return null;
        const result = selected.value.slice();
        if (props.limit != undefined && props.limit == 1) {
            if (result.length > 0) {
                return result[0];
            } else {
                return null;
            }
        }
        return result;
    };
    const setValue = async (value: AutoCompleteItem|AutoCompleteItem[]|string[]|null) : Promise<void> => {
        if (value == null) {
            if (selected.value.length > 0) {
                selected.value.splice(0, selected.value.length);
            }
            searchString.value = null;
        } else {
            const vals: (AutoCompleteItem|null)[] = await Promise.all(
                (Array.isArray(value) ? value : [value]).map<Promise<AutoCompleteItem>>(async (val:any)=>{
                    if (val.id!==undefined && val.name!==undefined){
                        return val as AutoCompleteItem;
                    }else{
                        const response = await (props.fetch??fetch)(`${props.callbackurl}?${(val.id === undefined ? 'q='+encodeURIComponent(val) : 'id='+encodeURIComponent(val.id))}`);
                        let data = await response.json();
                        if (data.length > 0) {
                            if (props.disabled) {
                                data[0].readonly = true;
                            }
                            return data[0] as AutoCompleteItem;
                        }else{
                            return null;
                        }
                    }
                })
            );
            selected.value = vals.filter(v=>v!==null);
            emit('valueChanged',{name:props.name,value:getValue()});
        }
    };
    const paste = (event:any):void => {
        event.preventDefault();
        searchString.value = event.clipboardData.getData('text/plain');
    };
    const keyPress = (event:any):void => {
        switch (event.key) {
            case 'Backspace':
                if (searchString.value != null && searchString.value.length > 0) {
                    searchString.value = searchString.value.substring(0, searchString.value.length - 1);
                }
                break;
            case 'Enter':
            case 'Shift':
                break;
            default:
                if (event.key.length == 1) {
                    searchString.value = (searchString.value == null ? '' : searchString.value) + event.key;
                }
                break;
        }
    };
    const clear = ():void => {
        searchString.value = null;
    };
    const focusInput = ():void=> {
        contentSpan.value.focus();
    };
    const addSelected = (val:AutoCompleteItem):void  => {
        selected.value.push(val);
        clear();
        emit('valueChanged', { name: props.name, value: getValue() });
    };
    const removeSelected = (index:number):void => {
        selected.value.splice(index, 1);
        focusInput();
        emit('valueChanged', { name: props.name, value: getValue() });
    };

    defineExpose({ getValue, setValue });
</script>