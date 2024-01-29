import { ComputedRef, computed } from "vue";

export const useLanguage= (inject: (<T>(string,T?)=> T | undefined)) : ComputedRef<string> => {
    const ILanguage = inject<string>("Language",'en');
    const Language = computed<string>(()=>ILanguage);
  
    return Language;
};

export const useIconSet= (inject: (<T>(string,T?)=> T | undefined)) : ComputedRef<string> => {
    const IIconSet = inject<string>("IconSet",'solid');
    const IconSet = computed<string>(()=>IIconSet);
  
    return IconSet;
};

export const useSummerNote = (inject: (<T>(string,T?)=> T | undefined)) : string => 
    inject<string>('SummerNoteCDN','https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/');

export const useFontAwesome = (inject: (<T>(string,T?)=> T | undefined)) : string => 
    inject<string>('FontAwesomeCDN','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/');

export const useAnimation = (inject: (<T>(string,T?)=> T | undefined)) : string => 
    inject<string>('AnimateCDN','https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/');

export const useChartJS = (inject: (<T>(string,T?)=> T | undefined)) : string => 
    inject<string>('ChartJSCDN','https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/');

export const useAceJS = (inject: (<T>(string,T?)=> T | undefined)) : string => 
    inject<string>('AceJSCDN','https://cdn.jsdelivr.net/npm/ace-builds@1.32.3/');




