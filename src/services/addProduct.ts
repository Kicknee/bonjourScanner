import { ProductType } from "../types/types";

export default async (product: ProductType) => {
  try {
    const response = await fetch("/.netlify/functions/add_product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
