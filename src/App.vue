<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div :class="$style.wrapper">
    <HeaderNav />
    <div>
      <TodoList
        :items="[
          {
            checked: true,
            text: 'Ini coyy'
          },
          {
            checked: false,
            text: 'Ini coy'
          },
          {
            checked: true,
            text: 'Ini coyy'
          }
        ]"
      />
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
