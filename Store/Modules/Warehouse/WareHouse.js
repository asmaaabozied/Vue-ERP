import router from "@/router";
const url = `ware-houses`;
export default {
  state: () => ({
    wareHouses: [],
  }),

  mutations: {
    setWareHouses(state, wareHouses) {
      state.wareHouses = wareHouses;
    },
  },
  actions: {
    /**
     *
     * return all warehouse
     */
    async fetchWareHouses(vuexContext) {
      try {
        const wareHouses = await $axios.get(`${url}`);
        await vuexContext.commit("setWareHouses", wareHouses.data);
      } catch (error) {}
    },
    /**
     *
     *
     * fetch parents
     */
    async fetchParentsWareHouses(vuexContext) {
      try {
        const wareHouses = await $axios.get(`${url}/get-parents`, {
          params: {
            paginate: false,
          },
        });
        await vuexContext.commit("setWareHouses", wareHouses.data);
      } catch (error) {}
    },
    /**
     *
     * @param {*} vuexContext
     * @param {data} data
     * store ware haoue data
     */
    async storeWareHouse(vuexContext, { data }) {
      document.getElementById("warehouse-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          router.push({ name: "wareHouses" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        } else {
          document.getElementById("warehouse-add").disabled = false;
          console.log( res.data.errors);
          throw res.data.errors;
        }
      });
    },
    /**
     *
     * @param {*} vuexContext
     * @param {id} id
     * @returns warehose
     */
    async getWareHouse(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },
    /**
     *
     * @param {*} vuexContext
     * @returns
     */
    async getWareHouseCode(vuexContext) {
      return await $axios.get(`${url}/code`);
    },
    /**
     *
     * @param {*} vuexContext
     * @param {data} data
     * @param {id} id
     * update ware house data
     */
    async updateWareHouse(vuexContext, param) {
      document.getElementById("warehouse-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("warehouse-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "wareHouses" });
          vuexContext.dispatch("swalAddSuccess", "saved");
        }
      });
    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} URL
     * @returns
     */
    async deleteWareHouse(vuexContext, params) {
      await $axios.post(`${url}/delete`,{_method:"delete",ids:params.ids}).then((res) => {
        if (res.data.status == 200) {
          router.go()
          vuexContext.dispatch("swalAddSuccess", "Deleted");
        } else {
          vuexContext.dispatch("SwalNotDeleted", res.data.message);
          throw res.data.errors;
        }
      });
    },
  },
  getters: {
    getWareHouses(state) {
      return state.wareHouses;
    },
  },
};
