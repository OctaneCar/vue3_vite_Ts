import {RouteRecordRaw} from "vue-router";

//TS约束路由类型
const routes: RouteRecordRaw[] = [
	{
		path: "/admin",
		component: () => import("../../pages/Admin.vue")
	},
];

export default routes;