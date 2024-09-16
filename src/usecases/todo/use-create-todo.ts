import { ref } from 'vue'
import useAddTodo from '@/repositories/todo/use-add-todo'

export default function useCreateTodo() {
  const text = ref('')
  const { loading, onMutate } = useAddTodo()

  const addTodo = (): boolean => {
    if (!text.value) {
      alert("Text can't be empty")
      return false
    }

    const { error, success } = onMutate(text.value)

    if (!success) {
      alert(error)
      return false
    }

    return true
  }

  return {
    loading,
    onAdd: addTodo
  }
}
