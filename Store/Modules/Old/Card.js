export default {
  state: () => ({
    cards: {},
  }),
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    },
  },
  actions: {
    async fetchCards(vuexContext, paramObject) {
      try {
        const cards = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null
          },
        });
        await vuexContext.commit("setCards", cards.data);
      } catch (error) {}
    },
    async getCards(vuexContext, paramObject) {
      const card = await $axios.get(paramObject.URL);
      return card;
    },

    async storeCard(vuexContext, { URL, data }) {
      try {
        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The card details have been added",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },

    async updateCard(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The card details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteCard(vuexContext, URL) {
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
    getCards(state) {
      return state.cards;
    },
  },
};
