import Layout from '@/layout'

const comRouter = {
  path: '/commission',
  name: 'Commission',
  component: Layout,
  redirect: '/commission/setUp',
  meta: {
    roles: ['admin'],
    title: '佣金管理',
    icon: 'kabao'
  },
  children: [
    {
      path: 'setUp',
      name: 'setUp',
      meta: { title: '佣金设置' },
      component: () => import('@/views/commission/setUp')
    }
    ,
    {
      path: 'rule',
      name: 'rule',
      meta: { title: '佣金规则' },
      component: () => import('@/views/commission/rule')
    },
    {
      path: 'bill',
      name: 'bill',
      meta: { title: '佣金流水' },
      component: () => import('@/views/commission/bill')
    },
  ]
}

export default comRouter