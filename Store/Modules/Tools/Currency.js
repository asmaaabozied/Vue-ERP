import router from "@/router";
const url = `currencies`;
export default {
  state: () => ({
    currencies: {},
  }),
  mutations: {
    setCurrencies(state, currencies) {
      state.currencies = currencies;
    },
  },
  actions: {


    async fetchCurrencies(vuexContext) {
      try {
        const currencies = await $axios.get(`${url}`);
        await vuexContext.commit("setCurrencies", currencies.data);
      } catch (error) {}
    },
    async getCurrenciesCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    async getCurrencies(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },

    async storeCurrencies(vuexContext, { URL, data }) {

      document.getElementById("Currency-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        console.log(res);
        if (res.data.status == 200) {

          router.push({name: "currencies"});
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
          document.getElementById("Currency-add").disabled = false;
          console.log(res.data.errors);
          throw res.data.errors;
        }
      });
    },

    async updateCurrencies(vuexContext, param) {

      document.getElementById("Currency-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "currencies" });
          vuexContext.dispatch("swalAddSuccess", "update");
        } else {

          document.getElementById("Currency-update").disabled = false;
          throw res.data.errors;
          console.log(res.data.errors);
        }
      });
    },

    async deleteCurrency(vuexContext, params) {
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
    getCurrencies(state) {
      return state.currencies;
    },
  },
};
