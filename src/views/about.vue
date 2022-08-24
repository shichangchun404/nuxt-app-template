<template>
  <div>hi about view id = {{id}}</div>
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
