<script setup>
import Brand from "@/components/Brand.vue";
import { useRouter } from "vue-router";

const route = useRouter();

defineProps({
  showSidebarMenu: Boolean,
});
const emit = defineEmits(["closeButton"]);

const changePage = (name) => {
  route.push({ name: name });
  emit('closeButton', false);
};

const logout = () => {
  localStorage.clear();
  emit('closeButton', false);
  changePage("Home");
};
</script>

<template>
  <div class="sidebar-layout" :class="showSidebarMenu ? 'active-sidebar' : ''">
    <div class="sidebar-header">
      <img src="@/assets/images/logo.png" alt="" />
      <p class="sidebar-header-text">
        anime<span class="sidebar-header-text sidebar-header-text--pink"
          >yabu.</span
        >
      </p>
    </div>
    <div class="close-button" v-if="showSidebarMenu">
      <ion-icon
        name="close-circle-outline"
        @click="emit('closeButton', false)"
      ></ion-icon>
    </div>
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
.sidebar-header {
  display: flex;
  align-items: center;
  padding: 10px;
}
.sidebar-header-text {
  display: flex;
  align-items: center;
  padding: 8px;
  font-family: "poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--white-color);
  margin: 0px;
}
.sidebar-header-text--pink {
  color: var(--pink-color);
}

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
.active-sidebar .sidebar-header {
  display: none;
}
.close-button {
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: end;
  padding: 30px;
}
.close-button ion-icon {
  cursor: pointer;
}
@media (max-width: 1050px) {
  .sidebar-header img {
    display: none;
  }
  .sidebar-header {
    justify-content: center;
  }
}
</style>
