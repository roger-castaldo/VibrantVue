<template>
  <!--
    @slot used to display something while promise is Pending, defaults to a small progress bar
  -->
  <slot name="pending" v-if="isPending">
    <Progress :size="Sizes.small"/>
  </slot>
  <!--
    @slot used to display something when a promise is Rejected, defaults to a Notification with the error
  -->
  <slot name="rejected" v-if="isRejected" v-bind="error">
    <Notification :message="ErrorMessage" :type="NoticeTypes.danger"/>  
  </slot>
  <!--
    @slot used to display whatever content should be rendered through a resolved promise, passing the data in from the promise
  -->
  <slot v-if="isResolved" :response="data"/>
</template>

<script lang="ts">
  import {computed,inject,ref,watch,onMounted,MaybeRef,unref} from 'vue';
</script>

<script lang="ts" setup>
/**
 * Used to supply a Promise component that expects a Promise to be supplied and will render accordingly
 * 
 * @displayName Promised
 */
  import { Progress,Notification } from '.';
  import { NoticeTypes, Sizes } from '../../enums';
  import { useLanguage } from '../shared';
  import translate from '../../messages/messages.js';

  const props = defineProps<{
    /**
     * The Promise that this component is build around
     */
    promise?:MaybeRef<Promise<unknown|null>|unknown|null>
  }>();

  const error = ref<Error | null | unknown>(null);

  const Language = useLanguage(inject);
  const ErrorMessage = computed<string>(()=>`${translate('Form.Error',Language)}: ${error.value.message??error.value.toString()}`);

  const isRejected = ref(false);
  const isResolved = ref(false);

  const isPending = computed(()=>!isRejected.value && !isResolved.value);
  const data = ref<unknown | null>(null);

  async function watchPromise(promise : MaybeRef<Promise<unknown|null>|unknown|null>|undefined) : Promise<void> {
    isRejected.value = false
    isResolved.value = false
    error.value = null
    if (promise===null || promise===undefined){
      data.value = null;
    }else{
      let tmp : Promise<unknown|null>|unknown = unref(promise);
      if (Object.prototype.toString.call(tmp) !== "[object Promise]"){
        tmp = Promise.resolve(tmp);
      }
      try{
        data.value = await tmp;
        isResolved.value = true;
      }catch(err){
        error.value = err;
        isRejected.value = true;
      }
    }
  }

  watch(
    () => props.promise,
    ()=>{watchPromise(props.promise);}
  );

  onMounted(()=>{watchPromise(props.promise);});
</script>