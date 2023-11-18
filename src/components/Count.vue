<template>
  <div>
    <h1>当前求和为{{$store.state.sum}}</h1>
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

    methods: {
      // 如果没有业务逻辑或AJAX请求，可以直接调用commit联系mutations修改数据
      // 调用commit直接到mutations

      // 加
      jia(){

      },

      // 减
      jian(){

      },


      // 有业务逻辑或AJAX请求，需要调用dispatch联系actions处理业务
      // 调用dispatch来到actions

      // 奇数加
      jiaOdd(){

      },
      
      // 等一等再加
      jiaWait(){

      }
    },
}
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>