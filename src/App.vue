<template>
  <div id="app">
    <!--头部-->
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Test</h2></div>
      </div>
    </div>
    <!--内容区-->
    <div>
      <!--左边-->
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--生成路由链接-->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <!--右边-->
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--
                keep-alive是为了再次渲染时，使用缓存
                  以该例中，home和about路由
                    about中有一个输入框，如果切换后，输入框中的内容就会消失，因为是重新渲染
                    所以，完全可以使用缓存，来提高性能。

                显示路由对应的组件
                可以通过指定任意属性，来传递数据（对应路由组件可以选择不接收）
                  如果加了:，则里面的文本也要加单引号，
                  否则就会当做js表达式解析，没有该表达式话的就会报错
            -->
            <keep-alive>
              <router-view :msg1="'这是直接传递给路由组件的数据'"></router-view>
            <!--<router-view msg1="这是直接传递给路由组件的数据"></router-view>-->
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'

  }
</script>

<style>
</style>
