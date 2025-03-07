
import { createStore } from 'vuex';
import { modalStore } from './modalStore';
import { products } from './products';


export default createStore({
  state: {
    products: null, 
  },  
  getters: {

  },
  mutations: {
    setProducts(state, payload){
      state.products = payload
    },

  },
  
  actions: {


    async getData ({commit}, payload){
    let products = await (await fetch('http://localhost:3001/products/')).json()
    console.log(products);
    
    commit('setProducts', products)
    },
  },
  modules: {
    modalStore,
    products
  },
});