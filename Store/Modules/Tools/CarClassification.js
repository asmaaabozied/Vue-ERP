import router from "@/router";
const url = `car-classifications`;
export default {
  state: () => ({
    carClassifications: {},
  }),

  mutations: {
    setCarClassifications(state, carClassifications) {
      state.carClassifications = carClassifications;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchCarClassifications(vuexContext) {
      try {
        const carClassifications = await $axios.get(`${url}`);
        await vuexContext.commit(
          "setCarClassifications",
          carClassifications.data
        );
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storeCarClassifications(vuexContext, { data }) {
      document.getElementById("carClassification-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("carClassification-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "carClassifications" });
          vuexContext.dispatch("swalAddSuccess", "Created");
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     * @returns
     */
    async getCarClassification(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getCarClassificationCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updateCarClassification(vuexContext, param) {
      document.getElementById("carClassification-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("carClassification-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "carClassifications" });
          vuexContext.dispatch("swalAddSuccess", "Created");
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */
    async deletecarType(vuexContext, id) {
      await $axios.delete(`${url}/${id}`).then((res) => {
        if (res.data.status == 500) {
          Swal.fire({
            title: "Warrning",
            text: res.data.message,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "ok",
          });
          throw res.data.errors;
        } else {
          vuexContext.dispatch("swalAddSuccess", "Deleted");
        }
      });
    },
  },
  getters: {
    getCarClassifications(state) {
      return state.carClassifications;
    },
  },
};
