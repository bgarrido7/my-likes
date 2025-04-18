import { createRouter, createWebHistory } from 'vue-router';
import Oscars from '../components/views/Oscars.vue'
import Movies from "../components/views/Movies.vue";
import TvShows from "../components/views/TvShows.vue";
import Animes from "../components/views/Animes.vue";
import VideoGames from "../components/views/VideoGames.vue";
import BoardGames from "../components/views/BoardGames.vue";
import Home from "../components/views/Home.vue";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/oscars',
    name: 'Oscars',
    component: Oscars
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/shows',
    component: TvShows
  },
  {
    path: '/anime',
    component: Animes
  },
  {
    path: '/games',
    component: VideoGames
  },
  {
    path: '/board-games',
    component: BoardGames
  },
]
const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router