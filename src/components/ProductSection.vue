<template>
    <section id="products" class="products">
      <h2>Our Product Range</h2>
      <br>
      <br>
      <div class="product-grid">
        <div class="product" v-for="(product, index) in products" :key="index">
          <img :src="product.image" alt="product" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            title: "Women",
            description: "👑 Bold. Beautiful. You.",
            image: "https://photos.peopleimages.com/picture/202310/2844321-tools-hands-and-portrait-of-black-woman-and-cosmetics-for-getting-ready-beauty-product-and-glow.-brush-group-and-people-with-equipment-for-an-african-model-makeup-and-artist-application-in-studio-fit_400_400.jpg"
          },
          {
            title: "Men",
            description: "💪 Sharp, sleek, unstoppable – just like you!",
            image: "https://media.istockphoto.com/id/614508552/photo/smiling-elegant-man.jpg?s=612x612&w=0&k=20&c=M4dpf-RxwC3GnfdtUIlM8VHdrOpOZR6CFrz3b4893W4="
          },
          {
            title: "Kids ",
            description: "🌈 Fun, safe, and stylish – for little stars!",
            image: "https://i5.walmartimages.com/asr/90308ebc-dbb1-4218-b45f-e4aee33cb292.8b6fc189147426f39516d4a09875d939.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
          },
          
        ]
      };
    }
  };
  </script>
  
  <style>
  .product-grid {
    display: flex;
    justify-content: center;
    gap: 50px; /* Increases spacing between products */
    flex-wrap: wrap;
}

.product {
    width: 250px;
    text-align: center;
    padding: 15px;
    border-radius: 10px;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a18cd1);
    background-size: 200% 200%;
    animation: gradientAnimation 6s ease infinite;
    transition: transform 0.3s ease-in-out;
    color: rgb(0, 0, 0); /* Ensures text is readable */
}

.products {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically */
  align-items: center; /* Centers content horizontally */
  min-height: 400px; /* Set a minimum height for the section */
  text-align: center;
  padding: 50px 0;
}

@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.product img {
    width: 100%;
    height: 250px; /* Increases image size */
    object-fit: cover; /* Keeps images uniform without stretching */
    border-radius: 10px;
}

.product h3 {
    font-size: 1.4rem; /* Makes title slightly bigger */
    font-weight: 700;
}

.product p {
    color: #050505;
    font-size: 1rem;
}

.product:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}
</style>