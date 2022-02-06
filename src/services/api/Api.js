import axios from 'axios';

export default class Api {

  axiosApi;

  constructor(baseUrl) {
    this.axiosApi = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.axiosApi.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        return Promise.reject(error);
      },
    );
  }


  set baseUrl(baseUrl) {
    this.axiosApi.defaults.baseURL = baseUrl;
  }

  get axios() {
    return this.axiosApi;
  }
}
