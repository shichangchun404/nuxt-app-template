<template>
  <div>
    <div>about view id = {{id}}</div>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage',
  data(){
    return {
      id: this.$route.params.id
    }
  }
})
</script>
