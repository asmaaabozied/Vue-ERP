import router from "@/router";

export default {
  state: () => ({
    invoiceinstallments: {},
  }),

  mutations: {
    setInvoiceInstallments(state, invoiceinstallments) {
      state.invoiceinstallments = invoiceinstallments;
    },
  },
  actions: {
    async fetchInvoiceInstallments(vuexContext, paramObject) {
      try {
        const invoiceinstallments = await $axios.get(paramObject.URL);
        await vuexContext.commit(
          "setInvoiceInstallments",
          invoiceinstallments.data
        );
      } catch (error) {}
    },
    async getInvoiceInstallment(vuexContext, paramObject) {
      const InvoiceInstallment = await $axios.get(paramObject.URL);
      return InvoiceInstallment;
    },
    async storeInvoiceInstallments(vuexContext, { URL, data }) {
      try {
        console.log("invoiceinstallments?");
        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The invoiceinstallments details have been added",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async updateInvoiceInstallments(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The invoiceinstallments details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteInvoiceInstallments(vuexContext, URL) {
      try {
        await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return true;
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
    getInvoiceInstallments(state) {
      return state.invoiceinstallments;
    },
  },
};
