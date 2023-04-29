import Swal from "sweetalert2";
import router from "../router";

export const errorMessage = (message) => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    timer: 20000,
    text: message,
  });
};

export const successMessage = (message, route) => {
  return Swal.fire({
    icon: "success",
    title: "Good job!",
    timer: 20000,
    text: "You clicked the button!",
  }).then(() => {
    router.push({ name: route });
  });;
};
