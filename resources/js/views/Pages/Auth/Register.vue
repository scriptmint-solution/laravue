<template>
    <form class="space-y-6">
        <BaseInput
            label="Full name"
            v-model="form.name"
            icon="user"
            placeholder="Enter your full name"
        />
        <BaseInput
            label="Email"
            v-model="form.email"
            icon="envelope"
            placeholder="Enter your email"
        />
        <BaseInput
            label="Password"
            type="password"
            v-model="form.password"
            icon="lock"
            placeholder="Enter your password"
        />
        <BaseInput
            label="Confirm Password"
            type="password"
            v-model="form.password_confirmation"
            icon="lock"
            placeholder="Confirm your password"
        />

        <BaseButton type="submit" variant="primary" full-width>
            Register
        </BaseButton>
    </form>

    <div class="mt-6 space-y-6">
        <div class="relative">
            <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
                <BaseText variant="centered">Or continue with</BaseText>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-3">
            <BaseButton variant="outline" href="#" as="a">
                <fa-icon :icon="['fab', 'google']" />
            </BaseButton>
            <BaseButton variant="outline" href="#" as="a">
                <fa-icon :icon="['fab', 'facebook-f']" />
            </BaseButton>
            <BaseButton variant="outline" href="#" as="a">
                <fa-icon :icon="['fab', 'github']" />
            </BaseButton>
        </div>

        <div class="flex justify-center text-sm">
            <BaseText variant="centered">
                Already have an account?
                <BaseLink to="Login">Sign in</BaseLink>
            </BaseText>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthRegister",
};
</script>

<script setup>
import { reactive } from "vue";
import BaseInput from "@js/core/components/Form/BaseInput.vue";
import BaseButton from "@js/core/components/Form/BaseButton.vue";
import BaseLink from "@js/core/components/Form/BaseLink.vue";
import BaseText from "@js/core/components/Form/BaseText.vue";

const form = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});
</script>
