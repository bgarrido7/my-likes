import { createRouter, createWebHistory } from 'vue-router';
import OscarsPredic from '../views/Oscars.vue'
import UnderConstruct from '../views/UnderConstruct.vue'


const routes = [
  {
    path: '/oscars',
    name: 'Oscars',
    component: OscarsPredic
  },
  {
    path: '/movies',
    name: 'Movies',
    component: UnderConstruct
  },
  {
    path: '/shows',
    name: 'Shows',
    component: UnderConstruct
  },
  {
    path: '/anime',
    name: 'Anime',
    component: UnderConstruct
  },
  {
    path: '/games',
    name: 'Games',
    component: UnderConstruct
  },
  {
    path: '/board',
    name: 'Board',
    component: UnderConstruct
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router