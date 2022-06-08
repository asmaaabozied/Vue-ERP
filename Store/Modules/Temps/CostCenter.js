import router from "@/router";
const url = `cost_centers`;
export default {
  state: () => ({
    cost_centers: [],
  }),

  mutations: {
    setTempCostCenters(state, cost_centers) {
      state.cost_centers = cost_centers;
    },
  },
  actions: {
    /**
     *
     * return all warehouse
     */
    async fetchCostCenters(vuexContext) {
      try {
        const cost_centers = await $axios.get(`${url}`);
        await vuexContext.commit("setTempCostCenters", cost_centers.data);
      } catch (error) {}
    },
  },
  getters: {
    getTempCostCenters(state) {
      return state.cost_centers;
    },
  },
};
