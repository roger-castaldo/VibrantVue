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