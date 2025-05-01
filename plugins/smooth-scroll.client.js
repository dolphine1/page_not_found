export default ({ app }) => {
    // Only execute on client-side
    if (process.client) {
      // Wait for the page transition to complete
      app.router.afterEach((to, from) => {
        // If the user clicked on an anchor link (like '#section')
        if (to.hash) {
          let timer = setTimeout(() => {
            const element = document.querySelector(to.hash);
            if (element) {
              // Calculate offset for fixed header on mobile
              const isMobile = window.innerWidth <= 768;
              const headerOffset = isMobile ? 60 : 0;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
            clearTimeout(timer);
          }, 500); // Wait for page transition
        } else if (from.path !== to.path) {
          // If a new page, scroll to top smoothly
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      });
      
      // Add listener for any internal link with a hash
      document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
          link.addEventListener('click', event => {
            event.preventDefault();
            const hash = link.getAttribute('href');
            const element = document.querySelector(hash);
            if (element) {
              // Calculate offset for fixed header on mobile
              const isMobile = window.innerWidth <= 768;
              const headerOffset = isMobile ? 60 : 0;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
              // Update URL if needed
              if (history.pushState) {
                history.pushState(null, null, hash);
              } else {
                location.hash = hash;
              }
            }
          });
        });
      });
    }
  };