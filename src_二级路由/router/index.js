import Vue from 'vue'
import Router from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'

/*
* 声明使用vue-router
* 内部定义并注册了 2个组件标签（router-link/router-view）
*   给组件对象添加了 2个属性
*     1.$router 路由器
*     2.$route 当前路由
* */
Vue.use(Router)


/*
* 这里的路径，要与App中定义的路径一样，
*   这里是注册
* */
export default new Router({
  routes: [
    {
      path: '/',
      //默认路径
      redirect: '/about'
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      /*
      * 子路由，注意是数组包对象
      *   路径有 2种方式，都可以
      * */
      children: [
        {
          path: '/home/news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
        }
      ]
    },


  ]
})
