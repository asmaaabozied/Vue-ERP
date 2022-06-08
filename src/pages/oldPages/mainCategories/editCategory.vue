<template>
  <div>
    <top-bar-card
      :newUrlName="`add-categories`"
      :submit="updateCategory"
      :id="category.id"
      :editUrlName="`edit-categories`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateCategory" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              

              <div class="col-md-6 mt-7">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="code"
                      placeholder="Code"
                      :value="category.code"
                    />
                    <label for="" class="col-form-label">{{
                      $t("code")
                    }}</label>
                  </div>
                </div>

                <div class="form-group has-float-label">
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
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("costWays")
                  }}</label>
                  <span class="text-danger" v-if="errors.cost_way_id">
                    {{ errors.cost_way_id[0] }}
                  </span>
                </div>

                <div class="form-group has-float-label m-0">
                  <select class="form-control" name="parent_id">
                    <option value=""></option>
                    <option
                      v-for="maincat in maincategories.data"
                      v-bind:value="maincat.id"
                      :selected="maincat.id == category.parent_id"
                    >
                      {{ maincat.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("Main_Category")
                  }}</label>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="row">
                  <div class="col">
                    <div class="form-group has-float-label">
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

                  <div class="col">
                    <div class="form-group has-float-label">
                      <select
                        class="form-control"
                        v-on:change="selectedValues($event)"
                        name="ware_house_first_id"
                      >
                        <option></option>
                        <option
                          v-for="warehouse_first in warehouses"
                          :value="warehouse_first.id"
                          :selected="
                            warehouse_first.id == category.ware_house_first_id
                          "
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
                      <select
                        class="form-control"
                        name="ware_house_secound_id"
                        :disabled="this.disabled != 0"
                      >
                        <option></option>
                        <option
                          v-for="warehouse_secound in selectedVals"
                          :value="warehouse_secound.id"
                          :selected="
                            warehouse_secound.id ==
                            category.ware_house_secound_id
                          "
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
                <div class="row align-items-center">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-6">
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                        >
                          <input
                            type="checkbox"
                            name="apply_taxes"
                            :checked="checked"
                            :value="1"
                            @click="changechecked()"
                          />
                          <input
                            type="hidden"
                            name="apply_taxes"
                            v-if="!checked"
                            :value="0"
                          />
                          <span class="mr-2"></span>
                          {{ $t("Apply_Tax") }}</label
                        >
                        <span class="text-danger" v-if="errors.apply_taxes">
                          {{ errors.apply_taxes[0] }}
                        </span>
                      </div>
                      <div class="col-6">
                        <div class="form-group m-0 has-float-label">
                          <select
                            id=""
                            class="form-control"
                            name="type"
                            :disabled="this.checked == 0"
                          >
                            <option selected value=""></option>
                            <option
                              value="Always"
                              :selected="category.type == 'Always'"
                            >
                              Always
                            </option>
                            <option
                              value="In_case_of_purchase"
                              :selected="category.type == 'In_case_of_purchase'"
                            >
                              In_case_of_purchase
                            </option>
                            <option
                              value="In_case_of_sale"
                              :selected="category.type == 'In_case_of_sale'"
                            >
                              In_case_of_sale
                            </option>
                          </select>
                          <label for="" class="col-form-label">{{
                            $t("type")
                          }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
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
                </div>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "edit-categories",
  components: { },

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
      selectedVals: [],
      checked: 0,
      disabled: 1,
      statementIsTrue: 1,
    };
  },

  created() {
    this.getCostWays();
    this.getUnits();
    this.getproductTypes();
    this.getWareHouse();

    this.categoryId = this.$route.params.id;
    this.getCategory();
    this.getCategories();
    this.getMainCategories();
    this.selectedValues();
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
    warehouses() {
      return this.$store.getters.getWareHouses
        ? this.$store.getters.getWareHouses.data
        : [];
    },
    categories() {
      return this.$store.getters.getCategories;
    },
    maincategories() {
      return this.$store.getters.getMainCategories;
    },
  },
  watch: {
    warehouses() {
      this.selectedVals = this.warehouses;
    },
  },
  methods: {
    selectedValues(event) {
      this.selectedVals = this.warehouses.filter(
        (e, i) => i !== event.target.value - 1
      );
      if (this.disabled) {
        this.disabled = !this.disabled;
      }
    },

    changechecked() {
      this.checked = !this.checked;
    },
    async updateCategory() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        console.log(formData);
        formData.append("_method", "PATCH");
        const category = {
          URL: "/categories/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateCategories", category);
        document.location.href = "categories";
      } catch (errors) {
        this.errors = errors;
      }
    },
    changeBt() {
      this.active = this.active == true ? false : true;
    },
    async getCostWays() {
      const costWayUrl = { URL: "costWays", all: 1 };
      const costWays = await this.$store.dispatch("fetchCostWays", costWayUrl);
    },
    async getUnits() {
      const unitUrl = { URL: "units", all: 1 };
      const units = await this.$store.dispatch("fetchUnits", unitUrl);
    },
    async getproductTypes() {
      const productTypeUrl = { URL: "productTypes", all: 1 };
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

    getCategory() {
      $axios
        .get("/categories/" + this.categoryId)
        .then((response) => {
          this.category = response.data.data;

          this.checked = this.category.apply_taxes;
        })
        .catch((error) => {});
    },

    async getWareHouse() {
      const wareHouseUrl = { URL: "wareHouses" };
      const warehouses = await this.$store.dispatch(
        "fetchWareHouses",
        wareHouseUrl
      );
    },

    async getMainCategories() {
      console.log("here ok");
      const mainCategoryUrl = { URL: "mainCategories/" + this.categoryId };
      const accounts = await this.$store.dispatch(
        "fetchMainCategories",
        mainCategoryUrl
      );
      console.log(accounts);
    },
  },
};
</script>

<style></style>
