import { ComputedRef, computed, InjectionKey } from "vue";

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




