<template>
    <div
        class="min-h-screen bg-gray-100 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
        <div class="mx-auto w-full sm:max-w-md">
            <h2
                class="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900"
            >
                {{ route.meta.title }}
            </h2>
            <p
                v-if="route.meta.subtitle"
                class="mt-2 text-center text-lg font-semibold text-gray-600"
            >
                {{ route.meta.subtitle }}
            </p>
        </div>

        <div class="mt-8 mx-auto w-full sm:max-w-md">
            <div class="bg-white py-6 px-4 shadow rounded-lg sm:px-10 sm:py-8">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GuestLayout",
};
</script>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
