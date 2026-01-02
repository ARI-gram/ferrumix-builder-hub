import { useState, useEffect, useCallback } from "react";
import { Product } from "@/data/initialProducts";
import { CartItem, getCart, addToCart as addToCartStorage, updateCartQuantity as updateCartQuantityStorage, removeFromCart as removeFromCartStorage, clearCart as clearCartStorage } from "@/lib/storage";

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    const updatedCart = addToCartStorage(product, quantity);
    setCart(updatedCart);
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    const updatedCart = updateCartQuantityStorage(productId, quantity);
    setCart(updatedCart);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    const updatedCart = removeFromCartStorage(productId);
    setCart(updatedCart);
  }, []);

  const clearCart = useCallback(() => {
    clearCartStorage();
    setCart([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }, [cart]);

  const getCartCount = useCallback(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
  };
};
