<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide carousel-wrapper"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(img, index) in images"
        :key="index"
        type="button"
        :data-bs-target="'#carouselExampleIndicators'"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-current="index === 0 ? 'true' : undefined"
        :aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(img, index) in images"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <img :src="img.src" :alt="img.alt" class="d-block w-100 carousel-img" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ img.alt }}</h5>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
const images = [
  {
    src: new URL("@/assets/img/image1.jpeg", import.meta.url).href,
    alt: "Descrição Imagem 1",
  },
  {
    src: new URL("@/assets/img/image2.jpeg", import.meta.url).href,
    alt: "Descrição Imagem 2",
  },
  {
    src: new URL("@/assets/img/image3.jpeg", import.meta.url).href,
    alt: "Descrição Imagem 3",
  },
  {
    src: new URL("@/assets/img/image4.jpeg", import.meta.url).href,
    alt: "Descrição Imagem 4",
  },
];
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  height: 70vh;
  max-height: 70vh;
  overflow: hidden;
  position: relative;
}
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>
