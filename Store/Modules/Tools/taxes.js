import router from "@/router";
const url = `taxes`;
export default {
  state: () => ({
    taxes: {},
  }),

  mutations: {
    settaxes(state, taxes) {
      state.taxes = taxes;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchtaxes(vuexContext) {
      try {
        const taxes = await $axios.get(`${url}`);

        await vuexContext.commit("settaxes", taxes.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storetaxes(vuexContext, { data }) {
      document.getElementById("taxes-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "taxes" });
          console.log(res)
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
        
          document.getElementById("taxes-add").disabled = false;
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
    async gettaxe(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
     
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
     
    async updatetaxe(vuexContext, param) {
      document.getElementById("taxes-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "taxe" });
          console.log(res)
          vuexContext.dispatch("swalAddSuccess", "update");
        } else {
        
          document.getElementById("taxes-update").disabled = false;
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

     async deletetaxes(vuexContext, params) {
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
    gettaxes(state) {
      return state.taxes;
    },
  },
};
