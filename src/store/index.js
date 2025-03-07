import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: [],
    isLoggedIn: false, 
    isAdminLoggedIn: false, 
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find((p) => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1; 
      } else {
        // Ensure price is a number when adding to the cart
        state.cart.push({
          ...product,
          quantity: 1,
          price: Number(product.price),
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart)); 
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((p) => p.id !== productId);
      localStorage.setItem("cart", JSON.stringify(state.cart)); 
    },
    setCart(state, cartItems) {
      state.cart = cartItems; 
    },
    setLoginStatus(state, status) {
      state.isLoggedIn = status; 
    },
    setAdminLoginStatus(state, status) {
      state.isAdminLoggedIn = status; 
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const response = await fetch("http://localhost:3001/products/");
        if (!response.ok) throw new Error("Failed to fetch products");
        const products = await response.json();
        commit("setProducts", products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    },
    loadCart({ commit }) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const parsedCart = JSON.parse(cart).map((item) => ({
          ...item,
          price: Number(item.price), 
        }));
        commit("setCart", parsedCart); 
      }
    },
    async fetchCart({ commit }) {
      try {
        const response = await fetch("http://localhost:3001/cart");
        const data = await response.json();
        commit("setCart", data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    },
    login({ commit }) {
      commit("setLoginStatus", true); 
      localStorage.setItem("isLoggedIn", true); 
    },
    logout({ commit }) {
      commit("setLoginStatus", false); 
      localStorage.removeItem("isLoggedIn");
    },
    checkLoginStatus({ commit }) {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        commit("setLoginStatus", true); 
      }
    },
  },
  getters: {
    cartItems: (state) => state.cart, // Getter for cart items
    cartTotal: (state) =>
      state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ), // Getter for cart total
    isLoggedIn: (state) => state.isLoggedIn, // Getter for login state
    isAdminLoggedIn: (state) => state.isAdminLoggedIn, 
  },
});
