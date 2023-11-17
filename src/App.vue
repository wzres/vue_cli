<template>
<!-- 注册在哪，就在哪使用子组件 -->
  <div>
    <Count/>
  </div>
</template>

<script>
// 引入子组件
import Count from './components/Count.vue'

export default {
    name:'App',
    components:{
      Count
    }
}
</script>

<style>

</style>