import { useFormik } from "formik";
import * as Yup from "yup";

export const useLoginFormValidation = (onSubmitHandler) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        // .email("Invalid email address")
        .required("This field is empty!"),
      password: Yup.string()
        .required("This field is empty!")
        .min(2, "Password is too short - should contain min. 2 characters")
    }),
    onSubmit: onSubmitHandler,
  });

  return formik;
};
