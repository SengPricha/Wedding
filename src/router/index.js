import { createRouter, createWebHistory } from "vue-router";

import Content from "../views/Content.vue";

const routes = [
  { path: "/content", component: Content },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
