import * as Yup from "yup";

export function initialValues() {
  return {
    title: "",
    miniature: "",
    file: null,
    description: "",
    url: "",
    price: undefined,
    score: undefined,
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required(true),
    miniature: Yup.string().required(true),
    description: Yup.string().required(true),
    url: Yup.string().required(true),
    price: Yup.number().required(true),
    score: Yup.number().min(1, true).max(5).required(true),
  });
}
