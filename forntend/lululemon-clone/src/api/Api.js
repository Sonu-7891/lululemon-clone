import axios from "axios";

// Create an Axios instance with default settings
const API = axios.create({
  baseURL:
    process.env.REACT_APP_BACKEND_API_URI ||
    "https://lululemon-clone-backend.onrender.com", // Update with your backend URL
  withCredentials: true, // Ensures cookies are sent with requests
});

// Axios interceptor to include access token in headers
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// API calls
export const Api = {
  // Authentication
  signup: (data) => API.post("/auth/signup", data),
  signin: (data) => API.post("/auth/signin", data),
  logout: () => API.post("/auth/logout"),

  // Profile
  // getProfile: () => API.get("/users/profile"),
  // updateProfile: (data) => API.put("/users/profile", data),

  // Categories
  getCategories: () => API.get("/categories"),

  // Products
  getProducts: (filters = {}) => API.get("/products", { params: filters }),
  getProductDetails: (id) => API.get(`/products/${id}`),

  // Cart
  getCart: () => API.get("/cart"),
  addToCart: (productId, quantity) =>
    API.post("/cart", { productId, quantity }),
  removeFromCart: (productId) => API.delete(`/cart/${productId}`),

  // Favorites
  getWishlist: () => API.get("/wishlist"),
  addToWishlist: (productId) => API.post("/wishlist/add", { productId }),
  removeFromWishlist: (productId) => API.delete(`/wishlist/remove/${productId}`),
  // Orders
  getOrders: () => API.get("/orders"),
  createOrder: (orderData) => API.post("/orders", orderData),

  // Search
  searchProducts: (query) =>
    API.get("/products/search", { params: { q: query } }),
};