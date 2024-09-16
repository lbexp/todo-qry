<script setup lang="ts">
import useTodoList from '@/usecases/todo/use-todo-list'
import useCreateTodo from '@/usecases/todo/use-create-todo'

import HeaderNav from '@/components/HeaderNav.vue'
import TodoList from '@/components/TodoList.vue'

const { data } = useTodoList()
const { onAdd } = useCreateTodo()
</script>

<template>
  <div :class="$style.wrapper">
    <HeaderNav />
    <div>
      <TodoList :items="data || []" />
    </div>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
}
</style>
