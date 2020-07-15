import Layout from '@/layout'
/*
* 商品管理
* */
const commodity = {
    path:'/commodity',
    name:'Commodity',
    component: Layout,
    redirect:'/commodity/ontheshelf',
    meta:{title:'商品管理',icon:'shangpin'},
    children:[
        {
            path:'ontheshelf',
            name:'OnTheShelf',
            meta:{title:'上架商品'},
            component: () => import('@/views/commodity/ontheshelf')
        },
        {
            path:'offtheshelf',
            name:'OffTheShelf',
            meta:{title:'下架商品'},
            component: () => import('@/views/commodity/offtheshelf')
        },
        {
            path:'classification',
            name:'Classification',
            meta:{title:'分类管理'},
            component: () => import('@/views/commodity/classification')
        }
    ]
}

export default commodity