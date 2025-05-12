<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import ImageCarousel from '@/components/ImageCarousel.vue'

const headerClassNames = ref('sticky top-0 bg-white z-50 transition-shadow')

onMounted(() => {
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      headerClassNames.value = 'sticky top-0 bg-white z-50 shadow-md transition-shadow'
    } else {
      headerClassNames.value = 'sticky top-0 bg-white z-50 transition-shadow'
    }
  })
})
</script>

<template>
  <ImageCarousel />

  <header :class="headerClassNames">
    <div class="border-b px-4 py-2">
      <nav class="hidden md:flex gap-4 text-gray-700 font-medium">
        <!-- Home -->
        <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>

        <!-- Dropdown Sobre -->
        <div class="relative group">
          <button class="hover:text-blue-600">Sobre</button>
          <div class="absolute hidden group-hover:block mt-2 bg-white shadow-md rounded text-sm">
            <RouterLink to="/historia" class="block px-4 py-2 hover:bg-gray-100">Nossa História</RouterLink>
            <RouterLink to="/espaco" class="block px-4 py-2 hover:bg-gray-100">Nosso Espaço</RouterLink>
            <RouterLink to="/eventos" class="block px-4 py-2 hover:bg-gray-100">Eventos Anuais</RouterLink>
          </div>
        </div>

        <RouterLink to="/bercario" class="hover:text-blue-600">Berçario</RouterLink>
        <RouterLink to="/infantil" class="hover:text-blue-600">Educação Infantil</RouterLink>
        <RouterLink to="/fundamental" class="hover:text-blue-600">Educação Fundamental</RouterLink>
        <RouterLink to="/diferenciais" class="hover:text-blue-600">Diferenciais</RouterLink>
        <RouterLink to="/depoimentos" class="hover:text-blue-600">Depoimentos</RouterLink>
        <RouterLink to="/contato" class="hover:text-blue-600">Contato</RouterLink>
      </nav>
    </div>
  </header>
</template>
