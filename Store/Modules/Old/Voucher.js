export default {
  state: () => ({
    vouchers: {},
  }),

  mutations: {
    setVouchers(state, vouchers) {
      state.vouchers = vouchers;
    },
  },
  actions: {
    async fetchVouchers(vuexContext, paramObject) {
      try {
        const vouchers = await $axios.get(paramObject.URL, {
          params: {
            all: paramObject.all ?? null,
          },
        });
        await vuexContext.commit("setVouchers", vouchers.data);
      } catch (error) {}
    },

    async storeVouchers(vuexContext, { URL, data }) {
      try {
        document.getElementById("voucher-add").disabled = true;

        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Voucher details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("voucher-add").disabled = false;

        throw error.response.data.errors;
      }
    },

    async updateVoucher(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Voucher details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteVoucher(vuexContext, URL) {
      try {
        await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return true;
      } catch (error) {
        Swal.fire({
          title: "Warrning",
          text: error.response.data.message,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Now You Know",
        });
        throw error;
      }
    },
  },
  getters: {
    getVouchers(state) {
      return state.vouchers;
    },
  },
};
