import Layout from '@/layout'

const comRouter = {
  path: '/commission',
  name: 'Commission',
  component: Layout,
  redirect: '/commission/setUp',
  meta: {
    roles: ['admin'],
    title: '会员列表',
    icon: 'kabao'
  },
  children: [
    {
      path: 'setUp',
      name: 'setUp',
      meta: { title: '佣金设置' },
      component: () => import('@/views/commission/setUp')
    }
  ]
}

export default comRouter