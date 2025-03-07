<template>
    <div v-if="product" class="input-group plus-minus">
        <button 
            class="btn btn-outline-secondary" 
            @click="$event => addOrRemove(-1)" 
            type="button">
            -
        </button>
        <input 
            type="number" 
            v-model="qty" 
            disabled 
            class="form-control form-control-sm" 
            aria-label="Quantity" 
            aria-describedby="button-addon1">
        <button 
            class="btn btn-outline-secondary" 
            :class="{'disabled': loading}" 
            @click="$event => addOrRemove(1)" 
            type="button" 
            id="button-addon1">
            +
        </button>        
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'CartAddRemove',
    props: ['product'],
    data() {
        return {
            qty: 1,
            loading: false
        };
    },
    methods: {
        async addOrRemove(number) {
            this.loading = true;
            
            if (number === 1) { // Add
                if (this.qty < 10) {
                    this.qty++;
                    this.product.qty = this.qty;
                    await this.$store.commit('updateCart', { product: this.product });
                    toast.success('Cart updated');
                } else {
                    toast.warning('You reached the limit');
                }
            } else if (number === -1) { // Remove
                if (this.qty > 1) {
                    this.qty--;
                    this.product.qty = this.qty;
                    await this.$store.commit('updateCart', { product: this.product });
                    toast.success('Cart updated');
                } else {
                    toast.warning('Minimum quantity reached');
                }
            }
            
            this.loading = false;
        }
    },
    mounted() {
        this.qty = this.product.qty;
    }
};
</script>

<style>
.plus-minus input {
    max-width: 50px;
}
</style>
