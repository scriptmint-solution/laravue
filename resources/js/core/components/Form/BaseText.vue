<template>
    <span
        :class="[
            'text-sm',
            variant === 'default' ? 'text-gray-500' : '',
            variant === 'centered' ? 'px-2 bg-white text-gray-500' : '',
            className,
        ]"
    >
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: "BaseText",
};
</script>

<script setup>
defineProps({
    variant: {
        type: String,
        default: "default",
        validator: (value) => ["default", "centered"].includes(value),
    },
    className: {
        type: String,
        default: "",
    },
});
</script>
