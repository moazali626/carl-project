import axios from "axios";

const GetAllUsers = async () => {
  const token = localStorage.getItem("token");

  return await axios
    .post(
      `${process.env.REACT_APP_PROD_URL}/get-all-users/4000`,
      {},
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    )
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

export { GetAllUsers };
