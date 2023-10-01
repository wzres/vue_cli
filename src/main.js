//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//关闭Vue的生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)
Vue.use(ElementUI);

// 引用路由器对象
import router from './router'

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate(){
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的VM
	},
	router
})