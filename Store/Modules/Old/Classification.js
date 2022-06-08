export default {
  state: () => ({
    classifications: {},
  }),
  mutations: {
    setClassifications(state, classifications) {
      state.classifications = classifications;
    },
  },
  actions: {
    async fetchClassifications(vuexContext, paramObject) {
      try {
        const classifications = await $axios.get(paramObject.URL);
        await vuexContext.commit("setClassifications", classifications.data);
      } catch (error) {}
    },
    async getClassification(vuexContext, paramObject) {
      const classification = await $axios.get(paramObject.URL,{
        params: {
          all: paramObject.all ?? null,
        },
      });
      return classification;
    },

    async storeClassification(vuexContext, { URL, data }) {
      try {
        document.getElementById("classification-add").disabled = true;

        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Classification details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("classification-add").disabled = false;

        throw error.response.data.errors;
      }
    },

    async updateClassification(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Classification details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteClassification(vuexContext, URL) {
        try {
          const city = await $axios.delete(URL);
          vuexContext.dispatch("swalSuccess", "Deleted");
          return city.data;
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
    getClassifications(state) {
      return state.classifications;
    },
  },
};
