export default {
  state: () => ({
    fixedAssetcategories: {},
  }),

  mutations: {
    setFixedAssetcategories(state, fixedAssetcategories) {
      state.fixedAssetcategories = fixedAssetcategories;
    },
  },

  actions: {

    async storeFixedAssetCategory(vuexContext, { URL, data }) {
      try {
        await $axios
          .post(`${URL}`, data)
          .then(() => {
            Swal.fire(
              "Changes Saved",
              "The FixedAssetCategory details have been added",
              "success"
            );
          })
           
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async fetchFixedAssetcategories(vuexContext, fixedAssetCategoryObject) {
      try {
        const fixedAssetcategories = await $axios.get(fixedAssetCategoryObject.URL, {
          params: {
            all: fixedAssetCategoryObject.all ?? null,
            page: fixedAssetCategoryObject.page ?? null,
            per_page: fixedAssetCategoryObject.per_page ?? null,
          },
        });
        await vuexContext.commit("setFixedAssetcategories", fixedAssetcategories.data);
      } catch (error) {}
    },

    async getFixedAssetCategory(vuexContext, paramObject) {
      const fixedAssetCategory = await $axios.get(paramObject.URL);
      return fixedAssetCategory;
    },

    async updateFixedAssetCategory(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios
          .post(paramObject.URL, paramObject.data)
          .then(() => {
            Swal.fire(
              "Changes Saved",
              "The FixedAssetCategory details have been updated",
              "success"
            );
          })
          
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async deleteFixedAssetCategory(vuexContext, URL) {
      try {
        const fixedAssetCategory = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return fixedAssetCategory.data;
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
    getFixedAssetcategories(state) {
      return state.fixedAssetcategories;
    },
  },
};
