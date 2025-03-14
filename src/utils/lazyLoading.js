// useLazyFunction.js
import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useLazyFunction(target, loader, options = { threshold: 0.1 }) {
  const functionRef = ref(null)
  const isLoading = ref(false)
  const error = ref(null)
  let observer = null

  const loadFunction = async () => {
    try {
      isLoading.value = true
      error.value = null
      const module = await loader()
      functionRef.value = module
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !functionRef.value && !isLoading.value) {
        loadFunction()
        observer?.unobserve(entry.target)
      }
    })
  }

  onMounted(() => {
    if (target.value) {
      observer = new IntersectionObserver(handleIntersection, options)
      observer.observe(target.value)
    }
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return {
    fn: functionRef,
    isLoading,
    error,
    retry: loadFunction
  }
}
