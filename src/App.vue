<template>
<!-- 注册在哪，就在哪使用子组件 -->
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
// 引入子组件
import Count from './components/Count.vue'
import Person from './components/Person.vue'

export default {
    name:'App',
    components:{
      Count,Person
    }
}
</script>

<style>

</style>