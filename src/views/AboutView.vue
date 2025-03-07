<template>
  <div>
    <!-- Header -->
    <header class="main-header">
      <div class="container">
        <h1>Glam Blush-Up: Redefining Beauty</h1>
        <p>Beauty without boundaries, tailored for every face.</p>
      </div>
    </header>
    <!-- Our Story Section -->
    <section class="our-story">
      <div class="container">
        <h2>Our Story</h2>
        <p>
          Blush-Up was born from the belief that beauty is a universal language that transcends gender, race, and
          background.
          Founded by a diverse group of makeup enthusiasts, artists, and entrepreneurs, the vision for Blush-Up began
          with
          a simple idea: to redefine beauty standards and offer high-quality products and services for every face—no
          matter their
          gender, age, or ethnicity.
        </p>
        <h2>Inclusivity at Our Core</h2>
        <p>
          At Blush-Up, we embrace diversity in every form. Our products are designed to work with a wide range of skin
          tones and
          types, ensuring that everyone can find the perfect shade, texture, and formula. But it doesn’t stop at
          products—we also
          offer personalized makeup services, consultations, and tutorials that celebrate self-expression for all
          genders.
        </p>
        <h2>Our Mission</h2>
        <p>
          Blush-Up's mission is to empower everyone to discover and enhance their unique beauty. We believe in a world
          where
          makeup and skincare products are not limited by gender stereotypes. Our services are for anyone who wants to
          feel
          their best, whether it’s for everyday confidence or a special occasion.
        </p>
        <h2>Looking Ahead</h2>
        <p>
          As we continue to grow, our commitment to inclusivity will remain at the heart of everything we do. We’re not
          just
          building a brand; we’re building a community—a community where everyone is encouraged to embrace their
          authentic
          selves, celebrate their differences, and, above all, feel confident in their own skin.
        </p>
      </div>
    </section>

    <!-- What We Offer Section -->
    <section class="our-offers">
      <div class="container">
        <h2>What We Offer</h2>
        <div class="offers-cards">
          <div class="card">&#x1F484; <strong>High-Quality Makeup</strong><br>Premium products for every complexion
          </div>
          <div class="card">&#x1F3A8; <strong>Makeup Services</strong><br>Expert application and personalized
            consultations</div>
          <div class="card">&#x1F331; <strong>Vegan & Cruelty-Free</strong><br>Beauty with a conscience</div>

        </div>
      </div>
    </section>
    <!-- Meet the Team Section -->
    <section class="meet-team">
      <div class="container">
        <h2>Meet the Team</h2>
        <div class="team-members">
          <div class="member">
            <img
              src="https://images.squarespace-cdn.com/content/v1/64c70499721ff3366b73f523/7a340027-cafb-407d-b995-88158946b900/Bernie+1.PNG"
              alt="Zainunesa" class="team-img">
            <h3>Zainunesa Magmoed - CEO</h3>
            <p>As the visionary behind Blush-Up, Zainunesa brings a passion for diversity and inclusivity.</p>
          </div>
          <div class="member">
            <img
              src="https://shoutoutla.s3.us-west-1.amazonaws.com/wp-content/uploads/2021/06/c-PersonalNataliePena__NataliePenaHeadshot_1620052751977.jpg"
              alt="Nandipha" class="team-img">
            <h3>Nandipha Zigwebile - Head Makeup Artist</h3>
            <p>Nandipha is a creative force in the world of makeup, combining years of expertise with a commitment to
              empowerment.</p>
          </div>
          <div class="member">
            <img
              src="https://media.istockphoto.com/id/1299761085/photo/with-great-confidence-comes-great-success.jpg?s=612x612&w=0&k=20&c=UwF7QQGNyAwtPTXJ_3685uAeVvoGo5kcUgSK7ANR3UA="
              alt="Usisipho" class="team-img">
            <h3>Usisipho Mxinwa - Marketing Director</h3>
            <p>Usisipho drives Blush-Up's marketing strategies, connecting with beauty enthusiasts globally.</p>
          </div>
          <div class="member">
            <img src="https://thumbs.dreamstime.com/z/lab-chemist-checking-beauty-make-up-products-162022517.jpg"
              alt="Cwayita" class="team-img">
            <h3>Cwayita Ngcwayi - Product Developer</h3>
            <p>Responsible for the artistry behind every product, ensuring quality and ethics.</p>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  components: {
  },
};
</script>

<style>
/* General Body Style */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #F9F9F9;
  color: #333;
}

/* Holographic Header Styling */
.main-header {
  background: linear-gradient(120deg,
      #8e9eab, #69a9e0, #97c4f2, #f29cb1,
      #8e9eab, #f29cb1, #97c4f2, #69a9e0);
  background-size: 400% 400%;
  animation: holoHeaderEffect 6s infinite alternate;
  color: white;
  text-align: center;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Keyframes for Holographic Effect */
@keyframes holoHeaderEffect {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Header Text Styling */
.main-header h1 {
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;
}

.main-header p {
  font-size: 18px;
  font-weight: 300;
  margin-top: 10px;
  letter-spacing: 0.5px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-header {
    padding: 30px 15px;
  }

  .main-header h1 {
    font-size: 28px;
  }

  .main-header p {
    font-size: 16px;
  }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Section Styles */
.our-story,
.our-offers,
.meet-team {
  padding: 50px 0;
  text-align: center;

}

.our-story p {
  text-align: justify;
}

.our-story {
  background: #F4F4F4;
}

.our-offers {
  background: #FFF;
}

.our-offers h2 {
  margin-bottom: 40px;
}

/* Offer Cards */
.offers-cards {
  display: flex;
  justify-content: center;
  /* Center the cards horizontally */
  flex-wrap: wrap;
  /* Allow cards to wrap to the next line if needed */
  gap: 30px;
  /* Space between cards */
}

.card {
  background: #ECE7E9;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

/* Meet the Team Section */
.meet-team {
  background: #F9F9F9;
  padding: 50px 0;
}

.meet-team h2 {
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  text-align: center;
}

.member {
  width: 250px;
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.member:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

.team-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
}

.member h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.member p {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
}

/* Responsiveness for smaller screens */
@media (max-width: 768px) {
  .member {
    width: 100%;
  }

  .team-img {
    height: 150px;
  }
}

/* Footer */
/* .main-footer {
  background: #4A154B;
  color: white;
  padding: 20px 0;
  text-align: center;
} */
</style>