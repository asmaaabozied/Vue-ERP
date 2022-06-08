import router from "../../../src/router";
const url = `billTypesGroups`

export default {

    state: () => ({
        billTypesGroups: {},
    }),

    mutations: {
        setBillTypesGroups(state, billTypesGroups) {
            state.billTypesGroups = billTypesGroups;
        },
    },

    actions: {

        async fetchBillTypesGroups(vueContext) {
            try {
                const billTypesGroups = await $axios.get(`${url}`);
                await vueContext.commit("setBillTypesGroups", billTypesGroups.data)
            } catch (error) { }
        },

        async storebillTypesGroups(vueContext, { data }) {
            document.getElementById("billTypeGroup-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {
                if (res.data.status == 200) {
                    router.push({ name: "billTypesGroups" });
                    vueContext.dispatch("swalAddSuccess", "Created");
                } else {
                    document.getElementById("billTypeGroup-add").disabled = false;
                    throw res.data.errors;
                }
            })
        },

        async getbillTypesGroups(vueContext, param) {
            return await $axios.get(`${url}/${param.Id}`);
        },

        async getbillTypesGroupsCode() {
            return await $axios.get(`${url}/code`);
        },

        async updatebillTypesGroups(vueContext, param) {
            document.getElementById("billTypeGroup-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
                if (res.data.status == 422) {
                    document.getElementById("billTypesGroups-update").disabled = false;
                    throw res.data.errors
                } else {
                    router.push({ name: "billTypesGroups" });
                    vueContext.dispatch("swalAddSuccess", "Updated")
                }
            });
        },

        async deletebillTypesGroups(vueContext, id) {
            await $axios.delete(`${url}/${id}`).then((res) => {
                if (res.data.status == 500) {
                    vueContext.dispatch("SwalNotDeleted", res.data.message);
                    throw res.data.errors
                } else {
                    vueContext.dispatch("swalAddSuccess", "Deleted");
                }
            });
        },
    },

    getters: {
        getbillTypesGroups(state) {
            return state.billTypesGroups;
        },
    },
}