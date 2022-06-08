export default {
    state: () => ({
        tabulations: {},
    }),

    mutations: {
        settabulations(state, tabulations) {
            state.tabulations = tabulations;
        },
    },
    actions: {
        async fetchtabulations(vuexContext, paramObject) {
            try {
                const tabulations = await $axios.get(paramObject.URL,{
                    params: {
                      all: paramObject.all ?? null,
                    },
                  });
                await vuexContext.commit("settabulations", tabulations.data);
                console.log(tabulations)
            } catch (error) {
                console.log(error);
            }
        },

        async storetabulations(vuexContext, { URL, data }) {
            try {
                document.getElementById("tabulation-add").disabled = true;
                await $axios.post(URL, data).then(() => {
                    Swal.fire(
                        "Changes Saved",
                        "The tabulations details have been added",
                        "success"
                    );
                });
            } catch (error) {
                document.getElementById("tabulation-add").disabled = false;
                throw error.response.data.errors;
            }
        },
        async updatetabulations(vuexContext, paramObject) {
            try {
                await $axios.post(paramObject.URL, paramObject.data).then(() => {
                    Swal.fire(
                        "Changes Saved",
                        "The tabulations details have been updated",
                        "success"
                    );
                });
            } catch (error) {
                throw error.response.data.errors;
            }
        },
        async deleteTabulations(vuexContext, URL) {
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
        gettabulations(state) {
            return state.tabulations;
        },
    },
};