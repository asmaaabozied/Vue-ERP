import router from "@/router";

const url = `car-status`;
export default {
  state: () => ({
    CarStatus: {},
  }),

  mutations: {
    setCarStatus(state, CarStatus) {
      state.CarStatus = CarStatus;
    },
  },
  actions: {
    async fetchCarStatus(vuexContext) {
      try {
        const CarStatus = await $axios.get(`${url}`);
        await vuexContext.commit("setCarStatus", CarStatus.data);
      } catch (error) {}
    },

    async getCarStatus(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    async storeCarStatus(vuexContext, { URL, data }) {
      document.getElementById("CarStatus-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("CarStatus-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "CarStatus" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        }
      });
    },

    async getCarStatusCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },

    async deleteCarStatus(vuexContext, params) {
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

    async updateCarStatus(vuexContext, param) {
      document.getElementById("CarStatus-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("CarStatus-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "CarStatus" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        }
      });
    },
  },
  getters: {
    getCarStatus(state) {
      return state.CarStatus;
    },
  },
};
