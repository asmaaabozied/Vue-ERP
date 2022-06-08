export default {
  state: () => ({
    discountVendorContracts: {},
  }),

  mutations: {
    setDiscountVendorContracts(state, discountVendorContracts) {
      state.discountVendorContracts = discountVendorContracts;
    },
  },
  actions: {
    async storeDiscountVendorContract(vuexContext, { URL, data }) {
      try {
        await $axios.post(`${URL}`, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The DiscountVendorContract details have been added",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async fetchDiscountVendorContracts(
      vuexContext,
      discountVendorContractObject
    ) {
      try {
        const discountVendorContracts = await $axios.get(
          discountVendorContractObject.URL,
          {
            params: {
              all: discountVendorContractObject.all ?? null,
              page: discountVendorContractObject.page ?? null,
              per_page: discountVendorContractObject.per_page ?? null,
            },
          }
        );
        await vuexContext.commit(
          "setDiscountVendorContracts",
          discountVendorContracts.data
        );
      } catch (error) {}
    },

    async getDiscountVendorContract(vuexContext, paramObject) {
      const discountVendorContract = await $axios.get(paramObject.URL);
      return discountVendorContract;
    },
    async updateDiscountVendorContract(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The DiscountVendorContract details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async deleteDiscountVendorContract(vuexContext, URL) {
      try {
        const discountVendorContract = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return discountVendorContract.data;
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
    getDiscountVendorContracts(state) {
      return state.discountVendorContracts;
    },
  },
};
