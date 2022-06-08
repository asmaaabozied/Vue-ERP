export default {
  state: () => ({
    subCategories: {},
  }),

  mutations: {
    setSubCategories(state, subCategories) {
      state.subCategories = subCategories;
    },
  },
  actions: {
    async fetchSubCategories(vuexContext, paramObject) {
      try {
        const subCategories = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setSubCategories", subCategories.data);
      } catch (error) {}
    },
    async storeSubCategories(vuexContext, { URL, data }) {
      try {
        return await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The SubCategory details have been added",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async updateSubCategories(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The SubCategories details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteSubCategory(vuexContext, URL) {
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
    getSubCategories(state) {
      return state.subCategories;
    },
  },
};
