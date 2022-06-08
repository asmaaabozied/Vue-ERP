import Pages from "@/pages";
export default [
  {
    path: "/sellingPoints",
    name: "sellingPoints",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/pos/sellingPoints/index.vue"),
    },
  },
  {
    path: "/sellingPoints/create",
    name: "add-sellingPoints",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/pos/sellingPoints/create.vue"),
    },
  },
  {
    path: "/sellingPoints/edit/:id",
    name: "edit-sellingPoints",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/pos/sellingPoints/edit.vue"),
    },
  },

  {
    path: "/periods",
    name: "periods",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/pos/periods/index.vue"),
    },
  },
  {
    path: "/periods/create",
    name: "add-periods",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/pos/periods/create.vue"),
    },
  },
  {
    path: "/periods/edit/:id",
    name: "edit-periods",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/pos/periods/edit.vue"),
    },
  },
  // start member card
  {
    path: "/memberCards",
    name: "memberCard",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/pos/memberCard/index.vue"),
    },
  },
  {
    path: "/memberCard/create",
    name: "add-memberCard",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/pos/memberCard/addMemberCard.vue"),
    },
  },
  {
    path: "/memberCard/edit/:id",
    name: "edit-memberCard",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/pos/memberCard/editMemberCard.vue"),
    },
  },
  // end member card
];
