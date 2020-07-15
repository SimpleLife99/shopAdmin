import Layout from '@/layout'

const comRouter = {
  path: '/commission',
  name: 'Commission',
  component: Layout,
  redirect: '/commission/setUp',
  meta: {
    roles: ['admin'],
    title: '佣金管理',
    icon: 'shouye'
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
      path: 'refundOrder',
      name: 'RefundOrder',
      meta: { title: '退款订单' },
      component: () => import('@/views/order/refundOrder')
    },
  ]
}

export default comRouter