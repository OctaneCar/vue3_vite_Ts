import {RouteRecordRaw} from "vue-router";

//TS约束路由类型
const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: () => import("../../pages/Front.vue")
	},
];

export default routes;