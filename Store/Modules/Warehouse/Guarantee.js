import router from "../../../src/router";
const url = `guarantees`

export default {

    state: () => ({
        guarantees: {},
    }),

    mutations: {
        setGuarantees(state, guarantees) {
            state.guarantees = guarantees;
        },
    },

    actions: {

        async fetchGuarantees(vueContext) {
            try {
                const guarantees = await $axios.get(`${url}`);
                await vueContext.commit("setGuarantees", guarantees.data)
            } catch (error) {}
        },

        async storeGuarantee(vueContext, { data }) {
            document.getElementById("guarantee-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {

                if (res.data.status == 200) {
                    router.push({ name: "guarantees"});
                    vueContext.dispatch("swalAddSuccess", "Created");
                } else {
                    document.getElementById("guarantee-add").disabled = false;
                    throw res.data.errors;
                }
            })
        },

        async getGuarantee(vueContext, param) {
            return await $axios.get(`${url}/${param.Id}`);
        },

        async getGuaranteeCode() {
            return await $axios.get(`${url}/code`);
        },

        async updateGuarantee(vueContext, param) {
            document.getElementById("guarantee-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {

                if (res.data.status == 422) {
                    document.getElementById("guarantee-update").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({ name: "guarantees" });
                    vueContext.dispatch("swalAddSuccess", "Updated");
                }
            })
        },

        async deleteGuarantee(vueContext, params) {
            await $axios.post(`${url}/delete`, {_method:"delete", ids:params.ids})
                .then((res) => {
                    if (res.data.status == 200) {
                        router.go()
                        vueContext.dispatch("swalAddSuccess", "Deleted");
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
        getGuarantees(state) {
            return state.guarantees;
        },
    },
}