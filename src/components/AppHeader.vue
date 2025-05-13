<script setup>
import { onMounted, ref } from 'vue'
import { useColorModes } from '@coreui/vue'

import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import AppHeaderDropdownAccnt from '@/components/AppHeaderDropdownAccnt.vue'
import { useSidebarStore } from '@/stores/sidebar.js'
import ImageCarousel from '@/components/ImageCarousel.vue'


const headerClassNames = ref('mb-4 p-0')
const { colorMode, setColorMode } = useColorModes('coreui-free-vue-admin-template-theme')
const sidebar = useSidebarStore()

onMounted(() => {
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      headerClassNames.value = 'mb-4 p-0 shadow-sm'
    } else {
      headerClassNames.value = 'mb-4 p-0'
    }
  })
})
</script>

<template>
<!-- <div v-if="$route.path === '/dashboard'"> -->
<div>
<ImageCarousel  />
</div>


  <CHeader position="sticky" :class="headerClassNames">
    <CContainer class="border-bottom px-4" fluid>
      <CHeaderNav class="d-none d-md-flex">
        <div>
          <router-link class="router-link" to="/dashboard"> Home </router-link>
        </div>
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle class="router-link" :caret="false"> Sobre
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>
              <router-link class="router-link" to="/historia"> Nossa Historia </router-link>
            </CDropdownItem>
            <CDropdownItem>
              <router-link class="router-link" to="/espaco"> Nosso Espaço</router-link>
            </CDropdownItem>
            <CDropdownItem>
              <router-link class="router-link" to="/eventos"> Eventos Anuais </router-link>
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CNavItem>
          <router-link class="router-link" to="/bercario">Berçário</router-link>
        </CNavItem>
        <CNavItem>
          <router-link class="router-link" to="/infantil">Educação Infantil</router-link>
        </CNavItem>
        <CNavItem>
          <router-link class="router-link" to="/fundamental">Educação Fundamental</router-link>
        </CNavItem>
        <CNavItem>
          <router-link class="router-link" to="/diferenciais">Diferenciais</router-link>
        </CNavItem>
        <CNavItem>
          <router-link class="router-link" to="/depoimentos">Depoimentos</router-link>
        </CNavItem>
        <CNavItem>
          <router-link class="router-link" to="/contato">Contato</router-link>
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav>        
      </CHeaderNav>
    </CContainer>
    <!-- <CContainer class="px-4" fluid>
      <AppBreadcrumb />
    </CContainer> -->
  </CHeader>
</template>

<style scoped>
.router-link {
  text-decoration: none;
  color: inherit;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-link:hover {
  text-decoration: none;
  color: greenyellow
}
.router-link:active {
  text-decoration: none;
}

</style>

to="/bercario">Berçário
to="/infantil">Educação
to="/fundamental">Educação
to="/diferenciais">Diferenciais
to="/depoimentos">Depoimentos
to="/contato">Contato