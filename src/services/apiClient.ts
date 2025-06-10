import axios from "axios";

export const apiClient = async (
  url: string,
  method: string,
  data?: unknown
) => {
  try {
    const response = await axios({
      url,
      method,
      data,
    });

    return response.data;
  } catch (error) {
    console.log("API error:", error);
  }
};
