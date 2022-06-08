import router from "@/router";
export default {
  state: () => ({
    discounts: {},
  }),
  mutations: {
    setDiscounts(state, discounts) {
      state.discounts = discounts;
    },
  },
  actions: {
    async fetchDiscounts(vuexContext, paramObject) {
      try {
        const discounts = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setDiscounts", discounts.data);
      } catch (error) {}
    },
    async storeDiscount(vuexContext, { URL, data }) {
      document.getElementById("discount-add").disabled = true;
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
          document.getElementById("discount-add").disabled = false;

          throw error.response.data.errors;
        });
    },

    async updateDiscount(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Discount details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteDiscount(vuexContext, URL) {
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
    getDiscounts(state) {
      return state.discounts;
    },
  },
};
