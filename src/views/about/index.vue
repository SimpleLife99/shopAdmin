<template>
    <div class="home">
        <h2>拖动组件</h2>
        <div class="sortable">
            <div class="oldArr"></div>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'

    export default {
        name: 'Home',
        data() {
            return {
                message: 'hello'
            }
        },
        computed: {
            ...mapState({
                userMessage: state => state.user.userMessage
            }),
        },
        created() {

        },
        mounted() {
        },
        methods: {
            ...mapMutations(['SET_USER']),
        }
    }
</script>
<style lang="less" scoped>
    @import "./../../styles/pages/about/index";
</style>
