import Pages from "@/pages";

export default [{
    path: "/wareHouses",
    name: "wareHouses",
    components: {
        default: Pages,
        pageContent: () =>
            import("@/pages/warehouse/wareHouses/index.vue"),
    },
},
{
  path: "/wareHouses/create",
  name: "add-wareHouses",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/wareHouses/addWareHouses.vue"),
  },
},
{
  path: "/wareHouses/edit/:id",
  name: "edit-wareHouses",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/wareHouses/editWareHouses.vue"),
  },
},
{
  path: "/determinants",
  name: "determinant",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/determinants/index.vue"),
  },
}, {
  path: "/determinants/create",
  name: "add-determinant",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/determinants/addPaymentType.vue"),
  },
}, {
  path: "/determinants/edit/:id",
  name: "edit-determinant",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/determinants/editPaymentType.vue"),
  },
}, {
  path: "/tags",
  name: "tags",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/Tags/Index.vue"),
  }
}, {
  path: "/tags/create",
  name: "add-tags",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/Tags/AddTag.vue"),
  }
}, {
  path: "/tags/edit/:id",
  name: "edit-tags",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/Tags/EditTag.vue"),
  }
}, {
  path: "/categories",
  name: "categories",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/Categories/index.vue"),
  },
}, {
  path: "/categories/create",
  name: "add-categories",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/Categories/addCategory.vue"),
  },
},
{
  path: "/categories/edit/:id",
  name: "edit-categories",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/Categories/editCategory.vue"),
  },
}, {
  path: "/guarantees",
  name: "guarantees",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/guarantees/index.vue"),
  },
}, {
  path: "/guarantees/create",
  name: "add-guarantees",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/guarantees/addGuarantee.vue"),
  },
},
 
{
  path: "/determinants/create",
  name: "add-determinant",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/determinants/addPaymentType.vue"),
  },
 },
 {
  path: "/determinants/edit/:id",
  name: "edit-determinant",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/determinants/editPaymentType.vue"),
  },
 },
 ///////////////
 {
  path: "/priceLists",
  name: "priceList",
  components: {
    default: Pages,
    pageContent: () => import("@/pages/warehouse/priceList/index.vue"),
  },
 },
 {
  path: "/priceLists/create",
  name: "add-priceList",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/priceList/addPriceList.vue"),
  },
 },
 {
  path: "/priceLists/edit/:id",
  name: "edit-priceList",
  components: {
    default: Pages,
    pageContent: () =>
      import("@/pages/warehouse/priceList/editPriceList.vue"),
  },
 },
 ///////////////

    {
        path: "/determinants/create",
        name: "add-determinant",
        components: {
            default: Pages,
            pageContent: () =>
                import("@/pages/warehouse/determinants/addPaymentType.vue"),
        },
    },
    {
        path: "/determinants/edit/:id",
        name: "edit-determinant",
        components: {
            default: Pages,
            pageContent: () =>
                import("@/pages/warehouse/determinants/editPaymentType.vue"),
        },
    },
    ///////////////
    {
        path: "/priceList",
        name: "priceList",
        components: {
            default: Pages,
            pageContent: () => import("@/pages/warehouse/priceList/index.vue"),
        },
    },
    {
        path: "/priceList/create",
        name: "add-priceList",
        components: {
            default: Pages,
            pageContent: () =>
                import("@/pages/warehouse/priceList/addPriceList.vue"),
        },
    },
    {
        path: "/priceList/edit/:id",
        name: "edit-priceList",
        components: {
            default: Pages,
            pageContent: () =>
                import("@/pages/warehouse/priceList/editPriceList.vue"),
        },
    },
    ///////////////

    {
        path: "/tags",
        name: "tags",
        components: {
            default: Pages,
            pageContent: () =>
                import("@/pages/warehouse/Tags/Index.vue"),
        }
    },
    {
        path: "/tags/create",
        name: "add-tags",
        components: {
            default: Pages,
            pageContent: () =>
                import("@/pages/warehouse/Tags/AddTag.vue"),
        }
    },
    {
        path: "/tags/edit/:id",
        name: "edit-tags",
        components: {
            default: Pages,
            pageContent: () =>
                import("@/pages/warehouse/Tags/EditTag.vue"),
        }
    },
    {
        path: "/categories",
        name: "categories",
        components: {
            default: Pages,
            pageContent: () => import("@/pages/warehouse/Categories/index.vue"),
        },
    },
    {
        path: "/categories/create",
        name: "add-categories",
        components: {
            default: Pages,
            pageContent: () =>
                import("@/pages/warehouse/Categories/addCategory.vue"),
        },
    },
   

    {
        path: "/customers",
        name: "customers",
        components: {
            default: Pages,
            pageContent: () => import("@/pages/warehouse/customers/index.vue"),
        },
    },
    {
        path: "/customers/create",
        name: "add-customers",
        components: {
            default: Pages,
            pageContent: () =>
                import("@/pages/warehouse/customers/add.vue"),
        },
    },
    {
        path: "/customers/edit/:id",
        name: "edit-customers",
        components: {
            default: Pages,
            pageContent: () =>
                import("@/pages/warehouse/customers/edit.vue"),
        }
    },
    {
      path: "/billTypesGroups/create",
      name: "add-billTypesGroups",
      components: {
        default: Pages,
        pageContent: () =>
          import("@/pages/warehouse/billTypesGroups/create.vue"),
      },
    },
    ///////////
    {
      path: "/productsTabulations",
      name: "productTabulation",
      components: {
        default: Pages,
        pageContent: () => import("@/pages/warehouse/productsTabulation/index.vue"),
      },
    },
    {
      path: "/productsTabulations/create",
      name: "add-productTabulation",
      components: {
        default: Pages,
        pageContent: () => import("@/pages/warehouse/productsTabulation/addProductsTabulation.vue"),
      },
    },
  
    {
      path: "/productTabulations/edit/:id",
      name: "edit-productTabulation",
      components: {
        default: Pages,
        pageContent: () => import("@/pages/warehouse/productsTabulation/editProductsTabulation.vue"),
      },
    },
    //start product
    {
      path: "/products/create",
      name: "add-products",
      components: {
        default: Pages,
        pageContent: () =>
          import("@/pages/warehouse/product/addProducts.vue"),
      },
    },
    //end product

    //  Start Unit
    {
      path: "/units",
      name: "units",
      components: {
        default: Pages,
        pageContent: () => import("@/pages/warehouse/units/index.vue"),
      },
    },
  
    {
      path: "/units/create",
      name: "add-units",
      components: {
        default: Pages,
        pageContent: () => import("@/pages/warehouse/units/addUnit.vue"),
      },
    },
  
    {
      path: "/units/edit/:id",
      name: "edit-units",
      components: {
        default: Pages,
        pageContent: () => import("@/pages/warehouse/units/editUnit.vue"),
      },
    },

    // End Unit
  
   
];
