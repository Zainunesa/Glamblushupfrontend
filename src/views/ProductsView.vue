<template>
  <div class="super_container">
    <!-- Header -->
    <header class="header trans_300">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="holographic-heading">Makeup Collections</h1>
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

    <div class="product-grid">
      <!-- Iterate over each product -->
      <div v-for="product in products" :key="product.id" class="product-item">
        <div class="card">
          <!-- Sale Tag -->
          <div v-if="product && product.sale !== undefined">
            <div v-if="product.sale" class="sale-tag">
              <span class="sale-text">Sale!</span>
            </div>
          </div>

          <!-- Product Image -->
          <img :src="require(`@/assets/${product.image}`)" :alt="product.name" class="card-img-top" />

          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <div class="price">
              <span v-if="product.sale" class="original-price">R{{ product.price }}</span>
              <br>
              <span v-if="product.sale" class="sale-price">R{{ product.salePrice }}</span>
              <span v-else class="price">R{{ product.price }}</span>
            </div>
            <!-- Review Stars -->
            <div class="review-stars">
              <span v-for="star in product.reviews_rating" :key="star" class="star">★</span>
              <span v-for="star in (5 - product.reviews_rating)" :key="star + 100" class="star empty">★</span>
              <span class="review-count">({{ product.reviews_count }} reviews)</span>
            </div>
            <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
            <button @click="openModal(product)" class="btn btn-secondary quick-view-btn">Quick View</button>
            <router-link :to="'/product/' + product.id" class="btn btn-secondary view-details">
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

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification'; 
import QuickViewModal from '@/components/QuickViewModal.vue';

export default {
  components: {
    QuickViewModal
  },
  setup() {
    const store = useStore();
    const toast = useToast(); 

    const modalVisible = ref(false);
    const selectedProduct = ref(null);

    const openModal = (product) => {
      selectedProduct.value = product;
      modalVisible.value = true;
    };

    const addToCart = (product) => {
      store.dispatch('addToCart', product);
      toast.success(`${product.name} added to cart!`); 
    };

    return {
      modalVisible,
      selectedProduct,
      openModal,
      addToCart
    };
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      console.log(data); 

      // Set default sale property if it doesn't exist
      this.products = data.map(product => ({
        ...product,
        sale: product.sale || false,
        image: product.image || 'default-image.jpg' 
      }));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
};
</script>

<style scoped>
/* Styling for cards */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.product-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.card {
  position: relative;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: none;
}

.card:hover {
  transform: none; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
}

.card img {
  max-height: 250px;
  object-fit: cover;
}

.card-body {
  text-align: center;
}

.sale-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e65540;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 0.9rem;
  font-weight: bold;
  z-index: 1;
}

.price {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.original-price {
  text-decoration: line-through;
  color: #999;
}

.sale-price {
  color: #e65540;
  font-size: 1.5rem;
  font-weight: 700;
}

.review-stars {
  margin: 10px 0;
  font-size: 1rem; /* Reduced font size */
  color: #f0b10d;
  display: flex;
  align-items: center;
}

/* Category Button Styling */
.category-btn {
  display: block;
  background: linear-gradient(120deg, #8e9eab, #69a9e0, #f29cb1);
  color: white;
  text-align: center;
  padding: 40px 80px; /* Reduced padding */
  margin: 10px 0;
  border-radius: 8px;
  font-size: 20px; /* Reduced font size */
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-btn:hover {
  transform: scale(1.05);
}

/* Holographic Header Styling */
.header {
  background: linear-gradient(120deg, 
    #8e9eab, #69a9e0, #97c4f2, #f29cb1, 
    #8e9eab, #f29cb1, #97c4f2, #69a9e0
  );
  background-size: 400% 400%;
  animation: holoHeaderEffect 6s infinite alternate;
  color: white;
  text-align: center;
  padding: 20px 10px; /* Reduced padding */
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Keyframes for Holographic Effect */
@keyframes holoHeaderEffect {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Header Text Styling */
.holographic-heading {
  font-size: 24px; /* Reduced font size */
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
}

.star {
  color: #f0b10d;
}

.star.empty {
  color: #e4e4e4;
}

.review-count {
  margin-left: 10px;
  font-size: 0.8rem; /* Reduced font size */
  color: #666;
  font-weight: normal;
}

.btn-primary {
  background-color: #131111;
  border-color: #161414;
}

.btn-secondary {
  background-color: #2c282f;
  border-color: #8f77be;
  color: white;
}

.quick-view-btn {
  margin-left: 10px; /* Add space between "Add to Cart" and "Quick View" */
}

.view-details {
  margin-top: 10px;
}
</style>