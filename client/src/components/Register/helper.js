export const initialValues = {
  email: "",
  password: "",
  passwordValidation: {
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  },
};

export const passwordValidation = (e, setFieldValue) => {
  const enteredValue = e.target.value;
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  setFieldValue("passwordValidation", {
    first: /.{12,}/.test(enteredValue) ? true : false,
    second: /[a-z]/.test(enteredValue) ? true : false,
    third: /[A-Z]/.test(enteredValue) ? true : false,
    fourth: /[0-9]/.test(enteredValue) ? true : false,
    fifth: specialChars.test(enteredValue) ? true : false,
  });
};

export const isValidPassword = (values) => {
  const IsSubmitDisable =
    values?.passwordValidation?.first &&
    values?.passwordValidation?.second &&
    values?.passwordValidation?.third &&
    values?.passwordValidation?.fourth &&
    values?.passwordValidation?.fifth;

  return IsSubmitDisable;
};
