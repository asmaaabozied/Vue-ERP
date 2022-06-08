import router from "@/router";
const url = `periods`;

export default {
  state: () => ({
    Period: {},
    accounts: {},
  }),

  mutations: {
    setPeriod(state, Period) {
      state.Period = Period;
    },
    setAccounts(state, accounts) {
      state.accounts = accounts;
    },
  },

  actions: {
    /**
     *
     * @param {*} vuexContext
     */

    async fetchPeriod(vuexContext) {
      try {
        const Period = await $axios.get(`${url}`);
        await vuexContext.commit("setPeriod", Period.data);
      } catch (error) {}
    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */

    async storePeriod(vuexContext, { data }) {
      // document.getElementById("add-period").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "periods" });
          vuexContext.dispatch("swalAddSuccess", "Created");
        } else {
          // document.getElementById("add-period").disabled = false;
          throw res.data.errors;
        }
      });
    },

    /** 
     *
     * @param {*} vuexContext
     * @param {*} param
     * @returns
     */

    async getPeriod(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },

    async getPeriodCode(vuexContext) {
      return await $axios.get("periods/code");
    },

    async updatePeriod(vuexContext, param) {
      // document.getElementById("period-edit").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "periods" });
          vuexContext.dispatch("swalAddSuccess", "Updated");
        } else {
          // document.getElementById("period-edit").disabled = false;
          throw res.data.errors;
        }
      });
    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */
    async deletePeriod(vuexContext, id) {
      await $axios.delete(`${url}/${id}`).then((res) => {
        if (res.data.status == 200) {
          vuexContext.dispatch("swalAddSuccess", "Deleted");
        } else {
          vuexContext.dispatch("SwalNotDeleted", res.data.message);
          throw res.data.errors;
        }
      });
    },

    async fetchAccounts(vuexContext, paramObject) {
      try {
        const Accounts = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
          },
        });
        await vuexContext.commit("setAccounts", accounts.data);
      } catch (error) {}
    },

    async getAccount(vuexContext, paramObject) {
      const account = await $axios.get(paramObject.URL);
      return account;
    },
  },

  getters: {
    getPeriod(state) {
      return state.Period;
    },
  },
};
