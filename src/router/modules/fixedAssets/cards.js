import Pages from "@/pages";
export default [
  {
    path: "/asset-status",
    name: "asset-status",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/fixedAssets/AssetStatus/index.vue"),
    },
  },
  {
    path: "/asset-status/create",
    name: "add-assetStatus",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/fixedAssets/AssetStatus/addAssetStatus.vue"),
    },
  },
  {
    path: "/asset-status/edit/:id",
    name: "edit-assetStatus",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/fixedAssets/AssetStatus/editAssetStatus.vue"),
    },
  },
  {
    path: "/asset-groups",
    name: "assetGroups",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/fixedAssets/assetGroup/index.vue"),
    },
  },
  {
    path: "/asset-groups/create",
    name: "add-assetGroup",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/fixedAssets/assetGroup/addAssetGroup.vue"),
    },
  },
  {
    path: "/asset-groups/edit/:id",
    name: "edit-assetGroup",
    components: {
      default: Pages,
      pageContent: () =>
        import("@/pages/fixedAssets/assetGroup/editAssetGroup.vue"),
    },
  },
];
