export default {
  state: () => ({
    categories: [],
  }),

  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async fetchCategories(vuexContext, paramObject) {
      try {
        const categories = await $axios.get(paramObject.URL);
        
        await vuexContext.commit("setCategories", categories.data);
      } catch (error) {}
    },
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
};
