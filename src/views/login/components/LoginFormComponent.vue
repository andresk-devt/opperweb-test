<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>

<template>
  <div class="input-container">
    <label for="email" class="input-container__label">Email</label>
    <div class="input-container-content">
      <input
        id="email"
        class="input-container__input"
        v-model="email"
        placeholder="Email"
      />
    </div>
  </div>
  <div class="input-container">
    <label for="password" class="input-container__label">Password</label>
    <div class="input-container-content">
      <input
        id="password"
        class="input-container__input"
        v-model="password"
        placeholder="Password"
      />
      <ion-icon name="eye-outline"></ion-icon>
    </div>
    <span class="forgot-password">¿Olvido la contraseña?</span>
  </div>
  <button class="button-container">Acceder</button>
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
.button-container {
  color: #3e1149;
  background: var(--pink-light-color);
  border: none;
  outline: none;
  width: 100%;
  height: 45px;
  font-size: 1rem;
  font-family: "roboto";
  border-radius: 12px;
  margin: 35px auto;
  cursor: pointer;
}
.button-container:hover {
  background: var(--pink-light-color);
  opacity: 0.8;
}
</style>