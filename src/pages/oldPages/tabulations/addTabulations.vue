<template>
  <div>
    <top-bar-card
      :newUrlName="`add-Tabulations`"
      :submit="newTabulations"
      :id="0"
      :editUrlName="`edit-Tabulations`"
      :navigationUrl="`tabulationNavigation`"
      :model="`tabulation`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newTabulations" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs :language="language" :errors="errors" />
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
                      v-on:input="valCode($event)"
                      :class="{ [`${classCode}`]: errors.code }"
                    />
                    <label for="" class="col-form-label">{{ "code" }}</label>

                    <span
                      class="text-danger"
                      v-if="errors.code"
                      :class="seenCode"
                    >
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
                      track-by="id"
                      :close-on-select="false"
                      :clear-on-select="false"
                      :preserve-search="true"
                      :hide-selected="false"
                      placeholder="select your Products"
                      :multiple="true"
                    >
                      <template v-slot:option="option">
                        {{ option.name }}
                      </template>
                      <div slot="no-options">List Is Empty</div>
                    </v-select>
                  </div>
                </div>

                <div class="form-group has-float-label">
                  <select class="form-control" name="parent_id">
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="tabulation in tabulations.data"
                      v-bind:value="tabulation.id"
                    >
                      {{ tabulation.name }}
                    </option>
                  </select>
                  <label for="" class="col-form-label">{{
                    $t("tabulations")
                  }}</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group has-float-label mb-0">
                  <label for="exampleSelectl">{{ $T("Upload_Files") }}</label>

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
import Errors from "@/components/layouts/errors.vue";
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import Multiselect from "vue-multiselect";
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "add_Tabulations",
  components: {
    LangTabs,
    Inputs,
    FileUpload,
    Errors,
    multiselect: Multiselect,
    UAnimateContainer,
    UAnimate,
  },

  props: {
    options: {
      type: [Array, Object],
    },
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      type: [],
      products: [],
      isEmpty: false,
      options: [],
      url: "assets/blank.png",
      languages: window.languages,
      classCode: "is-invalid",
      seenCode: "",
      Errors,
    };
  },
  created() {
    this.getProducts();

    this.getTabulation();
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
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },

    async getTabulation() {
      const TabulationUrl = { URL: "getTabulation", all: 1 };
      const tabulations = await this.$store.dispatch(
        "fetchtabulations",
        TabulationUrl
      );
    },
    async newTabulations() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        let products = this.products;
        for (var i = 0; i < products.length; i++) {
          formData.append("products[]", products[i].id);
        }
        const tabulation = { URL: "tabulations", data: formData };
        await this.$store.dispatch("storetabulations", tabulation);
        document.location.href = "Tabulations";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    async getProducts() {
      const productUrl = { URL: "products" };
      const products = await this.$store.dispatch("fetchProducts", productUrl);

      this.options = this.$store.getters.getProducts.data;
    },
    valCode(e) {
      if (e.target.value == "") {
        this.classCode = "is-invalid";
        this.seenCode = "";
      } else {
        this.classCode = "is-valid";
        this.seenCode = "d-none";
      }
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>