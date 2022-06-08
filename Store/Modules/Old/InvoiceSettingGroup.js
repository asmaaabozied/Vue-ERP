export default {
  state: () => ({
    invoiceSettingGroups: {},
  }),

  mutations: {
    setInvoiceSettingGroups(state, invoiceSettingGroups) {
      state.invoiceSettingGroups = invoiceSettingGroups;
    },
  },

  actions: {

    async storeInvoiceSettingGroup(vuexContext, { URL, data }) {
      try {
        await $axios
          .post(`${URL}`, data)
          .then(() => {
            Swal.fire(
              "Changes Saved",
              "The InvoiceSettingGroup details have been added",
              "success"
            );
          })
           
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async fetchInvoiceSettingGroups(vuexContext, invoiceSettingGroupObject) {
      try {
        const invoiceSettingGroups = await $axios.get(invoiceSettingGroupObject.URL, {
          params: {
            all: invoiceSettingGroupObject.all ?? null,
            page: invoiceSettingGroupObject.page ?? null,
            per_page: invoiceSettingGroupObject.per_page ?? null,
          },
        });
        await vuexContext.commit("setInvoiceSettingGroups", invoiceSettingGroups.data);
      } catch (error) {}
    },

    async getInvoiceSettingGroup(vuexContext, paramObject) {
      const invoiceSettingGroup = await $axios.get(paramObject.URL);
      return invoiceSettingGroup;
    },

    async updateInvoiceSettingGroup(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios
          .post(paramObject.URL, paramObject.data)
          .then(() => {
            Swal.fire(
              "Changes Saved",
              "The InvoiceSettingGroup details have been updated",
              "success"
            );
          })
          
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async deleteInvoiceSettingGroup(vuexContext, URL) {
      try {
        const invoiceSettingGroup = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return invoiceSettingGroup.data;
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
    getInvoiceSettingGroups(state) {
      return state.invoiceSettingGroups;
    },
  },
};
