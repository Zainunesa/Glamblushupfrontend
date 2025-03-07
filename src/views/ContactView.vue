<template>
    <div class="contact-container">
      <div class="form-container">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" placeholder="Your Name" required />
  
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Your Email" required />
  
          <label for="message">Message</label>
          <textarea id="message" v-model="message" placeholder="Your Message" required></textarea>
  
          <button type="submit">Send Message</button>
        </form>
        <p v-if="messageSent" class="success-message">Your message has been sent!</p>
      </div>
  
      <div class="map-container">
        <h2>Find Us Here: 👇😎</h2>
        <iframe
          width="600"
          height="450"
          frameborder="0"
          style="border:0"
          allowfullscreen
          :src="googleMapUrl"
        ></iframe>
  
        <!-- Contact Details Section -->
        <div class="contact-details">
          <h3>Our Contact Details</h3>
          <p><strong>Phone:</strong> +27 800 888 0080</p>
          <p><strong>Email:</strong>support@glamblushup.com</p>
          <p><strong>Address:</strong> Life Choices, Coding Academy</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        messageSent: false,
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.267419998488!2d18.49012367546867!3d-33.98566427318214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1739957029275!5m2!1sen!2sza",
      };
    },
    methods: {
      submitForm() {
        // For now, we'll just show a success message when the form is submitted
        this.messageSent = true;
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    padding-top: 40px; /* Added top padding to move the content down */
  }
  
  .form-container {
    width: 48%;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #5c3d68;
    text-align: center;
  }
  
  label {
    font-size: 14px;
    color: #333;
    margin-bottom: 8px;
    display: block;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #5c3d68;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #4c2e4d;
  }
  
  .success-message {
    color: green;
    text-align: center;
    font-size: 16px;
  }
  
  .map-container {
    width: 48%;
    padding: 20px;
  }
  
  iframe {
    width: 100%;
    height: 300px;
    border: none;
  }
  
  /* Style for the Contact Details */
  .contact-details {
    margin-top: 20px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .contact-details h3 {
    color: #5c3d68;
    text-align: center;
  }
  
  .contact-details p {
    font-size: 14px;
    color: #333;
    text-align: center;
  }
  </style>
  