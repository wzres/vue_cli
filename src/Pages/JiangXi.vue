<template>
    <div class="s1">
        <h2>市</h2>
        <ul>
            <!-- 声明式路由导航，只适合超链接跳转路由组件 -->
            <li><router-link to="/jiangxi/jj?a1=庐山市&a2=瑞金市" active-class="selected">九江市</router-link></li>
            <!-- to_nav 声明式路由导航 -->
            <li><router-link to='/jiangxi/gz' active-class="selected">赣州市</router-link></li>

        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'JiangXi',
    methods: {
        // 编程式路由导航，适合按钮图片跳转路由组件
        // 注意：这里一定调用路由器对象现有的api，api分为push和replace模式，括号写to后面的属性值
        //后面写两个回调，是因为promis对象需要你通过参数的方式给它成功和失败的回调，以防报错
        //to_nav  编程式路由导航
          

    },
}
</script>

<style>

</style>