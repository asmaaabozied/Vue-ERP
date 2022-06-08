import router from "@/router";
const url = `accounts`;
export default {
  state: () => ({
    accounts: [],
  }),

  mutations: {
    setTempAccounts(state, accounts) {
      state.accounts = accounts;
    },
  },
  actions: {
    /**
     *
     * return all accounts
     */
    async fetchAccounts(vuexContext) {
      try {
        const accounts = await $axios.get(`${url}`);
        await vuexContext.commit("setTempAccounts", accounts.data);
      } catch (error) {}
    },
  },
  getters: {
    getTempAccounts(state) {
      return state.accounts;
    },
  },
};
