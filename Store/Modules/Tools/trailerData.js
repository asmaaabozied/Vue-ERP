import router from "@/router";

const url = `vehicle-data`;
const urlcode = "vehicle-data/get-cover?vehicle_id=";
export default {
    state: () => ({
      trailerData: {},
    }),

    mutations: {
        settrailerData(state, trailerData) {
            state.trailerData = trailerData;
        },
    },
    actions: {

        async fetchtrailerData(vuexContext) {
            try {
                const trailerData = await $axios.post(`${url}/type`, {vtype: 2});
                await vuexContext.commit("settrailerData", trailerData.data);
            } catch (error) {
            }
        },

        async gettrailerData(vuexContext, param) {

            return await $axios.get(`${url}/${param.Id}`);
        },
        async gettrailerDataCover(vuexContext, param) {
            return await $axios.get(`${urlcode}${param.Id}`);
        },
        async storetrailerData(vuexContext, {URL, data}) {

            document.getElementById("trailerData-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {
                console.log(res);
                if (res.data.status == 200) {

                    router.push({name: "trailerData"});
                    vuexContext.dispatch("swalAddSuccess", "saved");
                } else {
                    document.getElementById("trailerData-add").disabled = false;
                    console.log(res.data.errors);
                    throw res.data.errors;
                }
            });
        },

        async gettrailerDataCode(vuexContext) {
            return await $axios.post(`${url}/type`, { vtype: 2 });
        },
        async deletetrailerData(vuexContext, params) {
          await $axios.post(`${url}/delete`,{_method:"delete",ids:params.ids}).then((res) => {
            if (res.data.status == 200) {
              router.go()
              // router.push({ name: params.listUrlName }).catch(()=>{});
              vuexContext.dispatch("swalAddSuccess", "Deleted");
            } else {
              Swal.fire({
                title: "Warrning",
                text: res.data.message,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "ok",
              });
              throw res.data.errors;
            }
          });
        },


        async updatetrailerData(vuexContext, param) {

            document.getElementById("trailerData-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
                if (res.data.status == 422) {
                    document.getElementById("trailerData-update").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({name: "trailerData"});
                    vuexContext.dispatch("swalAddSuccess", "saved");
                }
            });

        },
    },
    getters: {
        gettrailerData(state) {
            return state.trailerData;
        },
    },
};
