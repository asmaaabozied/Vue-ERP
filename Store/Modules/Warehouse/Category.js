import router from "@/router";
const url = `product-categories`;

export default {
  state: () => ({
    categories: [],
}),

  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async fetchCategories(vuexContext, paramObject) {
      try {
        const categories = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setCategories", categories.data);
      } catch (error) {}
    },
    async storeCategories(vuexContext, { data }) {
      // document.getElementById("add-period").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "categories" });
          vuexContext.dispatch("swalAddSuccess", "Created");
        } else {
          // document.getElementById("add-period").disabled = false;
          throw res.data.errors;
        }
      });
    },
    async updateCategories(vuexContext, param) {
      // document.getElementById("period-edit").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "categories" });
          vuexContext.dispatch("swalAddSuccess", "Updated");
        } else {
          // document.getElementById("period-edit").disabled = false;
          throw res.data.errors;
        }
      });
    },
    async getCategory(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    async deleteCategory(vuexContext, URL) {
      try {
        const category = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return category.data;
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

    async getCategoryCode(vuexContext) {
      return await $axios.get("product-categories/code");
    },
    async getMainCategories(vuexContext) {
      return await $axios.get("product-categories");
    },
    async getUnits(vuexContext) {
      return await $axios.get("product-categories/units");
    },
    async getTaxes(vuexContext) {
      return await $axios.get("taxes");
    },
    async getConstants(vuexContext) {
      return await $axios.get("product-categories/constants");
    },
    async getAccounts(vuexContext) {
      return await $axios.get("accounts");
    },

  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
};