<template>
    <div class="seckill">
        <h2 @click="chuangjian">秒杀活动</h2>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            chuangjian(){
                this.$router.push({name: 'createSeckill',})
            }
        }
    }
</script>

<style scoped>

</style>