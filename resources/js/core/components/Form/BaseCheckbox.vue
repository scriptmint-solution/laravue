<template>
    <div class="flex items-center">
        <input
            :id="id"
            type="checkbox"
            :checked="modelValue"
            @input="$emit('update:modelValue', $event.target.checked)"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label :for="id" class="ml-2 block text-sm text-gray-900">
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    name: "BaseCheckbox",
};
</script>

<script setup>
defineProps({
    id: {
        type: String,
        required: true,
    },
    modelValue: {
        type: Boolean,
        default: false,
    },
});

defineEmits(["update:modelValue"]);
</script>
