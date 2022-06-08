export default {
  state: () => ({
    vendorsContracts: {},
  }),

  mutations: {
    setvendorsContracts(state, vendorsContracts) {
      state.vendorsContracts = vendorsContracts;
    },
  },
  actions: {
    async fetchvendorsContract(vuexContext, paramObject) {
      try {
        const vendorsContracts = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setvendorsContracts", vendorsContracts.data);
      } catch (error) {}
    },

    async storevendorsContract(vuexContext, { URL, data }) {
      try {
        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The vendorsContracts details have been added",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async updatevendorsContract(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The vendorsContracts details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deletevendorsContract(vuexContext, URL) {
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
    getvendorsContracts(state) {
      return state.vendorsContracts;
    },
  },
};
