<script setup>
import SidebarLayoutVue from "./components/SidebarLayout.vue";
import { useStore } from "vuex";
import CryptoJS from "crypto-js";
import { onMounted } from "vue";

const store = useStore();

const getTimeZone = async () => {
  const response = await store.dispatch("timezone/getTimeZone");
  return response;
};

const getMeInformation = async () => {
  const currentTime = await getTimeZone();

  const publicKey = "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g";
  const privateKey = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6";
  const signature = `${privateKey},${publicKey},${currentTime.timezone}`;
  const signatureHash = CryptoJS.SHA256(signature).toString();

  await store.dispatch("me/getMe", {
    apiKey: publicKey,
    utcTimeStamp: currentTime.timezone,
    signature: signatureHash,
  });
};
onMounted(async () => {
  await getMeInformation();
});
</script>

<template>
  <div class="layout">
    <div class="menu-icon-content">
      <ion-icon name="menu-outline"></ion-icon>
    </div>
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
  position: relative;
}
.menu-icon-content ion-icon {
  color: var(--white-color);
  font-size: 3rem;
  cursor: pointer;
} 
.layout-sidebar {
  width: 20%;
  background: var(--purple-color);
}
.layout-content {
  height: 100vh;
  overflow: auto;
  width: 80%;
  background: black;
  padding: 100px 60px 60px 60px;
  color: var(--white-color);
  font-family: "poppins", sans-serif;
}
.menu-icon-content {
  display: none;
}

@media (max-width: 900px) {
  .menu-icon-content {
    display: block;
    right: 0px;
    padding: 20px;
    position: absolute;
  }
  .layout-content {
    width: 100%;
    padding: 50px;
  }
  .layout-sidebar {
    display: none;
  }
}
</style>
