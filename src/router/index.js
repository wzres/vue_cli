// 引入VueRouter
import VueRouter from 'vue-router'
// 引入组件
import JiangXi from '../Pages/JiangXi'
import GuangDong from '../Pages/GuangDong'
import JiuJiang from '../Pages/JiuJiang'

// 创建并暴露一个路由器对象
export default new VueRouter({
    routes : [
        // 每一个key对应一个路径，value对应该路径要展示的组件
        //注意：对于子路由不要加/
        {
            path:'/jiangxi',
            component:JiangXi,
            children:[
                {
                    path:'jj',
                    component:JiuJiang
                },
            ]
        },
        {
            path:'/guangdong',
            component:GuangDong

        }
    ]
})
