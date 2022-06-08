export default {
          state: () => ({
                    delecatecommissions: {},
          }),
        
          mutations: {
             setDelecateCommissions(state, delecatecommissions) {
              state.delecatecommissions = delecatecommissions;
            },
          },
          actions: {
            async storeDelecateCommission(vuexContext, { URL, data }) {
              try {
                await $axios
                  .post(`${URL}`, data)
                  .then(() => {
                    Swal.fire(
                      "Changes Saved",
                      "The DelecateCommission details have been added",
                      "success"
                    );
                  })
                  
              } catch (error) {
                throw error.response.data.errors;
              }
            },
            async fetchDelecateCommissions(vuexContext, delecatecommissionObject) {
              try {
               
                const delecatecommissions = await $axios.get(delecatecommissionObject.URL, {
                  params: {
                    all: delecatecommissionObject.all ?? null,
                   
                  },
                });
               // console.log(delecatecommissions.data);
                await vuexContext.commit("setDelecateCommissions",delecatecommissions.data);
              } catch (error) {}
            },
            async getDelegateCommission(vuexContext, delecateCommissionObject) {
              const delecatecommission = await $axios.get(delecateCommissionObject.URL);
              return delecatecommission;
            },
            async updateDelecateCommission(vuexContext, delecateCommissionObject) {
              try {
                console.log(delecateCommissionObject);
                await $axios
                  .post(delecateCommissionObject.URL, delecateCommissionObject.data)
                  .then(() => {
                    Swal.fire(
                      "Changes Saved",
                      "The DelecateCommission details have been updated",
                      "success"
                    );
                  })
              
              } catch (error) {
                throw error.response.data.errors;
              }
            },
            async deleteDelecateCommissions(vuexContext, URL) {
              try {
                const delecatecommission = await $axios.delete(URL);
                vuexContext.dispatch("swalSuccess", "Deleted");
                return delecatecommission.data;
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
            getDelegateCommissions(state) {
              return state.delecatecommissions;
            },
          },
        };
        