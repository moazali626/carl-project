export const logoutHandler = (navigate) => {
  localStorage.removeItem("token");
  navigate("/login");
};
