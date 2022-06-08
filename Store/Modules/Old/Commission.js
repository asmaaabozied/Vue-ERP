import router from "@/router";
export default {
          state: () => ({
            commissions: {},
          }),
          mutations: {
            setCommissions(state, commissions) {
              state.commissions = commissions;
            },
          },
          actions: {
            async fetchCommissions(vuexContext, paramObject) {
              try {
                       
                const commissions = await $axios.get(paramObject.URL, {
                  params: {
                    all: paramObject.all ?? null,
                   
                  },
                });
               
                await vuexContext.commit("setCommissions", commissions.data);
               
              } catch (error) {}
            },

            async getCommission(vuexContext, paramObject) {
              const commission = await $axios.get(paramObject.URL);
             
             
              return commission;
            },
          },
          getters: {
            getCommissions(state) {
                     
              return state.commissions;
            },
          },
        };
        