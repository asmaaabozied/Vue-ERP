import router from "@/router";
const url = `members`;

export default {
  state: () => ({
    Members: {},
  }),

  mutations: {
    setMembers(state, Members) {
      state.Members = Members;
    },
  },

  actions: {
    /**
     *
     * @param {*} vuexContext
     */

    async fetchMembers(vuexContext) {
      try {
        const Members = await $axios.get(`${url}`);
        await vuexContext.commit("setMembers", Members.data);
      } catch (error) {}
    },

    /**
     *
     * @param {*} vuexContext
     * @param {*} param1
     */

    async storeMember(vuexContext, { data }) {
      // document.getElementById("add-Members").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "memberCard" });
          vuexContext.dispatch("swalAddSuccess", "Created");
        } else {
          // document.getElementById("add-sellingPoint").disabled = false;
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

    async getMember(vuexContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },

    async getMemberCode(vuexContext) {
      return await $axios.get("members/code");
    },
    async getNationalities(vuexContext) {
      return await $axios.get("members/nationalities");
    },
    
    async updateMember(vuexContext, param) {
      // document.getElementById("Members-edit").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "memberCard" });
          vuexContext.dispatch("swalAddSuccess", "Updated");
        } else {
          // document.getElementById("Members-edit").disabled = false;
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
     async deleteMember(vuexContext, params) {
      await $axios.post(`${url}/delete`, {_method: "delete", ids: params.ids}).then((res) => {
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

  },

  getters: {
    getMember(state) {
      return state.Members;
    },
  },
};
