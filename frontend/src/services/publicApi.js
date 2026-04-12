import axios from 'axios';

/** Axios instance for student / public quiz endpoints — never sends Authorization. */
const publicApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default publicApi;
