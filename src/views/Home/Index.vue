<script setup>
</script>

<template>
  <div class="home">
    <p class="home-text">Selecciona una opcion:</p>
    <div class="home-content d-flex flex-column">
      <button class="button-container">Ver todas las categorias</button>
      <button class="button-container">Crear categorias</button>
      <button class="button-container">Cerrar sesion</button>
    </div>
  </div>
</template>

<style scoped>
.home {
  margin-top: 50px;
}
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
