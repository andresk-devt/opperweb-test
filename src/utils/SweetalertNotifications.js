import Swal from "sweetalert2";

export const errorMessage = (message) => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    timer: 20000,
    text: message,
  });
};

export const successMessage = (message) => {
  return Swal.fire({
    icon: "success",
    title: "Good job!",
    timer: 20000,
    text: "You clicked the button!",
  });
};
