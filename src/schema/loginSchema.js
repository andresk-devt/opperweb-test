import { object, string, number, ref } from 'yup';

export const loginSchema = object().shape({
  email: string().email('').required('is required email'),
  password: string().required('is required password'),
});
