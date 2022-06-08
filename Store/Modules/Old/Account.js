export default {
    state: () => ({
        accounts: {},
    }),

    mutations: {
        setAccounts(state, accounts) {
            state.accounts = accounts;
        },
    },
    actions: {
        async fetchAccounts(vuexContext, accountObject) {
            try {
                const accounts = await $axios.get(accountObject.URL);
                await vuexContext.commit("setAccounts", accounts.data.data);
            } catch (error) {}
        },
        async storeAccounts(vuexContext, { URL, data }) {
            document.getElementById("account-add").disabled = true;
            await $axios
                .post(`${URL}`, data)
                .then(() => {
                    router.push({ name: URL });
                    Swal.fire(
                        "Changes Saved",
                        "The product details have been updated",
                        "success"
                    );
                })
                .catch((error) => {
                    document.getElementById("account-add").disabled = false;
                    throw error.response.data.errors;
                });
        },
        async showAccount(vuexContext, paramObject) {
            try {
                const account = await $axios.get("/accounts/" + paramObject.data)
                return account.data.data;
            } catch (error) {
                console.log(error)
            }
        },
        async updateAccount(vuexContext, paramObject) {
            try {
                console.log(paramObject);
                await $axios.post(paramObject.URL, paramObject.data);
                router.push({ name: paramObject.URL });
                Swal.fire(
                    "Changes Saved",
                    "The product details have been updated",
                    "success"
                );
            } catch (error) {
                throw error.response.data.errors;
            }
        },
        async deleteAccount(vuexContext, URL) {
            try {
                const Branch = await $axios.delete(URL);
                vuexContext.dispatch("swalSuccess", "Deleted");
                return Branch.data;
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
        getAccounts(state) {
            return state.accounts;
        },
    },
};