import router from "@/router";
const url = `wheel-types`;
export default {
  state: () => ({
    trailerWheels: {},
  }),

  mutations: {
    settrailerWheels(state, trailerWheels) {
      state.trailerWheels = trailerWheels;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchtrailerWheels(vuexContext) {
      try {
        const trailerWheels = await $axios.post(`${url}/type`, { vtype: 2 });
        await vuexContext.commit("settrailerWheels", trailerWheels.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storetrailerWheels(vuexContext, { data }) {
      document.getElementById("trailerWheel-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("trailerWheel-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "trailerWheels" });
          vuexContext.dispatch("swalAddSuccess", "Created");
        }
      });
    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     * @returns
     */
    async gettrailerWheel(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    async gettrailerWheelCode(vuexContext) {
      return await $axios.post(`${url}/type`, { vtype: 2 });

    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updatetrailerWheel(vuexContext, param) {
      document.getElementById("trailerWheel-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("trailerWheel-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "trailerWheels" });
          vuexContext.dispatch("swalAddSuccess", "update");
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */

     async deleteTrailerWheels(vuexContext, params) {
      await $axios.post(`${url}/delete`, {_method: "delete", ids: params.ids}).then((res) => {
        if (res.data.status == 200) {
         
           router.go()
            // router.push({ name: params.listUrlName }).catch(()=>{});
            vuexContext.dispatch("swalAddSuccess", "Deleted");
        } else {
            Swal.fire({
                title: "Warrning",
                text: res.data.message,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "ok",
            });
            throw res.data.errors;
        }
    });
  },
   
  },
  getters: {
    gettrailerWheels(state) {
      return state.trailerWheels;
    },
  },
};
