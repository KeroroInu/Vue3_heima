<script setup>
import { computed, ref } from 'vue'
// const 计算属性  = computed(() => {
//  return 计算返回的结果
// })

// 声明数据
const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
// 基于list派生一个计算属性，从list中过滤出 > 2
// const computedList = computed(() => {
//   return list.value.filter(item => item > 2)
// })
const computedList = computed({
  get: () => list.value.filter(item => item > 2),
  set: (val) => {
    list.value.push(val)
  }
})

// 定义一个修改数组的方法
const addFn = () => {
  list.value.push(+(Math.random() * 10).toFixed(0))
}

computedList.value = 100
</script>

<template>
   <div>
      原始数据：
      {{ list }}
    </div>
  <div>
    计算属性后的数据：
    
    {{ computedList }}
  </div>
  <button @click="addFn">修改</button>
</template>