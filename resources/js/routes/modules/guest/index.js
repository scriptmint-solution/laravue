export default [
    {
        path: "login",
        name: "Login",
        meta: {
            title: "Login",
            subtitle: "Sign in to your account",
        },
        component: () => import("@views/Pages/Auth/Login.vue"),
    },
    {
        path: "register",
        name: "Register",
        meta: {
            title: "Register",
            subtitle: "Create an account",
        },
        component: () => import("@views/Pages/Auth/Register.vue"),
    },
    {
        path: "forgot-password",
        name: "ForgotPassword",
        meta: {
            title: "Forgot Password",
            subtitle: "Reset your password",
        },
        component: () => import("@views/Pages/Auth/ForgotPassword.vue"),
    },
];
