export default {
  state: () => ({
    options: {},
  }),

  mutations: {
    setOptions(state, options) {
      state.options = options;
    },
  },
  actions: {
    async fetchOptions(vuexContext, paramObject) {
      try {
        const options = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setOptions", options.data);
      } catch (error) {}
    },

    async storeOptions(vuexContext, { URL, data }) {
      try {
        document.getElementById("option-add").disabled = true;
        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Option details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("option-add").disabled = false;
        throw error.response.data.errors;
      }
    },

    async updateOption(vuexContext, paramObject) {
      try {
         
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Option details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteOption(vuexContext, URL) {
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
    getOptions(state) {
      return state.options;
    },
  },
};
