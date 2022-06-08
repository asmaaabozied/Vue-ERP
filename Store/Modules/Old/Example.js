import router from "@/router";
const url = `exampleUrl`;
export default {
  state: () => ({
    examples: {},
  }),

  mutations: {
    setExamples(state, examples) {
      state.examples = examples;
    },
  },
  actions: {
    /**
     *
     * @param {*} vuexContext
     */
    async fetchDistricts(vuexContext) {
      try {
        const districts = await $axios.get(`${url}`);
        await vuexContext.commit("setExamples", districts.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storeExample(vuexContext, { data }) {
      document.getElementById("example-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("example-add").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "examples" });
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
    async getExample(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getExampleCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
    async updateExample(vuexContext, param) {
      document.getElementById("example-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("example-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "examples" });
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
    getExamples(state) {
      return state.examples;
    },
  },
};
