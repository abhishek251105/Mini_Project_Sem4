import axios from 'axios';

/** Axios instance for student / public quiz endpoints — never sends Authorization. */
const publicApi = axios.create({
  baseURL: "", 
});

export default publicApi;