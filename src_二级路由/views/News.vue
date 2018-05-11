<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
  </ul>
</template>

<script>
  export default {
    name: "news",
    data () {
      return {
        newsArr: ['xlx01','xlx02','xlx03',]
      }
    }

  }
</script>

<style scoped>

</style>
