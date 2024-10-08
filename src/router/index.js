import { createRouter, createWebHistory } from "vue-router";
import Notfound from "@/views/Notfound.vue";
import Accueil from "@/views/Accueil.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Accueil, // Page d'accueil
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: Notfound, // Page 404
    },
  ],
});
export default router;
