<script setup>
import naturalFormComponent from "./form/naturalFormComponent.vue";
import juridicalFormComponent from "./form/juridicaFormComponent.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const currentComponent = ref(naturalFormComponent);

const updateComponent = (event) => {
  if (event.target.value === "natural") {
    currentComponent.value = naturalFormComponent;
  } else {
    currentComponent.value = juridicalFormComponent;
  }
};

const store = useStore();
const getTimeZone = async () => {
  const response = await store.dispatch("timezone/getTimeZone");
  console.log(response, 'response');
}
getTimeZone();
</script>

<template>
  <div class="type-person-form">
    <p class="type-person-form__text">Tipo de persona</p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="type-person"
        id="type-natural"
        checked
        @change="updateComponent"
        value="natural"
      />
      <label class="form-check-label" for="type-natural"> Natural </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="type-person"
        id="type-juridica"
        @change="updateComponent"
        value="juridica"
      />
      <label class="form-check-label" for="type-juridica"> Juridica </label>
    </div>
  </div>
  <div class="form-container">
    <KeepAlive>
      <component :is="currentComponent" ref="registerForm" />
    </KeepAlive>
  </div>
</template>

<style scoped>
.type-person-form {
  display: flex;
  color: var(--white-color);
  display: flex;
  justify-content: space-around;
}
.form-check-input {
  background: var(--gray-light-color);
  border: 1.5px solid var(--white-color);
}
</style>
