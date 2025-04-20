import { createRouter, createWebHistory } from "vue-router";
import Oscars from "../components/views/Oscars.vue";
import Movies from "../components/views/Movies.vue";
import TvShows from "../components/views/TvShows.vue";
import Animes from "../components/views/Animes.vue";
import VideoGames from "../components/views/VideoGames.vue";
import BoardGames from "../components/views/BoardGames.vue";
import Music from "../components/views/Music.vue";
import Home from "../components/views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/oscars",
    name: "Oscars",
    component: Oscars,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/shows",
    component: TvShows,
  },
  {
    path: "/anime",
    component: Animes,
  },
  {
    path: "/games",
    component: VideoGames,
  },
  {
    path: "/board-games",
    component: BoardGames,
  },
  {
    path: "/music",
    component: Music,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
