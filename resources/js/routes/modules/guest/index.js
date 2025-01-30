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
    {
        path: "register",
        name: "Register",
        meta: {
            title: "Register",
            description: "Register",
        },
        component: () => import("@views/Pages/Auth/Register.vue"),
    },
    {
        path: "forgot-password",
        name: "ForgotPassword",
        meta: {
            title: "Forgot Password",
            description: "Forgot Password",
        },
        component: () => import("@views/Pages/Auth/ForgotPassword.vue"),
    },
];
