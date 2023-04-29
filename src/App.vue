<script setup>
import { useStore } from "vuex";
import CryptoJS from "crypto-js";

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
getMeInformation();
</script>

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
