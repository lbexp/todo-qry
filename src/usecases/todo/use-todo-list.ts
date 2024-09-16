import { onBeforeMount } from 'vue'
import useGetTodos from '@/repositories/todo/use-get-todos'

export default function useTodoList() {
  const { loading, data, onQuery } = useGetTodos()

  onBeforeMount(onQuery)

  return {
    loading,
    data,
    onRefetch: onQuery
  }
}
