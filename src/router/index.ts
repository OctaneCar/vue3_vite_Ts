import {createRouter, createWebHashHistory,} from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [];

// vite新特性————多模块引入
const files = import.meta.globEager("./module/*.ts");
for (const key in files) {
	routes.push(...files[key].default);
}
console.log(routes);


//路由4.0新特性
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;