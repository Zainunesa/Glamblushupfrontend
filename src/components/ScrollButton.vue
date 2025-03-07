<template>
    <div
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-btn"
    >
      <i class="fas fa-arrow-up"></i>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      handleScroll() {
        if (window.scrollY > 200) { // You can adjust the threshold here
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
  </script>
  
  <style scoped>
  .scroll-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #40454a;
    color: white;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .scroll-btn i {
    font-size: 18px;
  }
  </style>
  