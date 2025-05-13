<script setup>
import { ref } from 'vue'
import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
} from '@coreui/vue'

const images = [
  { src: new URL('@/assets/images/image1.jpeg', import.meta.url).href, alt: 'Descrição Imagem 1' },
  { src: new URL('@/assets/images/image2.jpeg', import.meta.url).href, alt: 'Descrição Imagem 2' },
  { src: new URL('@/assets/images/image3.jpeg', import.meta.url).href, alt: 'Descrição Imagem 3' },
  { src: new URL('@/assets/images/image4.jpeg', import.meta.url).href, alt: 'Descrição Imagem 4' },
]

const currentIndex = ref(0)

const onSlide = (index) => {
  currentIndex.value = index
}
</script>

<template>
  <div class="carousel-wrapper">
    <CCarousel
      controls
      indicators
      :active-index="currentIndex"
      @slide="onSlide"
      transition="crossfade"
      class="h-100"
    >
      <CCarouselItem
        v-for="(img, index) in images"
        :key="index"
      >
        <img :src="img.src" :alt="img.alt" class="carousel-img" />
        <CCarouselCaption>
          <h5>{{ img.alt }}</h5>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  width: 100%;
  height: 70vh; /* altura máxima de 70% da tela */
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
