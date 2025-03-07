<template>
  <div class="order-confirmation">
    <div class="confirmation-card">
      <h1>🎉 Order Confirmed!</h1>
      <p class="thank-you">Thank you for your order, <strong>{{ customerName }}</strong>!</p>
      <p>Your order has been successfully placed and is being processed.</p>
      <p>An email confirmation has been sent to <strong>{{ email }}</strong>.</p>
      <div class="confirmation-details">
        <p>We appreciate your trust in us. Your items will be shipped soon!</p>
      </div>
      <router-link to="/" class="home-link">Return to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerName: '',
      email: '',
    };
  },
  mounted() {
    // Retrieve order details from the route query or Vuex store
    this.customerName = this.$route.query.customerName || 'Customer';
    this.email = this.$route.query.email || 'example@example.com';
  },
};
</script>

<style scoped>
.order-confirmation {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0c8ef, #fad0c4); /* Soft peach to pink gradient */
  padding: 20px;
}

.confirmation-card {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  animation: fadeIn 0.5s ease-in-out;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

.thank-you {
  font-size: 1.4rem;
  color: #27ae60;
  margin-bottom: 20px;
}

p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
}

.confirmation-details {
  margin-top: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #eee;
}

.home-link {
  display: inline-block;
  margin-top: 25px;
  padding: 12px 30px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.home-link:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>