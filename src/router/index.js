import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddProject from "../views/AddProject.vue";
import EditProject from "../views/EditProject.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/add",
      name: "add-project",
      component: AddProject,
    },
    {
      path: "/projects/:id",
      name: "edit-project",
      component: EditProject,
      props: true,
    },
  ],
});

export default router;
