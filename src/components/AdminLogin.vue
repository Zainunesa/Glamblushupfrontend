<template>
    <div class="login-container">
      <h2>Admin Login</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="Enter your username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <div class="register-container">
        <p>Don't have an account?</p>
        <button @click="showRegisterForm = true" class="register-button">Register</button>
      </div>
      <p v-if="error" class="error-message">{{ error }}</p>
      <div v-if="showRegisterForm" class="modal-overlay" @click="closeRegisterForm">
        <div class="modal-content" @click.stop>
          <h3>Register Admin</h3>
          <form @submit.prevent="handleRegister">
            <div class="form-group">
              <label for="registerUsername">Username:</label>
              <input
                type="text"
                id="registerUsername"
                v-model="registerUsername"
                required
                placeholder="Enter a username"
              />
            </div>
            <div class="form-group">
              <label for="registerPassword">Password:</label>
              <input
                type="password"
                id="registerPassword"
                v-model="registerPassword"
                required
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" class="register-button">Register</button>
          </form>
          <button @click="closeRegisterForm" class="close-button">Close</button>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { fetchData } from "../api"; // Import the fetchData function
  export default {
    data() {
      return {
        username: "",
        password: "",
        error: "",
        showRegisterForm: false,
        registerUsername: "",
        registerPassword: "",
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await fetchData("login", { username: this.username, password: this.password }, "POST");
          if (response && response.token) {
            localStorage.setItem("adminToken", response.token); // Store the token
            this.$router.push({ name: "admindashboard" }); // Redirect to admin dashboard
          } else {
            this.error = response?.message || "Login failed";
          }
        } catch (error) {
          this.error = error.message;
        }
      },
      async handleRegister() {
        try {
          const response = await fetchData("register", { username: this.registerUsername, password: this.registerPassword }, "POST");
          if (response?.message) {
            this.showRegisterForm = false;
            this.registerUsername = "";
            this.registerPassword = "";
            this.error = response.message;
          } else {
            this.error = response?.message || "Registration failed";
          }
        } catch (error) {
          this.error = error.message;
        }
      },
      closeRegisterForm() {
        this.showRegisterForm = false;
        this.registerUsername = "";
        this.registerPassword = "";
        this.error = "";
      },
    },
  };
  </script>
  <style scoped>
  /* Main login container */
  .login-container {
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #F9F9F9;
  }
  h2 {
    text-align: center;
    font-size: 1.5em;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.1em;
    cursor: pointer;
  }
  button:hover {
    background-color: #45A049;
  }
  .error-message {
    color: red;
    text-align: center;
    margin-top: 15px;
  }
  .register-container {
    text-align: center;
    margin-top: 10px;
  }
  .register-button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.1em;
    cursor: pointer;
  }
  .register-button:hover {
    background-color: #0056B3;
  }
  /* Modal overlay */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  /* Modal content */
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
  }
  .close-button {
    background-color: red;
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    font-size: 1.1em;
    border-radius: 5px;
    cursor: pointer;
  }
  .close-button:hover {
    background-color: #CC0000;
  }
  </style>
  
  
  
  
  
  
  
  
  
  
  