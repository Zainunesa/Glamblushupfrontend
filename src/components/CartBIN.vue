<template>
        <button type="button" class="cart-btn btn btn-sm btn-outline-secondary me-2">
        <i :class="toAdd? 'bi bi-cart':'bi bi-cart-check'"></i></button>
        <CartAddRemove :product="item"/>
</template>
<script>
import CartAddRemove from './CartAddRemove.vue';
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    props:[product],
    components : 
}
</script>
<style>
    
</style>