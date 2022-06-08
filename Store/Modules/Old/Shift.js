import router from "@/router";
export default {
  state: () => ({
    shifts: {},
  }),

  mutations: {
    setShifts(state, shifts) {
      state.shifts = shifts;
    },
  },
  actions: {
    async fetchShifts(vuexContext, paramObject) {
      try {
        const shifts = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setShifts", shifts.data);
      } catch (error) {}
    },
    async storeShift(vuexContext, { URL, data }) {
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
          throw error.response.data.errors;
        });
    },
    async updateShift(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The shify details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async deleteShif(vuexContext, URL) {
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
    getShifts(state) {
      return state.shifts;
    },
  },
};
