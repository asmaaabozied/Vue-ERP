import router from "../../../src/router";
const url = `tags`;

export default {
  state: () => ({
    tags: {},
  }),

  mutations: {
    setTags(state, tags) {
      state.tags = tags;
    },
  },

  actions: {
    async fetchTags(vueContext) {
      try {
        const tags = await $axios.get(`${url}`);
        await vueContext.commit("setTags", tags.data);
      } catch (error) {}
    },

    async storeTag(vueContext, { data }) {
      document.getElementById("tag-add").disabled = true;
      await $axios.post(`${url}`, data).then((res) => {
        if (res.data.status == 200) {
          router.push({ name: "tags" });
          vueContext.dispatch("swalAddSuccess", "Created");
        } else {
          document.getElementById("tag-add").disabled = false;
          throw res.data.errors;
        }
      });
    },

    async getTag(vueContext, param) {
      return await $axios.get(`${url}/${param.Id}`);
    },

    async getTagCode() {
      return await $axios.get(`${url}/code`);
    },

    async updateTag(vueContext, param) {
      document.getElementById("tag-update").disabled = true;
      await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
        if (res.data.status == 422) {
          document.getElementById("tag-update").disabled = false;
          throw res.data.errors;
        } else {
          router.push({ name: "tags" });
          vueContext.dispatch("swalAddSuccess", "Updated");
        }
      });
    },

    async deleteTag(vueContext, params) {
      await $axios.post(`${url}/delete`, {_method:"delete", ids:params.ids})
        .then((res) => {
          if (res.data.status == 200) {
            router.go()
            // router.push({ name: params.listUrlName }).catch(()=>{});
            vueContext.dispatch("swalAddSuccess", "Deleted");
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
    getTags(state) {
      return state.tags;
    },
  },
};
