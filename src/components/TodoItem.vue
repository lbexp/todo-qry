<script setup lang="ts">
import { ref } from 'vue'
import type { TodoItem } from '@/entities/todo'

const props = defineProps<TodoItem>()
const checked = ref(props.checked)
</script>

<template>
  <div :class="$style.wrapper">
    <input type="checkbox" v-model="checked" />
    <p>{{ text }}</p>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
