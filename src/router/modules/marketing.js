import Layout from '@/layout'

const marketing = {
    path: '/marketing',
    name: 'Marketing',
    component: Layout,
    redirect: '/marketing/index',
    children: [
        {
            path: 'index',
            name: 'Activity',
            component: () => import('@/views/marketing/index'),
            meta: {
                title: '营销活动',
                icon: 'dianyingpiao'
            }
        }
    ]
}

export default marketing