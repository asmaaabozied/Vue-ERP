import Pages from "@/pages";
export default [
  {
    path: "/cities",
    name: "cities",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/cities/index.vue"),
    },
  },
  {
    path: "/cities/create",
    name: "add-cities",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/cities/addCity.vue"),
    },
  },
  {
    path: "/cities/edit/:id",
    name: "edit-cities",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/cities/editCity.vue"),
    },
  },

  {
    path: "/branches",
    name: "branches",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/branches/index.vue"),
    },
  },
  {
    path: "/branches/create",
    name: "add-branches",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/branches/addBranch.vue"),
    },
  },
  {
    path: "/branches/edit/:id",
    name: "edit-branches",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/branches/editBranch.vue"),
    },
  },
  {
    path: "/branches/:id",
    name: "show-branches",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/branches/showBranch.vue"),
    },
  },
  {
    path: "/costWays",
    name: "costWays",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/costWays/index.vue"),
    },
  },
  {
    path: "/costWays/create",
    name: "add-costWays",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/costWays/addCostWay.vue"),
    },
  },
  {
    path: "/costWays/:id",
    name: "show-costWays",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/costWays/showCostWay.vue"),
    },
  },

  {
    path: "/costWays/edit/:id",
    name: "edit-costWays",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/costWays/editCostWay.vue"),
    },
  },
  {
    path: "/vouchers",
    name: "vouchers",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/vouchers/index.vue"),
    },
  },
  {
    path: "/vouchers/create",
    name: "add-vouchers",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/vouchers/addVoucher.vue"),
    },
  },
  {
    path: "/vouchers/edit/:id",
    name: "edit-vouchers",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/vouchers/editVoucher.vue"),
    },
  },
  {
    path: "/vouchers/:id",
    name: "show-vouchers",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/vouchers/showVoucher.vue"),
    },
  },
  
  {
    path: "/cost_center",
    name: "cost_center",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/cost_center/index.vue"),
    },
  },
  {
    path: "/cost_center/create",
    name: "cost_center.create",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/cost_center/create.vue"),
    },
  },
  {
    path: "/cost_center/edit/:id",
    name: "cost_center.edit",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/cost_center/edit.vue"),
    },
  },
  {
    path: "/employees",
    name: "employees",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/employees/index.vue"),
    },
  },
  {
    path: "/employees/create",
    name: "add-employees",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/employees/addEmployee.vue"),
    },
  },
  {
    path: "/employees/edit/:id",
    name: "edit-employees",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/employees/editEmployee.vue"),
    },
  },
  {
    path: "/employees/:id",
    name: "show-employees",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/employees/showEmployee.vue"),
    },
  },

  {
    path: "/classifications",
    name: "classifications",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/classifications/index.vue"),
    },
  },
  {
    path: "/classifications/create",
    name: "add-classifications",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/classifications/addClassification.vue"),
    },
  },

  {
    path: "/classifications/:id",
    name: "show-classifications",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/classifications/showClassification.vue"),
    },
  },
  {
    path: "/classifications/edit/:id",
    name: "edit-classifications",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/oldPages/classifications/editClassification.vue"),
    },
  },

  {
    path: "/pointOfSales",
    name: "pointOfSales",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/pointOfSales/index.vue"),
    },
  },
  {
    path: "/pointOfSales/create",
    name: "add-pointOfSales",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/pointOfSales/addPos.vue"),
    },
  },
  {
    path: "/pointOfSales/edit/:id",
    name: "edit-pointOfSales",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/pointOfSales/editPos.vue"),
    },
  },
  {
    path: "/pointOfSales/:id",
    name: "show-pointOfSales",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/pointOfSales/showPos.vue"),
    },
  },
  {
    path: "/accounts",
    name: "accounts",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/accounts/index.vue"),
    },
  },
  {
    path: "/accounts/create",
    name: "add-accounts",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/accounts/addAccount.vue"),
    },
  },
  {
    path: "/accounts/edit/:id",
    name: "edit-accounts",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/accounts/editAccount.vue"),
    },
  },
  {
    path: "/producers",
    name: "producers",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/producers/index.vue"),
    },
  },
  {
    path: "/producers/create",
    name: "add-producers",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/producers/addProducer.vue"),
    },
  },
  {
    path: "/producers/edit/:id",
    name: "producers.edit",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/producers/editProducer.vue"),
    },
  },
  {
    path: "/producers/:id",
    name: "producers.show",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/oldPages/producers/showProducer.vue"),
    },
  },
  // {
  //   path: "/products/edit/:id",
  //   name: "products.edit",
  //   components: {
  //     default: Pages,
  //     pageContent: () => import("@/pages/oldPages/products/editProduct.vue"),
  //   },
  // },
];
