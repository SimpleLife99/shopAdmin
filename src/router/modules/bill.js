import Layout from '@/layout'

const billRouter = {
  path: '/bill',
  name: 'Bill',
  component: Layout,
  redirect: '/bill/index',
  meta: {
    roles: ['admin'],
    title: '余额/账单',
    icon: 'shouye'
  },
  children: [
    {
      path: 'index',
      name: 'Bill',
      meta: { title: '充值账单' },
      component: () => import('@/views/bill/index')
    }
    ,
    {
      path: 'rule',
      name: 'rule',
      meta: { title: '运费账单' },
      component: () => import('@/views/commission/rule')
    },
    {
      path: 'bill2',
      name: 'bill2',
      meta: { title: '短信账单' },
      component: () => import('@/views/commission/bill')
    },
  ]
}

export default billRouter