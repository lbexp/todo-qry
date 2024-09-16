<script setup lang="ts">
import TodoItemComp from './TodoItem.vue'
import type { TodoItem } from '@/entities/todo'

defineProps<{
  items: TodoItem[]
}>()
</script>

<template>
  <div :class="$style.wrapper">
    <TodoItemComp
      v-for="(item, index) in items"
      :key="index"
      :id="item.id"
      :checked="item.checked"
      :text="item.text"
    />
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
