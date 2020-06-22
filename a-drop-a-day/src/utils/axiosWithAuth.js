import axios from "axios";
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://tomatoestimer.herokuapp.com/api/",
  });
};
