<template>
  <div class="container-fluid d-flex flex-column min-vh-100">
    <!-- Header -->
    <header class="header d-flex justify-content-between align-items-center p-4">
      <div class="d-flex align-items-center">
        <div class="admin">
          <img src="@/assets/avatar.avif" alt="User Avatar" class="avatar">
        </div>
        <h1 class="ms-3">Welcome to the Admin Page.</h1>
      </div>
      <button @click="handleLogout" class="btn btn-danger">
        Logout
      </button>
    </header>

    <!-- Main Content -->
    <main class="flex-grow-1 px-4 py-5">
      <h2 class="text-center mb-5">{{ msg }}</h2>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col" v-for="(item, index) in navItems" :key="index">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <!-- Add Image Container -->
              <div class="image-container">
                <img :src="item.image" alt="" class="card-img-top" />
              </div>
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <router-link :to="item.link" class="btn btn-primary mt-auto">
                {{ item.buttonText }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex"; 

export default {
  name: "AdminDashboard",
  props: {
    currentUser: String, 
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      navItems: [
        {
          title: "Orders",
          description: "View and manage all customer orders.",
          link: "/adminorders",
          buttonText: "Manage Orders",
          image: require("@/assets/images.jpg"), 
        },
        {
          title: "Products",
          description: "Add, edit, or delete products in the catalog.",
          link: "/adminproducts",
          buttonText: "Manage Products",
          image: require("@/assets/istockphoto-1414801672-612x612.jpg"), 
        },
        {
          title: "Customers",
          description: "View and manage customer accounts and profiles.",
          link: "/admincustomers",
          buttonText: "Manage Customers",
          image: require("@/assets/the-value-of-loyal-customer-cover3.webp"), 
        },
        {
          title: "Bookings",
          description: "Views and manages the bookings.",
          link: "/adminbooking",
          buttonText: "View Booking",
          image: require("@/assets/84584187-0a09-437f-a600-70ef86afc97a.jpg"), 
        },
      ],
    };
  },
  methods: {
    ...mapActions(["logout"]), 

    handleLogout() {
      this.logout(); 
      this.$router.push("/login"); 
    },
  },
};
</script>

<style scoped>
/* General Styles */
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}

.container-fluid {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: rgb(243, 213, 241);
}

/* Header Styles */
.header {
  background-color: lightgray; /* Blush pink color */
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.header h1 {
  font-size: 1.75rem;
  font-weight: bold;
  color: white;
}

/* Logo Styling */
.logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

/* Card Styles */
.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
}

.card-text {
  color: #6c757d;
}

.btn-primary {
  background-color: lightgray; /* Blush pink button */
  border-color: lightgray;
}

.btn-primary:hover {
  background-color: lightgray; /* Darker blush pink on hover */
  border-color: lightgray;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header h1 {
    font-size: 1.5rem;
  }

  .card {
    margin-bottom: 1rem;
  }
}

/* Image Container Styles */
.image-container {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 150px; /* Fixed height for images */
  border-radius: 10px;
  margin-bottom: 15px;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>