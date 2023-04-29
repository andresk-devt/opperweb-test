<script setup>
import { ref } from "vue";
import { registerSchema } from "@/schema/juridicaSchema";

// Remembere refactor this code to only use once time

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const getPasswordType = () => {
  return showPassword.value ? "text" : "password";
};
const getConfirmPasswordType = () => {
  return showConfirmPassword.value ? "text" : "password";
};

const company_name = ref("");
const nit = ref("");
const phone = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");

const errors = ref({});

const validateForm = async () => {
  errors.value = {};
  try {
    const formData = {
      company_name: company_name.value,
      nit: nit.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    };
    const isValid = await registerSchema.validate(formData, {
      abortEarly: false,
    });
    return isValid;
  } catch (error) {
    const validationErrors = {};
    error.inner.forEach((element) => {
      validationErrors[element.path] = true;
    });
    errors.value = validationErrors;
    console.log(errors.value);
    return false;
  }
};

const registerJuridicaUser = async () => {
  const isValidForm = await validateForm();
  console.log(isValidForm, "is valid form (?)");
};
</script>

<template>
  {{ errors }}
  <div class="input-container">
    <label for="razon_social" class="input-container__label"
      >Razon social</label
    >
    <div
      class="input-container-content"
      :class="errors['company_name'] ? 'missing-field' : ''"
    >
      <input
        id="razon_social"
        class="input-container__input"
        v-model="company_name"
      />
    </div>
  </div>
  <div class="input-container">
    <label for="nit" class="input-container__label">Nit</label>
    <div
      class="input-container-content"
      :class="errors['nit'] ? 'missing-field' : ''"
    >
      <input id="nit" class="input-container__input" v-model="nit" />
    </div>
  </div>
  <div class="input-container">
    <label for="phone" class="input-container__label">Telefono</label>
    <div
      class="input-container-content"
      :class="errors['phone'] ? 'missing-field' : ''"
    >
      <input id="phone" class="input-container__input" v-model="phone" />
    </div>
  </div>
  <div class="input-container">
    <label for="email" class="input-container__label">Email</label>
    <div
      class="input-container-content"
      :class="errors['email'] ? 'missing-field' : ''"
    >
      <input
        id="email"
        class="input-container__input"
        placeholder="usuario@yabu.com"
        v-model="email"
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
  </div>
  <div class="input-container">
    <label for="confirm_password" class="input-container__label"
      >Confirmar contraseña</label
    >
    <div
      class="input-container-content"
      :class="errors['password_confirmation'] ? 'missing-field' : ''"
    >
      <input
        id="confirm_password"
        class="input-container__input"
        placeholder="Confirm Password"
        v-model="password_confirmation"
        :type="getConfirmPasswordType()"
      />
      <div class="" v-if="showConfirmPassword">
        <ion-icon
          name="eye-outline"
          @click="toggleConfirmPassword()"
        ></ion-icon>
      </div>
      <div class="" v-if="!showConfirmPassword">
        <ion-icon
          name="eye-off-outline"
          @click="toggleConfirmPassword()"
        ></ion-icon>
      </div>
    </div>
  </div>
  <button class="button-container" @click="registerJuridicaUser">
    Registrar
  </button>
</template>
