<script setup>
import { ref } from "vue";
import { loginSchema } from "@/schema/loginSchema";
import { useStore } from "vuex";
import CryptoJS from "crypto-js";

const email = ref("");
const password = ref("");

const store = useStore();
const errors = ref({});

const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const getPasswordType = () => {
  return showPassword.value ? "text" : "password";
};

const getTimeZone = async () => {
  const response = await store.dispatch("timezone/getTimeZone");
  return response;
};

const validateForm = async () => {
  errors.value = {};
  try {
    const formData = {
      email: email.value,
      password: password.value,
    };
    const isValid = await loginSchema.validate(formData, {
      abortEarly: false,
    });
    return isValid;
  } catch (error) {
    const validationErrors = {};
    error.inner.forEach((element) => {
      validationErrors[element.path] = true;
    });
    errors.value = validationErrors;
    return false;
  }
};

const login = async () => {
  const isValidForm = await validateForm();
  if (isValidForm) {
    const currentTime = await getTimeZone();

    const publicKey = "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g";
    const privateKey = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6";
    const signature = `${privateKey},${publicKey},${currentTime.timezone}`;
    const signatureHash = CryptoJS.SHA256(signature).toString();

    const response = await store.dispatch("login/login", {
      email: email.value,
      password: password.value,
      apiKey: publicKey,
      utcTimeStamp: currentTime.timezone,
      signature: signatureHash,
    });
  }
};
</script>

<template>
  <div class="input-container">
    <label for="email" class="input-container__label">Email</label>
    <div
      class="input-container-content"
      :class="errors['email'] ? 'missing-field' : ''"
    >
      <input
        id="email"
        class="input-container__input"
        v-model="email"
        placeholder="Email"
      />
    </div>
  </div>
  <div class="input-container">
    <label for="password" class="input-container__label">Contraseña</label>
    <div
      class="input-container-content"
      :class="errors['password'] ? 'missing-field' : ''"
    >
      <input
        id="password"
        class="input-container__input"
        placeholder="Password"
        :type="getPasswordType()"
        v-model="password"
      />
      <div class="" v-if="showPassword">
        <ion-icon name="eye-outline" @click="togglePassword()"></ion-icon>
      </div>
      <div class="" v-if="!showPassword">
        <ion-icon name="eye-off-outline" @click="togglePassword()"></ion-icon>
      </div>
    </div>
    <span class="forgot-password">¿Olvido la contraseña?</span>
  </div>
  <button class="button-container" @click="login()">Acceder</button>
</template>

<style scoped>
.forgot-password {
  right: 0;
  top: 90px;
  position: absolute;
  font-size: 0.875rem;
  color: var(--pink-light-color);
  cursor: pointer;
}
</style>
