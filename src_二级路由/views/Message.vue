<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{message.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "message",
    data () {
      return {
        messages: []
      }
    },

    mounted () {
      //模拟异步获取
      setTimeout(() => {
        this.messages = [
          {id: 1, title: 'messages01'},
          {id: 2, title: 'messages02'},
          {id: 3, title: 'messages03'}
        ]
      },1000)
    }
  }
</script>

<style scoped>

</style>
