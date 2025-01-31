<template>
    <span
        @click="handleClick"
        class="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
    >
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: "BaseLink",
};
</script>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
    to: {
        type: [String, Object],
        required: true,
    },
});

const router = useRouter();
const handleClick = () => {
    if (typeof props.to === "string") {
        router.push({ name: props.to });
    } else {
        router.push(props.to);
    }
};
</script>
