import router from "@/router";

const url = `customers`;
export default {
    state: () => ({
        Customer: [],
    }),

    mutations: {
        setCustomer(state, Customer) {
            state.Customer = Customer;
        },
    },
    actions: {
        /**
         *
         * return all warehouse
         */
        async fetchCustomer(vuexContext) {
            try {
                const Customer = await $axios.get(`${url}`);
                await vuexContext.commit("setCustomer", Customer.data);
            } catch (error) {
            }
        },
        /**
         *
         *
         * fetch parents
         */
        /**
         *
         * @param {*} vuexContext
         * @param {data} data
         * store ware haoue data
         */
        async storeCustomer(vuexContext, {data}) {

            document.getElementById("Customer-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {
                console.log(res);
                if (res.data.status == 200) {

                    router.push({name: "customers"});
                    vuexContext.dispatch("swalAddSuccess", "saved");
                } else {
                    console.log(data)
                    console.log(res.data.errors)
                    document.getElementById("Customer-add").disabled = false;
                    console.log(res.data.errors);
                    throw res.data.errors;
                }
            });
        },
        /**
         *
         * @param {*} vuexContext
         * @param {id} id
         * @returns warehose
         */
        async getCustomer(vuexContext, param) {
            return await $axios.get(`${url}/${param.Id}`);
        },
        /**
         *
         * @param {*} vuexContext
         * @returns
         */
        async getCustomerCode(vuexContext) {
            return await $axios.get(`${url}/code`);
        },
        /**
         *
         * @param {*} vuexContext
         * @param {data} data
         * @param {id} id
         * update ware house data
         */
        async updateCustomer(vuexContext, param) {
            document.getElementById("Customer-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
                if (res.data.status == 422) {
                    document.getElementById("Customer-update").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({name: "customers"});
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
        async deleteCustomer(vuexContext, params) {
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
        getCustomer(state) {
            return state.Customer;
        },
    },
};
