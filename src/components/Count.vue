<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <h3>当前求和方法10倍为：???</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="jia">+</button>
    <button @click="jian">-</button>
    <button @click="jiaOdd">当前求和为奇数在加</button>
    <button @click="jiaWait">等等再加</button>
    <!-- 共享Person组件的人数 -->
  </div>
</template>

<script>
// 引入mapState,mapGetters,mapActions,mapMutations
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
//默认暴露组件
export default {
    name:'Count',
    data() {
      return {
        n:1, //用户选择的数字
      }
    },

    computed:{
      //借助mapState生成计算属性
      // 语法：...mapState['a']，生成的计算属性名为【a】，从state的【a】属性中读取数据

      //借助mapGetters生成计算属性 
      

    },

    methods: {
      // 如果没有业务逻辑或AJAX请求，可以直接调用commit联系mutations修改数据
      // 调用commit直接到mutations
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
      // 语法：...mapMutations(事件方法名:'与mutations对话的key')



      // 有业务逻辑或AJAX请求，需要调用dispatch联系actions处理业务
      // 调用dispatch来到actions
      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions
      // 语法：...mapActions(事件方法名:'与Actions对话的key')


    },
}
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>