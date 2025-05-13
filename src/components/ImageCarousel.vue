<script setup>
import { ref } from 'vue'

const images = [
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
  <div class="relative w-full max-w-4xl mx-auto overflow-hidden">
    <!-- Slides -->
    <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="w-full flex-shrink-0"
      >
        <img :src="img.src" :alt="img.alt" class="w-full h-96 object-cover rounded-lg" />
      </div>
    </div>

    <!-- Indicadores -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      <button
        v-for="(img, index) in images"
        :key="index"
        @click="currentIndex = index"
        :class="{
          'w-3 h-3 rounded-full bg-white': true,
          'opacity-50': currentIndex !== index,
          'opacity-100 ring-2 ring-white': currentIndex === index
        }"
      ></button>
    </div>

    <!-- Controles -->
    <button
      @click="prev"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
    >
      ‹
    </button>
    <button
      @click="next"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
    >
      ›
    </button>
  </div>
</template>
