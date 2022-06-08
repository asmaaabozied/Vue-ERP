<template>
  <div>
    <top-bar-card :newUrlName="`edit-delegateCommissions`" />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form>
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-md-6 col-12 mt-7 has-float-label">
                <div class="form-group m-0">
                  <input
                    type="number"
                    name="code"
                    id=""
                    placeholder="code"
                    :value="DelegateCommission.code"
                    class="form-control"
                  />
                  <label for="" class="col-form-label">{{ $t("code") }}</label>
                </div>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
                  <select class="form-control" id="" name="target_type">
                    <option value=""></option>
                    <option
                      value="Monthly"
                      :selected="DelegateCommission.target_type == 'Monthly'"
                    >
                      {{ $("Monthly") }}
                    </option>
                    <option
                      value="Quarterly"
                      :selected="DelegateCommission.target_type == 'Quarterly'"
                    >
                      {{ $("Quarterly") }}
                    </option>
                    <option
                      value="6_months"
                      :selected="DelegateCommission.target_type == '6_months'"
                    >
                      {{ $("6_months") }}
                    </option>
                    <option
                      value="annually"
                      :selected="DelegateCommission.target_type == 'annually'"
                    >
                      {{ $("annually") }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">
                    {{ $("target_type") }}</label
                  >
                </div>
              </div>
              <div class="col-md-6 mt-7">
                <div class="has-float-label mb-0">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="target_value"
                      min="0"
                      :value="DelegateCommission.target_value"
                      placeholder="target_value"
                    />
                    <label for="exampleSelectl">{{ $("target_value") }}</label>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
                  <select class="form-control" id="" name="delegate_id">
                    <option value=""></option>
                    <option
                      v-for="employee in employees.data"
                      :key="employee.id"
                      v-bind:value="employee.id"
                      :selected="employee.id == DelegateCommission.delegate_id"
                    >
                      {{ employee.first_name }} {{ employee.middle_name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $("delegate")
                  }}</label>
                </div>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
                  <select class="form-control" id="" name="commission_type">
                    <option value=""></option>
                    <option
                      value="on_sale"
                      :selected="
                        DelegateCommission.commission_type == 'on_sale'
                      "
                    >
                      {{ $("On_Sale") }}
                    </option>
                    <option
                      value="on_collection"
                      :selected="
                        DelegateCommission.commission_type == 'on_collection'
                      "
                    >
                      {{ $("On_Collection") }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("Commission_Type")
                  }}</label>
                </div>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
                  <select
                    class="form-control"
                    id=""
                    name="commission_calculation_method"
                    v-model="selected"
                    @change="selectdevs($event)"
                  >
                    <option value=""></option>
                    <option value="fixed_amount">
                      {{ $("Fixed_Amount") }}
                    </option>
                    <option value="based_on_collection_duration">
                      {{ $("Based_On_Collection_Duration") }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $("commission_calculation_method")
                  }}</label>
                </div>
              </div>
              <div class="col-md-6 mt-7">
                <div
                  class="has-float-label mb-0"
                  v-if="selected == 'fixed_amount'"
                >
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="target_done_commission"
                      :value="DelegateCommission.target_done_commission"
                      min="0"
                      placeholder="target_done_commission"
                    />
                    <label for="exampleSelectl">{{
                      $("Target_Done_Commission")
                    }}</label>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mt-7">
                <div
                  class="has-float-label mb-0"
                  v-if="selected == 'fixed_amount'"
                >
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="target_fail_commission"
                      min="0"
                      :value="DelegateCommission.target_fail_commission"
                      placeholder="target_faile_commission"
                    />
                    <label for="exampleSelectl">{{
                      $("Target_Faile_Commission")
                    }}</label>
                  </div>
                </div>
              </div>
              <commissions
                v-if="selected == 'based_on_collection_duration'"
                :commissions="commissions"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import commissions from "./commissions.vue";

export default {
  name: "add-delegateCommissions",
  components: { commissions },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      selected: "",

      DelegateCommission: {},
      commissions: {},
    };
  },

  created() {
    this.getEmployees();
    this.getDelegateCommission();
    // this.getCommissions();
  },
  computed: {
    employees() {
      return this.$store.getters.getEmployees;
    },
    //  commissions() {
    //   return this.$store.getters.getCommissions;
    // },
  },

  methods: {
    async updatedelegateCommissions() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const DelegateCommission = {
          URL: "delegateCommissions/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch(
          "updateDelecateCommission",
          DelegateCommission
        );
        document.location.href = "delegateCommissions";
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getDelegateCommission() {
      const DelegateCommission = {
        URL: "delegateCommissions/" + this.$route.params.id,
      };
      const getDelegateCommission = await this.$store.dispatch(
        "getDelegateCommission",
        DelegateCommission
      );

      this.DelegateCommission = getDelegateCommission.data.data;
      this.commissions = this.DelegateCommission.commissions;
      this.selected = this.DelegateCommission.commission_calculation_method;
    },
    async getEmployees() {
      const employeeUrl = {
        URL: "employees",
      };
      const employees = await this.$store.dispatch(
        "fetchEmployees",
        employeeUrl
      );
    },
  },
};
</script>

<style></style>
