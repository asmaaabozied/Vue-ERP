import router from "../../src/router/index";
import axios from "axios";
export default {
  actions: {
    async index(vuexContext, { URL, page = 1 }) {
      const data = await axios.get(`/api/${URL}?page=${page}`);
      return data;
    },
    async store(vuexContext, { URL, data }) {
      try {
        await $axios.post(BaseURL + `api/${URL}`, data);
        router.push({ name: URL });
        Swal.fire(
          "Changes Saved",
          "The product details have been updated",
          "success"
        );
      } catch (error) {
        throw error.response.data.errors;
      }
    },
  },
};
