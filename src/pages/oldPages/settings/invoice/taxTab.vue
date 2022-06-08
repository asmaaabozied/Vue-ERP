<template>
  <div
    class="tab-pane fade tab-product-main show"
    id="page-tax"
    role="tabpanel"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapseTwo1"
          >
            <i class="flaticon2-gear"></i> <span>tax</span>
          </a>
        </h4>
      </div>

      <div
        id="collapseTwo1"
        class="panel-collapse collapse "
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <div class=" tex-form00">
            <div class="checkbox-list">
              <label
                for="is_taxed"
                class="checkbox checkbox-outline checkbox-outline-2x col-6 "
              >
                <input
                  type="checkbox"
                  id="is_taxed"
                  name="is_taxed"
                  value="1"
                  unchecked-value="0"
                  v-model="is_taxed"
                  style="margin-top: 3px"
                />
                <span></span>
                is_taxed
              </label>
              <label
                class="checkbox checkbox-outline checkbox-outline-2x col-6"
                for="tax_on_line"
              >
                <input
                  type="checkbox"
                  id="tax_on_line"
                  name="tax_on_line"
                  value="1"
                  unchecked-value="0"
                  v-model="tax_on_line"
                  :disabled="is_taxed == 0"
                  style="margin-top: 3px"
                />
                <span></span>
                tax on line
              </label>
              <div class="d-flex">
                <label
                  class="checkbox checkbox-outline checkbox-outline-2x col-6 m-0"
                  for="print_serial_number"
                >
                  <input
                    type="checkbox"
                    id="print_serial_number"
                    name="print_serial_number"
                    value="1"
                    unchecked-value="0"
                    v-model="print_serial_number"
                    style="margin-top: 3px"
                  />
                  <span></span>
                  print_serial_number
                </label>
              </div>
            </div>
          </div>

          <div
            class="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded table-product alternative-table"
          >
            <table class="datatable-table table table-bordered mt-2">
              <thead class="datatable-head">
                <tr class="datatable-row" style="left: 0px;">
                  <th
                    data-field="RecordID"
                    class="datatable-cell-center datatable-cell text-center"
                  >
                    <span>#</span>
                  </th>
                  <th class=" datatable-cell  end-cell text-center">
                    <span style="">action</span>
                  </th>
                  <th data-field="" class="datatable-cell ">
                    <span>tax name </span>
                  </th>
                  <th data-field="" class="datatable-cell ">
                    <span>start date </span>
                  </th>
                  <th data-field="" class="datatable-cell ">
                    <span>end date </span>
                  </th>
                  <th data-field="" class="datatable-cell ">
                    <span>rate</span>
                  </th>
                </tr>
              </thead>
              <tbody class="datatable-body">
                <tr
                  class="datatable-row datatable-row-even"
                  v-for="(tr, index) in taxRows"
                  :key="tr.id"
                >
                  <td class="datatable-cell-center datatable-cell">
                    <span>{{ index + 1 }}</span>
                  </td>
                  <td class="text-center end-td">
                    <button
                      type="button"
                      data-toggle="tooltip"
                      data-original-title="Remove"
                      class="btn btn-danger btn-option mt-5"
                      @click="removeTaxRow(index)"
                    >
                      <i class="fa fa-minus-circle"></i>
                    </button>
                  </td>
                  <td class="datatable-cell ">
                    <select
                      :class="'form-control tax_' + index"
                      :name="'taxes[' + index + '][tax_id]'"
                      @change="taxChange(index)"
                    >
                      <option disabled selected>choose tax</option>
                      <option
                        v-for="(tax, index) in taxes"
                        :key="index"
                        :value="tax.id"
                        >{{ tax.name }}</option
                      >
                    </select>
                  </td>
                  <td class="datatable-cell ">
                    <input
                      type="date"
                      :name="'taxes[' + index + '][start_date]'"
                      :class="'form-control taxStartDate_' + index"
                    />
                  </td>
                  <td class="datatable-cell ">
                    <input
                      type="date"
                      :name="'taxes[' + index + '][end_date]'"
                      :class="'form-control taxEndDate_' + index"
                    />
                  </td>
                  <td class="datatable-cell ">
                    <input
                      type="number"
                      :name="'taxes[' + index + '][value]'"
                      :class="'form-control taxRate_' + index"
                    />
                  </td>
                </tr>
                <tr
                  id="relative_button_row"
                  class="datatable-row datatable-row-even"
                  style="left: 0px;"
                >
                  <td class="datatable-cell-center datatable-cell ">
                    <span style="width: 30px;">{{ incrment }}</span>
                  </td>
                  <td class="text-center end-td">
                    <button
                      type="button"
                      title=""
                      class="btn btn-primary btn-option"
                      @click="addTaxRow"
                    >
                      <i class="fa fa-plus-circle"></i>
                    </button>
                  </td>
                  <td class="datatable-cell "><span></span></td>
                  <td class="datatable-cell "><span></span></td>
                  <td class="datatable-cell "><span></span></td>
                  <td class="datatable-cell "><span></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "taxTab",

  props: {
    data: {},
    taxes: { type: Array },
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
  },
  data() {
    return {
      incrment: 2,
      is_taxed: false,
      tax_on_line: false,
      print_serial_number: false,
      isActive: true,
      active: false,
      taxesData: [],
      taxRows: [
        {
          id: "",
        },
      ],
      tax_rows_offset: 1,
    };
  },
  created() {},
  methods: {
    async taxChange(index) {
      let tax_id = $(".tax_" + index + " option:selected").val();
      this.getTaxValues(this.taxes);
      if (this.taxesData[tax_id]) {
        $(".taxStartDate_" + index).val(this.taxesData[tax_id].start_date);
        $(".taxEndDate_" + index).val(this.taxesData[tax_id].end_date);
        $(".taxRate_" + index).val(this.taxesData[tax_id].value);
      } else {
        $(".taxStartDate_" + index).val("");
        $(".taxEndDate_" + index).val("");
        $(".taxRate_" + index).val("");
      }
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
    getTaxValues(taxes) {
      let taxesValues = [];
      // country_id should handled in BK-end OR get country_id
      let country_id = 1;
      if (!this.taxesData.length) {
        $.each(taxes, function(key, value) {
          $.each(value.pivotData, function(k, v) {
            if (v.country_id == country_id) {
              taxesValues[value.id] = {
                start_date: v.start_date,
                end_date: v.end_date,
                value: v.value,
              };
            }
          });
        });
        this.taxesData = taxesValues;
        // console.log(this.taxesData);
      }
    },
    addTaxRow() {
      this.taxRows.push({
        id: this.tax_rows_offset,
      });
      this.tax_rows_offset++;
      this.incrment++;
    },
    removeTaxRow(index) {
      if (this.taxRows.length !== 1) {
        this.taxRows.splice(index, 1);
        this.incrment--;
      }
    },
  },
};
</script>

<style scoped></style>
