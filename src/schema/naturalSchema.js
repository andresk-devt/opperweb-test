import { object, string, number, ref } from "yup";

export const registerSchema = object().shape({
  name: string().required(""),
  lastname: string().required(""),
  phone: string().required(""),
  id: number().required(""),
  email: string().email("Invalid email format").required(""),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required(""),
  password_confirmation: string()
    .oneOf([ref("password"), null], "Passwords do not match")
    .required(""),
});
