<template>
  <div
    class="tab-pane fade show tab-product-main"
    id="alternative-items"
    role="tabpanel"
    aria-labelledby="#alternative-items-tab"
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
            href="#collapseFive"
          >
            <i class="flaticon2-layers-2"></i>
            <span>{{ $t("alternative_items") }}</span>
          </a>
        </h4>
      </div>
      <div
        id="collapseFive"
        class="panel-collapse collapse"
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <div class="row">
            <div class="col-12">
              <!--begin: Datatable-->

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
                        <span style="width: 30px">#</span>
                      </th>
                      <th class="datatable-cell end-cell text-center">
                        <span style="">{{ $t("action") }}</span>
                      </th>
                      <th data-field="name" class="datatable-cell">
                        <span style=""> {{ $t("product_Name") }}</span>
                      </th>
                      <th data-field="employee_id" class="datatable-cell">
                        <span style="">{{ $t("cost_price") }}</span>
                      </th>
                      <th data-field="name" class="datatable-cell">
                        <span style="">{{ $t("selling_price") }}</span>
                      </th>
                      <th data-field="hire_date" class="datatable-cell">
                        <span style="">{{ $t("type") }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="datatable-body">
                    <tr
                      class="datatable-row datatable-row-even"
                      v-for="(tr, index) in trs"
                      :key="tr.id"
                      style="left: 0px"
                    >
                      <td
                        class="datatable-cell-center datatable-cell text-center"
                      >
                        <span style="width: 30px">{{ index + 1 }}</span>
                      </td>
                      <td class="text-center end-td">
                        <button
                          type="button"
                          data-toggle="tooltip"
                          title=""
                          @click="deleteRow(index)"
                          :disabled="index + 1 == 1 ? '' : disabled"
                          class="btn btn-danger btn-option"
                          data-original-title="Remove"
                        >
                          <i class="fa fa-minus-circle"></i>
                        </button>
                      </td>
                      <td class="datatable-cell">
                        <span>
                          <select
                            class="form-control"
                            :id="'relative-' + index"
                            @change="
                              changeOption(
                                $event,
                                index,
                                'relatives[' + index + '][relative_id]',
                                'relative'
                              )
                            "
                          >
                            <option :value="null" selected>
                              {{ $t("Choose") }}
                            </option>
                            <option
                              v-for="product in products.data"
                              v-bind:value="product.id"
                            >
                              {{ product.name }}
                            </option>
                          </select>
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <span
                          ><input
                            type="number"
                            placeholder="Cost Price"
                            :class="'form-control relative_' + index"
                            disabled
                            :name="'relatives[' + index + '][cost_price]'"
                        /></span>
                      </td>
                      <td class="datatable-cell">
                        <span
                          ><input
                            type="number"
                            placeholder="Sell Price"
                            :class="'form-control relative_' + index"
                            disabled
                            :name="'relatives[' + index + '][selling_price]'"
                        /></span>
                      </td>
                      <td class="datatable-cell">
                        <span>
                          <select
                            :class="'form-control relative_' + index"
                            disabled
                            :name="'relatives[' + index + '][is_two_sides]'"
                          >
                            <option disabled>{{ $t("Choose") }}</option>
                            <option value="0">{{ $t("One_side") }}</option>
                            <option value="1">{{ $t("Two_sides") }}</option>
                          </select></span
                        >
                      </td>
                    </tr>
                    <tr
                      class="datatable-row datatable-row-even"
                      id="relative_button_row"
                      style="left: 0px"
                    >
                      <td
                        class="datatable-cell-center datatable-cell text-center"
                      >
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
                      <td class="datatable-cell"><span></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <input type="hidden" id="products" value="[]" />
              <!--end: Datatable-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alternatives-inputs",
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
    changeOption: {
      type: Function,
    },
  },
  data() {
    return {
      index: 0,
      isActive: true,
      activeAssign: false,
      trs: [
        {
          id: 1,
        },
      ],
      incrment: 2,
      active: false,
      nextItemId: 2,
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  methods: {
    async getProducts() {
      const countryUrl = {
        URL: "products",
      };
      const products = await this.$store.dispatch("fetchProducts", countryUrl);
    },
    addRow() {
      this.trs.push({
        id: (this.nextItemId += this.nextItemId),
      });

      this.nextItemId++;
      this.incrment++;
    },
    deleteRow(index) {
      this.trs.splice(index, 1);
      this.incrment--;
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>

<style></style>
