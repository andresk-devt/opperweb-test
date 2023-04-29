<script setup>
import Brand from "@/components/Brand.vue";
</script>

<template>
  <div class="sidebar-layout">
    <Brand class="mt-3" />
    <div class="sidebar-content">
      <div class="sidebar-section">
        <div class="sidebar-section__title">
          <h4>Categorias</h4>
        </div>
        <ul class="sidebar-section-menu">
          <li class="sidebar-section-menu__item">Ver todas</li>
          <li class="sidebar-section-menu__item">Crear</li>
        </ul>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section__title">
          <h4>Cerrar sesion</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-content {
  margin: 30px auto;
}
.sidebar-section {
  padding: 25px 0px;
  margin: auto;
  width: 75%;
}
.sidebar-section-menu {
  color: var(--white-color);
  font-family: "poppins", sans-serif;
  list-style: disc;
}
.sidebar-section__title h4 {
  font-family: "poppins", sans-serif;
  color: var(--white-color);
  font-size: 1.2rem;
}
</style>
