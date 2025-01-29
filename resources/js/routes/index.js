import { createRouter, createWebHistory } from "vue-router";
import routeList from "./list";

const baseURL = "/app";

const router = createRouter({
    history: createWebHistory(baseURL),
    routes: routeList,
});

router.beforeEach((to, from, next) => {
    const toFullPath = to.fullPath;
    const toPath = to.path;

    next();
});

router.afterEach((to, from) => {
    // console.log("after");
});

router.onError(() => {
    // console.log("error");
});

export default router;
