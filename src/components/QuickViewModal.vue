<template>
  <div v-if="visible" class="modal">
    <div class="modal-content">
      <span @click="$emit('close')" class="close-btn">×</span>
      <div class="modal-body">
        <!-- Image on the left -->
        <div class="image-container">
          <img :src="require(`@/assets/${product.image}`)" alt="Product image" />
        </div>
        <!-- Details on the right -->
        <div class="details-container">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <div class="price">
            <p v-if="product.salePrice" class="sale-price">R{{ product.salePrice }}</p>
            <p v-else>R{{ product.price }}</p>
          </div>
          <p v-if="product.salePrice" class="discount-label">Sale!</p>
          <!-- Add to Cart Button -->
          <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification'; // Import useToast hook

const props = defineProps({
  visible: Boolean,
  product: Object
});

const store = useStore();
const toast = useToast(); // Get toast instance

const addToCart = (product) => {
  store.dispatch('addToCart', product); // Dispatch the addToCart action
  toast.success(`${product.name} added to cart!`); // Show toast notification
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 60%; /* Wider modal */
  max-width: 800px; /* Increased max-width */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.modal-body {
  display: flex;
  gap: 20px; /* Space between image and details */
}

.image-container {
  flex: 1; /* Take up 50% of the modal width */
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  max-width: 100%; /* Ensure the image fits within the container */
  height: auto;
  border-radius: 8px; /* Optional: Add rounded corners to the image */
}

.details-container {
  flex: 1; /* Take up 50% of the modal width */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px; /* Larger close button */
  color: #666; /* Darker color for better visibility */
}

.close-btn:hover {
  color: #000; /* Darken on hover */
}

.price {
  display: flex;
  align-items: center;
  margin: 10px 0; /* Add spacing around the price */
}

.sale-price {
  color: red;
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: line-through;
  margin-right: 10px;
}

.discount-label {
  color: green;
  font-weight: bold;
  font-size: 1.1em;
  margin-top: 10px;
}

h3 {
  margin: 10px 0; /* Add spacing around the product name */
  font-size: 1.5em; /* Larger font size for the product name */
}

p {
  margin: 5px 0; /* Add spacing around the description */
  text-align: left; /* Left-align the description */
}

.btn-primary {
  background-color: #e65540;
  border-color: #e65540;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 10px; /* Add spacing above the button */
}

.btn-primary:hover {
  background-color: #d8432e; /* Darker shade on hover */
}
</style>