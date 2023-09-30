<template>
    <div class="s1">
        <h2>市</h2>
        <ul>
            <!--params方式传参：字符串形式，写死的字符串-->
            <!-- <li><router-link to="/guangdong/sz/西乡/宝安" active-class="selected">深圳市</router-link></li> -->
            <!--to_param params方式传参：字符串形式，拼接字符串-->
            
            
            <!--to_param params方式传参：对象形式-->
            <li><router-link :to="{
                //强调：如果使用的是params方式传参，这里只能使用name,不能使用path

            }" active-class="selected">深圳市</router-link></li>
            <li>广州市</li>

        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'GuangDong',
    data() {
        return {
            sz:['西乡','宝安']
        }
    },
}
</script>

<style>

</style>