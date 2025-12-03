import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});


export default function useAxiosSecure() {
  return instance;
}
