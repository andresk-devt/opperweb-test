<script setup>
import Brand from "@/components/Brand.vue";
import { useRouter } from "vue-router";

const route = useRouter();

const changePage = (name) => {
  route.push({ name: name });
}

const logout = () => {
  localStorage.clear();
  changePage("Home")
}
</script>

<template>
  <div class="sidebar-layout">
    <Brand class="mt-3" :showBackButton="false" />
    <div class="sidebar-content">
      <div class="sidebar-section">
        <div class="sidebar-section__title">
          <h4>Categorias</h4>
        </div>
        <ul class="sidebar-section-menu">
          <li
            class="sidebar-section-menu__item"
            @click="changePage('CategoriesList')"
          >
            Ver todas
          </li>
          <li
            class="sidebar-section-menu__item"
            @click="changePage('categorieCreate')"
          >
            Crear
          </li>
        </ul>
      </div>
      <div class="sidebar-section sidebar-section--logout" @click="logout()">
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
.sidebar-section--logout {
  cursor: pointer;
}
.sidebar-section-menu {
  color: var(--white-color);
  font-family: "poppins", sans-serif;
  list-style: disc;
}
.sidebar-section-menu .sidebar-section-menu__item {
  cursor: pointer;
}
.sidebar-section__title h4 {
  font-family: "poppins", sans-serif;
  color: var(--white-color);
  font-size: 1.2rem;
}
</style>
