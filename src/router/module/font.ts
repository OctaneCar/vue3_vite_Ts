import {RouteRecordRaw} from "vue-router";

//TS约束路由类型
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: 'font',
        component: () => import("../../pages/font.vue"),
    },
];

export default routes;