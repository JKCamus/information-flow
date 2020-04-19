import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/information.vue')
const  Chat= () => import('views/childComps/Chat.vue')


const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
Vue.use(VueRouter)
// 1.安装router
Vue.use(VueRouter)
// 2.1创建routers映射
const routes = [{
    path: "/",
    redirect: '/Chat'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: "Info"
    }
  },
  {
    path: '/Chat',
    component: Chat,
    meta: {
      title: "Chat"
    }
  }



]
// 2.创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出router
export default router