import { ComputedRef, computed, InjectionKey, defineComponent, h, ref, onMounted, nextTick, watch, unref, type PropType, type MaybeRef, type DeepReadonly, readonly } from "vue";

const languageKey : string = 'Language';

export const provideLanguage = ( language: string, 
    provide: <T, K = string | number | InjectionKey<T>>(key: K, value: K extends InjectionKey<infer V> ? V : T)=>void) : void => 
    provide<string>(languageKey,language);

export const useLanguage= (inject: (<T>(string,T?)=> T | undefined)) : ComputedRef<string> => {
    const ILanguage = inject<string>(languageKey,'en');
    const Language = computed<string>(()=>ILanguage!);
  
    return Language;
};

const iconSetKey : string = 'IconSet';

export const provideIconSet = ( iconSet: string, 
    provide: <T, K = string | number | InjectionKey<T>>(key: K, value: K extends InjectionKey<infer V> ? V : T)=>void) : void => 
    provide<string>(iconSetKey,iconSet);

export const useIconSet= (inject: (<T>(string,T?)=> T | undefined)) : ComputedRef<string> => {
    const IIconSet = inject<string>(iconSetKey,'solid');
    const IconSet = computed<string>(()=>IIconSet!);
  
    return IconSet;
};

const summerNoteKey : string = 'SummerNoteCDN';

export const provideSummerNote = ( summerNoteCDN: string, 
    provide: <T, K = string | number | InjectionKey<T>>(key: K, value: K extends InjectionKey<infer V> ? V : T)=>void) : void => 
    provide<string>(summerNoteKey, summerNoteCDN);

export const useSummerNote = (inject: (<T>(string,T?)=> T | undefined)) : string => 
    inject<string>(summerNoteKey,'https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.0/')!;

const fontAwesomeKey : string = 'FontAwesomeCDN'

export const provideFontAwesome = ( fontAwesomeCDN: string, 
    provide: <T, K = string | number | InjectionKey<T>>(key: K, value: K extends InjectionKey<infer V> ? V : T)=>void) : void => 
    provide<string>(fontAwesomeKey, fontAwesomeCDN);

export const useFontAwesome = (inject: (<T>(string,T?)=> T | undefined)) : string => 
    inject<string>(fontAwesomeKey,'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/')!;

const animateCssKey : string = 'AnimateCDN';

export const provideAnimation = ( animateCssCDN: string, 
    provide: <T, K = string | number | InjectionKey<T>>(key: K, value: K extends InjectionKey<infer V> ? V : T)=>void) : void => 
    provide<string>(animateCssKey, animateCssCDN);

export const useAnimation = (inject: (<T>(string,T?)=> T | undefined)) : string => 
    inject<string>(animateCssKey,'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/')!;

const chartJsKey : string = 'ChartJSCDN';

export const provideChatJS = ( chartJSCDN: string, 
    provide: <T, K = string | number | InjectionKey<T>>(key: K, value: K extends InjectionKey<infer V> ? V : T)=>void) : void => 
    provide<string>(chartJsKey, chartJSCDN);

export const useChartJS = (inject: (<T>(string,T?)=> T | undefined)) : string => 
    inject<string>(chartJsKey,'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.7/')!;

const aceJsKey : string = 'AceJSCDN';

export const provideAceJS = ( aceJsCDN: string, 
    provide: <T, K = string | number | InjectionKey<T>>(key: K, value: K extends InjectionKey<infer V> ? V : T)=>void) : void => 
    provide<string>(aceJsKey, aceJsCDN);

export const useAceJS = (inject: (<T>(string,T?)=> T | undefined)) : string => 
    inject<string>(aceJsKey,'https://cdn.jsdelivr.net/npm/ace-builds@1.37.3/')!;

export const skeleton = defineComponent({
    name: 'skeleton',
    props:{
        tag:{
            type: String,
            default: 'div'
        },
        is_loading:{
            type: [Boolean, Object] as PropType<MaybeRef<boolean> | undefined>,
            default: undefined
        },
        modelValue: { 
            type: [String, Number, Boolean, Array, Object, null] as PropType<any>, 
            default: undefined 
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit, slots, attrs }) {
        const showSkeleton = ref((props.is_loading===undefined ? true : unref(props.is_loading))); 

        onMounted(() => {
            nextTick(() => {
                if (props.is_loading===undefined || !unref(props.is_loading)){
                    showSkeleton.value = false;
                }
            });
        });

        if (props.is_loading!==undefined){
            watch(
                () => unref(props.is_loading),
                (loading)=>{
                    if (loading) showSkeleton.value = true;
                    else showSkeleton.value = false;
                }
            );
        }

        return () => {
            return h(
                props.tag,
                {
                    ...attrs,
                    class: [
                        attrs.class,
                        showSkeleton.value
                            ? (slots.default ? 'is-skeleton' : 'skeleton-block')
                            : undefined
                    ],
                    value: props.modelValue,
                    onInput: (e: Event) => {
                        const target = e.target as HTMLInputElement
                        emit('update:modelValue', target.type === 'number' ? target.valueAsNumber : target.value)
                    }
                },
                slots.default?.()
            );
        };
    }
});

const brands = ref<string[]>([]);

export const SetBrands = (brandList: string[]) : void => {
    brands.value = brandList;
}

export const GetBrands = () : DeepReadonly<string[]> => {
    return readonly(brands.value);
}