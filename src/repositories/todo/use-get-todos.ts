import { ref } from 'vue'
import type { TodoItem } from '@/entities/todo'

export default function useGetTodos() {
  const loading = ref(false)
  const error = ref('')
  const data = ref<TodoItem[]>()

  const queryData = () => {
    loading.value = true

    try {
      // TODO: Replace this mock with actual fetched data
      data.value = [
        {
          id: 0,
          checked: false,
          text: 'Buy groceries'
        },
        {
          id: 1,
          checked: false,
          text: 'Wash car'
        },
        {
          id: 2,
          checked: false,
          text: 'Studying math'
        }
      ]
    } catch (err) {
      error.value = (err as Error).message || 'Undefined error'
    } finally {
      loading.value = false
    }

    return {
      data: data.value,
      error: error.value
    }
  }

  return {
    loading,
    data,
    onQuery: queryData
  }
}
