<script setup>
import FooterComponent from "./components/FooterComponent.vue";
import CarouselComponent from "@/components/CarouselComponent.vue";
import LoginFormComponent from "./components/LoginFormComponent.vue";

import Extend from "@/Extend/onResize";
const { screenWidth } = Extend();
</script>

<script setup></script>

<template>
  <div class="login">
    <div class="login-content">
      <div class="brand-container" v-if="screenWidth > 800">
        <img src="@/assets/images/logo.png" alt="" />
        <p class="brand-container__text">
          anime<span class="brand-container__text brand-container__text--pink"
            >yabu.</span
          >
        </p>
      </div>
      <div class="back-button">
        <img src="@/assets/images/back-icon.png" alt="Icon" />
      </div>
      <div class="login-content-container">
        <div class="login-content-header">
          <img src="@/assets/images/login-form-image.png" alt="" />
          <div class="login-content-header__information">
            <h2>ひさしぶり!</h2>
            <p>¡Hola, te extrañamos!</p>
          </div>
        </div>
        <div class="login-content-form">
          <LoginFormComponent />
        </div>
        <div class="login-content-footer">
          <FooterComponent />
        </div>
      </div>
    </div>
    <div class="login-content">
      <CarouselComponent />
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  width: 100vw;
  height: 100%;
}
.login-content {
  width: 50%;
}
.login-content-container {
  padding: 30px 20%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}
.login-content:nth-child(1) {
  background: black;
}
.brand-container {
  display: flex;
  align-items: center;
  padding: 25px;
  position: absolute;
}
.brand-container img {
  padding-right: 15px;
}
.brand-container .brand-container__text {
  font-family: "poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--white-color);
  margin: 0px;
}
.brand-container .brand-container__text--pink {
  color: var(--pink-color);
}
.login-content-header {
  color: var(--white-color);
  text-align: center;
  padding-top: 50px;
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
  margin: 0px auto;
}
.login-content-footer {
  width: 90%;
  margin: 15px auto;
}
.back-button {
  padding: 10px 25px;
  position: absolute;
  top: 80px;
}

@media (max-width: 800px) {
  .back-button {
    top: 20px;
  }
  .login-content-container {
    padding: 30px;
    height: 100vh;
  }
  .login-content:nth-child(1) {
    width: 100%;
    background: linear-gradient(
      175deg,
      rgba(228, 135, 251, 1) 0%,
      var(--pink-color) 6%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  .login-content:nth-child(2) {
    display: none;
  }
}
</style>
