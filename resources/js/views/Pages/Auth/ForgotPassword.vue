<template>
    <div
        class="min-h-screen bg-gray-100 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
        <div class="mx-auto w-full sm:max-w-md">
            <h2
                class="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900"
            >
                Forgot your password?
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Enter your email address and we'll send you a link to reset your
                password.
            </p>
        </div>

        <div class="mt-8 mx-auto w-full sm:max-w-md">
            <div class="bg-white py-6 px-4 shadow rounded-lg sm:px-10 sm:py-8">
                <form class="space-y-6">
                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <div class="mt-1">
                            <input
                                id="email"
                                type="email"
                                required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            :class="{
                                'opacity-75 cursor-not-allowed': processing,
                            }"
                            :disabled="processing"
                        >
                            Send Reset Link
                        </button>
                    </div>
                </form>

                <div class="mt-6">
                    <div class="relative">
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-gray-500">
                                Remember your password?
                                <span
                                    @click="router.push({ name: 'Login' })"
                                    class="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Sign in
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Success Message -->
        <div v-if="status" class="mt-4 mx-auto w-full sm:max-w-md">
            <div class="bg-green-50 border border-green-200 rounded-md p-4">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg
                            class="h-5 w-5 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-green-800">
                            {{ status }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthForgotPassword",
};
</script>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const status = ref(null);
const processing = ref(false);
</script>
