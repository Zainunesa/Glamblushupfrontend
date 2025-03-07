<template>
  <!-- Section for displaying services offered -->
    <section class="services">
      <h2>Our Makeup Services</h2>
      <div class="service-grid">
        <div class="service" v-for="(service, index) in services" :key="index">
          <img :src="service.image" alt="makeup service" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    // Define data for the component, including an array of services
    data() {
      return {
        services: [
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EUoBLho2-Tnykz3J61V-Fs-uu4kvc9gUyg&s", // Image 1
            title: "Personal Consultation",
            description: "- Book yourself a makeup appointment."
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWV6aDbhjlufVh8fgzLuXditp07h1DtAXiw&s", // Image 2
            title: "Event Makeup",
            description: "- Flawless makeup for special occasions."
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vK2ifbcDeEunVSAxzUphuNsazus-3qb9O2pN_TT1KKT6mXQTP_fX-HSLshNg-oKK1ZE&usqp=CAU", // Image 3
            title: "Bridal Makeup",
            description: "- Your dream wedding look."
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  .services {
    padding: 50px;
    background-color: #e0c7de;
    text-align: center;
  }
  
  .service-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
  }
  
  .service {
    width: 250px;
    text-align: center;
    padding: 15px;
    border-radius: 10px;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a18cd1);
    background-size: 200% 200%;
    animation: gradientAnimation 6s ease infinite;
    transition: transform 0.3s ease-in-out;
    color: rgb(2, 2, 2); 
  }

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
  
  .service img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .service h3 {
    font-size: 1.5rem;
    margin-top: 15px;
  }
  
  .service p {
    font-size: 1rem;
    color: #171515;
    margin-top: 10px;
  }

  .service:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}
  </style>