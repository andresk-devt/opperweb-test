<script setup>
import SidebarLayoutVue from "./components/SidebarLayout.vue";
</script>

<template>
  <div class="layout">
    <div class="layout-sidebar">
      <SidebarLayoutVue />
    </div>
    <main class="layout-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.layout-sidebar {
  width: 20%;
  background: var(--purple-color);
}
.layout-content {
  width: 80%;
  background: black;
  padding: 100px 60px 60px 60px;
  color: var(--white-color);
  font-family: "poppins", sans-serif;
}
</style>
