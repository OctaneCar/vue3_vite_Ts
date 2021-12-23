import {RouteRecordRaw} from "vue-router";

//TS约束路由类型
const routes: RouteRecordRaw[] = [
    {
        path: "/admin",
        name: 'Admin',
        component: () => import("../../pages/Admin.vue"),
        redirect: {name: "DashBoard"},
        children: [

            {
                path: "dashboard",
                name: "DashBoard",
                component: () => import("../../pages/admin/DashBoard.vue")
            },

            {
                path: "userlist",
                name: "UserList",
                component: () => import("../../pages/admin/UserList.vue")
            },
        ]

    },
];

export default routes;