<template>
  <div class="profile-container">
    <h1>Profile</h1>

    <div v-if="user" class="profile-content">
      <!-- Profile Picture -->
      <div class="profile-pic-container">
        <img
          :src="user.profilePic || defaultProfilePic"
          alt="Profile Picture"
          class="profile-pic"
        />
        <input type="file" @change="uploadProfilePic" accept="image/*" />
      </div>

      <div class="profile-info">
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>

      <div class="section">
        <h2>Saved Addresses</h2>
        <ul v-if="user && user.addresses && user.addresses.length">
          <li v-for="(address, index) in user.addresses" :key="index">
            <div v-if="editingAddressIndex !== index">
              {{ address }}
              <button
                @click="editAddress(index, address)"
                class="btn-secondary"
              >
                Edit
              </button>
              <button @click="deleteAddress(index)" class="btn-secondary">
                Delete
              </button>
            </div>
            <div v-else>
              <input v-model="newAddress" placeholder="Edit address" required />
              <button @click="submitEditedAddress(index)" class="btn-secondary">
                Save
              </button>
              <button @click="cancelEdit" class="btn-secondary">Cancel</button>
            </div>
          </li>
        </ul>
        <p v-else>No saved addresses</p>

        <!-- Address Form -->
        <form @submit.prevent="submitAddress" class="address-form">
          <input
            type="text"
            v-model="newAddress"
            placeholder="Enter new address"
            required
          />
          <button type="submit" class="btn-secondary">Add Address</button>
        </form>
      </div>

      <div class="section">
        <h2>Order History</h2>
        <ul v-if="user && user.orders && user.orders.length">
          <li v-for="order in user.orders" :key="order.id">
            Order #{{ order.id }} - {{ order.date }} -
            <strong>${{ order.total }}</strong>
          </li>
        </ul>
        <p v-else>No orders yet</p>
      </div>

      <div class="section">
        <h2>Wishlist</h2>
        <ul v-if="user && user.wishlist && user.wishlist.length">
          <li v-for="(item, index) in user.wishlist" :key="index">
            {{ item }}
          </li>
        </ul>
        <p v-else>Wishlist is empty</p>
      </div>

      <div class="account-actions">
        <button @click="changePassword" class="btn-secondary">
          Change Password
        </button>
        <button @click="logout" class="btn-primary">Logout</button>
      </div>
    </div>

    <div v-else class="not-logged-in">
      <p>
        You are not logged in. Please
        <router-link to="/login">login</router-link> to view your profile.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"; 

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || {
        username: "",
        email: "",
        addresses: [],
        orders: [],
        wishlist: [],
        profilePic: "",
      },
      newAddress: "",
      editingAddressIndex: null,
    };
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    ...mapActions(["logout"]), 

    checkLoginStatus() {
      const user = localStorage.getItem("user");
      if (user) {
        try {
          this.user = JSON.parse(user);
        } catch (error) {
          console.error("Invalid user data in localStorage", error);
          this.user = {
            username: "",
            email: "",
            addresses: [],
            orders: [],
            wishlist: [],
            profilePic: "",
          };
        }
      } else {
        this.user = {
          username: "",
          email: "",
          addresses: [],
          orders: [],
          wishlist: [],
          profilePic: "",
        };
      }
    },
    logout() {
      this.$store.dispatch("logout"); 
      this.$router.push({ name: "login" }); 
    },
    uploadProfilePic(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.user.profilePic = e.target.result;
          localStorage.setItem("user", JSON.stringify(this.user));
        };
        reader.readAsDataURL(file);
      }
    },
    submitAddress() {
      if (!this.user.addresses) {
        this.user.addresses = []; 
      }

      if (this.newAddress.trim() !== "") {
        this.user.addresses.push(this.newAddress); 
        localStorage.setItem("user", JSON.stringify(this.user)); 
        this.newAddress = ""; // Clear input field
      } else {
        alert("Please enter a valid address.");
      }
    },
    editAddress(index, address) {
      this.editingAddressIndex = index;
      this.newAddress = address; 
    },
    submitEditedAddress(index) {
      if (this.newAddress.trim() !== "") {
        this.user.addresses[index] = this.newAddress;
        localStorage.setItem("user", JSON.stringify(this.user)); 
        this.newAddress = ""; 
        this.editingAddressIndex = null; 
      } else {
        alert("Please enter a valid address.");
      }
    },
    cancelEdit() {
      this.editingAddressIndex = null; 
      this.newAddress = "";
    },
    deleteAddress(index) {
      this.user.addresses.splice(index, 1); 
      localStorage.setItem("user", JSON.stringify(this.user)); 
    },
    changePassword() {
      alert("Password change feature coming soon!");
    },
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-pic-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #3498db;
  margin-bottom: 10px;
}

.profile-info {
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: left;
}

.section {
  margin-top: 20px;
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.account-actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.btn-primary,
.btn-secondary {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;
  flex: 1;
  margin: 0 5px;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
}

.btn-secondary {
  background: #2ecc71;
  color: white;
}

.btn-secondary:hover {
  background: #27ae60;
}

.not-logged-in {
  margin-top: 20px;
  font-size: 16px;
}

.address-form {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.address-form input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
