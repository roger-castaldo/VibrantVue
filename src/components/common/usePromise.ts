import {
    ref,
    watch,
    Ref,
    computed,
    ComputedRef,
    unref,
  } from 'vue'
  
  export type MaybeRef<T = unknown> = T | Ref<T>
  export type MaybeRefOrGetter<T = unknown> = MaybeRef<T> | (() => T)
  function toValue<T>(source: MaybeRefOrGetter<T>): T {
    // @ts-expect-error: source not callable
    return typeof source === 'function' ? source() : unref(source)
  }
  
  /**
   * Returns the state of a Promise and observes the Promise if it's a Ref to
   * automatically update the state
   *
   * @param promise - Ref of a Promise or raw Promise
   * @param pendingDelay - optional delay to wait before displaying pending
   */
  export function usePromise<T = unknown>(
    promise: MaybeRef<Promise<T> | T | null | undefined>,
    pendingDelay: MaybeRef<number | string> = 200
  ): UsePromiseResult<T> {

    const isRejected = ref(false)
    const isResolved = ref(false)
    const isPending = computed(() => !isRejected.value && !isResolved.value)
    const isDelayElapsed = ref(false)
    const error = ref<Error | undefined | null>()
    const data = ref<T | null | undefined>()
    const wrappedPromise = computed<Promise<T>>(()=>{
      if (promise!==undefined && promise!==null){
        let tmp = toValue(promise);
        return tmp instanceof Promise ? 
          tmp : 
          new Promise<T>((resolve)=>resolve(tmp));
      }
      return null;
    });
  
    let timerId: ReturnType<typeof setTimeout> | undefined | null
  
    watch(
      () => toValue(wrappedPromise),
      (newPromise) => {
        isRejected.value = false
        isResolved.value = false
        error.value = null
        if (!newPromise) {
          data.value = null
          if (timerId) clearTimeout(timerId)
          timerId = null
          return
        }
  
        const pendingDelayNumber = Number(toValue(pendingDelay)) || 0
        if (pendingDelayNumber > 0) {
          isDelayElapsed.value = false
          if (timerId) clearTimeout(timerId)
          timerId = setTimeout(() => {
            isDelayElapsed.value = true
          }, pendingDelayNumber)
        } else {
          isDelayElapsed.value = true
        }
  
        newPromise
          .then((newData) => {
            // ensure we are dealing with the same promise
            if (newPromise === toValue(wrappedPromise)) {
              data.value = toValue(newData);
              isResolved.value = true
            }
          })
          .catch((err) => {
            // ensure we are dealing with the same promise
            if (newPromise === toValue(wrappedPromise)) {
              error.value = err
              isRejected.value = true
            }
          })
      },
      { immediate: true }
    )
  
    return { isPending, isRejected, isResolved, isDelayElapsed, error, data }
  }
  
  /**
   * Return type of `usePromise()`
   */
  export interface UsePromiseResult<T = unknown> {
    isPending: ComputedRef<boolean>
    isResolved: Ref<boolean>
    isRejected: Ref<boolean>
    isDelayElapsed: Ref<boolean>
    error: Ref<Error | undefined | null>
    data: Ref<T | undefined | null>
  }