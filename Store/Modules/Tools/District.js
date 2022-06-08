import router from "@/router";
const url = `districts`;
export default {
  state: () => ({
    districts: {},
  }),

  mutations: {
    setDistricts(state, districts) {
      state.districts = districts;
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
        await vuexContext.commit("setDistricts", districts.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */
    async storeDistrict(vuexContext, { data }) {
      document.getElementById("district-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "districts" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
          document.getElementById("district-add").disabled = false;
          throw res.data.errors;
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     * @returns
     */
    async getDistrict(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getDistrictCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} param
     */
     async updatedistricts(vuexContext, param) {
      document.getElementById("district-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "districts" });
           vuexContext.dispatch("swalAddSuccess", "update");
        } else {
        
          document.getElementById("district-update").disabled = false;
          throw res.data.errors;
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */

     async deleteDistrict(vuexContext, params) {
      await $axios.post(`${url}/delete`,{_method:"delete",ids:params.ids}).then((res) => {
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
          throw res.data.errors;
        }
      });
    },
  },
  getters: {
    getDistricts(state) {
      return state.districts;
    },
  },
};
