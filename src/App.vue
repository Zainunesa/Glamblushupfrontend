<template>
  <navbar-comp />
  <VideoPopup />
  <router-view />
  <footer-comp />
  <ScrollButton />
  <div v-if="isVisible" @click="scrollToTop" class="scroll-btn"><i class="fas fa-arrow-up"></i></div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';
import BookingView from './views/BookingView.vue';
import TermsAndConditonsView from './views/TermsAndConditonsView.vue';
import FaqsView from './views/FaqsView.vue';
import VideoPopup from './components/VideoPopup.vue';
import ScrollButton from './components/ScrollButton.vue';
import ProductsView from './views/ProductsView.vue';
import AboutView from './views/AboutView.vue';
import PrivacyPolicyView from './views/PrivacyPolicyView.vue';
import CartView from './views/CartView.vue'; // Import the CartView component
import { useStore } from 'vuex';

export default {
  components: {
    NavbarComp,
    FooterComp,
    TermsAndConditonsView,
    FaqsView,
    VideoPopup,
    ScrollButton,
    ProductsView,
    AboutView,
    PrivacyPolicyView,
    CartView,
  },
  setup() {
    const store = useStore();
    store.dispatch('loadCart'); 
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handleLogin() {
      
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.$router.push({ name: 'login' }); 
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  watch: {
    $route(to) {
      
      if (this.isLoggedIn && to.name === 'login') {
        this.isLoggedIn = false;
      }
    },
  },
  mounted() {
    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', () => {
      this.isVisible = window.scrollY > 300;
    });
  },
  beforeUnmount() {
    // Clean up the scroll event listener
    window.removeEventListener('scroll', () => {
      this.isVisible = window.scrollY > 300;
    });
  },
};
</script>

<style>
/* Global Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  font-family: 'Arial', sans-serif;
  line-height: 1.5;
  background-color: #F4F4F4;
  color: #333;
  overflow-x: hidden;
}
body {
  min-height: 100vh;
}
/* Main Container */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
/* Navbar and Footer */
navbar-comp,
footer-comp {
  width: 100%;
}
footer-comp {
  padding: 10px;
  background-color: #222;
  color: white;
  text-align: center;
}
footer-comp a {
  color: #fff;
  text-decoration: none;
}
footer-comp a:hover {
  text-decoration: underline;
}
/* Scroll Button */
.scroll-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #000;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: none;
}
.scroll-btn i {
  font-size: 20px;
}
.scroll-btn:hover {
  background-color: #444;
}
/* Responsive Design */
@media (max-width: 1200px) {
  .app-container {
    padding: 20px;
  }
  navbar-comp {
    padding: 10px;
  }
  footer-comp {
    padding: 15px;
  }
}
@media (max-width: 768px) {
  /* Tablet */
  .app-container {
    padding: 10px;
  }
  .scroll-btn {
    right: 10px;
    bottom: 10px;
    font-size: 18px;
  }
  navbar-comp {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  footer-comp {
    font-size: 14px;
    padding: 15px 10px;
  }
  .video-popup {
    width: 90%;
    max-width: 600px;
  }
}
@media (max-width: 480px) {
  /* Mobile */
  .app-container {
    padding: 5px;
  }
  navbar-comp {
    padding: 5px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  footer-comp {
    font-size: 12px;
    padding: 10px;
  }
  .scroll-btn {
    right: 5px;
    bottom: 5px;
    font-size: 16px;
    padding: 8px;
  }
  .video-popup {
    width: 95%;
    max-width: 500px;
  }
  /* Modify any additional components to ensure responsiveness */
  .content {
    padding: 10px;
    font-size: 14px;
  }
}
/* Add specific styles for large screens (Desktop) */
@media (min-width: 1200px) {
  .app-container {
    padding: 50px;
  }
}

.my-custom-toast .Vue-Toastification__toast {
  background-color: #ff5733 !important; /* Change to your desired color */
  color: white !important;
}

</style>