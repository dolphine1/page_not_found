<template>
  <div class="spotlight-page">
   <h2>Look who's wearing 404!</h2>
   <div class="featured-people">
         <div class="person">
       <img src="/public/src/images/artist.jpg"  alt="Fashion Designer" />
      <p>xyx <br /> Fashion Designer</p>
    </div>
    <div class="person">
      <img src="/public/src/images/artist1.jpg"  alt="Actor and Model" />
        <p>abc <br /> (Actor and Model)</p>
     </div>
     <div class="person">
       <img src="/public/src/images/in2.jpg"  alt="Host and Influencer" />
       <p>Adc <br /> (Host and Influencer)</p>
     </div>
   </div>
 </div>
</template>

<script>
export default {
 name: 'SpotlightPage',
};
</script>

<style scoped>
.spotlight-page {
  padding: 20px;
}
.featured-people {
 display: flex;
 justify-content: space-between;
    }
</style>