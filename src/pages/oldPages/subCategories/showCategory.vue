<template>
  <div>
    <top-bar-card :newUrlName="`edit-subCategories`" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs
                      :language="language"
                      :errors="errors"
                      :category="category"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-6">
                <div class="add-tabs w-100 sub-tabs p-0">
                  <ul class="nav nav-tabs0" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="data-tab"
                        data-toggle="tab"
                        href="#data-data"
                      >
                        <span class="nav-icon">
                          <i class="flaticon2-gear"></i>
                        </span>
                        <span class="nav-text">data</span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content main-tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="data-data"
                      role="tabpanel"
                      aria-labelledby="data-tab"
                    >
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="code"
                              placeholder="Code"
                              :value="category.code"
                            />
                            <label for="" class="col-form-label">Code</label>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                            <select class="form-control" name="cost_way_id">
                              <option value=""></option>
                              <option
                                v-for="costWay in costWays.data"
                                v-bind:value="costWay.id"
                                :selected="costWay.id == category.cost_way_id"
                              >
                                {{ costWay.name }}
                              </option>
                            </select>
                            <label for="exampleSelectl" class="col-form-label"
                              >costWays</label
                            >
                            <span class="text-danger" v-if="errors.cost_way_id">
                              {{ errors.cost_way_id[0] }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <select class="form-control" name="unit_id">
                              <option value=""></option>
                              <option
                                v-for="unit in units.data"
                                v-bind:value="unit.id"
                                :selected="unit.id == category.unit_id"
                              >
                                {{ unit.name }}
                              </option>
                            </select>
                            <label for="exampleSelectl" class="col-form-label"
                              >units</label
                            >
                            <span class="text-danger" v-if="errors.unit_id">
                              {{ errors.unit_id[0] }}
                            </span>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                            <select class="form-control" name="type_id">
                              <option value=""></option>
                              <option
                                v-for="productType in productTypes.data"
                                v-bind:value="productType.id"
                                :selected="productType.id == category.type_id"
                              >
                                {{ productType.name }}
                              </option>
                            </select>
                            <label for="exampleSelectl">Product Types</label>
                            <span class="text-danger" v-if="errors.type_id">
                              {{ errors.type_id[0] }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label for="exampleSelectl">Parents</label>
                            <select class="form-control" name="parent_id">
                              <option value="">{{ $t("Choose") }}</option>
                              <option
                                v-for="category in categories"
                                v-bind:value="category.id"
                                :selected="category.id == category.parent_id"
                              >
                                {{ category.name }}
                              </option>
                            </select>
                            <span class="text-danger" v-if="errors.parent_id">
                              {{ errors.parent_id[0] }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col p-0">
                          <label
                            for="exampleSelectl"
                            class="col-form-label position-relative"
                            >Status</label
                          >

                          <toggle-button
                            @change="changeBt"
                            :value="active"
                            color="#82C7EB"
                            :sync="true"
                            :labels="{
                              checked: 'Active',
                              unchecked: 'Un Active',
                            }"
                          />
                        </div>

                        <div class="col p-0">
                          <label
                            class="
                              checkbox checkbox-outline checkbox-outline-2x
                            "
                          >
                            <input
                              type="checkbox"
                              name="apply_taxes"
                              value="1"
                            />
                            <span class="mr-2"></span> Apply Tax</label
                          >
                          <span class="text-danger" v-if="errors.apply_taxes">
                            {{ errors.apply_taxes[0] }}
                          </span>
                          <span class="text-danger" v-if="errors.type_id">
                            {{ errors.type_id[0] }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
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
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
export default {
  name: "edit-subCategories",
  components: { LangTabs, Inputs },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      country: {},
      active: false,
      category: {},
      languages: window.languages,
    };
  },
  created() {
    this.getCostWays();
    this.getUnits();
    this.getproductTypes();
    this.categoryId = this.$route.params.id;
    this.getCategory();
  },
  computed: {
    costWays() {
      return this.$store.getters.getCostWays;
    },
    units() {
      return this.$store.getters.getUnits;
    },
    productTypes() {
      return this.$store.getters.getProductTypes;
    },
    categories() {
      return this.$store.getters.getCategories;
    },
  },
  methods: {
    async updatesubCategories() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const category = {
          URL: "/subCategories/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateSubCategories", category);
      } catch (errors) {
        this.errors = errors;
      }
    },
    changeBt() {
      this.active = this.active == true ? false : true;
    },
    async getCostWays() {
      const costWayUrl = { URL: "costWays" };
      const costWays = await this.$store.dispatch("fetchCostWays", costWayUrl);
    },
    async getUnits() {
      const unitUrl = { URL: "units" };
      const units = await this.$store.dispatch("fetchUnits", unitUrl);
    },
    async getproductTypes() {
      const productTypeUrl = { URL: "productTypes" };
      const productTypes = await this.$store.dispatch(
        "fetchProductTypes",
        productTypeUrl
      );
    },
    async getCategories(page = 1) {
      const categoryUrl = { URL: "categories", page };
      const categories = await this.$store.dispatch(
        "fetchCategories",
        categoryUrl
      );
      this.laravelData = categories;
    },
    getCategory() {
      $axios
        .get("/categories/" + this.categoryId)
        .then((response) => {
          console.log(response.data.data.id);
          this.category = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style></style>
