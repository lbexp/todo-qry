<script setup lang="ts">
import useTodoList from '@/usecases/todo/use-todo-list'

import HeaderNav from '@/components/HeaderNav.vue'
import TodoList from '@/components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

const { data } = useTodoList()
</script>

<template>
  <div :class="$style.wrapper">
    <HeaderNav />
    <div :class="$style['content-wrapper']">
      <TodoForm />
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

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
