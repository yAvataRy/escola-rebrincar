import { createRouter, createWebHistory } from "vue-router";
// import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
// Meu codigo
import Bercario from "../views/Bercario.vue";
import Contato from "../views/Contato.vue";
import Depoimentos from "../views/Depoimentos.vue";
import Diferenciais from "../views/Diferenciais.vue";
import Espaco from "../views/Espaco.vue";
import Eventos from "../views/Eventos.vue";
import Fundamental from "../views/Fundamental.vue";
import Historia from "../views/Historia.vue";
import Infantil from "../views/Infantil.vue";


const routes = [
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  // Meu codigo
   {
        path: '/bercario',
        name: 'Bercario',
        component: Bercario,
      },
      {
        path: '/contato',
        name: 'Contato',
        component: Contato,
      },
      {
        path: '/depoimentos',
        name: 'Depoimentos',
        component: Depoimentos,
      },
      {
        path: '/diferenciais',
        name: 'Diferenciais',
        component: Diferenciais,
      },
      {
        path: '/espaco',
        name: 'Espaco',
        component: Espaco,
      },
      {
        path: '/eventos',
        name: 'Eventos',
        component: Eventos,
      },
      {
        path: '/fundamental',
        name: 'Fundamental',
        component: Fundamental,
      },
      {
        path: '/historia',
        name: 'Historia',
        component: Historia,
      },
      {
        path: '/infantil',
        name: 'Infantil',
        component: Infantil,
      },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
