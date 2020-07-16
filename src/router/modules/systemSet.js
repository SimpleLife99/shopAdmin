import Layout from '@/layout'
const systemSet = {
    path: '/systemSet',
    name: 'SystemSet',
    component: Layout,
    redirect: '/systemSet/clickFarming',
    meta: { title: '系统设置' },
    children:[
        {
            path: 'index',
            name: 'sysIndex',
            component: () => import('@/views/marketing/index'),
            meta: {
                title: '系统设置',
                icon: 'shuju'
            }
        },
    ]
}
export default systemSet