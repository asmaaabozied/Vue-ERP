import Pages from "@/pages";
export default [
  {
    path: "/currency_converter",
    name: "currency_converter",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/currency_converter/index.vue"),
    },
  },
  {
    path: "/currency_converter/history",
    name: "currency_converter.history",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/currency_converter/history.vue"),
    },
  },
  {
    path: "/market_converter",
    name: "market_converter",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/market_converter/index.vue"),
    },
  },
  {
    path: "/market_converter/create",
    name: "market_converter.create",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/market_converter/create.vue"),
    },
  },
  {
    path: "/market_converter/history",
    name: "market_converter.history",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/market_converter/history.vue"),
    },
  },
];
