<template>
    <div>
        <label
            v-if="label"
            :for="inputId"
            class="block text-sm font-medium text-gray-700"
        >
            {{ label }}
        </label>
        <div class="mt-1 relative">
            <div
                v-if="icon"
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
                <fa-icon :icon="icon" class="text-gray-400" />
            </div>
            <input
                :id="inputId"
                :type="type"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :required="required"
                :placeholder="placeholder"
                :class="[
                    'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                    icon ? 'pl-10' : '',
                ]"
            />
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    label: {
        type: String,
        default: "",
    },
    modelValue: {
        type: [String, Number],
        default: "",
    },
    type: {
        type: String,
        default: "text",
    },
    id: {
        type: String,
        required: false,
        default: "",
    },
    required: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: "",
    },
    icon: {
        type: String,
        default: "",
    },
});

const inputId = computed(() => {
    return props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
});

defineEmits(["update:modelValue"]);
</script>
