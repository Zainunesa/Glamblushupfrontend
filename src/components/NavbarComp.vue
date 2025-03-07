<template>
  <div>
    <!-- Holographic Promotional Banner -->
    <div class="holo-banner">
      <span class="promo-text"
        >✨😎Sign up for our newsletter and get insider access to special deals
        and product launches!😎✨</span
      >
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand glitter" href="#">
        <img
          src="@/assets/Letter_Logo-removebg-preview.png"
          class="logo"
          style="width: 100px; height: 100px"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
          <!-- Products Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/products"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/womens">Womens</a>
              <a class="dropdown-item" href="/mens">Mens</a>
              <a class="dropdown-item" href="/kids">Kids</a>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/booking"
              >Book A Stylist</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faqs">FAQS</router-link>
          </li>
        </ul>
        <!-- Icons Section -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link v-if="isLoggedIn" to="/profile" class="nav-link"
              ><i class="fas fa-user"></i> Profile</router-link
            >
            <router-link v-else to="/login" class="nav-link"
              ><i class="fas fa-user"></i> Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">
              <i class="fas fa-shopping-cart"></i> Cart ({{ cartItemCount }})
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn", "cartItems"]),
    cartItemCount() {
      return this.cartItems.reduce((count, item) => count + item.quantity, 0);
    },
  },
  created() {
    this.checkLoginStatus();
    this.loadCart();
  },
  methods: {
    ...mapActions(["checkLoginStatus", "loadCart"]),
  },
};
</script>

<style>
/* Importing Google Font */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

/* Import Font Awesome for Icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

/* Holographic Banner Styling */
.holo-banner {
  background: linear-gradient(
    120deg,
    #a8c0ff,
    #3f92b5,
    #a8c0ff,
    #d6c1e0,
    #ffb2d9,
    #d6c1e0,
    #a8c0ff,
    #a8c0ff
  );
  background-size: 400% 400%;
  animation: holoEffect 6s infinite alternate;
  color: rgb(4, 4, 4);
  text-align: center;
  padding: 12px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

/* Promo Text Styling */
.promo-text {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 12s linear infinite;
  will-change: transform;
}

/* Keyframes for shifting colors to create holographic effect */
@keyframes holoEffect {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Marquee Effect Animation */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

/* Navbar Styling */
.navbar {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  position: relative;
  z-index: 900; /* Lower than the popup z-index */
}

/* Navbar Link Styling */
.nav-link {
  color: #333;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 300;
  transition: color 0.3s ease;
}

/* Navbar Brand Glitter Effect */
.navbar-brand.glitter {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #ff758c;
  background: linear-gradient(45deg, #a8c0ff, #ffb2d9, #3f92b5);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: glitter 3s infinite alternate;
  margin-left: 20px;
}

/* Logo Styling */
.logo {
  height: 40px;
  margin-right: 10px;
}

/* Keyframes for glitter effect */
@keyframes glitter {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

.navbar-brand:hover {
  color: #f5a5c0;
}

/* Dropdown Styling */
.nav-item.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  background-color: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.dropdown-item {
  font-weight: 300;
  color: #333;
}

.dropdown-item:hover {
  background-color: #ff758c;
  color: white;
}

/* Icons Styling */
.navbar-nav .nav-item i {
  margin-right: 8px;
  font-size: 18px;
}

/* Reduce font size for navbar links */
.navbar-nav .nav-link {
  font-size: 14px;
}

/* Reduce icon size */
.navbar-nav .nav-item i {
  font-size: 14px;
  margin-right: 5px;
}
</style>