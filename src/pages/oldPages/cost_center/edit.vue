<template>
  <div>
    <top-bar-card
      :newUrlName="`cost_center.create`"
      :submit="updateCostCenter"
      :id="costCenter.id"
      :editUrlName="`cost_center.edit`"
      :navigationUrl="`costcenterNavigation`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form
          @submit.prevent="updateCostCenter"
          id="cost_center_form"
          autocomplete="off"
          method="PUT"
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
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :costCenter="costCenter"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <select
                    name="cost_center_id"
                    class="form-control has_sale_point has-float-label"
                    required
                  >
                    <option selected disabled>{{ $("parents") }}</option>
                    <option
                      v-for="(cc, i) in costCenters"
                      :value="cc.id"
                      :key="i"
                      :selected="cc.id == costCenter.cost_center_id"
                    >
                      {{ cc.name }}
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
                  <div class="col-lg-12 input-group p-0">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="opening_expenses"
                      name="opening_expenses"
                      :value="costCenter.opening_expenses"
                    />
                  </div>
                  <label class="col-form-label">{{
                    $("opening_expenses")
                  }}</label>
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
                      :value="costCenter.opening_returns"
                    />
                  </div>
                  <label class="col-form-label">{{
                    $("opening_returns")
                  }}</label>
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
                      :value="costCenter.expected_costs"
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
                      :value="costCenter.expected_returns"
                    />
                  </div>
                  <label class="col-form-label">{{
                    $("expected_returns")
                  }}</label>
                  <span class="text-danger" v-if="errors.expected_returns">
                    {{ errors.expected_returns[0] }}
                  </span>
                </div>
              </div>

              <div class="col-6">
                <active-toggle :active="active" />
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
import EditInputs from "./EditInputs.vue";

export default {
  name: "cost_center.edit",
  components: {
    LangTabs,
    EditInputs,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      costCenter: {},
      costCenters: [],
      languages: window.$languages,
      active: {},
    };
  },
  created() {
    this.costCenterId = this.$route.params.id;
    this.getCostCenter();
    this.getCostCenters();
  },
  methods: {
    async updateCostCenter() {
      try {
        var form = document.getElementById("cost_center_form");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const costCenter = {
          URL: "cost_center/" + this.costCenterId,
          data: formData,
        };
        await this.$store.dispatch("updateCostCenter", costCenter);

        document.location.href = "cost_center";
      } catch (errors) {
        this.errors = errors;
      }
    },
    getCostCenter() {
      $axios
        .get("/cost_center/" + this.costCenterId)
        .then((response) => {
          this.costCenter = response.data.data;
          this.active = response.data.data.active;
        })
        .catch((error) => {});
    },
    changeBt(event) {
      this.active = event.value;
    },
    getCostCenters() {
      $axios
        .get("/cost_center")
        .then((response) => {
          this.costCenters = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>
