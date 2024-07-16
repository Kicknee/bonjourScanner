import { ProductType } from "../types/types";

export default async (style: keyof ProductType) => {
  try {
    const response = await fetch("/.netlify/functions/delete_product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ STYLE: style }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
