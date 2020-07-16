import Layout from '@/layout'

const billRouter = {
  path: '/bill',
  name: 'Bill',
  component: Layout,
  redirect: '/bill/index',
  meta: {
    roles: ['admin'],
    title: '余额/账单',
    icon: 'dingdan'
  },
  children: [
    {
      path: 'index',
      name: 'BillIndex',
      meta: { title: '充值账单' },
      component: () => import('@/views/bill/index')
    }
    ,
    {
      path: 'fare',
      name: 'fare',
      meta: { title: '运费账单' },
      component: () => import('@/views/bill/fare')
    },
    {
      path: 'message',
      name: 'message',
      meta: { title: '短信账单' },
      component: () => import('@/views/bill/message')
    },
  ]
}

export default billRouter