export default {
    state: () => ({
        invoice: {},

    }),
    mutations: {
        setInvoice(state, invoice) {
            state.invoice = invoice;
        },
    },
    actions: {
        async createInvoice(vuexContext, paramObject) {
            try {
                const invoice = await $axios.get(paramObject.URL);
                await vuexContext.commit("setInvoice", invoice.data.data);
            } catch (error) {
            }
        },

        async showInvoice(vuexContext, paramObject) {
            try {
                const invoice = await $axios.get("/invoice/" + paramObject.data)
                return invoice.data.data;
            } catch (error) {
                console.log(error)
            }
        },
        async storeInvoice(vuexContext, {URL, data}) {
            try {
                document.getElementById("invoice-add").disabled = true;
                await $axios.post(URL, data).then(() => {
                    Swal.fire("Invoice Added", "Invoice has been added", "success");
                });
                router.push({name: URL});
            } catch (error) {
                document.getElementById("invoice-add").disabled = false;
                throw error.response.data.errors;
            }
        },
        async fetchInvoice(vuexContext, paramObject) {
            try {
                const invoice = await $axios.get(paramObject.URL);
                await vuexContext.commit("setInvoice", invoice.data);
            } catch (error) {
            }
        },
        async updateInvoice(vuexContext, paramObject) {
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
        async getInvoiceBySetting(vuexContext, paramObject) {
            try {
                const invoices = await $axios.get(
                    "/invoice/getBySetting/" + paramObject.data
                );
                return invoices.data.data;
            } catch (error) {
            }
        },
        async getInvoiceDetails(vuexContext, paramObject) {
            try {
                const invoice = await $axios.get(
                    paramObject.URL + '/' + paramObject.data
                );
                return invoice.data.data;
            } catch (error) {
            }
        },
        async getInvoiceById(vuexContext, paramObject) {
            const Invoice = await $axios.get(paramObject.URL);
            return Invoice;
        },
        async deleteInvoice(vuexContext, URL) {
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
        getInvoice(state) {
            return state.invoice;
        },
    },
};
