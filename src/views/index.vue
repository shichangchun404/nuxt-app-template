<template>
  <div>
    <h1> hi home view </h1>
    <ul>
      <li v-for="item in userList" :key="item">{{item}}</li>
    </ul>
    <home-banner></home-banner>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeBanner from '~/components/home/HomeBanner.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HomeBanner
  },
  fetch({ store, app, route, redirect }){
    store.dispatch("home/FETCH_GET_BANNER", {state: 0})
  },
  asyncData(){
    return {
      userList: ['张三', '李四', '王五'],
    }
  },
  head () {
    return {
      title: '首页', 
      meta: [
        { hid: "description", name: "description", content: "description" },
        { hid: "keywords", name: "keywords", content: "keywords" }
      ],
      link: [
        { rel: 'stylesheet', href: '/static/css/index.css' }
      ],
      // script: [
      //   { type: "text/javascript", src: '/static/css/index.js'}
      // ]
    }
  },
})
</script>