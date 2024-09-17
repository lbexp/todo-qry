<script setup lang="ts">
import useCreateTodo from '@/usecases/todo/use-create-todo'

const { text, onAdd } = useCreateTodo()
</script>

<template>
  <div :class="$style.wrapper">
    <input placeholder="Input new todo here.." v-model="text" />
    <button @click="onAdd">+</button>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
