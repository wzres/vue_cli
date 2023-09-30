<template>
  <div class="s2">
    <h2>区</h2>
    <ul>
      <!-- 接收query参数的数据 -->
        <!-- <li>{{$route.query.a1}}</li>
        <li>{{$route.query.a2}}</li> -->

        <!-- 使用for循环遍历query对象 -->
       <!--  <li v-for="(value,key) of $route.query" :key='key'>
          {{value}}
        </li> -->
      
      <!--------------------------------------------->
      
      <!-- 接收param参数的数据 -->
     <!--  <li>{{$route.params.a1}}</li>
      <li>{{$route.params.a2}}</li> -->

      <!-- 使用for循环遍历params对象 -->
       <!--  <li v-for="(value,key) of $route.params" :key='key'>
        {{value}}
      </li> -->

      <!-- to_props 使用porps接收，简化配置 -->
      <li>{{a1}}</li>
      <li>{{a2}}</li>
      <!-- <li>{{x}}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
    name:'City',
    props:['a1','a2','x'],
    mounted() {
      //所有的路由组件都有一个属性$route,通过这个属性可以获取到该“路由组件”关联的“路由对象”
      console.log(this.$route)
      //路由对象中有一个query属性，这个query属性可以接收query方式传递过来的数据
      console.log(this.$route.query)
      //路由对象中有一个params属性，这个query属性可以接收params方式传递过来的数据
      console.log(this.$route.params)
    },
}
</script>

<style>

</style>