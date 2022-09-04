import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(), //路由模式
  routes: [
    {
      path: "/",
      redirect: "/Home",
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("../view/Home/Home.vue"),
    },
    {
      path: "/Setting",
      name: "Setting",
      component: () => import("../view/Setting/Setting.vue"),
    },
    {
      path: "/Sheet",
      name: "Sheet",
      component: () => import("../view/Sheet/Sheet.vue"),
    },
    {
      path: "/file",
      name: "file",
      component: () => import("../view/Test/file.vue"),
    },
  ],
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  console.log("before");
  next();
});

// 全局路由后置守卫
router.afterEach((to, from) => {
  console.log("跳转结束");
});

export default router;
