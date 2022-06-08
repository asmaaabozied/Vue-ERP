<template>
  <div
    class="tab-pane tab-product-main"
    id="units-data"
    role="tabpanel"
    aria-labelledby="units-tab"
  >
    <div class="panel panel-default">
      <div
        class="panel-heading"
        v-wow="{
          'animation-name': 'fadeInUp',
          'animation-duration': '2s',
        }"
      >
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapseThree"
          >
            <i class="flaticon2-tag"></i> <span>{{ $t("units") }}</span>
          </a>
        </h4>
      </div>
      <div
        id="collapseThree"
        class="panel-collapse collapse"
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <div class="row">
            <div class="col-12">
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
                <table class="datatable-table table table-bordered mt-2">
                  <thead class="datatable-head">
                    <tr class="datatable-row" style="left: 0px">
                      <th
                        data-field="RecordID"
                        class="datatable-cell-center datatable-cell text-center"
                      >
                        <span>#</span>
                      </th>
                      <th
                        data-field=""
                        class="datatable-cell end-cell text-center"
                      >
                        <span style="">{{ $t("action") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("bulkunits") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("parcode") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("calculation") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("quantity") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("price") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("consumer_price") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("great_number") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("small_numbers") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("min_price_sell") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("order_limits") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("prices_buy") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("opening_cost_prices") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("min_stock") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("max_stock") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("Weight") }}</span>
                      </th>

                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("Profit_Ratio") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("min_profit_ratio") }}</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="datatable-body">
                    <tr
                      v-for="(tr, index) in trs"
                      :key="tr.id"
                      class="datatable-row datatable-row-even"
                    >
                      <td class="datatable-cell-center datatable-cell">
                        <span style="width: 30px">{{ index + 1 }}</span>
                      </td>
                      <td class="text-center end-td">
                        <button
                          type="button"
                          data-toggle="tooltip"
                          class="btn btn-danger btn-option mt-5"
                          data-original-title="Remove"
                          :disabled="index + 1 == 1 ? '' : disabled"
                          @click="deleteRow(index)"
                        >
                          <i class="fa fa-minus-circle"></i>
                        </button>
                      </td>
                      <td class="datatable-cell">
                        <select
                          class="form-control"
                          :id="'unit-' + index"
                          @change="
                            changeOption(
                              $event,
                              index,
                              'units[' + index + '][unit_id]',
                              'unit'
                            )
                          "
                        >
                          <option value="" disabled selected>
                            {{ $t("Choose") }}
                          </option>
                          <option
                            v-for="unit in units.data"
                            v-bind:value="unit.id"
                            v-bind:name="unit.name"
                            v-if="unit.id != selected_unit"
                          >
                            {{ unit.name }}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="text"
                          disabled
                          :name="'units[' + index + '][parcode]'"
                          :id="'parcode-' + index"
                          :class="'form-control unit_' + index"
                        />
                      </td>
                      <td class="datatable-cell">
                        <select
                          @change="calculationPrice(index)"
                          :class="'form-control unit_' + index"
                          :name="'units[' + index + '][symbol]'"
                          :id="'symbol-' + index"
                          disabled
                        >
                          <option value="multiply" selected="">*</option>
                          <option value="divide">/</option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          @change="calculationPrice(index)"
                          :name="'units[' + index + '][quantity]'"
                          min="1"
                          :id="'quantity-' + index"
                          disabled
                          style="/* width:100%; */ display: inline"
                          :class="'form-control unit_' + index"
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :name="'units[' + index + '][price]'"
                          :id="'price-' + index"
                          :class="'form-control unit_' + index"
                          disabled
                          style="width: 100%; display: inline"
                          class="form-control required"
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :name="'units[' + index + '][consumer_price]'"
                          :class="'form-control unit_' + index"
                          disabled
                          class="form-control required"
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :id="'max_stocks-' + index"
                          :name="'units[' + index + '][max_stock]'"
                          :class="'form-control unit_' + index"
                          disabled
                          class="form-control required"
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :name="'units[' + index + '][min_stock]'"
                          :class="'form-control unit_' + index"
                          disabled
                          :id="'min_stocks-' + index"
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :id="'min_prices_sale-' + index"
                          :name="'units[' + index + '][min_price_sale]'"
                          :class="'form-control unit_' + index"
                          disabled
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :id="'order_limits-' + index"
                          :name="'units[' + index + '][order_limit]'"
                          :class="'form-control unit_' + index"
                          disabled
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :id="'prices_buy-' + index"
                          :name="'units[' + index + '][price_buy]'"
                          :class="'form-control unit_' + index"
                          disabled
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :id="'opening_cost_prices-' + index"
                          :name="'units[' + index + '][opening_cost_price]'"
                          :class="'form-control unit_' + index"
                          disabled
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :id="'min-stock' + index"
                          :name="'units[' + index + '][min_stock]'"
                          :class="'form-control unit_' + index"
                          disabled
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :name="'units[' + index + '][max_stock]'"
                          :id="'max-stock-' + index"
                          :class="'form-control unit_' + index"
                          disabled
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :name="'units[' + index + '][weight]'"
                          :id="'weight-' + index"
                          :class="'form-control unit_' + index"
                          value="0"
                          disabled
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :name="'units[' + index + '][profit_ratio]'"
                          :id="'profit_ratio-' + index"
                          :class="'form-control unit_' + index"
                          value="0"
                          disabled
                        />
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="number"
                          :name="'units[' + index + '][min_profit_ratio]'"
                          :id="'min_profit_ratio-' + index"
                          :class="'form-control unit_' + index"
                          value="0"
                          disabled
                        />
                      </td>
                    </tr>
                    <tr
                      class="datatable-row datatable-row-even"
                      id="relative_button_row"
                      style="left: 0px"
                    >
                      <td class="datatable-cell-center datatable-cell">
                        <span style="width: 30px">{{ incrment }}</span>
                      </td>
                      <td class="text-center end-td">
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
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell"><span> </span></td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell"><span></span></td>
                      <td class="datatable-cell"><span> </span></td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- end table button show -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "units-inputs",

  props: {
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
    errors: {
      type: Object,
      default: () => ({}),
    },
    price: {
      type: Number,
    },
    selected_unit: {
      type: Number,
    },
    selectUnit: {
      type: Function,
    },
    values: {
      type: Array,
    },
    changeOption: {
      type: Function,
    },
  },
  data() {
    return {
      activeAssign: false,
      trs: [
        {
          id: 1,
        },
      ],
      nextItemId: 2,
      calculation: "multiply",
      priceAfterCalculation: 0,
      quantity: 0,
      active: false,
      incrment: 2,
    };
  },

  created() {
    this.getResults();
  },
  computed: {
    units() {
      return this.$store.getters.getUnits;
    },
  },
  methods: {
    async getResults(page = 1) {
      const unitUrl = {
        URL: "units",
        page,
      };
      const units = await this.$store.dispatch("fetchUnits", unitUrl);
    },
    addRow() {
      this.trs.push({
        id: (this.nextItemId += this.nextItemId),
      });
      this.incrment++;

      this.nextItemId++;
    },
    deleteRow(index) {
      this.trs.splice(index, 1);
      this.incrment--;
    },
    calculationPrice(index) {
      let quantity = document.getElementById(`quantity-${index}`).value;
      let symbol = document.getElementById(`symbol-${index}`).value;
      if (symbol == "multiply") {
        document.getElementById(`price-${index}`).value = this.price * quantity;
      } else if (symbol == "divide") {
        document.getElementById(`price-${index}`).value = this.price / quantity;
      }
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>

<style></style>
