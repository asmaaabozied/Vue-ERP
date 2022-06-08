import router from "@/router";
const url = `document-types`;
export default {
  state: () => ({
    trailerDocumentTypes: {},
  }),

  mutations: {
    setTrailerDocumentTypes(state, trailerDocumentTypes) {
      state.trailerDocumentTypes = trailerDocumentTypes;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchTrailerDocumentTypes(vuexContext) {
      try {
        const trailerDocumentTypes = await $axios.post(`${url}/type`, {
          dtype: 3,
        });
        console.log(trailerDocumentTypes);
        await vuexContext.commit(
          "setTrailerDocumentTypes",
          trailerDocumentTypes.data
        );
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storeTrailerDocumentType(vuexContext, { data }) {
      document.getElementById("trailerDocumentType-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("trailerDocumentType-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "trailerDocumentType" });
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
    async getTrailerDocumentType(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getTrailerDocumentTypeCode(vuexContext) {
      return await $axios.get(`${url}/code`, {
        params: {
          dtype: 3,
        },
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updateTrailerDocumentType(vuexContext, param) {
      document.getElementById("trailerDocumentType-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById(
            "trailerDocumentType-update"
          ).disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "trailerDocumentType" });
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

    async deleteTrailerDocumentType(vuexContext, id) {
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
    getTrailerDocumentTypes(state) {
      return state.trailerDocumentTypes;
    },
  },
};
