<template>
  <div>
    <!-- Holographic Footer -->
    <footer class="footer">
      <div class="container text-center">
        <div class="footer-content">
          <p>&copy; 2025 Glam BlushUp. All Rights Reserved.</p>
          <p>Stay connected with us!</p>

          <!-- Social Media Links -->
          <div class="social-icons">
            <a href="https://www.facebook.com/Glam BlushUp" class="social-icon" aria-label="Facebook" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/GlamBlush_Up" class="social-icon" aria-label="Instagram" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/glamblushup" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>

          <p>
            <a href="/privacypolicy" class="footer-link">Privacy Policy</a> | 
            <a href="/terms-conditions" class="footer-link">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Ensure the body and html take up the full height */
html, body {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

/* Main container to take up available space */
#app {
  flex: 1;
}

/* Holographic Footer Styling */
.footer {
  background: linear-gradient(120deg, 
    #8e9eab, #69a9e0, #97c4f2, #f29cb1, 
    #8e9eab, #f29cb1, #97c4f2, #69a9e0
  );
  background-size: 400% 400%;
  animation: holoFooterEffect 6s infinite alternate;
  color: white;
  padding: 0px 0; 
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  margin-top: auto; 
}

/* Keyframes for Holographic Effect */
@keyframes holoFooterEffect {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Footer Content Styling */
.footer .footer-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 5px; 
}

/* Footer Text Styling */
.footer p {
  font-size: 16px;
  letter-spacing: 1px;
  margin: 10px 0;
  font-weight: 300;
}

.footer p a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer p a:hover {
  color: #000000;
}

/* Social Media Icons */
.social-icons {
  margin: 15px 0;
}

.social-icon {
  font-size: 24px;
  margin: 0 8px; 
  color: #fff;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #ff9a9e;
}

/* Footer Links Styling */
.footer-link {
  color: #97c4f2;
  font-weight: 400;
  text-decoration: none;
}

.footer-link:hover {
  color: #69a9e0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer .footer-content {
    padding: 10px; /* Further reduced padding for smaller screens */
  }

  .social-icon {
    font-size: 20px;
    margin: 0 8px;
  }
}
</style>
