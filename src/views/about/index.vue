<template>
    <div class="home">
        <h2>拖动组件</h2>
        <div class="sortable">
            <div class="newArr" id="sorNew">
                <p>单列表拖动：</p>
                <div class="newitem" v-for="(item,index) in newArr" :key="index" :drag-id="index">
                    {{ item.content }}
                </div>
            </div>
            <div class="oldArr"></div>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'
    import Sortable from 'sortablejs';

    export default {
        name: 'Home',
        data() {
            return {
                message: 'hello',
                newArr: [{id: 1, content: 'item1'}, {id: 2, content: 'item2'}, {id: 3, content: 'item3'}, {
                    id: 4,
                    content: 'item4'
                }, {id: 5, content: 'item5'}]
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
            this.createSortable()
        },
        methods: {
            ...mapMutations(['SET_USER']),
            createSortable() {
                Sortable.create(document.getElementById('sorNew'), {
                    animation: 150,
                    onEnd: function (evt) {
                        let id_arr = []
                        for (let i = 0, len = evt.from.children.length; i < len; i++) {
                            let temp = {
                                id:evt.from.children[i].getAttribute('drag-id'),
                                content:evt.from.children[i].innerHTML
                            }
                            id_arr.push(temp)
                        }
                        console.log('拖拽后的排序数组',id_arr);
                    }
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "./../../styles/pages/about/index";
</style>
