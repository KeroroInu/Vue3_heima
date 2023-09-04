<script setup>
const count = 999
const sayHi = () => {
  console.log('hello');
}

defineExpose({
  count,
  sayHi
})
</script>

<template>
  <div>
    我是用于测试的组件 - {{ count }}
  </div>
</template>