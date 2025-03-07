<template>
    <section class="carousel-container">
      <div class="carousel" :style="{ transform: `translateX(-${index * 100}%)` }">
        <img v-for="(image, i) in images" :key="i" :src="image" alt="carousel image" />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=612x612&w=0&k=20&c=F6PSgaagZEabgAfTvxE78YPhKtK-5a8yYoA_oSbGNMM=",
          "https://media.istockphoto.com/id/1418265792/photo/cosmetics-swatches-peach-beige-red-and-coral-toned-styled-cosmetics-flat-lay-closeup-colour.jpg?s=612x612&w=0&k=20&c=cGe0CALtQJtFApTJQioSyWXJ_onAZpmOi-1J7LBgvk4=",
          "https://media.istockphoto.com/id/933154330/photo/variety-of-assortment-of-modern-cosmetics-store.jpg?s=612x612&w=0&k=20&c=p751Qiwjv_zRBzG56jrQgXQ5JUWS5HJ9M8Fk-CLPjBs=",
          "https://image-cdn.hypb.st/https%3A%2F%2Fbae.hypebeast.com%2Ffiles%2F2021%2F06%2Fgenderless-inclusive-beauty-brands-7.jpg?w=1260&cbr=1&q=90&fit=max",
          "https://moodiedavittreport.com/wp-content/uploads/2020/08/Screenshot-2020-08-04-at-11.21.20.png",
          "https://image-prod.iol.co.za/resize/640x64000/Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/43b31d2a-9cb7-530e-8e0c-165aa96709b3&operation=CROP&offset=0x0&resize=1280x854&webp=true",
          "https://static.thcdn.com/images/v2/app/uploads/sites/507/2023/03/Gif5shot2_1200x672_1678189823.png?width=700",
          "https://assets.vogue.com/photos/6127d59a5ec5b91286cc4ddc/master/w_2560%2Cc_limit/00_story.jpg"
        ],
        index: 0,
      };
    },
    methods: {
      slide() {
        this.index++;
        if (this.index >= this.images.length) {
          this.index = 0; // Loop back to the first image
        }
      },
    },
    mounted() {
      setInterval(this.slide, 4000);
    },
  };
  </script>
  
  <style>
  .carousel-container {
    width: 100%;
    max-width: 1300px;
    height: 600px;
    overflow: hidden;
    border-radius: 10px;
    margin: 20px auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
  }
  
  .carousel img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>