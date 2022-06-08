<template>
  <div>
    <top-bar-card
      :newUrlName="`add-subCategories`"
      :submit="newCategory"
      :id="0"
      :editUrlName="`edit-categories`"
      :navigationUrl="`categoryNavigation`"
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
        <form @submit.prevent="newCategory" id="currentForm">
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
                        <div class="col has-float-label">
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              name="code"
                              placeholder="Code"
                              v-on:input="valCode($event)"
                              :class="{ [`${classCode}`]: errors.code }"
                            />
                            <label for="" class="col-form-label">Code</label>
                            <span
                              class="text-danger"
                              v-if="errors.code"
                              :class="seenCode"
                            >
                              {{ errors.code[0] }}
                            </span>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group has-float-label">
                            <select class="form-control" name="cost_way_id">
                              <option value=""></option>
                              <option
                                v-for="costWay in costWays.data"
                                v-bind:value="costWay.id"
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
                          <div class="form-group has-float-label">
                            <select class="form-control" name="unit_id">
                              <option value=""></option>
                              <option
                                v-for="unit in units.data"
                                v-bind:value="unit.id"
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
                          <div class="form-group has-float-label">
                            <select class="form-control" name="type_id">
                              <option value=""></option>
                              <option
                                v-for="productType in productTypes.data"
                                v-bind:value="productType.id"
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
                          <div class="form-group has-float-label">
                            <label for="exampleSelectl">Parents</label>
                            <select
                              class="form-control"
                              name="parent_id"
                              :class="{ [`${addParents}`]: errors.parent_id }"
                              v-on:click="valParents($event)"
                            >
                              <option value="">{{ $t("Choose") }}</option>
                              <option
                                v-for="category in categories"
                                v-bind:value="category.id"
                              >
                                {{ category.name }}
                              </option>
                            </select>
                            <span
                              class="text-danger"
                              v-if="errors.parent_id"
                              :class="seenParents"
                            >
                              {{ errors.parent_id[0] }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col">
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

                        <div class="col">
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
import Errors from "@/components/layouts/errors.vue";
import Inputs from "./Inputs.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-subCategories",
  components: { LangTabs, Inputs, Errors, UAnimateContainer, UAnimate },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      category: {},
      active: false,
      categories: [],
      languages: window.languages,
      isEmpty: false,
      classCode: "is-invalid",
      seenCode: "",
      addParents: "is-invalid",
      seenParents: "",
    };
  },
  created() {
    this.getCostWays();
    this.getUnits();
    this.getproductTypes();
    this.getCategories();
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
  },
  methods: {
    async newCategory() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);

        const category = { URL: "subCategories", data: formData };
        await this.$store.dispatch("storeSubCategories", category);
        document.location.href = "subCategories";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
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
    async getCategories() {
      await $axios
        .get("/allCategories")
        .then((res) => {
          this.categories = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
    valParents(e) {
      if (e.target.value == "") {
        this.addParents = "is-invalid";
        this.seenParents = "";
      } else {
        this.addParents = "is-valid";
        this.seenParents = "d-none";
      }
    },
  },
};
</script>

<style></style>