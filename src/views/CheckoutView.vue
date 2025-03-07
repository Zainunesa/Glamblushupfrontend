<template>
  <div class="checkout-container">
    <!-- Left Column: Checkout Form -->
    <div class="checkout-form">
      <h1>Checkout</h1>
      <form @submit.prevent="processPayment" class="form-grid">
        <!-- Personal Details Section -->
        <div class="form-section">
          <h2>Personal Details</h2>
          <div class="form-group">
            <label for="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              v-model="fullName"
              placeholder="John Doe"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              v-model="phone"
              placeholder="+1 234 567 890"
              required
            />
          </div>
        </div>

        <!-- Shipping Address Section -->
        <div class="form-section">
          <h2>Shipping Address</h2>
          <div class="form-group">
            <label for="address">Address</label>
            <input
              type="text"
              id="address"
              v-model="address"
              placeholder="123 Main St"
              required
            />
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input
              type="text"
              id="city"
              v-model="city"
              placeholder="New York"
              required
            />
          </div>
          <div class="form-group">
            <label for="state">State</label>
            <input
              type="text"
              id="state"
              v-model="state"
              placeholder="NY"
              required
            />
          </div>
          <div class="form-group">
            <label for="zip">ZIP Code</label>
            <input
              type="text"
              id="zip"
              v-model="zip"
              placeholder="10001"
              required
            />
          </div>
          <div class="form-group">
            <label for="country">Country</label>
            <select id="country" v-model="country" required>
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="IN">India</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="IT">Italy</option>
              <option value="ES">Spain</option>
              <option value="BR">Brazil</option>
              <option value="MX">Mexico</option>
              <option value="ZA">South Africa</option>
              <option value="JP">Japan</option>
              <option value="CN">China</option>
              <option value="RU">Russia</option>
              <option value="KR">South Korea</option>
              <option value="NL">Netherlands</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="NZ">New Zealand</option>
              <option value="SG">Singapore</option>
              <option value="AE">United Arab Emirates</option>
              <option value="SA">Saudi Arabia</option>
              <option value="AR">Argentina</option>
              <option value="NG">Nigeria</option>
              <option value="EG">Egypt</option>
              <option value="TR">Turkey</option>
              <option value="ID">Indonesia</option>
              <option value="TH">Thailand</option>
            </select>
          </div>
        </div>
        <div class="form-section">
          <h2>Payment Details</h2>
          <div class="form-group">
            <label for="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              v-model="cardNumber"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div class="form-group">
            <label for="expiry-date">Expiry Date (MM/YY)</label>
            <input
              type="text"
              id="expiry-date"
              v-model="expiryDate"
              placeholder="MM/YY"
              required
            />
          </div>
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              v-model="cvv"
              placeholder="123"
              required
            />
          </div>
          <div class="form-group">
            <label for="card-name">Name on Card</label>
            <input
              type="text"
              id="card-name"
              v-model="cardName"
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-button">Place Order</button>
      </form>
    </div>

    <!-- Right Column: Cart Summary -->
    <div class="cart-summary">
      <h2>Your Cart</h2>
      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img
            :src="require(`@/assets/${item.image}`)"
            :alt="item.name"
            class="cart-item-image"
          />

          <div class="cart-item-details">
            <h3 class="item-name">{{ item.name }}</h3>
            <p class="item-price">
              Price: R{{ Number(item.price).toFixed(2) }}
            </p>
            <p class="item-quantity">Quantity: {{ item.quantity }}</p>
          </div>
        </div>
        <div class="cart-total">
          <h3>Total: R{{ cartTotal.toFixed(2) }}</h3>
        </div>
      </div>
      <div v-else class="empty-cart">
        <p>Your cart is empty.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
    };
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal"]),
  },
  methods: {
    async processPayment() {
      if (!this.validateCard(this.cardNumber)) {
        alert(
          "Invalid card number. Please enter a valid Mastercard or Visa card."
        );
        return;
      }

      const orderData = {
        customer_name: this.fullName,
        email: this.email,
        phone: this.phone,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
        card_number: this.cardNumber,
        expiry_date: this.expiryDate,
        cvv: this.cvv,
        total_amount: this.cartTotal,
        items: this.cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      };

      try {
        const response = await fetch("http://localhost:3001/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Order placed successfully:", result);

          // Clearing the cart from local storage
          localStorage.removeItem("cart");

          // Redirecting to the order confirmation page
          this.$router.push({
            name: "OrderConfirmation",
            query: {
              customerName: this.fullName,
              email: this.email,
            },
          });
        } else {
          const error = await response.json();
          console.error("Failed to place order:", error);
          alert("Failed to place order. Please try again.");
        }
      } catch (error) {
        console.error("Error placing order:", error);
        alert("An error occurred while placing your order.");
      }
    },

    ...mapActions(["fetchCart"]),
    getImageUrl(imagePath) {
      // Fetch images from the assets folder or database
      return require(`@/assets/${imagePath}`);
    },
    
    validateCard(cardNumber) {
      const mastercardRegex =
        /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
      const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;

      if (mastercardRegex.test(cardNumber)) {
        return true;
      }
      if (visaRegex.test(cardNumber)) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.fetchCart();
  },
};
</script>

<style scoped>
.checkout-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
}

.checkout-form {
  flex: 2;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.cart-summary {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.cart-summary h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 15px;
}

.cart-item-details {
  flex: 1;
}

.item-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}

.item-price,
.item-quantity {
  font-size: 14px;
  color: #555;
}

.cart-total {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #ddd;
  text-align: right;
}

.cart-total h3 {
  font-size: 18px;
  color: #333;
}

.empty-cart {
  text-align: center;
  font-size: 16px;
  color: #777;
}

/* Shared Styles */
.checkout-form h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #333;
}

.form-grid {
  display: grid;
  gap: 20px;
}

.form-section {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.form-section h2 {
  margin-bottom: 20px;
  font-size: 20px;
  color: #555;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #007bff;
  outline: none;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
