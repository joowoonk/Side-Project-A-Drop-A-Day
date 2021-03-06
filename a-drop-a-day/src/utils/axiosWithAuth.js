import axios from "axios";
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://a-drop-a-day.herokuapp.com/api/",
    // baseURL: "http://localhost:3300/api/",
  });
};
