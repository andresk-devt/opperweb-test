<script setup>
import { registerSchema } from "@/schema/juridicaSchema";
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
import CryptoJS from "crypto-js";

const store = useStore();
const route = useRouter();

const changePage = (name) => {
  route.push({
    name
  });
}

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
    return false;
  }
};

const getTimeZone = async () => {
  const response = await store.dispatch("timezone/getTimeZone");
  return response;
};

const registerJuridicaUser = async () => {
  const isValidForm = await validateForm();
  if (isValidForm) {
    const currentTime = await getTimeZone();

    const publicKey = "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g";
    const privateKey = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6";
    const signature = `${privateKey},${publicKey},${currentTime.timezone}`;
    const signatureHash = CryptoJS.SHA256(signature).toString();

    await store.dispatch("register/registerUser", {
      telephone: phone.value,
      NIT: nit.value,
      razon_social: company_name.value,
      type_user_id: "1",
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
