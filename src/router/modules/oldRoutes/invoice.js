import Pages from "@/pages";

export default [
  {
    path: "/settings/invoice/create",
    name: "settings.invoice.create",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/settings/invoice/create.vue"),
    },
  },
  {
    path: "/settings/invoice",
    name: "settings.invoice",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/settings/invoice/index.vue"),
    },
  },
  {
    path: "/invoice/purchase",
    name: "purchase",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/invoice/purchase/index.vue"),
    },
  },
  //rania added this
  {
    path: "/invoice/invoice_settings_index",
    name: "invoice_settings_index",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/invoice/invoice_settings_index/index.vue"),
    },
  },
  {
    path: "/invoice/purchase/create",
    name: "purchase.create",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/invoice/purchase/create.vue"),
    },
  },
  {
    path: "/invoice/purchase/show/:id",
    name: "purchase.show",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/invoice/purchase/show.vue"),
    },
  },

  {
    path: "/invoice/purchase_order",
    name: "purchase.order",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/invoice/purchase_order/index.vue"),
    },
  },
  {
    path: "/invoice/purchase_order/create",
    name: "purchase.order.create",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/invoice/purchase_order/create.vue"),
    },
  },

  {
    path: "/invoice/purchase_returns",
    name: "purchase.returns",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/invoice/purchase_returns/index.vue"),
    },
  },
  {
    path: "/invoice/purchase_returns/create",
    name: "purchase.returns.create",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/invoice/purchase_returns/create.vue"),
    },
  },
  {
    path: "/invoice/beginning_inventory/create",
    name: "beginning.inventory.create",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/invoice/beginning_inventory/create.vue"),
    },
  },
];
