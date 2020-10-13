
// 引入App组件
// const bd = () => import('@/App')
const finRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    title: '首页',
    meta: {
      title: '首页'
    },
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/takePhoto',
    name: 'takePhoto',
    meta: {
      title: '扫一扫'
    },
    title: '扫一扫',
    component: () => import('@/views/takePhoto.vue')
  },
  {
    path: '*',
    title: '默认跳转路由',
    redirect: '/dashboard'
  }
]
export default finRoutes
