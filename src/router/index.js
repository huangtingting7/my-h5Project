import Vue from 'vue'
import Router from 'vue-router'

/* 路由模块 */
// router(可多个)
import finRoutes from './modules/ceshiTree'

Vue.use(Router)
const router = [
  ...finRoutes
]

export default router
