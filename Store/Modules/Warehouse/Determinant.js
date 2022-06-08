import router from "@/router";
const url = `determinants`;
export default {
  state: () => ({
    determinants: {},
  }),

  mutations: {
    setDeterminants(state, determinants) {
      state.determinants = determinants;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchDeterminants(vuexContext) {
      try {
        const determinants = await $axios.get(`${url}`);
        await vuexContext.commit("setDeterminants", determinants.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storeDeterminant(vuexContext, { data }) {
      document.getElementById("determinant-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "determinant" });
          console.log(res)
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
        
          document.getElementById("determinant-add").disabled = false;
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
    async getDeterminant(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getDeterminantCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updateDeterminant(vuexContext, param) {
      document.getElementById("determinant-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "determinant" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
          document.getElementById("determinant-update").disabled = false;
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

     async deleteDeterminant(vuexContext, params) {
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
    getDeterminants(state) {
      return state.determinants;
    },
  },
};
