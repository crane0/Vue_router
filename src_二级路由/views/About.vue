<template>
  <div>
    <h2>About</h2>
    <p>{{msg1}}</p>
    <input type="text">
  </div>
</template>

<script>
  export default {
    name: "home",
    //接收传递的数据
    props: {
      msg1: String
    }

  }
</script>

<style scoped>

</style>
