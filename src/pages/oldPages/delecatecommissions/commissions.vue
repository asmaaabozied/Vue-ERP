<template>
  <div>
    <div class="has-float-label mb-0">
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
                class="datatable-cell-center datatable-cell text-center"
              >
                <span>#</span>
              </th>
              <th data-field="" class="datatable-cell end-cell text-center">
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
            <tr v-for="(commission, index) in commissions" :key="commission.id">
              <input
                type="hidden"
                :name="`commissions[${index}][id]`"
                :value="commission.id"
              />
              <td class="datatable-cell-center datatable-cell text-center">
                <span style="width: 30px">{{ index + 1 }}</span>
              </td>
              <td class="text-center">
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Remove"
                  :disabled="index + 1 == 1 ? '' : disabled"
                  class="btn btn-danger btn-option"
                  @click="deleteRow(index, commission.id)"
                >
                  <i class="fa fa-minus-circle"></i>
                </button>
              </td>

              <td class="text-start">
                <input
                  type="number"
                  class="form-control"
                  min="0"
                  :value="commission ? commission.from : ''"
                  max="100"
                  placeholder="from date"
                  :name="`commissions[${index}][from]`"
                />
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
                    :value="commission ? commission.to : ''"
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
                    :value="commission ? commission.percentage : ''"
                  />
                </div>
              </td>
              <td>
                <select
                  class="form-control"
                  :name="`commissions[${index}][success_fail]`"
                >
                  <option selected value="">Choose...</option>
                  <option
                    value="success"
                    :selected="commission.success_fail == 'success'"
                  >
                    Success
                  </option>
                  <option
                    value="fail"
                    :selected="commission.success_fail == 'fail'"
                  >
                    Fail
                  </option>
                </select>
              </td>
            </tr>
            <tr
              class="datatable-row datatable-row-even"
              id="relative_button_row"
              style="left: 0px"
            >
              <td class="datatable-cell-center datatable-cell text-center">
                <span style="width: 30px"></span>
              </td>
              <td class="text-center">
                <button
                  @click="addRow()"
                  type="button"
                  class="btn btn-primary add_new"
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
</template>

<script>
export default {
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
      date: new Date(),

      commissions: [
        {
          id: 1,
        },
      ],
      activeRow: false,
      nextItemId: 2,
      incrment: 2,
    };
  },

  created() {
    this.getCommissions();
  },
  computed: {
    // commissions() {
    //   return this.$store.getters.getCommissions;
    // },
  },

  methods: {
    addRow() {
      this.activeRow = true;
      this.commissions.push({
        id: (this.nextItemId += this.nextItemId),
      });
      this.incrment++;
      this.nextItemId++;
    },
    deleteRow(index, commission_id) {
      this.commissions.splice(index, 1);
      this.$emit("deletedCommissionIds", commission_id);
      this.incrment--;
    },
    async getCommissions() {
      const commissionUrl = { URL: "commissions" };
      const commissions = await this.$store.dispatch(
        "fetchCommissions",
        commissionUrl
      );
    },
  },
};
</script>

<style></style>
