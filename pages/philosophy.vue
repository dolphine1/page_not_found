<template>
  <div class="philosophy-container">
    <!-- Main Content -->
    <div class="content-wrapper">
      <div class="content-inner">
        <!-- Title Section -->
        <div class="title-section">
          <h1 class="main-title">
            Vintage Jersey<br>
            Shop:Sportswear
          </h1>
        </div>
        
        <!-- Content Section -->
        <div class="content-section">
          <h2 class="subtitle">
            404 Fashion offers<br>
            same-day or next-day<br>
            delivery countrywide.
          </h2>
          <p class="description">
            Shop for whatever whenever you feel sporty<br class="desktop-break">
            and get it within 24 hours!
          </p>
          <div class="features">
            <p>Shop for classic or trendy pieces</p>
            <p>you can wear every day & Look dashing</p>
            <p>while on the go with our jersey's.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhilosophyPage',
  head() {
    return {
      title: 'Our Philosophy | Football Jersey Collection',
      meta: [
        { hid: 'description', name: 'description', content: 'Learn about our philosophy at 404 Fashion, offering same-day or next-day delivery for vintage and modern football jerseys.' }
      ]
    }
  }
}
</script>

<style scoped>
.philosophy-container {
  background-color: #4c2a81;
  color: white;
  min-height: 100vh;
  padding: 100px 0 60px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-inner {
  display: flex;
  flex-direction: column;
}

.title-section {
  margin-bottom: 60px;
  animation: fadeSlideUp 0.8s ease-out forwards;
}

.main-title {
  font-family: Georgia, serif;
  font-size: 48px;
  line-height: 1.2;
  margin: 0;
}

.content-section {
  animation: fadeSlideUp 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.subtitle {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.3;
}

.description {
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.5;
}

.features p {
  font-size: 18px;
  margin-bottom: 10px;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  .philosophy-container {
    padding: 80px 0 40px;
  }
  
  .main-title {
    font-size: 36px;
  }
  
  .subtitle {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .description, .features p {
    font-size: 16px;
  }
  
  .desktop-break {
    display: none;
  }
}

@media (max-width: 480px) {
  .philosophy-container {
    padding: 70px 0 30px;
  }
  
  .title-section {
    margin-bottom: 40px;
  }
  
  .main-title {
    font-size: 30px;
  }
  
  .subtitle {
    font-size: 22px;
  }
  
  .description, .features p {
    font-size: 15px;
  }
}
</style>