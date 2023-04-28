<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const changePage = (name) => {
  router.push({
    name: name
  });
}
</script>

<template>
  <div class="footer-content">
    <div class="footer">
      <div class="footer__item footer__item--left"></div>
      <div class="footer__item">
        <span>Logearte con RRSS</span>
      </div>
      <div class="footer__item footer__item--right"></div>
    </div>
    <div class="network-buttons">
      <button class="network-button">
        <ion-icon name="logo-instagram"></ion-icon>
      </button>
      <button class="network-button">
        <ion-icon name="logo-twitter"></ion-icon>
      </button>
      <button class="network-button">
        <ion-icon name="logo-facebook"></ion-icon>
      </button>
    </div>
    <div class="register-message">
      <p class="register-message__text">
        Quieres registrarte? <span href="" class="register-message__link" @click="changePage('Register')">Registrate</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-family: "poppins", sans-serif;
  font-size: .9rem;
  color: var(--white-color);
}
.footer__item {
  width: 100%;
  text-align: center;
}
.footer__item span {
  padding: 5px;
}
.footer__item--left {
  content: "";
  width: 55%;
  height: 2px;
  background: var(--white-color);
}
.footer__item--right {
  content: "";
  width: 55%;
  height: 2px;
  left: 0px;
  background: var(--white-color);
}
.network-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px auto;
}
.network-button {
  background: rgba(255, 255, 255, 0.47);
  border: 2px solid var(--white-color);
  border-radius: 10px;
  height: 50px;
  width: 50px;
}
.network-button ion-icon {
  color: var(--white-color);
  font-size: 2rem;
  cursor: pointer;
}
.register-message {
  text-align: center;
  font-family: "poppins", sans-serif;
  color: var(--white-color);
  font-weight: 400;
  font-size: 1rem;
}
.register-message .register-message__link {
  color: var(--pink-light-color);
  text-decoration: none;
  margin-left: 8px;
  cursor: pointer;
}
</style>
