<template>
  <div class="login-container">
    <!-- Background Video Wrapper -->
    <div class="background-wrapper">
      <!-- Background Video -->
      <video class="background-video" autoplay loop muted>
        <source src="@/assets/Letter Logo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- Login Form (Not a Modal) -->
    <div class="login-form">
      <div v-if="!isForgotPassword && !isSignUp" class="form-box">
        <h3 class="title">Login</h3>
        <form @submit.prevent="login">
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" class="btn-primary">Sign In</button>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <div class="links">
            <button type="button" @click="toggleForgotPassword">
              Forgot Password?
            </button>
            <button type="button" @click="toggleSignUp">Sign Up</button>
          </div>
        </form>
      </div>

      <!-- Sign Up Form -->
      <div v-if="isSignUp" class="form-box">
        <h3 class="title">Sign Up</h3>
        <form @submit.prevent="signUp">
          <input
            v-model="newUsername"
            type="text"
            placeholder="Username"
            required
          />
          <input v-model="newEmail" type="email" placeholder="Email" required />
          <input
            v-model="newPassword"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" class="btn-primary">Create Account</button>
          <button type="button" class="btn-secondary" @click="toggleSignUp">
            Back to Login
          </button>
        </form>
      </div>

      <!-- Forgot Password Form -->
      <div v-if="isForgotPassword" class="form-box">
        <h3 class="title">Reset Password</h3>
        <form @submit.prevent="resetPassword">
          <input
            v-model="resetEmail"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit" class="btn-primary">Send Reset Link</button>
          <button
            type="button"
            class="btn-secondary"
            @click="toggleForgotPassword"
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"; 

export default {
  data() {
    return {
      username: "",
      password: "",
      newUsername: "",
      newEmail: "",
      newPassword: "",
      resetEmail: "",
      errorMessage: "",
      isForgotPassword: false,
      isSignUp: false,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["login"]), 

    async login() {
      this.isLoading = true;
      this.errorMessage = "";
      try {
        const response = await fetch("http://localhost:3001/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          // Dispatch the login action to update Vuex state
          this.$store.dispatch("login");

          // Save user data to localStorage
          localStorage.setItem(
            "user",
            JSON.stringify({
              username: data.username,
              role: data.user.userRole,
            })
          );

          alert(`Welcome, ${data.user.username}!`);

          // Redirect based on user role
          if (data.user.userRole === "admin") {
            this.$router.push({ name: "admindashboard" });
          } else {
            const previousRoute = this.$route?.name;
            if (previousRoute === "booking") {
              this.$router.push({ name: "booking" });
            } else {
              this.$router.push({ name: "profile" });
            }
          }
        } else {
          this.errorMessage = data.message || "Invalid username or password";
        }
      } catch (error) {
        this.errorMessage = "Server error. Please try again later.";
      } finally {
        this.isLoading = false;
      }
    },

    async signUp() {
      this.isLoading = true;
      this.errorMessage = "";
      try {
        const response = await fetch("http://localhost:3001/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.newUsername,
            email: this.newEmail,
            password: this.newPassword,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          // Dispatching the login action to update Vuex state
          this.$store.dispatch("login");

          // Saving user data to localStorage
          localStorage.setItem(
            "user",
            JSON.stringify({ username: data.username, role: "customer" })
          );

          alert(`Welcome, ${this.newUsername}. Your account has been created!`);
          this.$router.push({ name: "profile" }); 
        } else {
          this.errorMessage = data.message || "Error during sign up";
        }
      } catch (error) {
        this.errorMessage = "Server error. Please try again later.";
      } finally {
        this.isLoading = false;
      }
    },

    async resetPassword() {
      this.isLoading = true;
      this.errorMessage = "";
      try {
        const response = await fetch(
          "http://localhost:3001/auth/reset-password/1h",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: this.resetEmail,
            }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          this.toggleForgotPassword();
        } else {
          this.errorMessage = data.message || "Error during password reset";
        }
      } catch (error) {
        this.errorMessage = "Server error. Please try again later.";
      } finally {
        this.isLoading = false;
      }
    },

    toggleForgotPassword() {
      this.isForgotPassword = !this.isForgotPassword;
      this.isSignUp = false;
      this.errorMessage = "";
    },

    toggleSignUp() {
      this.isSignUp = !this.isSignUp;
      this.isForgotPassword = false;
      this.errorMessage = "";
    },
  },
};
</script>

<style scoped>
/* Fullscreen Wrapper for Background Video */
.background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Place it behind the video */
  background-color: rgba(209, 206, 194, 1); /* Set the background color */
  pointer-events: none; /* Allow clicks to pass through */
}

/* Centered and Smaller Background Video */
.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%; /* Adjust this to control the size */
  height: auto;
  transform: translate(-50%, -50%); /* Centering the video */
  object-fit: cover;
  z-index: -1;
  pointer-events: none; /* Allow clicks to pass through */
}

/* Main Layout for Login Page */
.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full view height */
  position: relative; /* Ensure the login container is on top of the background */
  background-color: transparent; /* Make the login container transparent */
}

/* Login Form (Not a Modal) */
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; /* Ensure form appears above background */
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

/* Form Box Styling */
.form-box {
  background: rgba(255, 255, 255, 0.1); /* Transparent background */
  backdrop-filter: blur(10px); /* Blur effect */
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Title */
.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
}

/* Input Fields */
input {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
}

/* Primary Button */
.btn-primary {
  width: 100%;
  background: #3498db;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

.btn-primary:hover {
  background: #2980b9;
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: white;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 10px;
}

.btn-secondary:hover {
  text-decoration: underline;
}

/* Error Message */
.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
}

/* Links Section */
.links {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
