import Layout from '@/layout'

const marketing = {
    path: '/marketing',
    name: 'Marketing',
    component: Layout,
    redirect: '/marketing/index',
    meta:{ title:'营销活动' },
    children: [
        {
            path: 'index',
            name: 'Activity',
            component: () => import('@/views/marketing/index'),
            meta: {
                title: '营销首页',
                icon: 'dianyingpiao'
            }
        },
        {
            path: 'seckill',
            name: 'Seckill',
            hidden: true,
            redirect: '/marketing/seckill/seckill_list',
            component: () => import('@/views/marketing/seckill/index'),
            meta: {title: '秒杀'},
            children: [
                {
                    path: 'seckill_list',
                    name: 'seckillList',
                    component: () => import('@/views/marketing/seckill/seckillList'),
                    meta: {title: '秒杀列表'}
                },
                {
                    path: 'create_seckill',
                    name:'createSeckill',
                    component:() => import('@/views/marketing/seckill/createSeckill'),
                    meta: {title: '创建秒杀'}
                }
            ]
        }
    ]
}
export default marketing