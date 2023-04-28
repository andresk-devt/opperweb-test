<script setup>
import CarouselComponent from "@/components/CarouselComponent.vue";

</script>

<template>
  <div class="register">
    <div class="register-content"></div>
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