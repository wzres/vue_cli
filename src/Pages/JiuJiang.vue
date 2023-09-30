<template>
      <div class="s1">
        <h3>区</h3>
        <ul>
            <li>{{a1}}</li>
            <li>{{a2}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'JiuJiang',
    props:['a1','a2'],
    //1.局部路由守卫之组件守卫，代码是写在component当中的(Xxx.vue),
    //2.beforeRouteEnter执行时机：进入路由组件之前执行
    //3.普通组件不会触发，必须是路由组件才会触发
    beforeRouteEnter(to,from,next){
        console.log(`进入路由组件之前:${to.meta.title}`)
        next()
    },

    //beforeRouteLeave执行时机：离开路由组件之前执行
    //进入(to)之前和离开(from)之前是同一个组件对象
    beforeRouteLeave (to, from, next) {
      console.log(`离开路由组件之前:${from.meta.title}`)  
      next()
    }
}
</script>

<style>

</style>