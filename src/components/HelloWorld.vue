<template>
    <div class="hello">
        {{ msg }}
        <el-button type="primary" @click.native="setNum"> Num {{ num }} </el-button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                num:0
            }
        },
        methods:{
            setNum(){
                this.num ++
                // this.$emit('setNum')
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
