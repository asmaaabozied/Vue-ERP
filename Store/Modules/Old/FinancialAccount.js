export default {
          state: () => ({
            financialaccounts: {},
          }),
          mutations: {
            setfinancialaccounts(state, financialaccounts) {
              state.financialaccounts = financialaccounts;
            },
          },
          actions: {
            async fetchfinancialaccounts(vuexContext, paramObject) {
              try {
                const financialaccounts = await $axios.get(paramObject.URL, {
                  params: {
                    all: paramObject.all ?? null,
                   
                  },
                });
                await vuexContext.commit("setfinancialaccounts", financialaccounts.data);
                
               
              } catch (error) {}
            },

            async getfinancialaccount(vuexContext, paramObject) {
              const financialaccount = await $axios.get(paramObject.URL);
              return financialaccount;
            },
          },
          getters: {
            getfinancialaccounts(state) {
              return state.financialaccounts;
            },
          },
        };
        