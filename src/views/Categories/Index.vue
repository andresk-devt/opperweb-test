<script setup>
import { successMessage } from "@/utils/SweetalertNotifications";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import CryptoJS from "crypto-js";

const editMode = ref(false);

const store = useStore();
const route = useRoute();
const router = useRouter();

const changePage = () => {
  router.push({ name: "CategoriesList" });
};

if (route.params.id) {
  editMode.value = true;
} else {
  editMode.value = false;
}

const getTimeZone = async () => {
  const response = await store.dispatch("timezone/getTimeZone");
  return response;
};

const categorieName = ref("");

const triggerButton = async () => {
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
      successMessage("Se a actualizado de manera exitosa la categoria ", "CategoriesList");
      // changePage();
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
    successMessage("Se a creado de manera exitosa la categoria", "CategoriesList");
    // changePage();
  }
};
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
</style>
