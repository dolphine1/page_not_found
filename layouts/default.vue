<template>
    <div>
      <header class="navigation-bar">
        <nav>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/philosophy">Philosophy</NuxtLink></li>
            <li><NuxtLink to="/collections">Collections</NuxtLink></li>
            <li><NuxtLink to="/spotlight">Spotlight</NuxtLink></li>
            <li><NuxtLink to="/features">Features</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <slot />
      </main>
  
      <footer class="site-footer">
        <div class="footer-content">
          <p>&copy; {{ new Date().getFullYear() }} Football Jersey Collection. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
  .navigation-bar {
    background-color: transparent;
    padding: 20px 0;
    position: absolute;
    width: 100%;
    z-index: 10;
  }
  
  .navigation-bar nav {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .navigation-bar ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    gap: 30px;
    margin: 0;
    padding: 0;
  }
  
  .navigation-bar ul li a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .navigation-bar ul li a:hover {
    color: #5d4a8a;
  }
  
  .site-footer {
    padding: 20px 0;
    background-color: #f5f5f5;
    text-align: center;
  }
  
  .footer-content {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>