import { Product, initialProducts } from "@/data/initialProducts";

const PRODUCTS_KEY = "ferrumix_products";
const CART_KEY = "ferrumix_cart";
const AUTH_KEY = "ferrumix_auth";

export interface CartItem {
  product: Product;
  quantity: number;
}

// Products
export const getProducts = (): Product[] => {
  const stored = localStorage.getItem(PRODUCTS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  // Initialize with default products
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(initialProducts));
  return initialProducts;
};

export const saveProducts = (products: Product[]): void => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const addProduct = (product: Omit<Product, "id">): Product => {
  const products = getProducts();
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
  };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
};

export const updateProduct = (id: string, updates: Partial<Product>): Product | null => {
  const products = getProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...updates };
  saveProducts(products);
  return products[index];
};

export const deleteProduct = (id: string): boolean => {
  const products = getProducts();
  const filtered = products.filter((p) => p.id !== id);
  if (filtered.length === products.length) return false;
  saveProducts(filtered);
  return true;
};

// Cart
export const getCart = (): CartItem[] => {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveCart = (cart: CartItem[]): void => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (product: Product, quantity: number = 1): CartItem[] => {
  const cart = getCart();
  const existingIndex = cart.findIndex((item) => item.product.id === product.id);
  
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  
  saveCart(cart);
  return cart;
};

export const updateCartQuantity = (productId: string, quantity: number): CartItem[] => {
  const cart = getCart();
  const index = cart.findIndex((item) => item.product.id === productId);
  
  if (index !== -1) {
    if (quantity <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = quantity;
    }
  }
  
  saveCart(cart);
  return cart;
};

export const removeFromCart = (productId: string): CartItem[] => {
  const cart = getCart();
  const filtered = cart.filter((item) => item.product.id !== productId);
  saveCart(filtered);
  return filtered;
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_KEY);
};

// Auth
export const isAdminLoggedIn = (): boolean => {
  return localStorage.getItem(AUTH_KEY) === "true";
};

export const loginAdmin = (username: string, password: string): boolean => {
  if (username === "admin" && password === "admin123") {
    localStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
};

export const logoutAdmin = (): void => {
  localStorage.removeItem(AUTH_KEY);
};
