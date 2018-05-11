<template>
  <div>
    <h2>Home</h2>
    <!--嵌套路由-->
    <div>
      <ul class="nav nav-tabs">
        <!--生成（子）路由链接-->
        <li><router-link to="/home/news">News</router-link></li>
        <li><router-link to="/home/message">Message</router-link></li>
      </ul>
      <!--显示路由对应的组件-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style>
</style>
