<script setup>
import { useRouter } from "vue-router";
import CryptoJS from "crypto-js";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";

const store = useStore();
const route = useRouter();

const getTimeZone = async () => {
  const response = await store.dispatch("timezone/getTimeZone");
  return response;
};

const changePage = (id) => {
  route.push({
    name: "categorieEdit",
    params: { id }
  });
};

const getCategoriesList = async () => {
  const currentTime = await getTimeZone();

  const publicKey = "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g";
  const privateKey = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6";
  const signature = `${privateKey},${publicKey},${currentTime.timezone}`;
  const signatureHash = CryptoJS.SHA256(signature).toString();

  await store.dispatch("categories/getCategoriesList", {
    apiKey: publicKey,
    utcTimeStamp: currentTime.timezone,
    signature: signatureHash,
  });
};

getCategoriesList();

const categories = computed(() => {
  const response = store.getters["categories/getCategoriesList"];
  return response;
});
</script>

<template>
  <div class="categorie">
    <h1><strong>Lista de Categorias</strong></h1>
    <div class="categories-list grid-container">
      <div
        class="grid-item"
        v-for="(categorie, index) in categories"
        :key="index"
      >
        {{ categorie.nombre }}
        <span @click="changePage(categorie.id)">Editar</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories-list {
  margin: 50px auto;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
}

.grid-item {
  background-color: var(--purple-color);
  padding: 20px;
  text-align: center;
  font-size: 24px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.grid-item span {
  font-size: 0.8rem;
  position: absolute;
  bottom: 10px;
  right: 10px;
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
