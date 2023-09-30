<template>
    <div class="s1">
        <h2>市</h2>
        <ul>
            <!-- 声明式路由导航，只适合超链接跳转路由组件 -->
            <li><input type="checkbox"><router-link to="/jiangxi/jj?a1=庐山市&a2=瑞金市" active-class="selected">九江市</router-link></li>
            <li><input type="checkbox"><router-link to='/jiangxi/gz' active-class="selected">赣州市</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'JiangXi',
        /* 需求：
    当组件被切来时，请弄一个定时器
    被切走时，请结束定时器，并且要保留状态(不要销毁) */

    mounted() {
        //挂载完毕之后，创建一个定时器，每隔1秒打印一句话
        this.timer = setInterval(() =>{
            console.log('我是定时器')
        },1000)
    },

    beforeDestroy(){
        console.log("@江西省下面的市组件被销毁了")
        //删除定时器
        clearInterval(this.timer)
    },

    // to_hook 新增的两个钩子，需要在路由组件没有销毁的时候使用
    activated(){
        console.log('切来了')
    },
    deactivated() {
      console.log('切走了')
        //删除定时器
        clearInterval(this.timer)  
    },






}
</script>

<style>

</style>