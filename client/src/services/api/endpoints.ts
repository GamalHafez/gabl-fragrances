const BASE = "api";
export const API_ENDPOINTS = {
  PRODUCTS: `${BASE}/products`,
  REVIEWS: `${BASE}/reviews`,
  CART: `${BASE}/cart`,
  SHIPPING_METHODS: `${BASE}/shipping-methods`,
} as const;
