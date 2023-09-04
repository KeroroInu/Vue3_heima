<!-- <script>
// setup
// 1.执行时机，比beforeCreate还要早
// 2.setip函数中，获取不到this（this是undefined）
// 3.数据 和 函数，学要在 setup 最后 return，才能在模版中应用
// 问题：每次都要return，好麻烦？
// 4.通过setup语法糖简化代码
export default {
  setup() { 
    console.log('setup函数', this);
    // 数据
    const message = 'hello Vue3'
    // 函数
    const logMessage = () => {
      console.log(message);
    }

    return {
      message,
      logMessage
    }
  },
  beforeCreate() {
    console.log('beforeCreate函数');
  }
}
</script> -->

<script setup>
// 数据
const message = 'hello Vue3'
// 函数
const logMessage = () => {
  console.log(message);
}
</script>

<template>
  <div>
    {{ message }}
    <button @click="logMessage">按钮</button>
  </div>
</template>