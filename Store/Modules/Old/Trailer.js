
export default {
    state: () => ({
        trailers: {},
    }),
  
    mutations: {
      setTrailers(state, trailers) {
        state.trailers = trailers;
      },
    },
    actions: {
      async storeTrailer(vuexContext, {  data }) {
        try {
          document.getElementById("trailer-add").disabled = true;
          await $axios.post("trailers", data).then(() => {
            Swal.fire(
              "Changes Saved",
              "The trailer details have been added",
              "success"
            );
          });
        } catch (error) {
          document.getElementById("trailer-add").disabled = false;
          throw error.response.data.errors;
        }
      },
      async fetchTrailers(vuexContext, trailerObject) {
        try {
          
          const trailers = await $axios.get(trailerObject.URL, {
            params: {
              all: trailerObject.all ?? null,
            },
          });
          await vuexContext.commit("setTrailers", trailers.data);
        } catch (error) {}
      },
      async getTrailer(vuexContext, paramObject) {
  
        const trailer = await $axios.get(paramObject.URL);
       
        return trailer;
      },
      async updateTrailer(vuexContext, paramObject) {
        try {
          await $axios.post(paramObject.URL, paramObject.data).then(() => {
            Swal.fire(
              "Changes Saved",
              "The Trailer details have been updated",
              "success"
            );
          });
        } catch (error) {
          throw error.response.data.errors;
        }
      },
      async deleteTrailers(vuexContext, id) {
        await $axios.delete(`${url}/${id}`).then((res) => {
          if (res.data.status == 500) {
            vuexContext.dispatch("SwalNotDeleted", res.data.message);
            throw res.data.errors;
          } else { 
            vuexContext.dispatch("swalAddSuccess", "Deleted");
          }
        });
      },
    },
    getters: {
      getTrailers(state) {
        return state.trailers;
      },
    },
  };
  