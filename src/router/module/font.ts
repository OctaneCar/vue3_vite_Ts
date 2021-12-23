import {RouteRecordRaw} from "vue-router";

//TS约束路由类型
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: 'font',
        component: () => import("../../pages/font.vue"),
        redirect: {name: "Signup"},
        children: [

            {
                path: "/Login",
                name: "login",
                component: () => import("../../pages/font/Login.vue")
            },

            {
                path: "/singup",
                name: "Signup",
                component: () => import("../../pages/font/Signup.vue")
            },
        ]

    },
];

export default routes;