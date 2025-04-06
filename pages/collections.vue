<template>
    <div class="container mx-auto px-4 py-8 overflow-x-hidden"> <h1
        ref="titleHeading"
        class="text-4xl md:text-5xl font-bold font-serif text-center my-8 lg:my-12 title-initial"
      >
        Jersey Category
      </h1>
  
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 lg:mb-16">
        <div
          v-for="(category, index) in categories"
          :key="category.label"
          ref="categoryItems"
          :style="{ '--delay': `${index * 0.1}s` }"
          class="category-item group category-initial"
          @mouseover="startImageLoad(index)"
          @focusin="startImageLoad(index)"
        >
          <div class="overflow-hidden mb-4 cursor-pointer bg-gray-100" :style="{ minHeight: '16rem' }"> <img
              :src="imageUrls[index]"
              :alt="'Image for ' + category.label + ' category'"
              class="w-full h-64 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
              loading="lazy" />
          </div>
          <h2 class="text-xl font-serif font-medium text-center"> {{ category.label }}
          </h2>
        </div>
      </div>
  
      <div class="text-center">
        <button
          class="bg-purple-700 text-white font-semibold px-10 py-4 rounded-md shadow-md hover:bg-purple-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 text-lg" @click="loadMore"
        >
          SHOW MORE &gt;&gt;&gt;
        </button>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  
  // --- Refs for Animation ---
  const titleHeading = ref(null);
  const categoryItems = ref([]);
  
  useHead({
    title: 'Jersey Collections | Vintage Jersey Shop',
    meta: [
      { name: 'description', content: 'Browse our football jersey collections by league category: EPL, UEFA, LaLiga, and more.' }
    ]
  });
  
  const categories = ref([
    { label: 'EPL', imageUrl: '/images/placeholder-epl.jpg' },
    { label: 'UEFA', imageUrl: '/images/placeholder-uefa.jpg' },
    { label: 'LALIGA', imageUrl: '/images/placeholder-laliga.jpg' }
  ]);
  
  const imageUrls = ref(categories.value.map(() => null));
  
  const startImageLoad = (index) => {
    if (!imageUrls.value[index]) {
      imageUrls.value[index] = categories.value[index].imageUrl;
    }
  };
  
  // --- Animation on Mount ---
  onMounted(() => {
    nextTick(() => {
      setTimeout(() => {
        if (titleHeading.value) {
          titleHeading.value.classList.add('title-visible');
          titleHeading.value.classList.remove('title-initial');
        }
  
        categoryItems.value.forEach((item) => {
          if (item) {
              item.classList.add('category-visible');
              item.classList.remove('category-initial');
          }
        });
  
         startImageLoad(0);
  
      }, 50);
    });
  });
  
  // --- Methods ---
  const loadMore = () => {
    console.log('Load More button clicked!');
    alert('Load More functionality not implemented yet.');
  };
  </script>
  
  <style scoped>
  .title-initial {
    opacity: 0;
    transform: translateY(30px);
  }
  
  .title-visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Added cubic-bezier for pop effect */
  }
  .category-initial {
      opacity: 0;
      transform: translateY(20px);
  }
  
  .category-visible {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.5s ease-out var(--delay), transform 0.5s ease-out var(--delay);
  }
  
  /* Minimal style for image placeholder area */
  img[src="null"], img:not([src]) {
      opacity: 0; /* Hide broken image icon if src is null/empty */
  }
  
  /* Ensure container allows visibility for transforms */
  .container {
      /* overflow-x-hidden; /* Added in template */
  }
  </style>