import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "manga.home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/manhwa",
    name: "manhwa.home",
    component: () => import("../views/ManhwaList.vue"),
  },
  {
    path: "/manhua",
    name: "manhua.home",
    component: () => import("../views/ManhuaList.vue"),
  },
  {
    path: "/detail/:endpoint",
    name: "manga.detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/chapter/:endpoint",
    name: "manga.chapter",
    component: () => import("../views/Chapter.vue"),
  },
  {
    path: "/search/:key",
    name: "manga.search",
    component: () => import("../views/SearchList.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
