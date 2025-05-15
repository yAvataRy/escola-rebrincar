<!--
=========================================================
* Vue Argon Dashboard 2 - v4.0.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-argon-dashboard
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Sidenav from "./examples/Sidenav";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import AppFooter from "@/examples/Footer.vue";
import MinhaNavbarVue from "./examples/Navbars/MinhaNavbar.vue";
import ImageCarousel from "@/examples/Navbars/ImageCarrossel.vue";

const store = useStore();
// const isNavFixed = computed(() => store.state.isNavFixed);
// const darkMode = computed(() => store.state.darkMode);
// const isAbsolute = computed(() => store.state.isAbsolute);
// const showSidenav = computed(() => store.state.showSidenav);
const layout = computed(() => store.state.layout);
// const showNavbar = computed(() => store.state.showNavbar);
const showFooter = computed(() => store.state.showFooter);
const showConfig = computed(() => store.state.showConfig);
const hideConfigButton = computed(() => store.state.hideConfigButton);
const toggleConfigurator = () => store.commit("toggleConfigurator");

// const navClasses = computed(() => {
//   return {
//     "position-sticky bg-white left-auto top-2 z-index-sticky":
//       isNavFixed.value && !darkMode.value,
//     "position-sticky bg-default left-auto top-2 z-index-sticky":
//       isNavFixed.value && darkMode.value,
//     "position-absolute px-4 mx-0 w-100 z-index-2": isAbsolute.value,
//     "px-0 mx-4": !isAbsolute.value,
//   };
// });
</script>
<template>
  <div v-if="false">
    <div
      v-show="layout === 'landing'"
      class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
    ></div>
  </div>
  <div v-if="false">
    <sidenav v-if="showSidenav" />
  </div>

  <main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
  >
    <div v-if="$route.path === '/home'">
      <ImageCarousel />
    </div>
    <!-- nav -->

    <MinhaNavbarVue />

    <div v-if="false">
      <navbar :class="[navClasses]" v-if="showNavbar" />
    </div>

    <router-view />

    <app-footer v-show="showFooter" />

    <div v-if="false">
      <configurator
        :toggle="toggleConfigurator"
        :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']"
      />
    </div>
  </main>
</template> 
