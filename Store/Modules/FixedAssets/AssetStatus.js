import router from "@/router";
const url = `asset-status`;

export default {
  state: () => ({
    AssetStatus: {},
  }),

  mutations: {
    setAssetStatus(state, AssetStatus) {
      state.AssetStatus = AssetStatus;
    },
  },

  actions: {
    /**
     *
     * @param {*} vuexContext
     */

    async fetchAssetStatus(vuexContext) {
      try {
        const AssetStatus = await $axios.get(`${url}`);
        await vuexContext.commit("setAssetStatus", AssetStatus.data);
      } catch (error) {}
    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */

    async storeAssetStatus(vuexContext, { data }) {
      document.getElementById("assetStatus-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("assetStatus-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "asset-status" });
          vuexContext.dispatch("swalAddSuccess", "Created");
        }
      });
    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     * @returns
     */

    async getAssetStatus(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },

    // We changed the route of asset status
    async getAssetStatusCode(vuexContext) {
      return await $axios.get("asset-status/code");
    },

    async updateAssetStatus(vuexContext, param) {
      document.getElementById("assetStatus-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("assetStatus-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "asset-status" });
          vuexContext.dispatch("swalAddSuccess", "Updated");
        }
      });
    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */
    async deleteAssetStatus(vuexContext, id) {
      await $axios.delete(`${url}/${id}`).then((res) => {
        if (res.data.status == 500) {
          vuexContext.dispatch("SwalNotDeleted", res.data.message);
          throw res.data.errors;
        } else {
          vuexContext.dispatch("swalAddSuccess", "Deleted");
        }
      });
    },
  },

  getters: {
    getAssetStatus(state) {
      return state.AssetStatus;
    },
  },
};
