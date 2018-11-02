import Vue from 'vue';
import Router from 'vue-router';
//-----假装有登录验证 
// import {getToken,checkCookieCategory, getCategory,userInfo} from '@/utils/auth' // 验权
let storage = window.localStorage;
storage['login'] = true;
// storage.setItem("regsiter", false);
// storage.removeItem("key");
//----------

const whiteList = ['/login', '/404', '/401'];

Vue.use(Router);


let router = new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: () => import('@/views/home')

    }, {
      path: '/course',
      name: 'course',
      component: () => import('@/components/401'),
      children: [{
        path: '',
        component: () => import('@/components/404'),
      }, {
        path: '/cddf',
        component: () => import('@/components/401')
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    }, {
      path: '/404',
      name: '404',
      component: () => import('@/components/404')
    }
  ]

});


// 路由跳转前拦截
router.beforeEach((to, from, next) => {

  // 是否登录,遇到路由白名单直接跳转

  if (storage.login == 'true') {
    // 已登录,跳转主页
    to.path == '/login' || to.path == '/index' ? next('/') : next();

  } else if (whiteList.indexOf(to.path) !== -1) {
    console.log('白名单');
    // 白名单不进行操作
    next();

  } else {
    console.log('未登录');
    // 未登录,未在白名单 跳转登录
    next('/login');

  }

});

export default router;
