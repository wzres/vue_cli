<template>
  <div>
    <div>
    <h1>省</h1>
    <button @click='forward'>前进</button>
    <button @click='back'>后退</button>
    <button @click='forwardTwo'>前进2步</button>
    <button @click='backTwo'>后退2步</button>

    <ul>
      <!--如果使用的是路由方式，就不能使用超链接a标签了，需要使用vue-router插件提供的一个标签-->
      <!--router-1ink 将来会被自动编译为a标签。-->
      <li><router-link to="/jiangxi" active-class="selected">江西省</router-link></li>
      <li><router-link to="/guangdong" active-class="selected">广东省</router-link></li>
    </ul>
    </div>
      <!-- 路由视图，告诉vue这个组件将来放到哪，其实就是起到一个占位的作用 -->
    <router-view></router-view>

    <!-- to_keep -->
    <!-- keep-alive这个标签中所有的路由组件在切换的时候不会销毁 -->
    

    <!-- include包含的组件不会销毁，注意：这里填写的是路由文件名字 -->


    <!-- include也支持数组的形式 -->
 


  </div>

</template>

<script>

export default {
    name:'App',
    methods: {
      forward(){
        this.$router.forward()
      },
      back(){
        this.$router.back()
      },
      forwardTwo(){
        this.$router.go(2)
      },
      backTwo(){
        this.$router.go(-2)
      }
    },
}
</script>

<style>
  a {text-decoration: none;}
  ul {list-style: none;}
  .selected {
    color: #000;
    background-color: palevioletred;
 }
  .s1 {
    margin-left: 100px;
 }
</style>