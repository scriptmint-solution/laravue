export default [
    {
        path: "error",
        name: "ErrorGeneral",
        meta: {},
        component: () => import("@views/Pages/Errors/Index.vue"),
    },
    {
        path: "401",
        name: "Error401",
        meta: {},
        component: () => import("@views/Pages/Errors/401.vue"),
    },
    {
        path: "403",
        name: "Error403",
        meta: {},
        component: () => import("@views/Pages/Errors/403.vue"),
    },
    {
        path: "404",
        name: "Error404",
        meta: {},
        component: () => import("@views/Pages/Errors/404.vue"),
    },
];
