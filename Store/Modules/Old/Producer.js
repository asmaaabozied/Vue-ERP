export default {
  state: () => ({
    producers: {},
  }),
  mutations: {
    setProducers(state, producers) {
      state.producers = producers;
    },
  },
  actions: {
    async fetchProducers(vuexContext, paramObject) {
      try {
        const producers = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });
        await vuexContext.commit("setProducers", producers.data);
      } catch (error) {}
    },
    async storeProducer(vuexContext, { URL, data }) {
      try {
        document.getElementById("producer-add").disabled = true;

        await $axios.post(`${URL}`, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Producer details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("producer-add").disabled = false;

        throw error.response.data.errors;
      }
    },
    async getProducer(vuexContext, paramObject) {
      const producer = await $axios.get(paramObject.URL);
      return producer;
    },
    async updateProducer(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Producer details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteProducer(vuexContext, URL) {
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
    getProducers(state) {
      return state.producers;
    },
  },
};
