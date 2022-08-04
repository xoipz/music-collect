import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router"

const router = createRouter({
	history: createWebHistory(), //路由模式
	routes: [

	]
})



//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log("before")
	next();
});

// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log('跳转结束')
})



export default router