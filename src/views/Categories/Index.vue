<script setup>
import { successMessage } from "@/utils/SweetalertNotifications";
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import CryptoJS from "crypto-js";

const editMode = ref(false);

const store = useStore();
const route = useRoute();
const router = useRouter();

if (route.params.id) {
  editMode.value = true;
} else {
  editMode.value = false;
}

const getTimeZone = async () => {
  const response = await store.dispatch("timezone/getTimeZone");
  return response;
};

const changePage = () => {
  router.push({ name: "CategoriesList" });
};

const categorieName = ref("");
const error = ref(false);

const triggerButton = async () => {
  console.log(categorieName.value);
  if (categorieName.value.length === 0) {
    error.value = true;
    return;
  }
  error.value = false;
  const currentTime = await getTimeZone();

  const publicKey = "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g";
  const privateKey = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6";
  const signature = `${privateKey},${publicKey},${currentTime.timezone}`;
  const signatureHash = CryptoJS.SHA256(signature).toString();

  if (editMode.value) {
    const payload = {
      id: route.params.id,
      body: {
        nombre: categorieName.value,
        apiKey: publicKey,
        utcTimeStamp: currentTime.timezone,
        signature: signatureHash,
      },
    };
    const response = await store.dispatch(
      "categories/updateCategorie",
      payload
    );
    if (response.categoria) {
      successMessage(
        "Se a actualizado de manera exitosa la categoria ",
        "CategoriesList"
      );
    }
    return;
  }

  const response = await store.dispatch("categories/createCategorie", {
    nombre: categorieName.value,
    apiKey: publicKey,
    utcTimeStamp: currentTime.timezone,
    signature: signatureHash,
  });
  if (response.categoria) {
    successMessage(
      "Se a creado de manera exitosa la categoria",
      "CategoriesList"
    );
  }
};
</script>

<template>
  <div class="categorie">
    <h1>
      <strong>{{ editMode ? "Actualizar" : "Crear" }} Categoria</strong>
    </h1>
    <span class="categorie-go-back" @click="changePage()">
      <ion-icon name="arrow-back-outline"></ion-icon>
      <p>Ver todos</p>
    </span>
    <div class="categorie-content">
      <div class="input-container">
        <label for="categorie" class="input-container__label"
          >Nombre de la categoria</label
        >
        <div
          class="input-container-content"
          :class="error ? 'missing-field' : ''"
        >
          <input
            id="categorie"
            class="input-container__input"
            v-model="categorieName"
          />
        </div>
      </div>
      <button class="button-container" @click="triggerButton()">
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
.categorie-go-back {
  cursor: pointer;
}
.categorie-go-back span {
  margin-right: 10px;
}
.categorie-go-back p {
  margin: 0px 0px 0px 10px;
  text-decoration: underline;
}
@media (min-width: 900px) {
  .categorie-go-back {
    display: none;
  }
}
@media (max-width: 900px) {
  .categorie-content {
    width: 100%;
  }
  .categorie-go-back {
    display: flex;
  }
}
</style>
