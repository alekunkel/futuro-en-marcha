import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PropuestasView from '../views/IdeasView.vue'
import EquipoView from '../views/TeamView.vue'
import DesafiosView from '../views/ChallengesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/propuestas',
      name: 'propuestas',
      component: PropuestasView
    },
    {
      path: '/equipo',
      name: 'equipo',
      component: EquipoView
    },
    {
      path: '/desafios',
      name: 'desafios',
      component: DesafiosView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 } // Siempre scrollear arriba al cambiar de página
  }
})

export default router
