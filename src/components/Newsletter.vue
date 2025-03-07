<template>
    <div class="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <form @submit.prevent="subscribe">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        errorMessage: "",
        successMessage: "",
      };
    },
    methods: {
      async subscribe() {
        if (!this.email) {
          this.errorMessage = "Please provide a valid email!";
          return;
        }
  
        try {
          const response = await this.$axios.post("/api/subscribe", { email: this.email });
          if (response.status === 200) {
            this.successMessage = "You have successfully subscribed!";
            this.errorMessage = "";
          }
        } catch (error) {
          this.errorMessage = "Failed to subscribe. Please try again.";
          this.successMessage = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  