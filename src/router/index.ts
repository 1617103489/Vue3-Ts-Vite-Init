// index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
// 路由匹配
const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: ()=> import('../components/HelloWorld.vue'),
    meta: {
      title: 'Home'
    }
  }
]
// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由前置守卫
router.beforeEach((to, from, next)=>{
  const title = to.meta.title as string;
  if(title) {
    document.title = title
  }
  next()
})

export default router;
