<script setup>
import { useCountStore } from '@/store/counter'
const CountStore = useCountStore()
</script>

<template>
  <div>
    我是 Son2 - {{ CountStore.count }}
    <button @click="CountStore.changeCount(-1)">-</button>
  </div>
</template>

<style scoped></style>
