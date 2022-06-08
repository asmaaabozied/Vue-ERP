import router from "@/router";
export default {
  state: () => ({
    costCenters: {},
  }),

  mutations: {
    setCostCenter(state, costCenters) {
      state.costCenters = costCenters;
    },
  },
  actions: {
    async fetchCostCenters(vuexContext, paramObject) {
      try {
        const costCenters = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setCostCenter", costCenters.data);
      } catch (error) {}
    },
    async getCostCenter(vuexContext, paramObject) {
      const CostCenter = await $axios.get(paramObject.URL);
      return CostCenter;
    },

    async storeCostCenter(vuexContext, { URL, data }) {
      try {
        document.getElementById("costcenter-add").disabled = true;

        await $axios.post(URL, data).then(() => {
          router.push({ name: URL });
          Swal.fire(
            "Changes Saved",
            "The costCenters details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("costcenter-add").disabled = false;

        throw error.response.data.errors;
      }
    },
    async updateCostCenter(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          router.push({ name: URL });
          Swal.fire(
            "Changes Saved",
            "The costCenters details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteCostCenter(vuexContext, URL) {
      try {
        await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return true;
      } catch (error) {
        Swal.fire({
          title: "Warrning",
          text: error.response.data.message,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Now You Know",
        });
        throw error;
      }
    },
  },
  getters: {
    getCostCenters(state) {
      return state.costCenters;
    },
  },
};
