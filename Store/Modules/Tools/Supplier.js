import router from "@/router";
const url = `suppliers`;
export default {
  state: () => ({
    Supplier: {},
  }),

  mutations: {
    setsuppliers(state, suppliers) {
      state.suppliers = suppliers;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
     async fetchsuppliers(vueContext) {
      try {
          const suppliers = await $axios.get(`${url}`);
          await vueContext.commit("setsuppliers", suppliers.data)
      } catch (error) { }
  },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storesuppliers(vuexContext, { data }) {
      document.getElementById("Supplier-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("Supplier-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "Suppliers" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     * @returns
     */
    async getsuppliers(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getsuppliersCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updatesuppliers(vuexContext, param) {
      document.getElementById("suppliers-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("suppliers-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "Suppliers" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */

    
     async deletesuppliers(vueContext, params) {
      
      await $axios.post(`${url}/delete`, {_method: "delete", ids: params.ids})
          .then(res => {
              if (res.data.status == 200) {
                  router.go()
                  vueContext.dispatch("swalAddSuccess", "Deleted")
              } else {
                  swal.fire({
                      title: "Warning",
                      text: res.data.message,
                      confirmButtonColor: "#3085d6",
                      confirmButtonText: "ok",

                  });

                  throw res.data.errors
              }
          });
  },
  },
  getters: {
    getsuppliers(state) {
      return state.suppliers;
    },
  },
};
