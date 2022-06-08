import router from "@/router";
export default {
  state: () => ({
    products: {},
  }),
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {

    async fetchProducts(vuexContext, paramObject) {
      try {
        const products = await $axios.get("products");
        console.log(products);
        await vuexContext.commit("setProducts", products.data.data);
      } catch (error) { }
      
    },

    async store(vuexContext, { URL, data }) {
      try {
        document.getElementById("product-add").disabled = true;

        await $axios.post(`${URL}`, data).then(() => {
          router.push({ name: URL });
          Swal.fire(
            "Changes Saved",
            "The Product details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("product-add").disabled = false;

        throw error.response.data.errors;
      }
    },
    async getProductById(vuexContext, paramObject) {
      try {
        const product = await $axios.get("/products/" + paramObject.data);
        return product.data.data;
      } catch (error) { }
    },
    async getProduct(vuexContext, paramObject) {
      const product = await $axios.get(paramObject.URL);
      return product;
    },
    async updateProduct(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The product details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteProduct(vuexContext, URL) {
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
    getProducts(state) {

      return state.products;
    },
  },
};
