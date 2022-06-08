<template>
  <div>
    <top-bar-card
      :newUrlName="`add-discountVendorContracts`"
      :submit="newDiscountVendorContract"
      :id="0"
      :editUrlName="`edit-discountVendorContracts`"
      :navigationUrl="`discountVendorContractNavigation`"
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
        <form @submit.prevent="newDiscountVendorContract" id="currentForm">
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

              <div class="col-6 mt-7 has-float-label">
                <div class="form-group">
                  <input
                    type="number"
                    name="code"
                    id
                    placeholder="code"
                    class="form-control"
                    v-on:input="valCode($event)"
                    :class="{ [`${addClassCode}`]: errors.code }"
                  />
                  <label for class="col-form-label">{{ $t("code") }}</label>
                  <span
                    class="text-danger"
                    v-if="errors.code"
                    :class="seenCode"
                    >{{ errors.code[0] }}</span
                  >
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="form-group p-0 mb-0 has-float-label">
                  <select class="form-control" name="account">
                    <option selected value></option>
                    <option value="first_account">
                      {{ $t("first_account") }}
                    </option>
                    <option value="second_account">
                      {{ $t("second_account") }}
                    </option>
                  </select>
                  <label for class="col-form-label">{{ $t("account") }}</label>

                  <span class="text-danger" v-if="errors.account">{{
                    errors.account[0]
                  }}</span>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <active-toggle />
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
import MainErrors from "@/components/form/MainErrors.vue";
import GoogleMap from "@/components/layouts/GoogleMap.vue";
import switcherLang from "@/components/layouts/switcherLang.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "add-discountVendorContracts",
  components: {
    LangTabs,
    Inputs,
    MainErrors,
    GoogleMap,
    switcherLang,
    Errors,
    UAnimateContainer,
    UAnimate,
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      discountVendorContract: {},
      languages: window.$languages,
      gridClassName: window.$gridClassName,
      isEmpty: false,
      addCountries: "is-invalid",
      seenCountries: "",
      addCostCenters: "is-invalid",
      seenCostCenters: "",
      addEmployees: "is-invalid",
      seenEmployees: "",
    };
  },
  created() {
    this.getCountries();
    this.getEmployees();
    this.getCostCenters();
  },
  computed: {
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
  mounted() {
    this.initializeMap();
  },
  methods: {
    async newDiscountVendorContract() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const discountVendorContract = {
          URL: "discountVendorContracts",
          data: formData,
        };
        await this.$store.dispatch(
          "storeDiscountVendorContract",
          discountVendorContract
        );
        document.location.href = "discountVendorContracts";
      } catch (errors) {
        if (errors) {
          this.errors = errors;
          this.isEmpty = true;
        }
      }
    },
    async getCountries() {
      const countryUrl = { URL: "countries" };
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
      const employeeUrl = {
        URL: "employees",
        all: 1,
      };
      const employees = await this.$store.dispatch(
        "fetchEmployees",
        employeeUrl
      );
    },
    valCountries(e) {
      if (e.target.value == "") {
        this.addCountries = "is-invalid";
        this.seenCountries = "";
      } else {
        this.addCountries = "";
        this.seenCountries = "d-none";
      }
    },
    valCostCenters(e) {
      if (e.target.value == "") {
        this.addCostCenters = "is-invalid";
        this.seenCostCenters = "";
      } else {
        this.addCostCenters = "";
        this.seenCostCenters = "d-none";
      }
    },
    valEmployees(e) {
      if (e.target.value == "") {
        this.addEmployees = "is-invalid";
        this.seenEmployees = "";
      } else {
        this.addEmployees = "";
        this.seenEmployees = "d-none";
      }
    },

    changeGrid(event) {
      this.gridClassName = event;
    },
  },
};
</script>

<style></style>
