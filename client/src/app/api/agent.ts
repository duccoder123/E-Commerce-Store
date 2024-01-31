import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5034/api/";
const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.get(url, body).then(responseBody),
  put: (url: string, body: object) => axios.get(url, body).then(responseBody),
  delete: (url: string) => axios.get(url).then(responseBody),
};

const Catalog = {
  list: () => request.get("products"),
  details: (id: number) => request.get(`products/${id}`),
};
const TestError = {
  get400Error: () => request.get("buggy/not-request"),
  get401Error: () => request.get("buggy/unauthorized"),
  get404Error: () => request.get("buggy/not-found"),
  get500Error: () => request.get("buggy/server-error"),
  getValidationError: () => request.get("buggy/validation-error"),
};
const agent = {
  Catalog,
  TestError,
};
export default agent;
