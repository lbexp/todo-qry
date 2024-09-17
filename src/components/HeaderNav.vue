<script setup lang="ts"></script>

<template>
  <header :class="$style.wrapper">
    <h1 :class="$style.title">Todo List</h1>
  </header>
</template>

<style module>
.wrapper {
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 2rem;
}
</style>
