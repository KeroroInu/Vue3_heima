<script setup>
import { inject } from 'vue'
// 注入普通数据
const color = inject('color')

// 注入响应式数据
const count = inject('count')

// 注入方法 从而修改父组件数据
const changeCount = inject('changeCount')

</script>

<template>
  <div>
    <h3>我是底层组件 - {{ color }} - {{ count }}</h3>
    <button @click="changeCount(1000)">updata</button>
  </div>
</template>