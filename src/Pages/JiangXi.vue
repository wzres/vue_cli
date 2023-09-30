<template>
    <div class="s1">
        <h2>市</h2>
        <ul>
            <!-- query传参：写死的字符串拼接写法
            <li><router-link to="/jiangxi/jz?a1=庐山市&a2=瑞金市" active-class="selected">九江市</router-link></li>
            <li><router-link to="/jiangxi/gz?a1=章贡市&a2=南康市" active-class="selected">赣州市</router-link></li>
            <li>萍乡市</li> 
            -->
            
            <!--to_query  query传参：字符串拼接写法 -->


            <!--to_query query传参：对象写法 -->
              <li><router-link :to="{
                // 注意：如果使用name的话，要求必须使用对象形式。不能使用字符串形式
               //path: '/jiangxi/jz',

              }" active-class="selected">九江市</router-link>
              </li>
            <li><router-link :to="{
                // 注意：如果使用name的话，要求必须使用对象形式。不能使用字符串形式
                //path: '/jiangxi/gz',
            }" active-class="selected">赣州市</router-link></li>
            <li>萍乡市</li> 
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'JiangXi',
    data() {
        return {
            jz:['庐山市','瑞金市'],
            gz:['章贡市','南康市']
        }
    },
}
</script>

<style>

</style>