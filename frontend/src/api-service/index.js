import axios from "axios";

class ApiService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:3001/api/v1/user",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async post(endpoint, data, token) {
    const Authorization = (this.instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`);
    try {
      const response = await this.instance.post(endpoint, data, Authorization);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put(endpoint, data, token) {
    const Authorization = (this.instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`);
    try {
      const response = await this.instance.put(endpoint, data, Authorization);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const apiServiceInstance = new ApiService();
export default apiServiceInstance;
