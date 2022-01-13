import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "manga.home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/release/:page",
    name: "release.page",
    component: () => import("../views/ReleaseList.vue"),
  },
  {
    path: "/manhwa/:page",
    name: "manhwa.page",
    component: () => import("../views/ManhwaList.vue"),
  },
  {
    path: "/manhua/:page",
    name: "manhua.page",
    component: () => import("../views/ManhuaList.vue"),
  },
  {
    path: "/detail/:endpoint",
    name: "manga.detail",
    component: () => import("../views/DetailManga.vue"),
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
