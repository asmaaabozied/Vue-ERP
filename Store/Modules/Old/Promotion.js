import router from "@/router";
export default {
  state: () => ({
    promotions: {},
  }),

  mutations: {
    setPromotions(state, promotions) {
      state.promotions = promotions;
    },
  },
  actions: {
    async fetchpromotions(vuexContext, paramObject) {
      try {
        const promotions = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
          },
        });
        await vuexContext.commit("setPromotions", promotions.data);
      } catch (error) {}
    },
    async storePromotion(vuexContext, { URL, data }) {
      document.getElementById("promotion-add").disabled = true;

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
          document.getElementById("promotion-add").disabled = false;

          throw error.response.data.errors;
        });
    },
    async getPromotion(vuexContext, paramObject) {
      const Promotion = await $axios.get(paramObject.URL);
      return Promotion;
    },
    async updatePromotion(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data);
        router.push({ name: paramObject.URL });
        Swal.fire(
          "Changes Saved",
          "The product details have been updated",
          "success"
        );
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deletePromotion(vuexContext, URL) {
      try {
        const Promotion = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return Promotion.data;
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
    getPromotions(state) {
      return state.promotions;
    },
  },
};
