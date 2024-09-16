import { watch } from 'vue'

import useDebouncedRef from '@/hooks/use-debounced-ref'
import useUpdateTodo from '@/repositories/todo/use-update-todo'

import type { TodoItem } from '@/entities/todo'

export default function useEditTodo(item: TodoItem) {
  const checked = useDebouncedRef(item.checked)
  const text = useDebouncedRef(item.text)

  const { loading, onMutate } = useUpdateTodo()

  const editTodo = (): boolean => {
    if (!text.value) {
      alert("Text can't be empty")
      return false
    }

    const { error, success } = onMutate({
      id: item.id,
      checked: checked.value,
      text: text.value
    })

    if (!success) {
      alert(error)
      return false
    }

    return true
  }

  watch(checked, editTodo)
  watch(text, editTodo)

  return {
    checked,
    text,
    loading,
    onEdit: editTodo
  }
}
