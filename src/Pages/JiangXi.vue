<template>
    <div class="s1">
        <h2>市</h2>
        <ul>
            <!-- 声明式路由导航，只适合超链接跳转路由组件 -->
            <li><router-link to="/jiangxi/jz?a1=庐山市&a2=瑞金市" active-class="selected">九江市</router-link></li>
            <li><router-link to='/jiangxi/gz' active-class="selected">赣州市</router-link></li>

        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'JiangXi',
}
</script>

<style>

</style>