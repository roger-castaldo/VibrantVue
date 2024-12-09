<template>
  <!--
    @slot used to display something while promise is Pending, defaults to a small progress bar
  -->
  <slot name="pending" v-if="promiseState.isDelayElapsed&&!promiseState.isRejected&&!promiseState.isResolved" :response="promiseState.data">
    <Progress :size="Sizes.small"/>
  </slot>
  <!--
    @slot used to display something when a promise is Rejected, defaults to a Notification with the error
  -->
  <slot name="rejected" v-if="promiseState.isRejected" v-bind="promiseState.error">
    <Notification :message="`${Error}:${promiseState.error.message??promiseState.error.toString()}`" :type="NoticeTypes.danger"/>  
  </slot>
  <!--
    @slot used to display whatever content should be rendered through a resolved promise, passing the data in from the promise
  -->
  <slot v-if="promiseState.isResolved" :response="promiseState.data"/>
</template>

<script lang="ts" setup>
/**
 * Used to supply a Promise component that expects a Promise to be supplied and will render accordingly
 * 
 * @displayName Promised
 */
  import {reactive, toRefs,computed,inject,watch} from 'vue';
  import { usePromise, UsePromiseResult } from './usePromise';
  import { Progress,Notification } from '.';
  import { NoticeTypes, Sizes } from '../../enums';
  import { useLanguage } from '../shared';
  import translate from '../../messages/messages.js';

  const props = withDefaults(defineProps<{
    /**
     * The Promise that this component is build around
     */
    promise:Promise<unknown|null>|unknown|null|undefined,
    /**
     * The Pending delay to use prior to displaying pending
     */
    pending_delay?:number|string
  }>(),{
    pending_delay:200
  });

  const Language = useLanguage(inject);
  const Error = computed<string>(()=>translate('Form.Error',Language));

  const rProps = toRefs(props);

  const promiseState = reactive(usePromise(rProps.promise,rProps.pending_delay));
</script>