export default {
  state: () => ({
    paymentways: {},
  }),

  mutations: {
    setPaymentWays(state, paymentways) {
      state.paymentways = paymentways;
    },
  },
  actions: {
    async storePaymentWay(vuexContext, { URL, data }) {
      try {
        document.getElementById("paymentway-add").disabled = true;
        await $axios.post(`${URL}`, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The paymentway details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("paymentway-add").disabled = false;
        throw error.response.data.errors;
      }
    },
    async fetchPaymentWays(vuexContext, paymentwayObject) {
      try {
        const paymentways = await $axios.get(paymentwayObject.URL, {
          params: {
            all: paymentwayObject.all ?? null,
          },
        });
        await vuexContext.commit("setPaymentWays", paymentways.data);
      } catch (error) {}
    },
    async getPaymentWay(vuexContext, paramObject) {
      const paymentway = await $axios.get(paramObject.URL);
      return paymentway;
    },
    async updatePaymentWay(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The PaymentWay details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deletePaymentWays(vuexContext, URL) {
      try {
        const paymentway = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return paymentway.data;
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
    getPaymentWays(state) {
      return state.paymentways;
    },
  },
};
