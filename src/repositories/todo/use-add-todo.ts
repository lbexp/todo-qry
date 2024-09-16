import { ref } from 'vue'

export default function useAddTodo() {
  const loading = ref(false)
  const error = ref('')

  const mutateData = (text: string) => {
    loading.value = true
    error.value = ''

    try {
      // TODO: Add fetch to save item
      console.log(text)
    } catch (err) {
      error.value = (err as Error).message || ''
    } finally {
      loading.value = false
    }

    return { success: !error.value, error: error.value }
  }

  return {
    loading,
    error,
    onMutate: mutateData
  }
}
