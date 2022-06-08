import router from "@/router";
export default {
  state: () => ({
    masters: {},
  }),

  mutations: {
    setmasters(state, masters) {
      state.masters = masters;
    },
  },
  actions: {
    async fetchmasters(vuexContext, paramObject) {
      try {
        const masters = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
          },
        });

        await vuexContext.commit("setmasters", masters.data);
      } catch (error) {}
    },
    async storeMasters(vuexContext, { URL, data }) {
      document.getElementById("Master-add").disabled = true;
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
          document.getElementById("Master-add").disabled = false;

          throw error.response.data.errors;
        });
    },
    async updateMaster(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The masters details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async deleteMaster(vuexContext, URL) {
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
    getmasters(state) {
      return state.masters;
    },
  },
};
