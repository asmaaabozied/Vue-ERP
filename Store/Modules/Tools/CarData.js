import router from "@/router";

const url = `vehicle-data`;
const urlcode = "vehicle-data/get-cover?vehicle_id=";
export default {
    state: () => ({
        VehicleData: {},
    }),

    mutations: {
        setVehicleData(state, VehicleData) {
            state.VehicleData = VehicleData;
        },
    },
    actions: {

        async fetchVehicleData(vuexContext) {
            try {
                const VehicleData = await $axios.post(`${url}/type`, {vtype: 1});
                await vuexContext.commit("setVehicleData", VehicleData.data);
            } catch (error) {
            }
        },

        async getVehicleData(vuexContext, param) {

            return await $axios.get(`${url}/${param.Id}`);
        },
        async getVehicleDataCover(vuexContext, param) {
            return await $axios.get(`${urlcode}${param.Id}`);
        },
        async storeVehicleData(vuexContext, {URL, data}) {
            document.getElementById("CarData-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {
                console.log(res);
                if (res.data.status == 200) {
                    router.push({name: "carData"});
                    vuexContext.dispatch("swalAddSuccess", "saved");
                } else {
                    document.getElementById("CarData-add").disabled = false;
                    console.log(res.data.errors);
                    throw res.data.errors;
                }
            });
        },

        async getVehicleDataCode(vuexContext) {
            return await $axios.post(`${url}/type`, { vtype: 2 });
        },
        async deleteVehicleData(vuexContext, params) {
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


        async updateVehicleData(vuexContext, param) {
            document.getElementById("CarData-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
                if (res.data.status == 422) {
                    document.getElementById("CarData-update").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({name: "carData"});
                    vuexContext.dispatch("swalAddSuccess", "saved");
                }
            });

        },
    },
    getters: {
        getVehicleData(state) {
            return state.VehicleData;
        },
    },
};
