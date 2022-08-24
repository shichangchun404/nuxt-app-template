export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/src/views/index").then(m => m.default),
    meta: {}
  },
  {
    path: "/about/:id",
    name: "about",
    component: () => import("@/src/views/about").then(m => m.default),
    meta: {}
  },
  {
    path: "*",
    name: "notfound",
    component: () => import("@/src/views/404").then(m => m.default),
    meta: {}
  }
];
