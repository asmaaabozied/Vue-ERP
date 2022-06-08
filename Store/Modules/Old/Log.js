import router from "@/router";

export default {
  state: () => ({
    logsActivities: {},
  }),

  mutations: {
    setlogsActivities(state, logsActivities) {
      state.logsActivities = logsActivities;
    },
  },
  actions: {
    async fetchlogsActivities(vuexContext, paramObject) {
      try {
        const logsActivities = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
            page: paramObject.page ?? null,
            per_page: paramObject.per_page ?? null,
          },
        });
        await vuexContext.commit("setlogsActivities", logsActivities.data);
      } catch (error) {}
    },
  },
  getters: {
    getlogsActivities(state) {
      return state.logsActivities;
    },
  },
};
