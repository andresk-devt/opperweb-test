<script setup>
import Extend from "@/Extend/onResize";
const { screenWidth } = Extend();

import { useRouter } from "vue-router";

const router = useRouter();
const changePage = (name) => {
  router.push({
    name: name,
  });
};

defineProps({
  route: {
    type: String,
    required: false,
  },
  showBackButton: Boolean,
});
</script>

<template>
  <div class="bran-content">
    <div class="brand-container" v-if="screenWidth > 800">
      <img src="@/assets/images/logo.png" alt="" />
      <p class="brand-container__text">
        anime<span class="brand-container__text brand-container__text--pink"
          >yabu.</span
        >
      </p>
    </div>
    <div
      v-show="showBackButton"
      class="back-button"
      :class="route ? 'have-link' : ''"
      @click="changePage(route)"
    >
      <img src="@/assets/images/back-icon.png" alt="Icon" />
    </div>
  </div>
</template>

<style scoped>
.have-link {
  cursor: pointer;
}
</style>
