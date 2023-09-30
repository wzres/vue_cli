// 引入VueRouter
import VueRouter from 'vue-router'
// 引入组件
import JiangXi from '../Pages/JiangXi'
import GuangDong from '../Pages/GuangDong'
import JiuJiang from '../Pages/JiuJiang'
import GanZhou from '../Pages/GanZhou'


// 创建并暴露一个路由器对象
export default new VueRouter({
    routes : [
        // 每一个key对应一个路径，value对应该路径要展示的组件
        // 注意：对于子路由不要加/
        {
            path:'/jiangxi',
            component:JiangXi,
            children:[
                {
                    path:'jz',
                    component:JiuJiang,
                    props(t){
                        return {
                            a1: t.query.a1,
                            a2: t.query.a2,
                        }
                    }
                },

                {
                    path:'gz',
                    component:GanZhou
                }
            ]

        },

        {
            path:'/guangdong',
            component:GuangDong
        }
    ]
})
