import router from "@/router";

export default {
  state: () => ({
    PointOfSales: {},
  }),

  mutations: {
    setPointOfSales(state, PointOfSales) {
      state.PointOfSales = PointOfSales;
    },
  },
  actions: {
    async fetchPointOfSales(vuexContext, paramObject) {
      try {
        const PointOfSales = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
          },
        });
        await vuexContext.commit("setPointOfSales", PointOfSales.data);
      } catch (error) {}
    },
    async storePointOfSale(vuexContext, { URL, data }) {
      document.getElementById("pointsale-add").disabled = true;
      await $axios
        .post(`${URL}`, data)
        .then(() => {
          router.push({ name: URL });
          Swal.fire(
            "Changes Saved",
            "The product details have been updated",
            "success"
          );
        })
        .catch((error) => {
          document.getElementById("pointsale-add").disabled = false;
          throw error.response.data.errors;
        });
    },
  },
  getters: {
    getPointOfSales(state) {
      return state.PointOfSales;
    },
  },
};
