<template>
  <div>
    <h1>banner list</h1>
    <ul>
      <li v-for="(item,index) in bannerList" :key="index">
        <nuxt-link :to="`/about/${item}`">{{item}}</nuxt-link>
      </li>
    </ul>
    
  </div>
</template>
<script lang="ts">
import { mapState } from "vuex";
export default {
  name: 'HomeBanner',
  computed: {
    ...mapState({
      bannerList: (state: any): Array<any> => {
        return state.home.bannerList
      }
    })
  },
  mounted(){
    // @ts-ignore
    console.log('HomeList bannerList', this.bannerList)
  },
  methods: {
    call(value: string){
      alert(value)
    }
  }
}
</script>
<style>
</style>