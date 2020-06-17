<template>
    <div class="sidebar-logo-container">
        <img v-if="logosrc" src="@/assets/logo.png" class="logo-src" alt="">
    </div>
</template>

<script>

    export default {
        name: "logo",
        data() {
            return {
                logosrc: '@/assets/logo.png',
            }
        }
    }
</script>

<style scoped lang="less">
    .sidebar-logo-container {
        height: 50px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo-src {
            width: 100%;
            height: auto;
        }

        .shop-message {
            text-align: center;
            font-size: 14px;
            color: #ffffff;
            margin-top: 10px;
        }
    }
</style>