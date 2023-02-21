import React from "react";
import { Formik } from "formik";
import Form from "./Form";
import { initialValues } from "./helper";
import { RegisterUser } from "../../services/Register";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const submitForm = async (values, handles) => {
    const resp = await RegisterUser(values);
    if (resp && resp.status === 201) {
      handles.setSubmitting(false);
      navigate("/confirmation", { state: { email: values.email } });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "You entered an invalid email address";
        }
        if (!values.password) {
          errors.password = "Password is required!";
        }
        return errors;
      }}
      onSubmit={(values, handles) => {
        submitForm(values, handles);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Form
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            setFieldValue={setFieldValue}
          />
        </form>
      )}
    </Formik>
  );
};

export default Register;
