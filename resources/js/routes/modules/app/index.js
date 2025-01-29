export default [
    {
        path: "dashboard",
        name: "Dashboard",
        meta: {
            title: "Dashboard",
            description: "Dashboard",
        },
        component: () => import("@views/Pages/Dashboard/Index.vue"),
    },
];
