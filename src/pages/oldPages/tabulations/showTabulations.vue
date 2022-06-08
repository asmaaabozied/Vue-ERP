<template>
  <div>
    <top-bar-card :editUrlName="`add-Tabulations`" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateTabulations" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :tabulation="tabulation"
                    />
                  </template>
                </lang-tabs>
              </div>

              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="code"
                      placeholder="Code"
                      :value="tabulation.code"
                    />
                    <label for="" class="col-form-label">{{
                      $t("code")
                    }}</label>

                    <span class="text-danger" v-if="errors.code">
                      {{ errors.code[0] }}
                    </span>
                  </div>
                </div>
                <div class="has-float-label">
                  <div class="form-group">
                    <label>Products</label>
                    <v-select
                      v-model="products"
                      :options="options"
                      label="name"
                      multiple
                    >
                      <template v-slot:option="option">
                        {{ option.name }}
                      </template>
                    </v-select>
                  </div>
                </div>

                <div class="form-group has-float-label">
                  <select class="form-control" name="parent_id">
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="tabulat in tabulations.data"
                      v-bind:value="tabulat.id"
                      :selected="tabulat.id == tabulation.parent_id"
                    >
                      {{ tabulat.name }}
                    </option>
                  </select>
                  <label for="" class="col-form-label">{{
                    $t("parent")
                  }}</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group has-float-label mb-0">
                  <label for="exampleSelectl">{{ $t("Upload_Files") }}</label>

                  <file-upload></file-upload>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import FileUpload from "@/components/form/fileUpload";

import LangTabs from "@/components/form/LangTabs.vue";
import EditInputs from "./EditInputs.vue";

export default {
  name: "edit-Tabulations",
  components: {
    LangTabs,
    EditInputs,
    FileUpload,
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      products: [],
      tabulation: {},
      languages: window.languages,
      url: "",
      options: [],
    };
  },
  created() {
    this.tabulationId = this.$route.params.id;
    this.getProducts();
    this.getTabulations();
    this.getParentTabulation();
  },
  computed: {
    tabulations() {
      return this.$store.getters.gettabulations;
    },
    products() {
      return this.$store.getters.getProducts;
    },
  },

  methods: {
    async updateTabulations() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        let products = this.products;

        for (var i = 0; i < products.length; i++) {
          formData.append("products[]", products[i].id);
        }
        formData.append("_method", "PUT");
        const tabulation = {
          URL: "/tabulations/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updatetabulations", tabulation);
        document.location.href = "Tabulations";
      } catch (errors) {
        this.errors = errors;
      }
    },

    async getParentTabulation() {
      const TabulationUrl = {
        URL: "getTabulation",
      };
      const tabulations = await this.$store.dispatch(
        "fetchtabulations",
        TabulationUrl
      );
    },

    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },

    getTabulations() {
      $axios
        .get("/tabulations/" + this.tabulationId)
        .then((response) => {
          console.log(response.data.data.id);
          this.tabulation = response.data.data;
          this.url = this.tabulation.picture;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getProducts() {
      const productUrl = { URL: "products" };
      const products = await this.$store.dispatch("fetchProducts", productUrl);
      this.options = this.$store.getters.getProducts.data;
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>