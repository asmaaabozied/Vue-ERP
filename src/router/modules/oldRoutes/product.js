import Pages from "@/pages";
export default [
  {
    path: "/productTypes",
    name: "productTypes",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/productTypes/index.vue"),
    },
  },
  {
    path: "/productTypes/create",
    name: "add-productTypes",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/productTypes/addProductType.vue"),
    },
  },
  {
    path: "/productTypes/:id",
    name: "show-productTypes",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/productTypes/showProductType.vue"),
    },
  },
  // {
  //   path: "/products",
  //   name: "products",
  //   components: {
  //     default: Pages,
  //     pageContent: () => import("@/pages/oldPages/products/index.vue"),
  //   },
  // },
  // {
  //   path: "/products/create",
  //   name: "add-products",
  //   components: {
  //     default: Pages,
  //     pageContent: () => import("@/pages/oldPages/products/addProducts.vue"),
  //   },
  // },

  // {
  //   path: "/options",
  //   name: "options",
  //   components: {
  //     default: Pages,
  //     pageContent: () => import("@/pages/oldPages/options/index.vue"),
  //   },
  // },
  // {
  //   path: "/options/create",
  //   name: "add-options",
  //   components: {
  //     default: Pages,
  //     pageContent: () => import("@/pages/oldPages/options/addOption.vue"),
  //   },
  // },
  // {
  //   path: "/options/edit/:id",
  //   name: "edit-options",
  //   components: {
  //     default: Pages,
  //     pageContent: () => import("@/pages/oldPages/options/editOption.vue"),
  //   },
  // },

  // {
  //   path: "/options/:id",
  //   name: "show-options",
  //   components: {
  //     default: Pages,
  //     pageContent: () => import("@/pages/oldPages/options/showOption.vue"),
  //   },
  // },
];
