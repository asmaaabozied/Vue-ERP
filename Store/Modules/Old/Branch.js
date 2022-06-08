export default {
  state: () => ({
    branches: {},
  }),

  mutations: {
    setBranches(state, branches) {
      state.branches = branches;
    },
  },
  actions: {
    async fetchBranches(vuexContext, paramObject) {
      try {
        const branches = await $axios.get("branches");

        await vuexContext.commit("setBranches", branches.data);
      } catch (error) {}
    },
    async storeBranch(vuexContext, { URL, data }) {
      try {
        document.getElementById("branch-add").disabled = true;
        await $axios.post(`${URL}`, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The branch details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("branch-add").disabled = false;
        throw error.response.data.errors;
      }
    },
    async getBranch(vuexContext, paramObject) {
      const branch = await $axios.get(paramObject.URL);
      return branch;
    },

    async updateBranch(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The branch details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteBranch(vuexContext, URL) {
      try {
        const Branch = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return Branch.data;
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
    getBranches(state) {
      return state.branches;
    },
  },
};
