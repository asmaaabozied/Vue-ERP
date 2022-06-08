import router from "@/router";
const url = `price-lists`;
export default {
  state: () => ({
    priceLists: {},
  }),

  mutations: {
    setPriceLists(state, priceLists) {
      state.priceLists = priceLists;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchPriceLists(vuexContext) {
      try {
        const priceLists = await $axios.get(`${url}`);
        await vuexContext.commit("setPriceLists", priceLists.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storePriceList(vuexContext, { data }) {
      document.getElementById("PriceList-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          router.push({ name: "priceList" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
        
          document.getElementById("PriceList-add").disabled = false;
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
    async getPriceList(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getPriceListCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updatePriceList(vuexContext, param) {
      document.getElementById("priceList-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "priceList" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
          document.getElementById("priceList-update").disabled = false;
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

    async deletePriceList(vuexContext, params) {
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
    getPriceLists(state) {
      return state.priceLists;
    },
  },
};
