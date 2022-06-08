export default {
  state: () => ({
    cities: {},
  }),

  mutations: {
    setCities(state, cities) {
      state.cities = cities;
    },
  },
  actions: {
    async storeCity(vuexContext, { URL, data }) {
      try {
        document.getElementById("city-add").disabled = true;

        await $axios.post(`cities`, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The City details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("city-add").disabled = false;

        throw error.response.data.errors;
      }
    },
    async fetchCities(vuexContext, cityObject) {
      try {
        const cities = await $axios.get(cityObject.URL, {
          params: {
            all: cityObject.all ?? null,
          },
        });
        await vuexContext.commit("setCities", cities.data);
      } catch (error) {}
    },
    async getCity(vuexContext, paramObject) {
      const city = await $axios.get(paramObject.URL);
      return city;
    },
    async updateCity(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The City details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteCity(vuexContext, URL) {
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
    getCities(state) {
      return state.cities;
    },
  },
};
