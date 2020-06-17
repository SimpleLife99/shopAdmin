<template>
    <div class="AppMain">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key"/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "AppMain",
        computed: {
            key() {
                // console.log(this.$route.path)
                return this.$route.path
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../../styles/pages/layout/index";
</style>