<template>
  <div class="home-container">
    <!-- Background image -->
    <img
      src="/public/src/images/jersey-models.jpg"
      alt="Fashion models wearing jerseys"
      class="background-image"
    />
    <!-- Main content overlay -->
    <div class="main-message">
      <h1>Preservation of football through Jersey collection</h1>
      <p>Explore our curated collection of historic and contemporary football jerseys.</p>
      <NuxtLink to="/collections" class="cta-button">View Collection</NuxtLink>
    </div>
    
    <!-- scroll indicator for better UX -->
    <div class="scroll-indicator">
      <span class="scroll-text">Scroll to explore</span>
      <i class="fas fa-chevron-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  head() {
    return {
      title: 'Football Jersey Collection - Home',
      meta: [
        { hid: 'description', name: 'description', content: 'Explore our curated collection of historic and contemporary football jerseys.' }
      ]
    }
  }
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.main-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  width: 650px;
  max-width: 80%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease-out;
}

.main-message h1 {
  font-size: 52px;
  font-family: serif;
  margin: 0 0 20px 0;
  line-height: 1.2;
  font-weight: normal;
}

.main-message p {
  font-size: 18px;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  background-color: white;
  color: black;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #f0f0f0;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  animation: bounce 2s infinite;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scroll-text {
  font-size: 14px;
  margin-bottom: 5px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.scroll-indicator i {
  font-size: 20px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main-message {
    padding: 30px;
  }
  
  .main-message h1 {
    font-size: 36px;
  }
  
  .main-message p {
    font-size: 16px;
    margin-bottom: 25px;
  }
}

@media (max-width: 480px) {
  .main-message {
    padding: 25px;
    border-radius: 15px;
  }
  
  .main-message h1 {
    font-size: 28px;
    margin-bottom: 15px;
  }
  
  .main-message p {
    font-size: 15px;
    margin-bottom: 20px;
  }
  
  .cta-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>