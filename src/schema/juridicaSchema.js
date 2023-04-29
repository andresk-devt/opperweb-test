import { object, string, number, ref } from 'yup';

export const registerSchema = object().shape({
  company_name: string().required('is required company name'),
  nit: string().required('is required nit'),
  phone: string().required('is required phone number'),
  email: string().email('').required('is required email'),
  password: string()
    .min(8, 'Password must be at least 8 characters')
    .required('is required password'),
  password_confirmation: string()
  .oneOf([ref('password'), null], 'Passwords must match')
  .required('is required confirm password'),
});
