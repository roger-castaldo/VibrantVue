<template>
  <slot name="pending" v-if="promiseState.isDelayElapsed&&!promiseState.isRejected&&!promiseState.isResolved" :response="promiseState.data">
    <Progress :size="Sizes.small"/>
  </slot>
  <slot name="rejected" v-if="promiseState.isRejected" v-bind="promiseState.error">
    <Notification :message="`${Error}:${promiseState.error.message??promiseState.error.toString()}`" :type="NoticeTypes.danger"/>  
  </slot>
  <slot v-if="promiseState.isResolved" :response="promiseState.data"/>
</template>

<script lang="ts" setup>
  import {reactive, toRefs,computed,inject,watch} from 'vue';
  import { usePromise, UsePromiseResult } from './usePromise';
  import { Progress,Notification } from '.';
  import { NoticeTypes, Sizes } from '../enums';
  import { useLanguage } from '../shared';
  import translate from '../../messages/messages.js';

  const props = withDefaults(defineProps<{
    promise:Promise<unknown|null>|unknown|null|undefined,
    pendingDelay:number|string
  }>(),{
    pendingDelay:200
  });

  const Language = useLanguage(inject);
  const Error = computed<string>(()=>translate('Form.Error',Language));

  const rProps = toRefs(props);

  const promiseState = reactive(usePromise(rProps.promise,rProps.pendingDelay));
</script>