import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import BlogPost from "./views/BlogPost.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/blog/:slug", component: BlogPost }, // Exemple de route dynamique
];

const router = new VueRouter({
  mode: "history", // Active le mode histoire
  routes,
});

export default router;
