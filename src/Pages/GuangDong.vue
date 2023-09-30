<template>
    <div class="s1">
        <h2>市</h2>
        <ul>
            <li><input type="checkbox">深圳市</li>
            <li><input type="checkbox">东莞市</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'GuangDong',
    beforeDestroy(){
        console.log("@广东省下面的市组件被销毁了")
    },
}
</script>

<style>

</style>