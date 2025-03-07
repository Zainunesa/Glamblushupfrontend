<template>
  <div class="super_container">
    <header class="header trans_300">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="holographic-heading">Women's Makeup</h1>
          </div>
        </div>
      </div>
    </header>

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
      const response = await fetch("http://localhost:3001/products/category/womens");
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
  background-color: #a571bb;
  border-color: #e65540;
}

.btn-secondary {
  background-color: #b586c9;
  border-color: #ffffff;
  color: white;
}

.quick-view-btn {
  margin-left: 10px; /* Add space between "Add to Cart" and "Quick View" */
}

.view-details {
  margin-top: 10px;
}
</style>