import Layout from '@/layout'

const moreShopRouter = {
  path: '/moreShop',
  name: 'MoreShop',
  component: Layout,
  redirect: '/moreShop/index',
  meta: {
    roles: ['admin'],
    title: '账号',
    icon: 'yonghu'
  },
  children: [
    {
      path: 'index',
      name: 'managementIndex',
      meta: {
        title: '门店列表',
        icon: 'paihangbang'
      },
      component: () => import('@/views/moreShop/index')
    }
  ]
}

export default moreShopRouter