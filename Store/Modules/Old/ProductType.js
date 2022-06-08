import router from "@/router";

export default {
  state: () => ({
    productTypes: {},
  }),

  mutations: {
    setProductTypes(state, productTypes) {
      state.productTypes = productTypes;
    },
  },
  actions: {
    async fetchProductTypes(vuexContext, paramObject) {
      try {
        const productTypes = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
          },
        });
        await vuexContext.commit("setProductTypes", productTypes.data);
      } catch (error) {}
    },

    async storeProductTypes(vuexContext, { URL, data }) {
      try {
        document.getElementById("producttype-add").disabled = true;

        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The ProductType details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("producttype-add").disabled = false;

        throw error.response.data.errors;
      }
    },

    async updateProductTypes(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The ProductType details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteProductType(vuexContext, URL) {
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
    getProductTypes(state) {
      return state.productTypes;
    },
  },
};
