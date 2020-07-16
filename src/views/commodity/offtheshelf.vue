<template>
    <div class="commodity">
        <div class="searchArea">
            <div class="inputArea">
                <div class="inputBox">
                    <div class="inputBox">
                        <p>商品分类</p>
                        <el-select v-model="searchMsg.classification" filterable placeholder="请选择" @change="changeData">
                            <el-option
                                    v-for="item in commodityClassification"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="inputBox">
                        <el-select v-model="searchMsg.classification2" placeholder="二级分类">
                            <el-option
                                    v-for="item in commodityClassification2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="inputBox">
                        <el-select v-model="searchMsg.category" placeholder="商品类别">
                            <el-option
                                    v-for="item in category"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="operationArea">
                <div class="inputBox">
                    <p>搜索关键字</p>
                    <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="searchMsg.inputKey">
                    </el-input>
                    <el-button class="searchBtn" type="primary" icon="el-icon-search">搜索</el-button>
                </div>
            </div>
        </div>
        <div class="commodityList">
            <el-table
                    :data="commodityList"
                    v-loading="tableLoading"
                    size="medium"
                    :header-cell-style="{background: '#f2f5ff'}"
                    @selection-change="handleSelectionChange"
                    style="width: 100%">
                <el-table-column type="selection" width="50"/>

                <el-table-column align="center" label="商品图" width="150">
                    <template slot-scope="scope">
                        <el-avatar shape="square" :size="100" fit="fit" :src="scope.row.image" @error="errorHandler">
                            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                        </el-avatar>
                    </template>
                </el-table-column>
                <el-table-column align="left" label="商品信息">
                    <template slot-scope="scope">
                        <p>商品名称：{{ scope.row.commodity.goods_name }}</p>
                        <p>商品编号：{{ scope.row.commodity.good_id }}</p>
                        <p>商品货号：{{ scope.row.commodity.goods_sn }}</p>
                        <p>所属门店：{{ scope.row.commodity.shop }}</p>
                        <p>
                            <el-tag>荐</el-tag>
                            <el-tag type="success" style="margin: 0 5px">新</el-tag>
                            <el-tag type="danger">热</el-tag>
                        </p>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="class" label="所属分类"/>
                <el-table-column align="center" prop="shop_price" label="在售价格" width="100"/>
                <el-table-column align="center" prop="activity_type" label="活动类型"/>
                <el-table-column align="center" prop="activity_price" label="活动价格" width="100"/>
                <el-table-column align="center" prop="stock" label="商品库存" width="100"/>
                <el-table-column align="center" label="操作" width="150">
                    <el-button type="primary">操作</el-button>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                        background
                        @current-change="changeCurrent"
                        @prev-click="prevPage"
                        @next-click="nextPage"
                        layout="prev, pager, next"
                        :total="20">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "offtheshelf",
        data() {
            return {
                tableLoading:false,         // 列表加载
                searchMsg: {
                    classification: '',
                    classification2: '',
                    category: ''
                },
                category: [
                    {value: 1, label: '热销'},
                    {value: 2, label: '推荐'},
                    {value: 3, label: '新品'}
                ],
                commodityClassification: [
                    {value: 1, label: '时令水果'},
                    {value: 2, label: '新鲜蔬菜'},
                    {value: 3, label: '肉蛋水产'}
                ],
                commodityClassification2: [],
                commodityList: [
                    {
                        image: 'http://midstage.oss-cn-hangzhou.aliyuncs.com/10000005/8c480609-fbbb-4934-b8ee-0bd8c1a43bcb.jpg',
                        commodity: {
                            goods_name: '动感牙刷 4支装',
                            good_id: '13215',
                            goods_sn: '346546321321',
                            shop: '望江花园店'
                        },
                        class: '卷纸/切纸',
                        shop_price: "20.0",
                        activity_type: '促销活动',
                        activity_price: '10.0',
                        stock: '200'
                    }
                ]
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
            handleSelectionChange(value){
                console.log("选中数据",value)
            },
            errorHandler(){
                return true
            },
            changeData(value) {
                console.log(value)
            },
            /* 分页方法 */
            changeCurrent(val){
                console.log('当前页',val)
            },
            prevPage(val){
                console.log('上一页',val)
            },
            nextPage(val){
                console.log('下一页',val)
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./../../styles/pages/commodity/offtheshelf";
</style>