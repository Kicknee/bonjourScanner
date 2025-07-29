import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import productService from "../../services/productService";
import { ProductType } from "../../lib/types";

// Fetch all products
export const useProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: productService.get });

// Add product
export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (product: ProductType) => productService.add(product),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });
};

// Update product
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedProduct: ProductType) =>
      productService.update(updatedProduct),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

// Delete product
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedProduct: ProductType) =>
      productService.delete(updatedProduct),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
