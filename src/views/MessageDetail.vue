<template>
  <div>
    <ul>
      <li>id:{{$route.params.id}}</li>
      <li>title:{{detail.title}}</li>
      <li>content:{{detail.content}}</li>
    </ul>
  </div>
</template>

<script>
  /*
  * 这是模拟要通过 id获取的数据
  * */
  const messageDetails = [
    {id: 1, title: 'Message001', content: 'message content00111....'},
    {id: 2, title: 'Message002', content: 'message content00222....'},
    {id: 3, title: 'Message003', content: 'message content00333....'}
  ]
  export default {
    name: "messageDetail",
    data () {
      return {
        detail: {}
      }
    },
    mounted () {
      //接收传递的参数 id
      const id = this.$route.params.id
      /*
      * 找到并返回条件的第一个detail
      *  注意，接收的参数 id是一个string类型！！！
      * */
      this.detail = messageDetails.find(detail => +id===detail.id)
    },

    /*
    * 改变当前路由的参数，并不会重新渲染，所以生命周期函数mounted并不会再次执行！
    * $route的回调函数，改变当前路由组件参数时，自动调用。
    * */
    watch: {
      $route () {
        //不能在里面直接打印 $route！！，因为会当做字符串解析
        // console.log($route)
        const id = this.$route.params.id
        this.detail = messageDetails.find(detail => +id===detail.id)
      }
    }
  }
</script>

<style>
</style>
