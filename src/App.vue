<template>
  <router-view />
</template>

<style>
@import "@/assets/css/main.css";

#app {
  overflow: hidden;
}
@media (max-width: 800px) {
  #app {
    overflow: auto;
  }
}
</style>
