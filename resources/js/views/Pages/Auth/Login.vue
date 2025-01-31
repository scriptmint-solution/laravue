<template>
    <form class="space-y-6">
        <BaseInput
            id="email"
            label="Email"
            v-model="form.email"
            icon="envelope"
            placeholder="Enter your email"
        />

        <BaseInput
            id="password"
            label="Password"
            type="password"
            v-model="form.password"
            icon="lock"
            placeholder="Enter your password"
        />

        <div class="flex items-center justify-between text-sm">
            <BaseCheckbox id="remember-me" v-model="form.remember">
                Remember me
            </BaseCheckbox>
            <BaseLink to="ForgotPassword"> Forgot your password? </BaseLink>
        </div>

        <BaseButton type="submit" variant="primary" full-width>
            Sign in
        </BaseButton>
    </form>

    <div class="mt-6 space-y-6">
        <div class="relative">
            <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
                <BaseText variant="centered"> Or continue with </BaseText>
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
                Don't have an account?
                <BaseLink to="Register">Register now</BaseLink>
            </BaseText>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthLogin",
};
</script>

<script setup>
import { reactive } from "vue";
import BaseInput from "@js/core/components/Form/BaseInput.vue";
import BaseButton from "@js/core/components/Form/BaseButton.vue";
import BaseCheckbox from "@js/core/components/Form/BaseCheckbox.vue";
import BaseLink from "@js/core/components/Form/BaseLink.vue";
import BaseText from "@js/core/components/Form/BaseText.vue";

const form = reactive({
    email: "",
    password: "",
    remember: false,
});
</script>
