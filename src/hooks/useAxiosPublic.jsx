import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://uni-filter-server.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;