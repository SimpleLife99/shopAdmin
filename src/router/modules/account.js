import Layout from '@/layout'

const accountRouter = {
  path: '/account',
  name: 'Account',
  component: Layout,
  redirect: '/account/management',
  meta: {
    roles: ['admin'],
    title: '账号',
    icon: 'yonghu'
  },
  children: [
    {
      path: 'management',
      name: 'management',
      meta: { title: '门店账户管理' },
      component: () => import('@/views/account/management')
    },
    {
      path: 'log',
      name: 'log',
      meta: { title: '账号日志' },
      component: () => import('@/views/account/log')
    },
  ]
}

export default accountRouter