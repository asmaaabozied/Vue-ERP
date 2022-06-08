import router from "../../../src/router";
const url = `countries`

export default {

    state: () => ({
        countries: {}
    }),

    mutations: {
        setCountries(state, countries) {
            state.countries = countries;
        },
    },

    actions: {

        async fetchCountries(vueContext) {
            try {
                const countries = await $axios.get(`${url}`);
                await vueContext.commit("setCountries", countries.data)
            } catch (error) { }
        },

        async storeCountry(vueContext, {data}) {
            document.getElementById("countries-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {

                if (res.data.status == 200) {
                    router.push({ name: "countries" });
                    vueContext.dispatch("swalAddSuccess", "Created");
                } else {
                    document.getElementById("countries-add").disabled = false;
                    throw res.data.errors
                }
            })
        },

        async getCountry(vueContext, param) {
            return await $axios.get(`${url}/${param.Id}`);
        },

        async getCountryCode() {
            return await $axios.get(`${url}/code`);
        },

        async updateCountry(vueContext, param) {
            document.getElementById("country-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then(res => {
                if (res.data.status == 422) {
                    document.getElementById("country-update").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({ name: "countries"});
                    vueContext.dispatch("swalAddSuccess", "Updated")
                }
            })

        },

        async deleteCountry(vueContext, params) {
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
        getCountries(state) {
            return state.countries
        },
    },
}