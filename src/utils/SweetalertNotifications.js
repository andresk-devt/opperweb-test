import Swal from 'sweetalert2'

export const errorMessage = (message) => {
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    timer: 20000,
    text: message,
  })
};