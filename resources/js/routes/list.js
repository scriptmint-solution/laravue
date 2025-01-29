/* Layouts */
const AppLayout = () => import("@views/Layouts/App.vue");
const GuestLayout = () => import("@views/Layouts/Guest.vue");
const ErrorLayout = () => import("@views/Layouts/Error.vue");

import appRoutes from "@routes/modules/app";
import guestRoutes from "@routes/modules/guest";
import errorRoutes from "@routes/modules/error";

export default [
    {
        path: "/",
        name: "Guest",
        component: GuestLayout,
        redirect: { name: "Login" },
        meta: {
            belongsTo: "guest",
        },
        children: [...guestRoutes],
    },
    {
        path: "/",
        name: "App",
        component: AppLayout,
        redirect: { name: "Dashboard" },
        meta: {
            belongsTo: "auth",
        },
        children: [...appRoutes],
    },
    {
        path: "/",
        name: "Error",
        component: ErrorLayout,
        meta: {
            belongsTo: "error",
        },
        children: [...errorRoutes],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        meta: {
            belongsTo: "error",
        },
        beforeEnter: (to, from, next) => {
            next({
                name: "Error404",
                replace: true,
                query: { ref: to.fullPath, from: from.fullPath },
            });
        },
    },
];
