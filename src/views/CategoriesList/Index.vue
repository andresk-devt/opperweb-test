<script setup>
import { useRouter } from "vue-router";

const route = useRouter();

const changePage = (categorie) => {
  route.push({
    name: "categorieEdit",
    params: { categorie }
  })
}
</script>

<template>
  <div class="categorie">
    <h1><strong>Lista de Categorias</strong></h1>
    <div class="categories-list grid-container">
      <div class="grid-item">
        Columna 1
        <span @click="changePage('comedia')">Editar</span>
      </div>
      <div class="grid-item">
        Columna 2
        <span @click="changePage('accion')">Editar</span>
      </div>
      <div class="grid-item">
        Columna 3
        <span @click="changePage('miedo')">Editar</span>
      </div>
      <div class="grid-item">
        Columna 4
        <span @click="changePage('drama')">Editar</span>
      </div>
      <div class="grid-item">
        Columna 5
        <span @click="changePage('novela')">Editar</span>
      </div>
      <div class="grid-item">
        Columna 6
        <span @click="changePage('familiares')">Editar</span>
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
