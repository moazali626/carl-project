import axios from "axios";

const UserCheck = async (values) => {
  const data = {
    email: values.email,
    password: values.password,
  };

  return await axios
    .post(`${process.env.REACT_APP_PROD_URL}/is-valid-user`, data)
    .then((response) => {
      if (response && response.status === 200) {
        return {
          data: response?.data?.data,
          status: response?.data?.status,
          message: response?.data?.message,
        };
      } else {
        return {
          status: 400,
          message: "Something went wrong",
        };
      }
    })
    .catch((err) => {
      return {
        status: 500,
        message: err,
      };
    });
};

export { UserCheck };
