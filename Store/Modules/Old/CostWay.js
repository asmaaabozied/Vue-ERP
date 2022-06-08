export default {
  state: () => ({
    costWays: {},
  }),

  mutations: {
    setCostWays(state, costWays) {
      state.costWays = costWays;
    },
  },
  actions: {
    async fetchCostWays(vuexContext, paramObject) {
      try {
        const costWays = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });
        await vuexContext.commit("setCostWays", costWays.data);
      } catch (error) {}
    },

    async storeCostWays(vuexContext, { URL, data }) {
      try {
        document.getElementById("costway-add").disabled = true;

        return await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The CostWay details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("costway-add").disabled = false;

        throw error.response.data.errors;
      }
    },

    async updateCostWays(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The CostWay details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteCostWay(vuexContext, URL) {
      try {
        const city = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return city.data;
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
    getCostWays(state) {
      return state.costWays;
    },
  },
};
