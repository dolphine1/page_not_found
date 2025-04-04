<template>
    <div class="home-container">
      <!-- Background image -->
      <img 
        src="/images/jersey-models.jpg" 
        alt="Fashion models wearing jerseys" 
        class="background-image"
      />
      
      <!-- Main content overlay -->
      <div class="main-message">
        <h1>Preservation of football through Jersey collection</h1>
        <p>Explore our curated collection of historic and contemporary football jerseys.</p>
        <NuxtLink to="/collections" class="cta-button">View Collection</NuxtLink>
      </div>
    </div>
  </template>
  
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
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #f0f0f0;
  }
  </style>