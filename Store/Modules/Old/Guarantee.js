export default {
  state: () => ({
    guarantees: {},
  }),
  mutations: {
    setGuarantees(state, guarantees) {
      state.guarantees = guarantees;
    },
  },
  actions: {
    async fetchGuarantees(vuexContext, paramObject) {
      try {
        const guarantees = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setGuarantees", guarantees.data);
      } catch (error) {}
    },
    async storeGuarantees(vuexContext, { URL, data }) {
      try {
        document.getElementById("guarantee-add").disabled = true;
        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Guarantees details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("guarantee-add").disabled = false;
        throw error.response.data.errors;
      }
    },
    async updateGuarantees(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Guarantees details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async getGuarantees(vuexContext, paramObject) {
      const guarantee = await $axios.get(paramObject.URL);
      return guarantee;
    },

    async deleteGuarantee(vuexContext, URL) {
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
    getGuarantees(state) {
      return state.guarantees;
    },
  },
};
