import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("*REQUIRED FIELD"),
  lastName: yup.string().required("*REQUIRED FIELD"),
  email: yup
    .string()
    .required("*REQUIRED FIELD")
    .email("*INVALID EMAIL ADDRESS"),
  phone: yup
    .string()
    .required("*REQUIRED FIELD")
    .matches(/^[0-9]*$/, "*ONLY DIGITS ARE ALLOWED."),
  comment: yup.string().required("*REQUIRED FIELD"),
});
