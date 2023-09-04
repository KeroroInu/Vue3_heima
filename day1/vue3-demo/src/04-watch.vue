<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const nickName = ref('kero')

const changeName = () => {
  nickName.value = 'doro'
}
// 1.监视单个数据的变化
// watch(ref对象, (newValue,oldValue) => { ... })
// watch(count, (newValue, oldValue) => {
//   console.log(`count 发生了变化，老值为${oldValue}，新值为${newValue}`)
// })

// 2.监视多个数据的变化
// watch([ref对象1,ref对象2],(newArr,oldArr) => { ... })
// watch([count, nickName], (newArr, oldArr)=> {
//   console.log(newArr, oldArr)
// })

// 3.immediate 立刻执行
// watch([count, nickName], () => {
//   console.log('发生了变化');
// }, {
//   immediate: true
// })
//----------------------------------------------------
// 4.deep 深度监视，默认 watch 进行的是 浅层监视
// const ref1 = ref(简单类型) 可以直接监视
// const ref2 = ref(复杂类型) 监视不到复杂类型内部数据的变化
const userInfo = ref({
  name: 'kero',
  age:18
})

// 4.1 deep 深度监视
const setUserInfo = () => {
  // 修改了 userInfo.value 修改了对象的地址，才能监视到
  // userInfo.value = {name:'doro',age:20}
  // 默认监视不到
  userInfo.value.age++
}
// watch(userInfo, (newValue) => {
//   console.log(newValue)
// }, {
//   deep:true
// })

// 4.2 对于对象中的属性，进行精确监视
watch(() => userInfo.value.age, (newValue,oldValue) => {
  console.log(newValue,oldValue);
})
</script>

<template>
  <div>
    {{ count }}
    <button @click="count++">改数字</button>
    {{ nickName }}
    <button @click="changeName">改名字</button>
    <hr>
    {{ userInfo }}
    <button @click="setUserInfo">修改userInfo</button>
  </div>
</template>