<template>
    <span class="icon-content">
        <svg class="icon iconfont" aria-hidden="true">
            <use :xlink:href="iconBase"></use>
        </svg>
    </span>
</template>

<script>
    export default {
        name: "icon",
        props: {
            icon: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                iconBase: `#icon${this.icon}`
            }
        },
        created(){ },
    }
</script>

<style scoped lang="less">
@import "./../../../styles/pages/layout/index.less";
</style>