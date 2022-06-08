export default {
    state: () => ({
        invoiceSettings: {},
    }),
    mutations: {
        setInvoiceSetting(state, invoiceSettings) {
            state.invoiceSettings = invoiceSettings;
        },
    },
    actions: {
        async createInvoiceSetting(vuexContext) {
            try {
                const invoiceSettings = await $axios.get("/settings/invoice/create");
                await vuexContext.commit(
                    "setInvoiceSetting",
                    invoiceSettings.data.data
                );
            } catch (error) {
            }
        },
        async storeInvoiceSetting(vuexContext, {URL, data}) {
            try {
                await $axios.post(URL, data).then(() => {
                    Swal.fire("Invoice Setting Added", "Invoice setting has been added", "success");
                });
                router.push({name: URL});
            } catch (error) {
                throw error.response.data.errors;
            }
        },
        async fetchInvoiceSettings(vuexContext) {
            try {
                const invoiceSettings = await $axios.get("/settings/invoice");
                await vuexContext.commit(
                    "setInvoiceSetting",
                    invoiceSettings.data.data
                );
            } catch (error) {
            }
        },
        async showInvoiceSetting(vuexContext, paramObject) {
            try {
                const invoiceSetting = await $axios.get(
                    "/settings/invoice/" + paramObject.data
                );
                return invoiceSetting.data.data;
                // await vuexContext.commit("setInvoiceSetting", invoiceSetting.data.data)
            } catch (error) {
            }
        },
        async updateInvoiceSetting(vuexContext, paramObject) {
            try {
                await $axios.post(paramObject.URL, paramObject.data);
                router.push({name: paramObject.URL});
                Swal.fire(
                    "Changes Saved",
                    "The product details have been updated",
                    "success"
                );
            } catch (error) {
                throw error.response.data.errors;
            }
        },
    },
    getters: {
        getInvoiceSettings(state) {
            return state.invoiceSettings;
        },
    },
};
