<script setup>
import { registerSchema } from "@/schema/naturalSchema";
import { successMessage } from "@/utils/SweetalertNotifications";
import {
  showPassword,
  showConfirmPassword,
  getPasswordType,
  togglePassword,
  getConfirmPasswordType,
  toggleConfirmPassword,
} from "@/Extend/changeTypePassword";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import CryptoJS from "crypto-js";

const store = useStore();
const route = useRouter();

const changePage = (name) => {
  route.push({
    name
  });
}

const name = ref("");
const lastname = ref("");
const phone = ref("");
const id = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");

const errors = ref({});

const getTimeZone = async () => {
  const response = await store.dispatch("timezone/getTimeZone");
  return response;
};

const validateForm = async () => {
  errors.value = {};
  try {
    const formData = {
      name: name.value,
      lastname: lastname.value,
      phone: phone.value,
      id: id.value,
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
    return false;
  }
};

const registerNaturalUser = async () => {
  const isValidForm = await validateForm();
  if (isValidForm) {
    const currentTime = await getTimeZone();

    const publicKey = "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g";
    const privateKey = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6";
    const signature = `${privateKey},${publicKey},${currentTime.timezone}`;
    const signatureHash = CryptoJS.SHA256(signature).toString();

    const response = await store.dispatch("register/registerUser", {
      name: name.value,
      lastname: lastname.value,
      telephone: phone.value,
      identy_document: id.value,
      type_user_id: "2",
      verify_tc: "1",
      password: password.value,
      password_confirmation: password_confirmation.value,
      email: email.value,
      apiKey: publicKey,
      utcTimeStamp: currentTime.timezone,
      signature: signatureHash,
    });
    if (response.token) {
      successMessage("Se a registrado de manera exitosa!");
      changePage("Login");
    }
  }
};
</script>

<template>
  <div class="input-container">
    <label for="name" class="input-container__label">Nombre</label>
    <div
      class="input-container-content"
      :class="errors['name'] ? 'missing-field' : ''"
    >
      <input id="name" class="input-container__input" v-model="name" />
    </div>
  </div>
  <div class="input-container">
    <label for="last_name" class="input-container__label">Apellido</label>
    <div
      class="input-container-content"
      :class="errors['lastname'] ? 'missing-field' : ''"
    >
      <input id="last_name" class="input-container__input" v-model="lastname" />
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
    <label for="id" class="input-container__label"
      >Numero de identificacion</label
    >
    <div
      class="input-container-content"
      :class="errors['id'] ? 'missing-field' : ''"
    >
      <input id="id" type="text" class="input-container__input" v-model="id" />
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
        type="email"
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
  <button class="button-container" @click="registerNaturalUser">
    Registrar
  </button>
</template>
