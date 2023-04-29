<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const editMode = ref(false);

const route = useRoute();
if (route.params.categorie) {
  editMode.value = true;
} else {
  editMode.value = false;
}

const categorieName = ref("");
categorieName.value = route.params.categorie;
</script>

<template>
  <div class="categorie">
    <h1>
      <strong>{{ editMode ? "Actualizar" : "Crear" }} Categoria</strong>
    </h1>
    <div class="categorie-content">
      <div class="input-container">
        <label for="categorie" class="input-container__label"
          >Nombre de la categoria</label
        >
        <div class="input-container-content">
          <input
            id="categorie"
            class="input-container__input"
            v-model="categorieName"
          />
        </div>
      </div>
      <button class="button-container">
        {{ editMode ? "Actualizar" : "Crear" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.categorie-content {
  margin: 10px 0px;
  width: 30%;
}
</style>
