import router from "@/router";
const url = `wheel-types`;
export default {
  state: () => ({
    carWheels: {},
  }),

  mutations: {
    setcarWheels(state, carWheels) {
      state.carWheels = carWheels;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchcarWheels(vuexContext) {
      try {
        const carWheels = await $axios.post(`${url}/type`, { vtype: 1 });
        await vuexContext.commit("setcarWheels", carWheels.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
     async storecarWheels(vuexContext, { data }) {
      document.getElementById("carWheel-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "carWheels" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
        
          document.getElementById("carWheel-add").disabled = false;
          throw res.data.errors;
        }
      });
    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     * @returns
     */
    async getcarWheel(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    async getcarWheelCode(vuexContext) {
      return await $axios.post(`${url}/type`, { vtype: 1 });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */

     async updatecarWheel(vuexContext, param) {
      document.getElementById("carWheel-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "carWheels" });
          vuexContext.dispatch("swalAddSuccess", "update");
        } else {
        
          document.getElementById("carWheel-update").disabled = false;
          throw res.data.errors;
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */
    async deletecarWheel(vuexContext, params) {
      await $axios.post(`${url}/delete`,{_method:"delete",ids:params.ids}).then((res) => {
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
    getcarWheels(state) {
      return state.carWheels;
    },
  },
};
