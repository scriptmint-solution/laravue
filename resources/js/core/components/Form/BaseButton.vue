<template>
    <component
        :is="as"
        :type="as === 'button' ? type : undefined"
        :href="href"
        :class="[
            'flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            fullWidth ? 'w-full' : '',
            variantClasses[variant],
        ]"
        :disabled="disabled"
        @click="$emit('click', $event)"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: "BaseButton",
};
</script>

<script setup>
import { computed } from "vue";

const props = defineProps({
    type: {
        type: String,
        default: "button",
    },
    variant: {
        type: String,
        default: "primary",
        validator: (value) =>
            ["primary", "secondary", "outline"].includes(value),
    },
    fullWidth: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    as: {
        type: String,
        default: "button",
    },
    href: {
        type: String,
        default: "",
    },
});

const variantClasses = computed(() => ({
    primary:
        "border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
        "border border-gray-300 text-gray-500 bg-white hover:bg-gray-50 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
        "border border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",
}));
</script>
