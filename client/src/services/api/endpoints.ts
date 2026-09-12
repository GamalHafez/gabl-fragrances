const BASE = "api";
export const API_ENDPOINTS = {
  AUTH: `${BASE}/auth`,
  PRODUCTS: `${BASE}/products`,
  REVIEWS: `${BASE}/reviews`,
  CART: `${BASE}/cart`,
  ORDERS: `${BASE}/orders`,
  SHIPPING_METHODS: `${BASE}/shipping-methods`,
  PROFILE: `${BASE}/profile`,
} as const;
