<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

import { useStore } from "vuex";

const store = useStore();
const login = async () => {
  store.dispatch("login/login", {
    email: "randommail2@mail.com",
    password: "strongkey1232",
    apiKey: "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g",
    utcTimeStamp: "2022-01-20T09:39:38Z",
    signature:
      "756403b52606111ee553e75e927bc0d92cc376d2aa63d469ee6d851e2cc04e9a",
  });
};
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