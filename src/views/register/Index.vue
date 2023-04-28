<script setup>
import CarouselComponent from "@/components/CarouselComponent.vue";

import Extend from "@/Extend/onResize";
const { screenWidth } = Extend();
</script>

<template>
  <div class="register">
    <div class="register-content">
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
  padding: 30px 20%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}
.register-content:nth-child(1) {
  background: black;
}
</style>