<template>
    <div class="app-layout" :class="classObj">
        <!--侧边栏-->
        <sidebar class="sidebar-container"></sidebar>
        <!--主要内容区-->
        <div class="main-container">
            <!--头部导航-->
            <navbar class="navbar-container"></navbar>
            <!--主内容区-->
            <AppMain></AppMain>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'
    import AppMain from './components/AppMain'
    import sidebar from './components/sidebar'
    import navbar from './components/Navbar'

    export default {
        name: "Layout",
        data() {
            return {
                // isHidden:this.isCollapse
            }
        },
        computed: {
            ...mapState({
                isCollapse: state => state.application.isCollapse
            }),
            ...mapGetters(['isCollapse']),
            classObj: function () {
                return{
                    hideSidebar : this.isCollapse
                }
            }
        },
        components: {AppMain, sidebar, navbar},
        created() {
            // console.log(this.isCollapse)
        }
    }
</script>

<style scoped lang="less">
    @import "./../styles/pages/layout/index";
</style>