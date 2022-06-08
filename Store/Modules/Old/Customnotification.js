export default {
    state: () => ({
        customnotifications: {},
    }),

    mutations: {
        setCustomnotifications(state, customnotifications) {
            state.customnotifications = customnotifications;
        },
    },
    actions: {
        async getCustomnotification(vuexContext, paramObject) {
            const customnotification = await $axios.get(paramObject.URL);
            return customnotification;
        },
        async fetchCustomnotifications(vuexContext, paramObject) {
            try {
                const customnotifications = await $axios.get(paramObject.URL,{
                    params: {
                      all: paramObject.all ?? null,
                    },
                  });

                await vuexContext.commit(
                    "setCustomnotifications",
                    customnotifications.data
                );
            } catch (error) {
                throw error.response.data.errors;
            }
        },

        async storeCustomnotifications(vuexContext, { URL, data }) {
            try {
                document.getElementById("customnotification-add").disabled = true;

                await $axios.post(URL, data).then(() => {
                    Swal.fire(
                        "Changes Saved",
                        "The customnotifications details have been added",
                        "success"
                    );
                });
            } catch (error) {
                document.getElementById("customnotification-add").disabled = false;
                throw error.response.data.errors;
            }
        },
        async updateCustomnotifications(vuexContext, paramObject) {
            try {
                await $axios.post(paramObject.URL, paramObject.data).then(() => {
                    Swal.fire(
                        "Changes Saved",
                        "The customnotifications details have been updated",
                        "success"
                    );
                });
            } catch (error) {
                throw error.response.data.errors;
            }
        },
        async deleteCustomnotification(vuexContext, URL) {
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
        getCustomnotifications(state) {
            return state.customnotifications;
        },
    },
}