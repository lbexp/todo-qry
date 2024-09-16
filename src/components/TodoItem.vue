<script setup lang="ts">
import type { TodoItem } from '@/entities/todo'
import useEditTodo from '@/usecases/todo/use-edit-todo'

const props = defineProps<TodoItem>()

const { checked, text } = useEditTodo(props)
</script>

<template>
  <div :class="$style.wrapper">
    <input type="checkbox" v-model="checked" />
    <input v-model="text" />
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
