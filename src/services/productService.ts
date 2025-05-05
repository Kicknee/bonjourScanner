import { ProductType } from "../types/types";

const productService = {
  add: async (product: ProductType) => {
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
  },
  delete: async (product: ProductType) => {
    try {
      const response = await fetch("/.netlify/functions/delete_product", {
        method: "DELETE",
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
  },
  update: async (product: ProductType) => {
    try {
      const response = await fetch("/.netlify/functions/update_product", {
        method: "PATCH",
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
  },
  get: async () => {
    try {
      let response = await fetch("/.netlify/functions/get_products");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.error("err", error);
    }
  },
};

export default productService;
