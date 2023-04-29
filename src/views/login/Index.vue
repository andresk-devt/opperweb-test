<script setup>
import Brand from "../../components/Brand.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import CarouselComponent from "@/components/CarouselComponent.vue";
import LoginFormComponent from "./components/LoginFormComponent.vue";
</script>

<script setup></script>

<template>
  <div class="login">
    <div class="login-content">
      <Brand :showBackButton="false" />
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
          <FooterComponent route="Register" route-text="Registrarse" />
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
  width: 80%;
  margin: 20px auto;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-content:nth-child(1) {
  background: black;
  height: 100vh;
}
.login-content-header {
  color: var(--white-color);
  text-align: center;
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

@media (max-width: 800px) {
  .login-content-header {
    padding-top: 0px;
  }
  .login-content-container {
    padding: 30px;
    height: 100vh;
    width: 90%;
  }
  .login-content:nth-child(1) {
    width: 100%;
    height: 100vh;
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
