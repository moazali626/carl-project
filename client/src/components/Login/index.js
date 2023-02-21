import React from "react";
import { Formik } from "formik";
import Form from "./Form";
import { initialValues } from "./helper";
import { useNavigate } from "react-router-dom";
import VerifyPass from "./VerifyPass";
import { LoginUser } from "../../services/Login";
import { UserCheck } from "../../services/UserCheck";

const Login = () => {
  const navigate = useNavigate();

  const submitForm = async (values, handles) => {
    if (values && values.loginToggle === false) {
      const resp = await UserCheck(values);

      if (resp && resp.status === 404) {
        handles.setFieldError("email", "No registered user found");
        handles.setSubmitting(false);
      } else if (resp && resp.status === 200) {
        handles.setFieldValue("loginToggle", !values.loginToggle);
        handles.setFieldValue("focusedLoginUser", resp?.data?.email);
        handles.setSubmitting(false);
      }
    } else {
      const resp = await LoginUser(values);

      if (resp && resp.status === 401) {
        handles.setFieldError("password", "Invalid password");
        handles.setSubmitting(false);
      } else if (resp && resp.status === 200) {
        handles.setFieldError("password", "");
        handles.setSubmitting(false);
        navigate("/dashboard", { state: { email: values.email } });
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
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
          {!values.loginToggle ? (
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
          ) : (
            <VerifyPass
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              setFieldValue={setFieldValue}
            />
          )}
        </form>
      )}
    </Formik>
  );
};

export default Login;
