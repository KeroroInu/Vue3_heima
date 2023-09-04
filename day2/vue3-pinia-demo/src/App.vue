<script setup>
import { storeToRefs } from 'pinia'
import Son1Com from '@/components/Son1Com.vue'
import Son2Com from '@/components/Son2Com.vue'
import { useCountStore } from '@/store/counter'
import { useChannelStore } from '@/store/channel'

const CountStore = useCountStore()
const CannelStore = useChannelStore()

// 此时，直接解构，不处理，数据会丢失响应式
const { count, msg } = CountStore
const { channelList } = storeToRefs(CannelStore)
// 方法无需响应式
const { getList } = CannelStore


</script>

<template>
  <div>
    <h3>App.vue根组件 
    - {{ count }}
    - {{ msg }}
    - {{ CountStore.double }}
  </h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
  </div>
  <hr>
  <button @click="getList()">获取频道数据</button>
  <ul>
    <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<style scoped>

</style>
