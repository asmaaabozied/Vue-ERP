<template>
  <div>
    <top-bar-card
      :newUrlName="`add-delegateCommissions`"
      :submit="newDelegateCommission"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newDelegateCommission" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6 has-float-label">
                <div class="form-group">
                  <input
                    type="number"
                    name="code"
                    id=""
                    placeholder="code"
                    class="form-control"
                    v-on:input="valiCode($event)"
                    :class="{ [`${addclass}`]: errors.code }"
                  />
                  <label for="" class="col-form-label">{{ $("code") }}</label>
                  <span
                    class="text-danger"
                    v-if="errors.code"
                    :class="seenCode"
                  >
                    {{ errors.code[0] }}
                  </span>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="target_type">
                    <option value=""></option>
                    <option value="Monthly">{{ $("Monthly") }}</option>
                    <option value="Quarterly">{{ $("Quarterly") }}</option>
                    <option value="6_months">{{ $("6_months") }}</option>
                    <option value="annually">{{ $("annually") }}</option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("target_type")
                  }}</label>
                </div>
              </div>
              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="target_value"
                      min="0"
                      placeholder="target_value"
                    />
                    <label for="exampleSelectl"> {{ $("target_value") }}</label>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="delegate_id">
                    <option value=""></option>
                    <option
                      v-for="employee in employees.data"
                      :key="employee.id"
                      v-bind:value="employee.id"
                    >
                      {{ employee.first_name }} {{ employee.middle_name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">
                    {{ $("delegate") }}</label
                  >
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="commission_type">
                    <option value=""></option>
                    <option value="on_sale">{{ $("On_Sale") }}</option>
                    <option value="on_collection">
                      {{ $("On_Collection") }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("Commission_Type")
                  }}</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    id=""
                    name="commission_calculation_method"
                    @change="selectdev($event)"
                  >
                    <option value=""></option>
                    <option value="fixed_amount">
                      {{ $("Fixed_Amount") }}
                    </option>
                    <option value="based_on_collection_duration">
                      {{ $("Based_On_Collection_Duration") }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">
                    {{ $("commission_calculation_method") }}</label
                  >
                </div>
              </div>
              <div class="col-6">
                <div class="has-float-label" :class="`${div1}`">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="target_done_commission"
                      min="0"
                      placeholder="target_done_commission"
                    />
                    <label for="exampleSelectl">{{
                      $("Target_Done_Commission")
                    }}</label>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="has-float-label" :class="`${div1}`">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="target_fail_commission"
                      min="0"
                      placeholder="target_faile_commission"
                    />
                    <label for="exampleSelectl">
                      {{ $("Target_Faile_Commission") }}</label
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-12" :class="`${div2}`">
                <!-- table  -->
                <div
                  class="
                    datatable
                    datatable-bordered
                    datatable-head-custom
                    datatable-default
                    datatable-primary
                    datatable-loaded
                    table-product
                    alternative-table
                  "
                  style=""
                >
                  <table class="table table-striped p-3 mb-0 table-bordered">
                    <thead class="datatable-head">
                      <tr class="datatable-row" style="left: 0px">
                        <th
                          data-field="RecordID"
                          class="
                            datatable-cell-center datatable-cell
                            text-center
                          "
                        >
                          <span>#</span>
                        </th>
                        <th
                          data-field=""
                          class="datatable-cell end-cell text-center"
                        >
                          <span style=""> {{ $t("action") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span style=""> {{ $t("From_Day") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span style="">{{ $t("To_Day") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span style=""> {{ $t("Percentage") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span style=""> {{ $t("Commission_Type") }}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="datatable-body">
                      <tr
                        class="datatable-row datatable-row-even"
                        v-for="(commission, index) in commissions"
                        :key="index"
                        style="left: 0px"
                      >
                        <td
                          class="
                            datatable-cell-center datatable-cell
                            text-center
                          "
                        >
                          <span style="width: 30px">{{ index + 1 }}</span>
                        </td>
                        <td class="text-center end-td">
                          <button
                            type="button"
                            data-toggle="tooltip"
                            title=""
                            @click="deleteRow(index)"
                            class="btn btn-danger btn-option"
                            data-original-title="Remove"
                            :disabled="index + 1 == 1 ? '' : disabled"
                          >
                            <i class="fa fa-minus-circle"></i>
                          </button>
                        </td>
                        <td class="text-start">
                          <div class="">
                            <input
                              type="number"
                              class="form-control"
                              min="0"
                              max="100"
                              placeholder="from date"
                              :name="`commissions[${index}][from]`"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="">
                            <input
                              type="number"
                              class="form-control"
                              min="0"
                              max="100"
                              placeholder="to date"
                              :name="`commissions[${index}][to]`"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="">
                            <input
                              type="number"
                              class="form-control"
                              min="0"
                              max="100"
                              placeholder="percentage"
                              :name="`commissions[${index}][percentage]`"
                            />
                          </div>
                        </td>
                        <td>
                          <div class="">
                            <select
                              class="form-control"
                              :name="`commissions[${index}][success_fail]`"
                            >
                              <option selected value="">
                                {{ $t("Choose") }}
                              </option>
                              <option value="success">
                                {{ $t("Success") }}
                              </option>
                              <option value="fail">{{ $t("Fail") }}</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr
                        class="datatable-row datatable-row-even"
                        id="relative_button_row"
                        style="left: 0px"
                      >
                        <td
                          class="
                            datatable-cell-center datatable-cell
                            text-center
                          "
                        >
                          <span style="width: 30px">{{ incrment }}</span>
                        </td>
                        <td class="text-center">
                          <button
                            type="button"
                            title=""
                            class="btn btn-primary btn-option"
                            @click="addRow()"
                          >
                            <i class="fa fa-plus-circle"></i>
                          </button>
                        </td>
                        <td class="datatable-cell"><span></span></td>
                        <td class="datatable-cell"><span></span></td>
                        <td class="datatable-cell"><span></span></td>
                        <td class="datatable-cell"><span></span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--  -->
              </div>
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

    commissions: {
      type: Array,
      default: [
        {
          field: "id",
          sort: true,
          visible: true,
        },
      ],
    },
  },
  data() {
    return {
      div1: "d-none",
      div2: "d-none",
      delegatecommission: {},
      incrment: 2,
      commissions: [
        {
          id: "",
        },
      ],

      nextItemId: 2,
      addclass: "is-invalid",
      seenCode: "",
    };
  },

  created() {
    this.getEmployees();
  },

  computed: {
    employees() {
      return this.$store.getters.getEmployees;
    },
  },

  methods: {
    async newDelegateCommission() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        console.log(formData);

        const delegatecommission = {
          URL: "delegateCommissions",
          data: formData,
        };
        await this.$store.dispatch(
          "storeDelecateCommission",
          delegatecommission
        );
        document.location.href = "delegateCommissions";
      } catch (errors) {
        this.errors = errors;
        console.log(this.errors);
      }
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

    addRow() {
      this.commissions.push({
        id: this.index,
      });
      this.incrment++;

      this.nextItemId++;
    },
    deleteRow(index) {
      if (index != 0) {
        this.commissions.splice(index, 1);
        this.incrment--;
      }

      this.nextItemId--;
    },

    selectdev: function (e) {
      console.log(this.value);
      if (e.target.value == "fixed_amount") {
        this.div1 = "";
        this.div2 = "d-none";
      } else if (e.target.value == "based_on_collection_duration") {
        this.div2 = "";
        this.div1 = "d-none";
      } else {
        this.div1 = "d-none";
        this.div2 = "d-none";
      }
    },
    valiCode(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenCode = "";
      } else {
        this.addclass = "";
        this.seenCode = "d-none";
      }
    },
  },
};
</script>

<style></style>
