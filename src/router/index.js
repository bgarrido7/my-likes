import { createRouter, createWebHashHistory } from "vue-router";
import Oscars from "@/components/views/Oscars.vue";
import Movies from "@/components/views/Movies.vue";
import TvShows from "@/components/views/TvShows.vue";
import Animes from "@/components/views/Animes.vue";
import VideoGames from "@/components/views/VideoGames.vue";
import BoardGames from "@/components/views/BoardGames.vue";
import Music from "@/components/views/Music.vue";
import Books from "@/components/views/Books.vue";
import Yuri from "@/components/views/Yuri.vue";
import Home from "@/components/views/Home.vue";
import Sagas from "@/components/views/Sagas.vue";

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
    path: "/movies/sagas",
    name: "Sagas",
    component: Sagas,
  },
  {
    path: "/shows",
    component: TvShows,
  },
  {
    path: "/animes",
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
    path: "/books",
    component: Books,
  },
  {
    path: "/music",
    component: Music,
  },
  {
    path: "/yuri",
    component: Yuri,
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
