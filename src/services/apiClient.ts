import axios from "axios";

const axiosInstance = axios.create({
  timeout: 2000,
});

export const apiClient = async (
  url: string,
  method: string,
  data?: unknown
) => {
  try {
    const response = await axiosInstance({
      url,
      method,
      data,
    });

    return response.data;
  } catch (error) {
    console.log("API error:", error);
  }
};
