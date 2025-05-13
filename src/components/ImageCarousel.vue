<script setup>
import { ref } from 'vue'

const images = [
  { src: new URL('@/assets/images/image1.png', import.meta.url).href, alt: 'Imagem 1' },
  { src: new URL('@/assets/images/image2.png', import.meta.url).href, alt: 'Imagem 2' },
  { src: new URL('@/assets/images/image3.png', import.meta.url).href, alt: 'Imagem 3' },
  { src: new URL('@/assets/images/image4.png', import.meta.url).href, alt: 'Imagem 4' },
]

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>

<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <!-- Indicadores -->
  <div class="carousel-indicators">
    <button
    v-for="(img, index) in images"
    :key="index"
    type="button"
    :data-bs-target="'#carouselExample'"
    :data-bs-slide-to="index"
    :class="{ active: currentIndex === index }"
    aria-current="currentIndex === index ? 'true' : undefined"
    aria-label="'Slide ' + (index + 1)"
    @click="currentIndex = index"
    ></button>
  </div>

  <!-- Slides -->
  <div class="carousel-inner">
    <div
    v-for="(img, index) in images"
    :key="index"
    :class="['carousel-item', { active: currentIndex === index }]"
    >
    <img :src="img.src" :alt="img.alt" class="d-block w-100" />
    </div>
  </div>

  <!-- Controles -->
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
    @click="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
    @click="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</template>
