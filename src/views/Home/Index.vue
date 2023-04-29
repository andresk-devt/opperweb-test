<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const myInfo = computed(() => {
  return store.getters["me/getMyInfo"];
});

const route = useRouter();

const changePage = (name) => {
  route.push({
    name
  });
}
</script>

<template>
  <div class="home">
    <h1>
      Hola, <strong>{{ myInfo?.name + " " + myInfo?.lastname }}</strong>
    </h1>
    <p class="home-text">Selecciona una opcion:</p>
    <div class="home-content d-flex flex-column">
      <button class="button-container" @click="changePage('CategoriesList')">Ver todas las categorias</button>
      <button class="button-container" @click="changePage('categorieCreate')">Crear categorias</button>
      <button class="button-container" @click="changePage('')">Cerrar sesion</button>
    </div>
  </div>
</template>

<style scoped>
.home-text {
  margin: 0px;
}
.home-content {
  width: 30%;
}
.home-content button {
  margin: 10px auto;
  width: 100%;
}
</style>
