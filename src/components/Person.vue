<template>
   <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字">
    <button @click="addPerson()">添加</button>
    <ul>
        <!-- for循环遍历 -->
        <li></li>
    </ul>
    <!-- 共享Count组件的求和 -->
   </div>
</template>

<script>
export default {
    name:'Person',
    data() {
        return {
        }
    },
    computed:{
        // 手动写计算属性展示state中的数据
    },
    methods:{
        // 往数组添加一个人
        // 创建一个对象，id为随机数，name为用户输入的name
        // 调用commit直接与mutations对话，传入刚刚创建的对象
    }
}
</script>

<style>

</style>