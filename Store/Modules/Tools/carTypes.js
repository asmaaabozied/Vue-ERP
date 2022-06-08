import router from "@/router";
const url = `vehicle-types`;
export default {
  state: () => ({
    carTypes: {},
  }),

  mutations: {
    setcarTypes(state, carTypes) {
      state.carTypes = carTypes;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchcarTypes(vuexContext) {
      try {
        const carTypes = await $axios.post(`${url}/type`, { vtype: 1 });

        await vuexContext.commit("setcarTypes", carTypes.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storecarTypes(vuexContext, { data }) {
      document.getElementById("carType-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "carTypes" });
          console.log(res)
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
        
          document.getElementById("carType-add").disabled = false;
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
    async getcarType(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    async getCarTypeCode(vuexContext) {
      return await $axios.post(`${url}/type`, { vtype: 1 });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
     
    async updatecarType(vuexContext, param) {
      document.getElementById("carType-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "carTypes" });
           vuexContext.dispatch("swalAddSuccess", "update");
        } else {
        
          document.getElementById("carType-update").disabled = false;
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

     async deleteCarType(vuexContext, params) {
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
    getcarTypes(state) {
      return state.carTypes;
    },
  },
};
