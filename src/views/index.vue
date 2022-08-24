<template>
  <div>
    <h1> hi home view </h1>
    <el-button v-for="(item,index) in list" :key="index" @click="call(item)">{{item}}</el-button>
    <el-button v-for="(item) in list2" :key="item" @click="call(item)">{{item}}</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  fetch(){
    console.log('home fetch')
  },
  asyncData(){
    return {
      list: ['张三', '李四', '王五']
    }
  },
  data(){
    return {
      list2: ['苹果', '香蕉', '芒果']
    }
  },
  methods: {
    call(value: string){
      this.$message.success(value)
    }
  }
})
</script>