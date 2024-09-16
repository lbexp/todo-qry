import { ref } from 'vue'
import type { TodoItem } from '@/entities/todo'

export default function useUpdateTodo() {
  const loading = ref(false)
  const error = ref('')

  const mutateData = (item: TodoItem) => {
    loading.value = true
    error.value = ''

    try {
      // TODO: Add fetch to update item
      console.log(item)
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
