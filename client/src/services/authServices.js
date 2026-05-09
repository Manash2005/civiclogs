import API from "../api/axios";

export const register = async (userData) => {
  try {
    const response = await API.post("auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export const login = async (credentials) => {
  try {
    const response = await API.post("auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network Error");
  }
};