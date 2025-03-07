<template>
    <section class="hero">
      <h2>REDEFINE RADIANCE, REDEFINE BEAUTY</h2>
      <p>Shop our exclusive makeup products and book professional services</p>
      <a href="/products" class="btn-primary">Shop Now</a>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
  </script>
  
  <style>
  .hero {
  background: linear-gradient(120deg, 
    #8E9EAB, #69A9E0, #97C4F2, #F29CB1, 
    #8E9EAB, #F29CB1, #97C4F2, #69A9E0);
  background-size: 400% 400%;
  animation: holoHeroEffect 6s infinite alternate;
  color: white;
  text-align: center;
  padding: 60px 20px;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
 
}

/* Keyframes for Holographic Effect */
@keyframes holoHeroEffect {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Hero Heading */
.hero h2 {
  font-size: 2.5rem;
  letter-spacing: 2px;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}

/* Hero Paragraph */
.hero p {
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 20px;
}

/* Holographic Button */
.btn-primary {
  display: inline-block;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  background: linear-gradient(120deg, #FF9A9E, #FAD0C4);
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background: linear-gradient(120deg, #FAD0C4, #FF9A9E);
  transform: scale(1.05);
}
  </style>