<template>
  <div>
    edit-categories
    <top-bar-card
      :newUrlName="`add-categories`"
      :submit="newCategory"
      :id="0"
      :editUrlName="`edit-categories`"
      :navigationUrl="`categoryNavigation`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newCategory" id="currentForm" autocomplete="off">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              
              <div
                class="col-md-6 mt-7"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="code"
                      placeholder="Code"
                      v-on:input="valCode($event)"
                      :class="{ [`${addClassCode}`]: errors.code }"
                    />
                    <label for="" class="col-form-label">{{
                      $t("code")
                    }}</label>
                    <span
                      class="text-danger"
                      v-if="errors.code"
                      :class="seenCode"
                    >
                      {{ errors.code[0] }}
                    </span>
                  </div>
                </div>
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
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("costWays")
                  }}</label>
                  <span class="text-danger" v-if="errors.cost_way_id">
                    {{ errors.cost_way_id[0] }}
                  </span>
                </div>

                <div class="form-group has-float-label mb-0">
                  <select class="form-control" name="parent_id">
                    <option value=""></option>
                    <option
                      v-for="category in categories.data"
                      :key="category.id"
                      v-bind:value="category.id"
                      v-if="category.active == 1"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("Main_Category")
                  }}</label>
                </div>
              </div>
              <div
                class="col-12 mt-3"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
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
                      <label for="exampleSelectl" class="col-form-label">{{
                        $t("units")
                      }}</label>
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
                      <label for="exampleSelectl">{{
                        $t("Product_Types")
                      }}</label>
                      <span class="text-danger" v-if="errors.type_id">
                        {{ errors.type_id[0] }}
                      </span>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group has-float-label">
                      <select
                        class="form-control"
                        name="ware_house_first_id"
                        @change="selectval($event)"
                      >
                        <option></option>
                        <option
                          v-for="warehouse_first in warehouses.data"
                          v-bind:value="warehouse_first.id"
                        >
                          {{ warehouse_first.name }}
                        </option>
                      </select>
                      <label for="exampleSelectl" class="col-form-label">{{
                        $t("WareHouseFirst")
                      }}</label>
                    </div>
                  </div>

                  <div class="col">
                    <div class="form-group has-float-label">
                      <select class="form-control" name="ware_house_secound_id">
                        <option></option>
                        <option
                          v-for="warehouse_secound in selectedValues"
                          :value="warehouse_secound.id"
                        >
                          {{ warehouse_secound.name }}
                        </option>
                      </select>
                      <label for="exampleSelectl" class="col-form-label">{{
                        $t("WareHouseSecound")
                      }}</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-6">
                    <div class="row">
                      <div class="col">
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                        >
                          <input
                            type="checkbox"
                            name="apply_taxes"
                            v-model="checked"
                            :value="1"
                          />
                          <span class="mr-2"></span>
                          {{ $t("Apply_Tax") }}</label
                        >
                        <span class="text-danger" v-if="errors.apply_taxes">
                          {{ errors.apply_taxes[0] }}
                        </span>
                      </div>
                      <div class="col" v-if="checked">
                        <div class="form-group m-0 has-float-label">
                          <select id="" class="form-control" name="type">
                            <option selected value=""></option>
                            <option value="Always">{{ $t("Always") }}</option>
                            <option value="In_case_of_purchase">
                              {{ $t("In_case_of_purchase") }}
                            </option>
                            <option value="In_case_of_sale">
                              {{ $t("In_case_of_sale") }}
                            </option>
                          </select>
                          <label for="" class="col-form-label">{{
                            $t("type")
                          }}</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-6 align-items-center">
                    <div class="">
                      <active-toggle />
                      <span class="text-danger" v-if="errors.active">
                        {{ errors.active[0] }}
                      </span>
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

import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-categories",
  components: { UAnimateContainer, UAnimate },
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
      languages: window.languages,
      isEmpty: false,
      addClassCode: "is-invalid",
      seenCode: "",
      checked: 0,
      selectedValues: {},
    };
  },
  mounted() {
    this.getCostWays();
    this.getUnits();
    this.getproductTypes();
    this.getCategories();
    this.getWareHouse();
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
    warehouses() {
      return this.$store.getters.getWareHouses;
    },
  },
  methods: {
    selectval(event) {
      this.selectedValues = this.warehouses.data.filter(
        (e, i) => this.warehouses.data[i].id != event.target.value
      );
    },
    async newCategory() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const category = { URL: "categories", data: formData };
        await this.$store.dispatch("storeCategories", category);
        document.location.href = "categories";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    changeBt(event) {
      this.active = event.value;
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
      const CategoriesUrl = { URL: "categories", all: 1 };
      const categories = await this.$store.dispatch(
        "fetchCategories",
        CategoriesUrl
      );
    },

    async getWareHouse() {
      const wareHouseUrl = { URL: "wareHouses" };

      const warehouses = await this.$store.dispatch(
        "fetchWareHouses",
        wareHouseUrl
      );
    },

    valCode(e) {
      if (e.target.value == "") {
        this.addClassCode = "is-invalid";
        this.seenCode = "";
      } else {
        this.addClassCode = "is-valid";
        this.seenCode = "d-none";
      }
    },
  },
};
</script>

<style></style>
