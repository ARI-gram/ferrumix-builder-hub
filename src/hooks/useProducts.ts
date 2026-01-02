import { useState, useEffect, useCallback } from "react";
import { Product } from "@/data/initialProducts";
import { getProducts, saveProducts, addProduct as addProductToStorage, updateProduct as updateProductInStorage, deleteProduct as deleteProductFromStorage } from "@/lib/storage";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = useCallback(() => {
    const storedProducts = getProducts();
    setProducts(storedProducts);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const addProduct = useCallback((product: Omit<Product, "id">) => {
    const newProduct = addProductToStorage(product);
    setProducts((prev) => [...prev, newProduct]);
    return newProduct;
  }, []);

  const updateProduct = useCallback((id: string, updates: Partial<Product>) => {
    const updated = updateProductInStorage(id, updates);
    if (updated) {
      setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
    }
    return updated;
  }, []);

  const deleteProduct = useCallback((id: string) => {
    const success = deleteProductFromStorage(id);
    if (success) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
    return success;
  }, []);

  const getProductById = useCallback((id: string) => {
    return products.find((p) => p.id === id);
  }, [products]);

  const getFeaturedProducts = useCallback(() => {
    return products.filter((p) => p.featured);
  }, [products]);

  const getProductsByCategory = useCallback((category: string) => {
    if (category === "all") return products;
    return products.filter((p) => p.category === category);
  }, [products]);

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getFeaturedProducts,
    getProductsByCategory,
    refreshProducts: loadProducts,
  };
};
