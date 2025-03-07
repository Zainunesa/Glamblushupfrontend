/* eslint-disable vue/comment-directive */
<template>
    <div>
      <!-- <router-link to="/about">About</router-link> -->
      <HeroSection />
      <CarouselSection />
      <ProductSection />
      <ServicesSection />
    </div>
  </template>
  
  <script>
  import HeroSection from './HeroSection.vue';
  import CarouselSection from './CarouselSection.vue';
  import ProductSection from './ProductSection.vue';
  import ServicesSection from './ServicesSection.vue';
  
  export default {
    name: 'HomePage',
    components: {
      HeroSection,
      CarouselSection,
      ProductSection,
      ServicesSection,
    },
  };
  </script>