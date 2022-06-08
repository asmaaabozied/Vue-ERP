import Vue from "vue";
import VueRouter from "vue-router";
import Pages from "@/pages";
import Cards from "./modules/oldRoutes/cards";
import oldRoutes from "./modules/oldRoutes/oldRoutes";
import WarehouseCards from "./modules/warehouse/cards";
import POSCards from "./modules/POS/cards";
import FixedCards from "./modules/fixedAssets/cards";
import ToolCards from "./modules/tools/cards";
import Product from "./modules/oldRoutes/product";
import Currency from "./modules/oldRoutes/currency";
import Invoice from "./modules/oldRoutes/invoice";
import login from "@/pages/oldPages/auth";

Vue.use(VueRouter);
const mainRouteChildren = [
  {
    path: "/404error",
    name: "404Error",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/404error/404error.vue"),
    },
  },
  {
    path: "/testing",
    name: "testing",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/testing.vue"),
    },
  },
];

let allRoutes = [];
var routesConcat = allRoutes.concat(
  WarehouseCards,
  FixedCards,
  ToolCards,
  POSCards,
  mainRouteChildren,

  Cards,
  oldRoutes,
  Product,
  Currency,
  Invoice,
);

const routes = [
  { path: "/login", component: login, name: "login" },

  {
    path: "/",
    name: "home",
    component: Pages,
    children: routesConcat,
  },
];

const router = new VueRouter({
  routes,
  hashbang: false,
  history: true,
  mode: "history",
  props: true,
  transitionOnLoad: true,
  root: "/",
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next("/404error");
  } else {
    next();
  }
});

export default router;
