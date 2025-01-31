<template>
    <form class="space-y-6">
        <BaseInput
            label="Email address"
            type="email"
            v-model="form.email"
            icon="envelope"
            placeholder="Enter your email"
            required
        />

        <BaseButton
            type="submit"
            variant="primary"
            full-width
            :disabled="processing"
        >
            Send Reset Link
        </BaseButton>
    </form>

    <div class="mt-6">
        <div class="relative">
            <div class="relative flex justify-center text-sm">
                <BaseText variant="centered">
                    Remember your password?
                    <BaseLink to="Login">Sign in</BaseLink>
                </BaseText>
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
import { ref, reactive } from "vue";
import BaseInput from "@js/core/components/Form/BaseInput.vue";
import BaseButton from "@js/core/components/Form/BaseButton.vue";
import BaseLink from "@js/core/components/Form/BaseLink.vue";
import BaseText from "@js/core/components/Form/BaseText.vue";

const router = useRouter();
const status = ref(null);
const processing = ref(false);
const form = reactive({
    email: "",
});
</script>
