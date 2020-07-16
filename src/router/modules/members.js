import Layout from '@/layout'

const members = {
    path:'/members',
    name:'Members',
    component: Layout,
    redirect:'/members/index',
    meta: {
        title: '会员',
    },
    children:[
        {
            path: 'index',
            name: 'MermberList',
            meta: { title: '会员列表',icon: 'yonghu' },
            component: () => import('@/views/members/index')
        }
    ]

}
export default members