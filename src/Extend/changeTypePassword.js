import { ref } from "vue";

export const showPassword = ref(false);
export const showConfirmPassword = ref(false);

export const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

export const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

export const getPasswordType = () => {
  return showPassword.value ? "text" : "password";
};

export const getConfirmPasswordType = () => {
  return showConfirmPassword.value ? "text" : "password";
};