import axios from "axios";

export const httpClient = axios.create({
  baseURL: 'https://parkdemeer-afde952e3fef.herokuapp.com/',
});

const authToken = localStorage.getItem('authToken');
if (authToken) {
  httpClient.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
}
