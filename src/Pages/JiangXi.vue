<template>
    <div class="s1">
        <h2>市</h2>
        <ul>
            <li><router-link to='/jiangxi/jj' active-class="selected">九江市</router-link></li>
            <li>鹰潭市</li>
            <li>萍乡市</li>
            <li>赣州市</li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'JiangXi'
}
</script>

<style>

</style>