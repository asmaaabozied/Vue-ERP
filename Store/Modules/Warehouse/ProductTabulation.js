import router from "@/router";
const url = `product-tabulations`;
export default {
  state: () => ({
    productTabulations: {},
  }),

  mutations: {
    setProductTabulations(state, productTabulations) {
      state.productTabulations = productTabulations;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchProductTabulations(vuexContext) {
      try {
        const productTabulations = await $axios.get(`${url}`);
        await vuexContext.commit("setProductTabulations", productTabulations.data);
        console.log(productTabulations.data)
      } catch (error) {}

    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storeProductTabulation(vuexContext, { data }) {
      document.getElementById("productTabulation-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          router.push({ name: "productTabulation" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
        
          document.getElementById("productTabulation-add").disabled = false;
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
    async getProductTabulation(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getProductTabulationCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updateProductTabulation(vuexContext, param) {
      
      document.getElementById("productTabulation-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "productTabulation" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
          document.getElementById("productTabulation-update").disabled = false;
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

    async deleteProductTabulation(vuexContext, params) {
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
    getProductTabulations(state) {
      return state.productTabulations;
    },
  },
};
