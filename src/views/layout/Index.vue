<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import SidebarLayoutVue from "./components/SidebarLayout.vue";

const store = useStore();

const myInfo = computed(() => {
  return store.getters["me/getMyInfo"];
});
</script>

<template>
  <div class="layout">
    <div class="layout-sidebar">
      <SidebarLayoutVue />
    </div>
    <main class="layout-content">
      <h1>
        Hola, <strong>{{ myInfo.name + " " + myInfo.lastname }}</strong>
      </h1>
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
  padding: 60px;
  color: var(--white-color);
  font-family: "poppins", sans-serif;
}
</style>
