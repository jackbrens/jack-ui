import Vue from "vue";
import VueRouter from "vue-router";
import home from '../view/home/index';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: home
  }
];

/* 路由重复报错解决 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const router = new VueRouter({
  routes
});

export default router;
