<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo escola</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/home"
              >Home</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sobre
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/historia"
                  >Nossa Historia</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/espaco"
                  >Nosso Espaço</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/eventos"
                  >Eventos Anuais</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bercario">Bercario</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/fundamental"
              >Fundamental</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/diferenciais"
              >Diferenciais</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/depoimentos"
              >Depoimentos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contato">Contato</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>

<style>
</style>