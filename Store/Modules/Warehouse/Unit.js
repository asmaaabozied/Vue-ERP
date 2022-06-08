import router from "../../../src/router";
const url = `units`;

export default {
  state: () => ({
    units: {},
  }),

  mutations: {
    setUnits(state, units) {
      state.units = units;
    },
  },

  actions: {
    async fetchUnits(vuexContext) {
      try {
        const units = await $axios.get(`${url}`);
        await vuexContext.commit("setUnits", units.data);
      } catch (error) { }
    },

    async storeUnit(vueContext, { data }) {
      document.getElementById("unit-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {

          if (res.data.status == 200) {
              router.push({ name: "units"});
              vueContext.dispatch("swalAddSuccess", "Created");
          } else {
              document.getElementById("unit-add").disabled = false;
              throw res.data.errors;
          }
      })
  },

    // Why we add vueContext as parameter?!
    async getUnit(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },

    async getUnitCode() {
      return await $axios.get(`${url}/${param.Id}`);
    },

    async updateUnit(vuexContext, param) {
      document.getElementById("unit-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("unit-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "units" });
          vuexContext.dispatch("swalAddSuccess", "Updated");
        }
      });
    },

    async deleteUnit(vuexContext, params) {
      await $axios.post(`${url}/delete`, {_method:"delete", ids:params.ids})
      .then((res) => {
        if (res.data.status == 200) {
            router.go()
            vuexContext.dispatch("swalAddSuccess", "Deleted");
          } else {
          Swal.fire({
            title: "Warrning",
            text: res.data.message,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "ok",
          });
          throw res.data.errors
        }
      });
    },
  },

  getters: {
    getUnits(state) {
      return state.units;
    },
  },
};
