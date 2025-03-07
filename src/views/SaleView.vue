<template>
    <div class="super_container">
      <!-- Header -->
      <header class="header trans_300">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 class="holographic-heading">Sale Items</h1>
            </div>
          </div>
        </div>
      </header>
  
      <!-- Category Filter Section -->
      <section class="product_categories py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <router-link to="/womens" class="category-btn">Women's Makeup</router-link>
            </div>
            <div class="col-md-4">
              <router-link to="/mens" class="category-btn">Men's Makeup</router-link>
            </div>
            <div class="col-md-4">
              <router-link to="/kids" class="category-btn">Kid's Makeup</router-link>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Sale Product Grid -->
      <div class="product-grid">
        <div v-for="product in saleProducts" :key="product.id" class="product-item">
          <div class="card">
            <img :src="product.image" class="card-img-top" :alt="product.name">
            <div class="card-body text-center">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text" v-if="product.onSale">
                <span class="text-muted text-decoration-line-through">R{{ product.price }}</span>
                <span class="text-danger"> R{{ product.salePrice }}</span>
              </p>
              <p class="card-text" v-else>R{{ product.price }}</p>
              <button @click="addToCart(product)" class="btn btn-primary">
                <i class="fa fa-shopping-cart"></i> Add to Cart
              </button>
              <router-link :to="`/product/${product.id}`" class="btn btn-secondary">
                <i class="fa fa-eye"></i> View Details
              </router-link>
            </div>
          </div>
        </div>
      </div>
  
      <QuickViewModal 
        :visible="modalVisible" 
        :product="selectedProduct" 
        @close="modalVisible = false"
      />
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  import { products } from '@/store/products';  // Assuming products is imported from your store
  import QuickViewModal from '@/components/QuickViewModal.vue';
  
  const modalVisible = ref(false);
  const selectedProduct = ref(null);
  
  const openModal = (product) => {
    selectedProduct.value = product;
    modalVisible.value = true;
  };
  
  const store = useStore();
  
  // Filter sale products
  const saleProducts = computed(() => {
  return products.filter(product => product.onSale);
});

  
  const addToCart = (product) => {
    store.dispatch('addToCart', product);
  };
  </script>
  
  <style scoped>
  /* Sale-specific styling */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Ensure exactly 4 cards per row */
    gap: 15px; /* Add spacing between grid items */
  }
  
  .product-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px; /* Maintain some space between items */
  }
  
  .product-item:nth-child(4n) {
    margin-right: 0; /* Ensure no extra margin on the last item of the row */
  }
  
  .product-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card {
    border: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .card img {
    max-height: 250px;
    object-fit: cover;
  }
  
  .card-body {
    text-align: center;
  }
  
  /* Button Styling */
  .card-body button {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
  }
  
  .btn-primary {
    background-color: #ff4081;
    border-color: #ff4081;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
    color: white;
  }
  
  .view-details {
    margin-top: 10px;
  }
  
  /* Other shared styles from previous code */
  </style>
  