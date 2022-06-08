import router from "@/router";
const url = `groups`;
export default {
  state: () => ({
    groups: [],
  }),

  mutations: {
    setTempGroups(state, groups) {
      state.groups = groups;
    },
  },
  actions: {
    /**
     *
     * return all warehouse
     */
    async fetchGroups(vuexContext) {
      try {
        const groups = await $axios.get(`${url}`);
        console.log(groups);
        await vuexContext.commit("setTempGroups", groups.data);
      } catch (error) {}
    },
  },
  getters: {
    getTempGroups(state) {
      return state.groups;
    },
  },
};
