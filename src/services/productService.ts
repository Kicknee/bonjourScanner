import { ProductType } from "../lib/types";
import { apiClient } from "./apiClient";

const productService = {
  add: (product: ProductType) =>
    apiClient("/.netlify/functions/add_product", "POST", product),

  delete: (product: ProductType) =>
    apiClient("/.netlify/functions/delete_product", "DELETE", product),

  update: (product: ProductType) =>
    apiClient("/.netlify/functions/update_product", "PATCH", product),

  get: () => apiClient("/.netlify/functions/get_products", "GET"),
};

export default productService;
