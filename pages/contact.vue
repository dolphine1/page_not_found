<template>
    <div class="contact-page">
      <h2>404</h2>
      
      <div class="social-media">
        <p>Follow Us on:</p>
        <ul class="social-icons">
          <li>
            <a href="#" class="instagram">
              <i class="fab fa-instagram icon"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" class="facebook">
              <i class="fab fa-facebook icon"></i>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="twitter">
              <i class="fab fa-twitter icon"></i>
              <span>Twitter</span>
            </a>
          </li>
        </ul>
      </div>
      
      <div class="contact-info">
        <div class="contact-item">
          <i class="fas fa-phone"></i>
          <p>+(254) 115096461</p>
        </div>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <p>pagentnotfound@gmail.com</p>
        </div>
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    head() {
      return {
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-page {
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 80px;
    margin: 0;
    color: #e74c3c;
  }
  
  .social-media {
    margin: 20px 0;
  }
  
  .social-media p {
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    list-style-type: none;
    padding: 0;
  }
  
  .social-icons li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #333;
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
  .social-icons li a:hover {
    transform: translateY(-5px);
  }
  
  .icon {
    font-size: 24px;
    margin-bottom: 5px;
  }
  
  .instagram:hover {
    color: #c13584;
  }
  
  .facebook:hover {
    color: #3b5998;
  }
  
  .twitter:hover {
    color: #1da1f2;
  }
  
  .contact-info {
    margin-top: 30px;
    width: 100%;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .contact-item i {
    margin-right: 10px;
  }
  
  .contact-item p {
    margin: 0;
  }
  </style>