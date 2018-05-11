<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <!--生成（子）路由链接，并传递参数-->
        <router-link :to="`/home/message/messageDetail/${message.id}`">{{message.title}}</router-link>
      </li>
    </ul>
    <!--显示路由对应的组件-->
    <router-view></router-view>
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
