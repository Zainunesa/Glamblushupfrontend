<template>
  <div class="cart-container">
    <h1 class="cart-title">Shopping Cart</h1>

    <div v-if="cartItems.length > 0" class="cart-content">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <!-- Use require to dynamically load the image from the assets folder -->
        <img
            :src="require(`@/assets/${item.image}`)"
            :alt="item.name"
            class="cart-item-image"
          />
        <div class="cart-item-details">
          <h3 class="item-name">{{ item.name }}</h3>
          <p class="item-price">Price: R{{ Number(item.price).toFixed(2) }}</p>
         

          <div class="quantity-control">
            <button
              @click="decreaseQuantity(item.id)"
              :disabled="item.quantity <= 1"
            >
              <span>-</span>
            </button>
            <span class="quantity">{{ item.quantity }}</span>
            <button @click="increaseQuantity(item.id)">
              <span>+</span>
            </button>
          </div>
        </div>

        <button @click="removeFromCart(item.id)" class="remove-button">
          Remove from cart
        </button>
      </div>

      <div class="cart-summary">
        <h3>Total: R{{ cartTotal.toFixed(2) }}</h3>
        <button @click="proceedToCheckout" class="checkout-button">
          Proceed to Checkout
        </button>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartItems", "cartTotal"]),
  },
  cartItems() {
    return this.$store.state.cartItems; 
    return JSON.parse(localStorage.getItem('cart')) || []; 
  },

  methods: {
    ...mapActions(["removeFromCart", "loadCart"]),
    increaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item) {
        item.quantity += 1;
        this.updateCartInLocalStorage();
      }
    },
    decreaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        this.updateCartInLocalStorage();
      }
    },
    updateCartInLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    },
    proceedToCheckout() {
      if (this.cartItems.length === 0) {
        alert("Your cart is empty. Please add items before proceeding.");
        return;
      }
      this.$router.push({ name: "Checkout" });
    },
  },
  mounted() {
    this.loadCart();
  },
};
</script>


<style scoped>
/* General Styling */
.cart-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.cart-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Cart Item */
.cart-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.cart-item:hover {
  transform: scale(1.02);
}

.cart-item-image {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  object-fit: cover;
  margin-right: 15px;
}

.cart-item-details {
  flex-grow: 1;
}

.item-name {
  font-size: 18px;
  font-weight: 600;
}

.item-price,
.item-subtotal {
  font-size: 14px;
  color: #555;
  margin: 5px 0;
}

/* Quantity Control */
.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
}

.quantity-control button {
  background: #5b615d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.quantity-control button:hover {
  background: #c3cbc5;
}

.quantity-control button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.quantity {
  font-size: 16px;
  font-weight: bold;
}

/* Remove Button */
.remove-button {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.remove-button:hover {
  background: #c82333;
}

/* Cart Summary */
.cart-summary {
  text-align: center;
  padding: 15px;
  border-top: 2px solid #ddd;
}

.cart-summary h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

/* Checkout Button */
.checkout-button {
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.checkout-button:hover {
  background: #0056b3;
}

/* Empty Cart */
.empty-cart {
  text-align: center;
  font-size: 18px;
  color: #555;
}
</style>
