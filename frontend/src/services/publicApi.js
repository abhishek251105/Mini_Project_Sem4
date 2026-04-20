import axios from 'axios';

const publicApi = axios.create({
  baseURL: 'http://13.53.122.101:5000',
});

export default publicApi;
