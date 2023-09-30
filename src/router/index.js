// 引入VueRouter
import VueRouter from 'vue-router'
// 引入组件
import JiangXi from '../Pages/JiangXi'
import GuangDong from '../Pages/GuangDong'
import City from '../Pages/City'

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
                    // to 给路由命名
                    name:'jz',
                    path:'jz',
                    component:City
                },
                {
                    name:'gz',
                    path:'gz',
                    component:City
                },
            ]
        },
        {
            path:'/guangdong',
            component:GuangDong,
            children:[
                {
                    name:'sz',
                    // to_param 
                    path:'sz/:a1/:a2',  //使用占位符声明接收params参数
                    component:City,

                    // to_props
                    
                    //props对象写法
                    /* props :{
                        x:'张三',
                    }, */
                    
                    //props函数式写法
                    /* props(t){ //t:将来会被自动传过来，它代表了当前的路由对象。变量名随意的
                        return {
                            a1:t.params.a1,
                            a2:t.params.a2,
                            x:"张三"
                        }
                    }, */
                    
                    //这种方式只支持params方式的传参。不支持query方式。
                    //将params对象直接转换成props对象，内部直接转换，不需要我们负责。
                    props:true

                }
            ]
        }
    ]
})
