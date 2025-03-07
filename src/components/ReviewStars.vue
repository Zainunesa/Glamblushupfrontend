<template>
    <div class="review-section">
    <p>Rate this product:</p>
    <div class="stars">
        <span v-for="star in 5" :key="star" 
            @click="setRating(star)" 
            :class="{ 'filled': star <= rating }">★</span>
    </div>
    <textarea v-model="reviewText" placeholder="Write a review..."></textarea>
    <button @click="submitReview">Submit Review</button>

    <div class="reviews">
        <h4>Reviews:</h4>
        <ul>
        <li v-for="(review, index) in reviews" :key="index">
            <strong>Rating:</strong> {{ review.rating }} ★ - {{ review.text }}
        </li>
        </ul>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['productId']);
const rating = ref(0);
const reviewText = ref('');
const reviews = ref([]);

const setRating = (star) => {
    rating.value = star;
};

const submitReview = () => {
    if (reviewText.value.trim()) {
    reviews.value.push({ rating: rating.value, text: reviewText.value });
    reviewText.value = '';
    rating.value = 0;
    }
};
</script>

<style scoped>
.stars span {
    font-size: 1.5rem;
    cursor: pointer;
    color: #ccc;
}
.stars .filled {
    color: gold;
}
textarea {
    width: 100%;
    margin-top: 10px;
    padding: 5px;
}
button {
    margin-top: 10px;
    background-color: #ff4d6d;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
}
</style>