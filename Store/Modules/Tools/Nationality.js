import router from "../../../src/router";
const url = `nationalities`

export default {

    state: () => ({
        nationalities: {}
    }),

    mutations: {
        setNationalities(state, nationalities) {
            state.nationalities = nationalities;
        },
    },

    actions: {

        async fetchNationalities(vueContext) {
            try {
                const nationalities = await $axios.get(`${url}`);
                await vueContext.commit("setNationalities", nationalities.data)
            } catch (error) { }
        },

        async storeNationality(vueContext, {data}) {
            document.getElementById("nationality-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {

                if (res.data.status == 200) {
                    router.push({ name: "nationalities" });
                    vueContext.dispatch("swalAddSuccess", "Created");
                } else {
                    document.getElementById("nationality-add").disabled = false;
                    throw res.data.errors
                }
            })
        },

        async getNationality(vueContext, param) {
            return await $axios.get(`${url}/${param.Id}`);
        },

        async getNationalityCode() {
            return await $axios.get(`${url}/code`);
        },

        async updateNationality(vueContext, param) {
            document.getElementById("nationality-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then(res => {
                if (res.data.status == 422) {
                    document.getElementById("nationality-update").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({ name: "nationalities"});
                    vueContext.dispatch("swalAddSuccess", "Updated")
                }
            })

        },

        async deleteNationality(vueContext, params) {
            await $axios.post(`${url}/delete`, {_method: "delete", ids: params.ids})
                .then(res => {
                    if (res.data.status == 200) {
                        router.go()
                        vueContext.dispatch("swalAddSuccess", "Deleted")
                    } else {
                        swal.fire({
                            title: "Warning",
                            text: res.data.message,
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "ok",

                        });

                        throw res.data.errors
                    }
                });
        },
    },

    getters: {
        getNationalities(state) {
            return state.nationalities
        },
    },
}