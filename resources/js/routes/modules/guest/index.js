export default [
    {
        path: "login",
        name: "Login",
        meta: {
            title: "Login",
            description: "Login",
        },
        component: () => import("@views/Pages/Auth/Login.vue"),
    },
];
