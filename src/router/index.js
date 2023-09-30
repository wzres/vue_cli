// 引入VueRouter
import VueRouter from 'vue-router'
// 引入组件
import JiangXi from '../Pages/JiangXi'
import GuangDong from '../Pages/GuangDong'
import JiuJiang from '../Pages/JiuJiang'
import GanZhou from '../Pages/GanZhou'


// 创建并暴露一个路由器对象
const router = new VueRouter({
    routes : [
        // 每一个key对应一个路径，value对应该路径要展示的组件
        // 注意：对于子路由不要加/
        {   
            name:'xi',
            path:'/jiangxi',
            component:JiangXi,
            meta : {title:'江西'},
            children:[
                {
                    name:'jiang',
                    path:'jj',
                    component:JiuJiang,
                    props(t){
                        return {
                            a1: t.query.a1,
                            a2: t.query.a2,
                        }
                    },

                    // 给路由对象添加自定义属性的话，需要在路由对象的meta（路由元）中定义。
                    // 属性名随意，这个值为true，表示需要鉴权
                    // to_admin
                    meta : {isAuth : true,title:"九江"},

                    /* 
                    1.这个局部路由守卫之独享守卫，代码写到哪里？写到route对象
                    2.beforeEnter本身就是一个函数，参数上没有回调函数了。
                    3.对于beforeEnter来说，参数仍然有三个：to from next
                    4.beforeEnter什么时候被调用？进入"jiang"这个路由前被调用。 
                    5.注意：没有afterEnter这个局部路由
                    */
                    beforeEnter(to,from,next){
                        let loginName = "admin"
                        if(loginName === "admin"){
                            next()
                        }else alert('你无权访问')
                    }
                },

                {
                    name:'zhou',
                    path:'gz',
                    component:GanZhou,
                    // 属性名随意，这个值为true，表示需要鉴权
                    // to_admin
                    meta : {isAuth : true,title:'赣州'}
                }
            ]

        },

        {
            name:'dong',
            path:'/guangdong',
            component:GuangDong,
            meta : {title:'广东'}
        }
    ]
})

// 全局前置路由守卫必须写在暴露之前
// 全局前置路由守卫，初始化的时候被调用，每次路由切换之前被调用
// 全局前置路由守卫可以
// 回调函数可以是普通函数或者箭头函数
// 接收3个参数(to，from，next)
// from：是一个路由对象，表示到哪儿来，起点
// t.o：是一个路由对象，表示到哪儿去，终点
// next：这是一个函数，调用这个函数之后，表示放行，可以继续向下走。

/* router.beforeEach((to,from,next) =>{
    console.log(to)
    let loginName = "min"
    // 对于鉴权的路由比较少的情况下：
    // to_admin
    if(to.name=== 'jiang' || to.name === 'zhou'){
        if(loginName === "admin"){
            next()
        }else alert('你无权访问')
    }else next()

    // 对于鉴权的路由比较多的情况下：
    // to_admin
    if(to.meta.isAuth){
        if(loginName === "admin"){
            next()
        }else alert('你无权访问')
    }else next()

 
}) */

// 全局后置路由守卫，初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to,from) =>{
    document.title = to.meta.title || "城市系统"
})


export default router