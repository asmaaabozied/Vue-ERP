export default {
  state: () => ({
    fixedAssetCats: {},
  }),

  mutations: {
    setFixedAssetCats(state, fixedAssetCats) {
      state.fixedAssetCats = fixedAssetCats;
    },
  },
  actions: {
    async storeFixedAssetCat(vuexContext, { URL, data }) {
      try {
        await $axios
          .post(`${URL}`, data)
          .then(() => {
            Swal.fire(
              "Changes Saved",
              "The FixedAssetCat details have been added",
              "success"
            );
          })
           
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async fetchFixedAssetCats(vuexContext, fixedAssetCatObject) {
      try {
        const fixedAssetCats = await $axios.get(fixedAssetCatObject.URL, {
          params: {
            all: fixedAssetCatObject.all ?? null,
            page: fixedAssetCatObject.page ?? null,
            per_page: fixedAssetCatObject.per_page ?? null,
          },
        });
        await vuexContext.commit("setFixedAssetCats", fixedAssetCats.data);
      } catch (error) {}
    },
    async getFixedAssetCat(vuexContext, paramObject) {
      const fixedAssetCat = await $axios.get(paramObject.URL);
      return fixedAssetCat;
    },
    async updateFixedAssetCat(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios
          .post(paramObject.URL, paramObject.data)
          .then(() => {
            Swal.fire(
              "Changes Saved",
              "The FixedAssetCat details have been updated",
              "success"
            );
          })
          
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteFixedAssetCat(vuexContext, URL) {
      try {
        const fixedAssetCat = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return fixedAssetCat.data;
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
    getFixedAssetCats(state) {
      return state.fixedAssetCats;
    },
  },
};
