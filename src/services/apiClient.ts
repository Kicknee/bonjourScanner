export const apiClient = async (
  url: string,
  method: string,
  data?: unknown
) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(data !== undefined && { body: JSON.stringify(data) }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log("API error:", error);
  }
};
