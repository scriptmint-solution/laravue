import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            "@": resolve(__dirname, "./resources"),
            "@js": resolve(__dirname, "./resources/js"),
            "@components": resolve(__dirname, "./resources/js/components"),
            "@routes": resolve(__dirname, "./resources/js/routes"),
            "@views": resolve(__dirname, "./resources/js/views"),
        },
    },
});
