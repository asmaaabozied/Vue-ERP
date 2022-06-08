import router from "@/router";
const url = `document-types`;
export default {
  state: () => ({
    carDocumentTypes: {},
  }),

  mutations: {
    setCarDocumentTypes(state, carDocumentTypes) {
      state.carDocumentTypes = carDocumentTypes;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchCarDocumentTypes(vuexContext) {
      try {
        const carDocumentTypes = await $axios.post(`${url}/type`, { dtype: 2 });
        await vuexContext.commit("setCarDocumentTypes", carDocumentTypes.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storeCarDocumentType(vuexContext, { data }) {
      document.getElementById("carDocumentType-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("carDocumentType-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "carDocumentType" });
          vuexContext.dispatch("swalAddSuccess", "Saved");
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     * @returns
     */
    async getCarDocumentType(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getCarDocumentTypeCode(vuexContext) {
      return await $axios.get(`${url}/code`, {
        params: {
          dtype: 2,
        },
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updateCarDocumentType(vuexContext, param) {
      document.getElementById("carDocumentType-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("carDocumentType-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "carDocumentType" });
          vuexContext.dispatch("swalAddSuccess", "Updated");
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */
    async deleteCarDocumentType(vuexContext, id) {
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
    getCarDocumentTypes(state) {
      return state.carDocumentTypes;
    },
  },
};
