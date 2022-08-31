import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: {
  //   title: 'Umi Admin',
  // },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
      access: 'canSeeAdmin',
    },
    {
      name: '登录注册页',
      path: '/login',
      component: './Login',
    },
  ],
  npmClient: 'pnpm',
  dva: {},
});
