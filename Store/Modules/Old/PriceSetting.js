export default {
  state: () => ({
    priceSetting: {},
  }),
  mutations: {
    setPriceSetting(state, priceSetting) {
      state.priceSetting = priceSetting;
    },
  },
  actions: {
    async fetchPriceSettings(vuexContext, paramObject) {
      try {
        const priceSettings = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setPriceSettings", priceSettings.data);
      } catch (error) {}
    },
    async storeSetting(vuexContext, { URL, data }) {
      try {
        document.getElementById("pricesetting-add").disabled = true;

        await $axios.post(`${URL}`, data)
        .then(() => {
          Swal.fire(
              "Changes Saved",
              "The Price setting changes have been added",
              "success"
          )
        })
      } catch (error) {
        document.getElementById("pricesetting-add").disabled = false;
        throw error.response.data.errors;
      }
    },
   
   
   
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};
