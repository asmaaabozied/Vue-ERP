<template>
  <div>
    <top-bar-card
      :newUrlName="`add-carCards`"
      :submit="updateCarCard"
      :id="carCard.id"
      :editUrlName="`edit-carCards`"
      :navigationUrl="`carCardNavigation`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateCarCard" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    carCard
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :carCard="carCard"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7 has-float-label">
                <div class="form-group m-0">
                  <input
                    type="number"
                    name="code"
                    id
                    placeholder="code"
                    class="form-control"
                    :value="carCard.code"
                  />
                  <label for class="col-form-label">Code</label>
                  <span class="text-danger" v-if="errors.code">{{
                    errors.code[0]
                  }}</span>
                </div>
              </div>

              <!-- <div class="col-md-6 col-12 mt-7">
                                <div class="form-group has-float-label mb-0">
                                    <select class="form-control" id="" name="country_id">
                                        <option value="">{{$t("Choose")}}</option>
                                        <option v-for="country in countries.data" v-bind:value="country.id" :selected="country.id == carCard.country_id">
                                            {{ country.name }}
                                        </option>
                                    </select>
                                    <label for="exampleSelectl">country</label>
                                    <span class="text-danger" v-if="errors.country_id">
                                        {{ errors.country_id[0] }}
                                    </span>

                                </div>
              </div>-->

              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
                  <select class="form-control" id name="cost_center_id">
                    <option value>Choose</option>
                    <option
                      v-for="CostCenter in CostCenters.data"
                      v-bind:value="CostCenter.id"
                      :selected="CostCenter.id == carCard.cost_center_id"
                    >
                      {{ CostCenter.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl">{{ $t("CostCenters") }}</label>
                  <span class="text-danger" v-if="errors.cost_center_id">{{
                    errors.cost_center_id[0]
                  }}</span>
                </div>
              </div>

              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
                  <select class="form-control" id name="employee_id">
                    <option value>Choose</option>
                    <option
                      v-for="employee in employees.data"
                      v-bind:value="employee.id"
                      :selected="employee.id == carCard.employee_id"
                    >
                      {{ employee.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl">{{ $t("employees") }}</label>
                  <span class="text-danger" v-if="errors.employee_id">{{
                    errors.employee_id[0]
                  }}</span>
                </div>
              </div>

              <div class="col-md-6 col-12 mt-7">
                <active-toggle />
              </div>
            </div>
          </div>
          <div :class="`add-tabs w-100 sub-tabs p-0 mt-3 ${gridClassName}`">
            <ul class="nav nav-tabs0" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="map-tab"
                  data-toggle="tab"
                  href="#map-data"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text"> {{ $t("data") }}</span>
                </a>
              </li>
            </ul>
            <!-- <form @submit.prevent="newBranch" id="currentForm"> -->

            <div id="myTabContent">
              <div
                class="tab-pane fade show active tab-product-main"
                id="map-data"
                role="tabpanel"
                aria-labelledby="map-tab"
              >
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent=".tab-pane"
                        href="#collapseOne"
                      >
                        <i class="flaticon2-contract"></i>
                        <span>{{ $t("data") }}</span>
                      </a>
                    </h4>
                  </div>

                  <div id="collapseOne" class="panel-collapse collapse in show">
                    <div class="panel-body row">
                      <!-- //////////////// data -->

                      <div class="col-3 mt-7 has-float-label">
                        <select class="form-control" name="model">
                          <option selected value></option>

                          <option
                            value="first"
                            :selected="carCard.model == 'first'"
                          >
                            {{ $t("first") }}
                          </option>
                          <option
                            value="second"
                            :selected="carCard.model == 'second'"
                          >
                            {{ $t("second") }}
                          </option>
                        </select>
                        <label for class="col-form-label"
                          >{{ $t("model") }}
                        </label>

                        <span class="text-danger" v-if="errors.model">{{
                          errors.model[0]
                        }}</span>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <select class="form-control" name="type">
                          <option selected value></option>

                          <option
                            value="first"
                            :selected="carCard.type == 'first'"
                          >
                            {{ $t("first") }}
                          </option>
                          <option
                            value="second"
                            :selected="carCard.type == 'second'"
                          >
                            {{ $t("second") }}
                          </option>
                        </select>
                        <label for class="col-form-label">
                          {{ $t("type") }}</label
                        >

                        <span class="text-danger" v-if="errors.type">{{
                          errors.type[0]
                        }}</span>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <select class="form-control" name="car_type">
                          <option selected value></option>

                          <option
                            value="first"
                            :selected="carCard.car_type == 'first'"
                          >
                            {{ $t("first") }}
                          </option>
                          <option
                            value="second"
                            :selected="carCard.car_type == 'second'"
                          >
                            {{ $t("second") }}
                          </option>
                        </select>
                        <label for class="col-form-label"
                          >{{ $t("car_type") }}
                        </label>

                        <span class="text-danger" v-if="errors.car_type">{{
                          errors.car_type[0]
                        }}</span>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="base_size"
                            id
                            placeholder="base_size"
                            class="form-control"
                            :value="carCard.base_size"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">{{
                            $t("base_size")
                          }}</label>
                          <span
                            class="text-danger"
                            v-if="errors.base_size"
                            :class="seenCode"
                            >{{ errors.base_size[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="password"
                            id
                            placeholder="password"
                            class="form-control"
                            :value="carCard.password"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">{{
                            $t("password")
                          }}</label>
                          <span
                            class="text-danger"
                            v-if="errors.password"
                            :class="seenCode"
                            >{{ errors.password[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="date"
                            name="made_date"
                            id
                            placeholder="made_date"
                            :value="carCard.made_date"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">{{
                            $t("made_date")
                          }}</label>
                          <span
                            class="text-danger"
                            v-if="errors.made_date"
                            :class="seenCode"
                            >{{ errors.made_date[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="car_chassis_number"
                            id
                            placeholder="car_chassis_number"
                            :value="carCard.car_chassis_number"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("car_chassis_number") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.car_chassis_number"
                            :class="seenCode"
                            >{{ errors.car_chassis_number[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <select class="form-control" name="color">
                          <option selected value></option>

                          <option
                            value="first"
                            :selected="carCard.color == 'first'"
                          >
                            {{ $t("first") }}
                          </option>
                          <option
                            value="second"
                            :selected="carCard.color == 'second'"
                          >
                            {{ $t("second") }}
                          </option>
                        </select>
                        <label for class="col-form-label">{{
                          $t("color")
                        }}</label>

                        <span class="text-danger" v-if="errors.color">{{
                          errors.color[0]
                        }}</span>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="lower_tank_size"
                            id
                            placeholder="lower_tank_size"
                            :value="carCard.lower_tank_size"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("lower_tank_size") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.lower_tank_size"
                            :class="seenCode"
                            >{{ errors.lower_tank_size[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="top_tank_size"
                            id
                            placeholder="top_tank_size"
                            class="form-control"
                            :value="carCard.top_tank_size"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("top_tank_size") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.top_tank_size"
                            :class="seenCode"
                            >{{ errors.top_tank_size[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="weight"
                            id
                            placeholder="weight"
                            :value="carCard.weight"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("weight") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.weight"
                            :class="seenCode"
                            >{{ errors.weight[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="maintenance_limit"
                            id
                            placeholder="maintenance_limit"
                            :value="carCard.maintenance_limit"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("maintenance_limit") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.maintenance_limit"
                            :class="seenCode"
                            >{{ errors.maintenance_limit[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <select class="form-control" name="category">
                          <option selected value></option>

                          <option
                            value="first"
                            :selected="carCard.category == 'first'"
                          >
                            {{ $t("first") }}
                          </option>
                          <option
                            value="second"
                            :selected="carCard.category == 'second'"
                          >
                            {{ $t("second") }}
                          </option>
                        </select>
                        <label for class="col-form-label">
                          {{ $t("category") }}</label
                        >

                        <span class="text-danger" v-if="errors.category">{{
                          errors.category[0]
                        }}</span>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="date"
                            name="date_purchase"
                            id
                            placeholder="date_purchase"
                            :value="carCard.date_purchase"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label"
                            >date_purchase</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.date_purchase"
                            :class="seenCode"
                            >{{ errors.date_purchase[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="Purchase_value"
                            id
                            placeholder="Purchase_value"
                            class="form-control"
                            :value="carCard.Purchase_value"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("Purchase_value") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.Purchase_value"
                            :class="seenCode"
                            >{{ errors.Purchase_value[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="current_value"
                            id
                            :value="carCard.current_value"
                            placeholder="current_value"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("current_value") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.current_value"
                            :class="seenCode"
                            >{{ errors.current_value[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="date"
                            name="form_renewal_date"
                            id
                            placeholder="form_renewal_date"
                            :value="carCard.form_renewal_date"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("form_renewal_date") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.form_renewal_date"
                            :class="seenCode"
                            >{{ errors.form_renewal_date[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <select class="form-control" name="class">
                          <option selected value></option>

                          <option
                            value="first"
                            :selected="carCard.class == 'first'"
                          >
                            {{ $t("first") }}
                          </option>
                          <option
                            value="second"
                            :selected="carCard.class == 'second'"
                          >
                            {{ $t("second") }}
                          </option>
                        </select>
                        <label for class="col-form-label">
                          {{ $t("class") }}</label
                        >

                        <span class="text-danger" v-if="errors.class">{{
                          errors.class[0]
                        }}</span>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <select class="form-control" name="Base_type">
                          <option selected value></option>

                          <option
                            value="first"
                            :selected="carCard.Base_type == 'first'"
                          >
                            {{ $t("first") }}
                          </option>
                          <option
                            value="second"
                            :selected="carCard.Base_type == 'second'"
                          >
                            {{ $t("second") }}
                          </option>
                        </select>
                        <label for class="col-form-label">Base_type</label>

                        <span class="text-danger" v-if="errors.Base_type">{{
                          errors.Base_type[0]
                        }}</span>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="fuel_liter_coefficient"
                            id
                            placeholder="fuel_liter_coefficient"
                            :value="carCard.fuel_liter_coefficient"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("fuel_liter_coefficient") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.fuel_liter_coefficient"
                            :class="seenCode"
                            >{{ errors.fuel_liter_coefficient[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="Oil_change_parameter"
                            id
                            placeholder="Oil_change_parameter"
                            :value="carCard.Oil_change_parameter"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("Oil_change_parameter") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.Oil_change_parameter"
                            :class="seenCode"
                            >{{ errors.Oil_change_parameter[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="Transportation_license_number"
                            id
                            placeholder="Transportation_license_number"
                            :value="carCard.Transportation_license_number"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("Transportation_license_number") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.Transportation_license_number"
                            :class="seenCode"
                            >{{ errors.Transportation_license_number[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="number"
                            name="GPS_device_number"
                            id
                            placeholder="GPS_device_number"
                            class="form-control"
                            :value="carCard.GPS_device_number"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label"
                            >GPS_device_number</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.GPS_device_number"
                            :class="seenCode"
                            >{{ errors.GPS_device_number[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <div class="form-group m-0">
                          <input
                            type="text"
                            name="extra_code"
                            id
                            placeholder="extra_code"
                            :value="carCard.extra_code"
                            class="form-control"
                            v-on:input="valCode($event)"
                          />
                          <label for class="col-form-label">
                            {{ $t("extra_code") }}</label
                          >
                          <span
                            class="text-danger"
                            v-if="errors.extra_code"
                            :class="seenCode"
                            >{{ errors.extra_code[0] }}</span
                          >
                        </div>
                      </div>

                      <div class="col-3 mt-7 has-float-label">
                        <select class="form-control" name="car_statuse">
                          <option selected value></option>

                          <option
                            value="first"
                            :selected="carCard.car_statuse == 'first'"
                          >
                            {{ $t("first") }}
                          </option>
                          <option
                            value="second"
                            :selected="carCard.car_statuse == 'second'"
                          >
                            {{ $t("second") }}
                          </option>
                        </select>
                        <label for class="col-form-label">
                          {{ $t("car_statuse") }}</label
                        >

                        <span class="text-danger" v-if="errors.car_statuse">{{
                          errors.car_statuse[0]
                        }}</span>
                      </div>

                      <!-- //////////////// -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <edit-card :errors="errors" :testTrs="test" />
            <edit-cover :errors="errors" :testTrs="ahmed" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import EditInputs from "./EditInputs.vue";
import EditCard from "./editCard.vue";
import EditCover from "./editCover.vue";

export default {
  name: "add-carCards",
  components: {
    LangTabs,
    EditInputs,
    EditCard,
    EditCover,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      carCard: {},
      languages: window.$languages,
      gridClassName: window.$gridClassName,
      test: {},
    };
  },
  created() {
    this.getCarCard();
    this.getCategories();
    this.getCountries();
    this.getEmployees();
    this.getCostCenters();
  },

  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
    countries() {
      return this.$store.getters.getCountries;
    },
    employees() {
      return this.$store.getters.getEmployees;
    },
    CostCenters() {
      return this.$store.getters.getCostCenters;
    },
  },
  methods: {
    async updateCarCard() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const carCard = {
          URL: "carCards/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateCarCard", carCard);
        document.location.href = "carCards";
      } catch (errors) {
        this.errors = errors;
      }
    },

    async getCarCard() {
      const carCard = {
        URL: "carCards/" + this.$route.params.id,
      };
      const getCarCard = await this.$store.dispatch("getCarCard", carCard);
      this.carCard = getCarCard.data.data;
      this.test = this.carCard.cardefinitions;
      this.ahmed = this.carCard.covers;
      console.log(this.test);
      console.log(this.ahmed);
    },

    async getCategories() {
      const categoryUrl = {
        URL: "categories",
        all: 1,
      };
      const categories = await this.$store.dispatch(
        "fetchCategories",
        categoryUrl
      );
    },
    async getCountries() {
      const countryUrl = {
        URL: "countries",
        all: 1,
      };
      const countries = await this.$store.dispatch(
        "fetchCountries",
        countryUrl
      );
    },
    async getCostCenters() {
      const CostCenterUrl = {
        URL: "cost_center",
        all: 1,
      };
      const CostCenters = await this.$store.dispatch(
        "fetchCostCenters",
        CostCenterUrl
      );
    },
    async getEmployees() {
      const EmployeeUrl = {
        URL: "employees",
        all: 1,
      };
      const employees = await this.$store.dispatch(
        "fetchEmployees",
        EmployeeUrl
      );
    },

    changeGrid(event) {
      this.gridClassName = event;
    },
  },
};
</script>

<style>
</style>