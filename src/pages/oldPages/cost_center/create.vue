<template>
  <div>
    <top-bar-card
      :newUrlName="`cost_center.create`"
      :submit="newCostCenter"
      :id="0"
      :editUrlName="`cost_center.edit`"
      :navigationUrl="`costcenterNavigation`"
      :model="`costcenter`"
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
        <form
          @submit.prevent="newCostCenter"
          id="cost_center_form"
          autocomplete="off"
          method="POST"
          action="#"
        >
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

              <div class="col-6" v-if="costCenters.data">
                <div class="form-group has-float-label">
                  <select
                    name="cost_center_id"
                    class="form-control has_sale_point"
                    required
                  >
                    <option selected disabled>{{ $("parents") }}</option>
                    <option
                      v-for="(costCenter, i) in costCenters.data"
                      :value="costCenter.id"
                      :key="i"
                    >
                      {{ costCenter.name }}
                    </option>
                  </select>
                  <label class="col-form-label">{{ $("parents") }}</label>
                  <span class="text-danger" v-if="errors.cost_center_id">
                    {{ errors.cost_center_id[0] }}
                  </span>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="opening_expenses"
                      name="opening_expenses"
                    />
                  </div>
                  <label class="col-form-label">
                    {{ $("opening_expenses") }}</label
                  >
                  <span class="text-danger" v-if="errors.opening_expenses">
                    {{ errors.opening_expenses[0] }}
                  </span>
                </div>
              </div>
              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="opening_returns"
                      name="opening_returns"
                    />
                  </div>
                  <label class="col-form-label">
                    {{ $("opening_returns") }}</label
                  >
                  <span class="text-danger" v-if="errors.opening_returns">
                    {{ errors.opening_returns[0] }}
                  </span>
                </div>
              </div>
              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="expected_costs"
                      name="expected_costs"
                    />
                  </div>
                  <label class="col-form-label">
                    {{ $("expected_costs") }}</label
                  >
                  <span class="text-danger" v-if="errors.expected_costs">
                    {{ errors.expected_costs[0] }}
                  </span>
                </div>
              </div>
              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="expected_returns"
                      name="expected_returns"
                    />
                  </div>
                  <label class="col-form-label">
                    {{ $("expected_returns") }}</label
                  >
                  <span class="text-danger" v-if="errors.expected_returns">
                    {{ errors.expected_returns[0] }}
                  </span>
                </div>
              </div>
              <div class="col-6">
                <active-toggle />
              </div>
            </div>
          </div>
        </form>

        <!--end::Form-->
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
  name: "cost_center.create",
  components: {
    LangTabs,
    Inputs,
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
      languages: window.$languages,
      active: false,
      isEmpty: false,
    };
  },
  created() {
    this.getCostCenters();
  },
  computed: {
    costCenters() {
      return this.$store.getters.getCostCenters;
    },
  },
  methods: {
    async newCostCenter() {
      try {
        var form = document.getElementById("cost_center_form");
        var formData = new FormData(form);
        const costCenter = {
          URL: "cost_center",
          data: formData,
        };
        await this.$store.dispatch("storeCostCenter", costCenter);
        document.location.href = "cost_center";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    changeBt(event) {
      this.active = event.value;
    },
    async getCostCenters() {
      const costCenterUrl = {
        URL: "cost_center",
      };
      const costCenters = await this.$store.dispatch(
        "fetchCostCenters",
        costCenterUrl
      );
    },
  },
};
</script>