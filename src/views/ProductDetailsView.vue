<template>
  <div class="super_container">
    <!-- Header -->
    <header class="header trans_300">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Makeup Collection</h1>
          </div>
        </div>
      </div>
    </header>

    <!-- Product Details Page -->
    <div v-if="selectedProduct" class="product-details">
      <div class="container my-5">
        <div class="row align-items-center">
          <!-- Product Image Section -->
          <div class="col-md-6 text-center">
            <img
              :src="selectedProduct.image"
              alt="Product Image"
              class="img-fluid product-img"
            />
          </div>

          <!-- Product Info Section (next to the image) -->
          <div class="col-md-6">
            <h2 class="product-title">{{ selectedProduct.name }}</h2>
            <!-- Display Original Price and Sale Price -->
            <p class="product-price" v-if="selectedProduct.sale">
              <span class="original-price">R{{ selectedProduct.price }}</span>
              <span class="sale-price">R{{ selectedProduct.salePrice }}</span>
            </p>
            <p class="product-price" v-else>R{{ selectedProduct.price }}</p>
            <div class="d-flex gap-3">
              <button
                @click="addToCart(selectedProduct)"
                class="btn btn-primary btn-lg"
              >
                🛒 Add to Cart
              </button>
              <button class="btn btn-success btn-lg">💳 Buy Now</button>
            </div>
            <ReviewStars :productId="selectedProduct.id" />

            <!-- Reviews Section -->
            <div class="reviews mt-4">
              <h3>Customer Reviews</h3>
              <div
                v-for="review in reviews"
                :key="review.id"
                class="review-card"
              >
                <div class="d-flex align-items-center">
                  <img :src="review.avatar" class="review-avatar" />
                  <div>
                    <strong>{{ review.user }}</strong>
                    <div class="stars" v-html="getStars(review.rating)"></div>
                  </div>
                </div>
                <p class="review-text">"{{ review.comment }}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { products } from "@/store/products";
import ReviewStars from "@/components/ReviewStars.vue";

const store = useStore();
const route = useRoute();
const selectedProduct = ref(null);
const reviews = ref([]);

const addToCart = (product) => {
  store.dispatch("addToCart", product);
};

onMounted(() => {
  const productId = route.params.id;
  if (productId) {
    selectedProduct.value = products.find((p) => p.id === parseInt(productId));
    reviews.value = [
      {
        id: 1,
        user: "Alice M.",
        rating: 5,
        comment: "Absolutely love this product!",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        id: 2,
        user: "David R.",
        rating: 4,
        comment: "Great quality!",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        id: 3,
        user: "Sophia L.",
        rating: 3,
        comment: "Good but expected a bit more coverage.",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      },
    ];
  }
});

const getStars = (rating) => {
  return "⭐".repeat(rating) + "☆".repeat(5 - rating);
};
</script>

<style scoped>
/* Sale Tag Styling */
.sale-tag {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #e65540;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 0.9rem;
  font-weight: bold;
  z-index: 1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.sale-text {
  display: inline-block;
}

/* Original Price Styling */
.original-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
}

/* Sale Price Styling */
.sale-price {
  color: #e65540;
  font-weight: bold;
}

/* Product Details Styling */
.product-details {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

.product-title {
  font-size: 2rem;
  font-weight: bold;
}

.product-price {
  font-size: 1.5rem;
  color: #ff4d6d;
}

.btn-primary,
.btn-success {
  font-size: 1.1rem;
  padding: 12px 25px;
  border-radius: 30px;
  transition: all 0.3s;
}

.btn-primary:hover,
.btn-success:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.reviews {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  margin-top: 20px;
}

.review-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.review-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.stars {
  color: #fbbd08;
}

.review-text {
  font-style: italic;
  margin-top: 10px;
}

/* Responsive Layout */
@media (min-width: 768px) {
  .product-details .row {
    display: flex;
    align-items: center;
  }

  .product-title,
  .product-price,
  .btn {
    margin-top: 20px;
  }
}

.product-img {
  max-width: 90%;
  border-radius: 5px;
  position: relative;
  left: -100px;
  top: -300px;
}

@media (max-width: 768px) {
  .product-img {
    left: -15px;
    top: -15px;
  }
}

.product-title,
.product-price,
.btn {
  text-align: center;
  margin-top: 10px;
}

.col-md-6.text-center img {
  display: block;
  margin: 0 auto;
  align-self: baseline;
}
</style>