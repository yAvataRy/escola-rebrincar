<script setup>
import { ref } from 'vue'

// Lista de imagens (você pode receber via props também)
const images = ref([
    { src: new URL('@/assets/images/image2.png', import.meta.url).href, alt: 'Imagem 2' },
    { src: new URL('@/assets/images/image2.png', import.meta.url).href, alt: 'Imagem 2' },
    { src: new URL('@/assets/images/image3.png', import.meta.url).href, alt: 'Imagem 3' },
    { src: new URL('@/assets/images/image4.png', import.meta.url).href, alt: 'Imagem 4' }
])
</script>

<template>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <!-- Indicadores -->
        <div class="carousel-indicators">
            <button v-for="(img, index) in images" :key="index" type="button" data-bs-target="#carouselExample"
                :data-bs-slide-to="index" :class="{ active: index === 0 }"
                :aria-current="index === 0 ? 'true' : undefined" :aria-label="`Slide ${index + 1}`"></button>
        </div>

        <!-- Slides -->
        <div class="carousel-inner">
            <div v-for="(img, index) in images" :key="index" class="carousel-item" :class="{ active: index === 0 }">
                <img :src="img.src" class="d-block w-100" :alt="img.alt" />
            </div>
        </div>

        <!-- Controles -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próximo</span>
        </button>
    </div>
</template>

<style scoped>
.carousel img {
    max-height: 500px;
    object-fit: cover;
}
</style>
