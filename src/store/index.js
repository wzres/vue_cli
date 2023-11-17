//该文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)


//准备actions-用于响应组件中的动作
const actions = {
    // 有业务逻辑或AJAX请求的代码应该交给actions处理
    // 调用commit来到mutations
}
//准备mutations-用于修改数据(state)
const mutations = {
    // 修改sum
}
//准备state-用于存储数据
const state = {
    sum:0 //当前的和
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})