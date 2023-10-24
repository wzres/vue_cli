<template>
<!-- 注册在哪，就在哪使用子组件 -->
  <div>
  <School/>
  <student/>
  </div>
</template>

<script>
// 引入子组件
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{School,Student}
}
</script>

<style>

</style>