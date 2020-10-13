import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { Button, NavBar } from 'vant'
import routers from './router'
// import VueResourse from 'vue-resource'

// // 阿里字体图标
// import './static/css/neat-min.css'
// import './static/css/iconfont.css'

// // ui框架
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

// vant
Vue.use(Button)
Vue.use(NavBar)
let router = new VueRouter({
  // routes: [router1, router2, router3]
  routes: routers
})
// Vue.use(VueResourse)
// Vue.use(MintUI)

Vue.config.productionTip = false

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  /* 路由发生改变修改页面的title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
