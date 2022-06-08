import router from "@/router";
const url = `asset-groups`;

export default {
  state: () => ({
    AssetGroup: {},
  }),

  mutations: {
    setAssetGroup(state, AssetGroup) {
      state.AssetGroup = AssetGroup;
    },
  },

  actions: {
    async fetchAssetGroup(vuexContext) {
      try {
        const AssetGroup = await $axios.get(`${url}`);
        await vuexContext.commit("setAssetGroup", AssetGroup.data);
      } catch (error) {
      }
    },

    async storeAssetGroup(vuexContext, { data }) {
      document.getElementById("assetGroup-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "assetGroups" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
          document.getElementById("assetGroup-add").disabled = false;
          throw res.data.errors;
        }
      });
    },

    async getAssetGroup(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },

    // We changed the route of asset group
    async getAssetGroupCode(vuexContext) {
      return await $axios.get("asset-groups/code");
    },

    async updateAssetGroup(vuexContext, param) {
      document.getElementById("assetGroups-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("assetGroups-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "assetGroups" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        }
      });
    },

    async deleteAssetGroup(vueContext, params) {
      await $axios.post(`${url}/delete`, {_method:"delete", ids:params.ids})
          .then((res) => {
              if (res.data.status == 200) {
                  router.go()
                  vueContext.dispatch("swalAddSuccess", "Deleted");
              } else {
                  Swal.fire({
                      title: "Warrning",
                      text: res.data.message,
                      confirmButtonColor: "#3085d6",
                      confirmButtonText: "ok",
                  });
                  throw res.data.errors;
              }
      });
  },

  },

  getters: {
    getAssetGroup(state) {
      return state.AssetGroup;
    },
  },
};
