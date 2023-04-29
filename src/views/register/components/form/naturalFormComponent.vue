
<script setup>
import { ref } from "vue";

const register_data_form = ref({
  name: "",
  lastname: "",
  phone: "",
  id: 0,
  email: "",
  password: "",
  password_confirmation: "",
});

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
</script>

<template>
  <div class="input-container">
    <label for="name" class="input-container__label">Nombre</label>
    <div class="input-container-content">
      <input
        id="name"
        class="input-container__input"
        v-model="register_data_form.name"
      />
    </div>
  </div>
  <div class="input-container">
    <label for="last_name" class="input-container__label">Apellido</label>
    <div class="input-container-content">
      <input
        id="last_name"
        class="input-container__input"
        v-model="register_data_form.lastname"
      />
    </div>
  </div>
  <div class="input-container">
    <label for="phone" class="input-container__label">Telefono</label>
    <div class="input-container-content">
      <input
        id="phone"
        class="input-container__input"
        v-model="register_data_form.phone"
      />
    </div>
  </div>
  <div class="input-container">
    <label for="id" class="input-container__label"
      >Numero de identificacion</label
    >
    <div class="input-container-content">
      <input
        id="id"
        class="input-container__input"
        v-model="register_data_form.id"
      />
    </div>
  </div>
  <div class="input-container">
    <label for="email" class="input-container__label">Email</label>
    <div class="input-container-content">
      <input
        id="email"
        class="input-container__input"
        placeholder="usuario@yabu.com"
        v-model="register_data_form.email"
      />
    </div>
  </div>
  <div class="input-container">
    <label for="password" class="input-container__label">Contraseña</label>
    <div class="input-container-content">
      <input
        id="password"
        class="input-container__input"
        placeholder="Password"
        :type="getPasswordType()"
        v-model="register_data_form.password"
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
    <div class="input-container-content">
      <input
        id="confirm_password"
        class="input-container__input"
        placeholder="Confirm Password"
        v-model="register_data_form.password_confirmation"
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
  <button class="button-container" @click="registerUser">Registrar</button>
</template>
