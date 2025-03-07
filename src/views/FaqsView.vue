<template>
    <div class="faqs-container">
    <br>
      <h3>Frequently Asked Questions (FAQs)</h3>
    <br>
    <br>
      <div class="faq" v-for="(faq, index) in faqs" :key="index">
        <div class="faq-header" @click="toggleAnswer(index)">
          <h4>{{ faq.question }}</h4>
          <span :class="{'rotate-icon': activeIndex === index}" class="arrow"></span>
        </div>
        <div v-show="activeIndex === index" class="faq-answer">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: null,
        faqs: [
          { question: "What types of makeup products do you offer?", answer: "We offer a wide range of makeup products for women, men, and children. Our collection includes foundation, concealer, lipstick, eyeshadow, blush, and skincare-friendly makeup for kids." },
          { question: "Are your products cruelty-free and vegan?", answer: "Yes! All our products are 100% cruelty-free and many are vegan-friendly." },
          { question: "Do you offer makeup for sensitive skin?", answer: "Absolutely! We have a dedicated range of hypoallergenic makeup suitable for sensitive skin and children." },
          { question: "Can men use your makeup products?", answer: "Yes! We believe makeup is for everyone. We offer gender-neutral products as well as specialized men’s grooming and a range for kids to explore and express themselvs." },
          { question: "Do you provide professional makeup services?", answer: "Yes, we have expert makeup artists available for bookings. We offer bridal, event, and everyday makeup styling for all genders." },
          { question: "What payment methods do you accept?", answer: "We currently only accept Mastercard. More payment options will be available soon!" },
          { question: "Do you offer international shipping?", answer: "Yes! We ship worldwide. Shipping costs and times vary based on location." },
          { question: "What is your return and refund policy?", answer: "Due to hygiene reasons, we do not accept returns on used makeup. However, if you receive a damaged or incorrect product, contact us within 7 days for a replacement." },
          { question: "How can I book a makeup session?", answer: "You can book an appointment online through our Booking Page or contact us via email at bookings@glamblushup.com." },
          { question: "How do I contact customer support?", answer: "You can reach us at support@glamblushup.com or call our helpline at +1-800-555-1234." },
        ],
      };
    },
    methods: {
      toggleAnswer(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Center the content */
  .faqs-container {
    max-width: 800px;
    width: 90%;
    margin: 0 auto; /* Horizontally center the container */
    padding: 20px;
    background: #fff;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content vertically */
  }
  
  h3 {
    color: #282324;
    text-decoration: underline;
    text-align: center;

  }
  
  .faq {
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
    padding: 10px 0;
    width: 100%; /* Ensure the FAQ items take up the full width */
  }
  
  .faq-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s;
    width: 100%;
  }
  
  .faq-header:hover {
    color: #5c3d68;
  }
  
  .faq-answer {
    padding-left: 20px;
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    padding-top: 10px;
    display: block;
    width: 100%;
  }
  
  .faq-answer p {
    margin: 0;
  }
  
  /* Arrow styling */
  .arrow {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid #333;
    transition: transform 0.3s ease-in-out;
  }
  
  .rotate-icon {
    transform: rotate(180deg);
  }
  </style>
  