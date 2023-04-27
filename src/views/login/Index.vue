<script setup>
import FooterComponent from "./components/FooterComponent.vue"
import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>

<script setup></script>

<template>
  <div class="login">
    <div class="login-content">
      <div class="close-button">
        <img src="@/assets/images/back-icon.png" alt="Icon">
      </div>
      <div class="login-content-header">
        <img src="@/assets/images/login-form-image.png" alt="" />
        <div class="login-content-header__information">
          <h2>ひさしぶり!</h2>
          <p>¡Hola, te extrañamos!</p>
        </div>
      </div>
      <div class="login-content-form">
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
        <button class="button-container">
          Acceder
        </button>
      </div>
      <div class="login-content-footer">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: rgb(228, 135, 251);
  background: linear-gradient(
    175deg,
    rgba(228, 135, 251, 1) 0%,
    var(--pink-color) 6%,
    rgba(0, 0, 0, 1) 100%
  );
}
.login-content-header {
  color: var(--white-color);
  text-align: center;
  padding-top: 20px;
}
.login-content-header h2 {
  font-size: 2.25rem;
  font-weight: bold;
}
.login-content-header p {
  font-family: "roboto", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  margin: 8px auto;
}
/* Form styles */
.login-content-form {
  width: 90%;
  margin: 15px auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  font-family: "poppins", sans-serif;
  margin: 25px auto;
  position: relative;
}
.input-container .input-container-content {
  display: flex;
  padding: 13px;
  border-radius: 10px;
  border: 2px solid var(--white-color);
  outline: none;
  background: rgba(255, 255, 255, 0.47);
}
.input-container .input-container__label {
  font-size: 0.9rem;
  font-weight: lighter;
  color: var(--white-color);
  margin: 3px 0px;
}
.input-container .input-container__input {
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
}
.input-container .input-container-content ion-icon {
  color: var(--white-color);
  font-size: 1.2rem;
  cursor: pointer;
}
.forgot-password {
  right: 0;
  top: 80px;
  position: absolute;
  font-size: 0.875rem;
  color: var(--pink-light-color);
  cursor: pointer ;
}
.button-container {
  color: #3E1149;
  background: var(--pink-light-color);
  border: none;
  outline: none;
  width: 100%;
  height: 45px;
  font-size: 1rem;
  font-family: 'roboto';
  border-radius: 12px;
  margin: 35px auto;
  cursor: pointer;
}
.button-container:hover {
  background: var(--pink-light-color);
  opacity: .8;
}
.login-content-footer {
  width: 90%;
  margin: 15px auto;
}
.close-button {
  padding: 25px;
}
</style>
