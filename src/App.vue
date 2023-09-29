<template>
  <div>
    <div>
    <h1>省份</h1>
    <ul>
      <!--如果使用的是路由方式，就不能使用超链接a标签了，需要使用vue-router插件提供的一个标签-->
      <!--router-1ink 将来会被自动编译为a标签。-->

    </ul>
    </div>
      <!-- 路由视图，告诉vue这个组件将来放到哪，其实就是起到一个占位的作用 -->

  </div>

</template>

<script>

export default {
    name:'App',
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