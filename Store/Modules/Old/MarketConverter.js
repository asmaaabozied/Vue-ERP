 
export default {
    state: () => ({
        markets: []
    }), 
    mutations: {
        setMarket(state, markets) {
            state.markets = markets
        }
    }, 
    actions: {
        async fetchCurrencies(vuexContext) {
            try {
                const markets = await $axios.get("/market_converter")
                await vuexContext.commit("setMarket", markets.data.data)

            } catch (error) {
                 
            }
        }, 
    }, 
    getters: {
        getCurrencies(state) {
            return state.markets
        }
    },
 


}