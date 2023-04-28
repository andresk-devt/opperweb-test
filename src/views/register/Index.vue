<script setup>
import CarouselComponent from "@/components/CarouselComponent.vue";
import Brand from "@/components/Brand.vue";
import RegisterFormComponent from "./components/RegisterFormComponent";
import FooterComponent from "../../components/FooterComponent.vue";
  
</script>

<template>
  <div class="register">
    <div class="register-content">
      <Brand route="Login" class="brand-component" />
      <div class="register-content-container">
        <div class="register-content-header">
          <img src="@/assets/images/register-form-image.png" alt="" />
          <div class="register-content-header__information">
            <h2>ようこそ!</h2>
            <p>Bienvenidos(a)!</p>
          </div>
        </div>
        <div class="register-content-form">
          <RegisterFormComponent />
        </div>
        <div class="register-content-footer">
          <FooterComponent route="Login" route-text="Acceder" />
        </div>
      </div>
    </div>
    <div class="register-content">
      <CarouselComponent />
    </div>
  </div>
</template>

<style scoped>
.register {
  display: flex;
  width: 100vw;
  height: 100%;
}
.register-content {
  width: 50%;
}
.register-content-container {
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
}
.register-content:nth-child(1) {
  background: black;
  height: 100vh;
  overflow: auto;
}
.register-content-header {
  color: var(--white-color);
  text-align: center;
  display: flex;
  align-items: end;
  margin-bottom: 15px;
}
.register-content-header img {
  margin-right: 10px;
}
.register-content-header h2 {
  font-size: 2.25rem;
  font-weight: bold;
}
.register-content-header p {
  font-family: "roboto", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
}
/* Form styles */
.register-content-form {
  width: 90%;
  margin: 0px auto;
}
.register-content-footer {
  width: 90%;
  margin: 15px auto;
}
@media (max-width: 800px) {
  .register-content:nth-child(1) {
    width: 100%;
    background: linear-gradient(
      175deg,
      rgba(228, 135, 251, 1) 0%,
      var(--pink-color) 6%,
      rgba(0, 0, 0, 1) 100%
    );
    height: 100%;
  }
  .register-content:nth-child(2) {
    display: none;
  }
}
</style>