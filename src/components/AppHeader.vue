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
  <ImageCarousel v-if="$route.path === '/dashboard'" />

  <header :class="headerClassNames">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Home</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <button
                class="nav-link dropdown-toggle"
                id="sobreDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sobre
              </button>
              <ul class="dropdown-menu" aria-labelledby="sobreDropdown">
                <li>
                  <RouterLink class="dropdown-item" to="/historia">Nossa História</RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/espaco">Nosso Espaço</RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/eventos">Eventos Anuais</RouterLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/bercario">Berçário</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/infantil">Educação Infantil</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/fundamental">Educação Fundamental</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/diferenciais">Diferenciais</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/depoimentos">Depoimentos</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contato">Contato</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
