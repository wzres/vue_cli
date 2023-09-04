<template>
<!-- 注册在哪，就在哪使用子组件 -->
  <div>
    <student/>
  </div>
</template>

<script>
// 引入子组件
import Student from './components/Student.vue'

export default {
    name:'App',
    components:{
      Student
    }
}
</script>

<style>

</style>