<script setup>
import SidebarLayoutVue from "./components/SidebarLayout.vue";
import { useStore } from "vuex";
import CryptoJS from "crypto-js";
import { onMounted, ref } from "vue";

const store = useStore();

const showSidebarMenu = ref(false);

const getTimeZone = async () => {
  const response = await store.dispatch("timezone/getTimeZone");
  return response;
};

const handleSidebar = (data) => {
  showSidebarMenu.value = data;
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
    <div class="menu-icon-content" @click="handleSidebar(true)">
      <ion-icon name="menu-outline"></ion-icon>
    </div>
    <div
      class="layout-sidebar"
      :class="showSidebarMenu ? 'active-sidebar' : ''"
    >
      <SidebarLayoutVue :showSidebarMenu="showSidebarMenu" @closeButton="handleSidebar(data)" />
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
  .active-sidebar {
    display: block;
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 10;
  }
}
</style>
