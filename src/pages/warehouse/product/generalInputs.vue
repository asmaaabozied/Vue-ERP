<template>
  <div
    class="tab-pane fade show tab-product-main active"
    id="page-general2"
    role="tabpanel"
    aria-labelledby="general2-tab"
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
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">
            <i class="flaticon2-gear"></i> <span>{{ $t("data") }}</span>
          </a>
        </h4>
      </div>
      <div id="collapseOne" class="panel-collapse collapse" :class="`${dataa}`">
        <div class="panel-body">
          <div class="row">
            <div class="col-12">
              <div class="row mt-3">
                <div
                  class="col-3 has-float-label"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      name="model"
                      placeholder="model"
                      class="form-control"
                      id=""
                    />
                    <label for="inputState" class="col-form-label">{{
                      $t("model")
                    }}</label>
                  </div>

                  <div class="form-group has-float-label">
                    <select class="form-control" name="unit_id">
                      <option selected value=""></option>

                      <option>warehouse1</option>
                      <option>warehouse2</option>
                    </select>
                    <label class="col-form-label">{{
                      $t("warehouse_name")
                    }}</label>
                  </div>
                </div>
                <div
                  class="col-3"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="form-group has-float-label">
                    <select class="form-control" id="" name="product_type_id">
                      <option value="" disabled selected></option>
                      <option></option>
                    </select>
                    <label for="exampleSelectl" class="col-form-label">{{
                      $t("Product_Types")
                    }}</label>
                  </div>
                  <div class="form-group has-float-label">
                    <select class="form-control" id="" name="product_kind">
                      <option value="" disabled selected></option>
                      <option></option>
                    </select>
                    <label for="exampleSelectl" class="col-form-label">{{
                      $t("product_kind")
                    }}</label>
                  </div>
                </div>

                <div
                  class="col-3"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="col has-float-label p-0">
                    <div class="form-group">
                      <input
                        type="number"
                        name="weight"
                        placeholder="weight"
                        class="form-control"
                        id=""
                      />
                      <label for="inputState" class="col-form-label">{{
                        $t("Weight")
                      }}</label>
                    </div>
                  </div>
                  <div
                    class="col p-0"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-grou has-float-label">
                      <select class="form-control" name="producer_id">
                        <option value=""></option>
                        <option></option>
                      </select>
                      <label class="col-form-label">{{ $t("producer") }}</label>
                    </div>
                  </div>
                </div>
                <div class="col-3 p-0">
                  <div class="col">
                    <div class="form-group has-float-label">
                      <select class="form-control" id="" name="cost_way_id">
                        <option value=""></option>
                        <option></option>
                      </select>
                      <label for="" class="col-form-label">{{
                        $t("costWays")
                      }}</label>
                    </div>
                  </div>
                  <div class="col has-float-label">
                    <div class="form-group">
                      <input
                        type="number"
                        name="beginning_cost_price"
                        placeholder="beginning_cost_price"
                        class="form-control"
                        id=""
                      />
                      <label for="inputState" class="col-form-label">{{
                        $t("Beginning_cost_price")
                      }}</label>
                    </div>
                  </div>
                </div>
                <div class="col-3 has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      name="current_cost_price"
                      placeholder="current_cost_price"
                      class="form-control"
                      id=""
                    />
                    <label for="" class="col-form-label">{{
                      $t("current_cost_price")
                    }}</label>
                  </div>
                </div>
                <div class="col-3 has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      name="min_price_sale"
                      placeholder="min price sale"
                      class="form-control"
                      id=""
                    />
                    <label for="inputState" class="col-form-label">{{
                      $t("min_price_sale")
                    }}</label>
                  </div>
                </div>

                <div class="col-3 has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      name="price_buy"
                      placeholder="price buy"
                      class="form-control"
                      id=""
                    />
                    <label for="inputState" class="col-form-label">{{
                      $t("price_buy")
                    }}</label>
                  </div>
                </div>
                <div class="col-3 has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      name="transport_price"
                      placeholder="transport_price"
                      class="form-control"
                      id=""
                    />
                    <label for="inputState" class="col-form-label">{{
                      $t("Transport_price")
                    }}</label>
                  </div>
                </div>

                <div class="col-3 has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      name="max_stock"
                      placeholder="max stock"
                      class="form-control"
                      id=""
                    />
                    <label class="col-form-label">{{ $t("max_stock") }}</label>
                  </div>
                </div>

                <div class="col-3 has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      name="min_stock"
                      placeholder="min stock"
                      class="form-control"
                      id=""
                    />
                    <label for="inputState" class="col-form-label">{{
                      $t("min_stock")
                    }}</label>
                  </div>
                </div>
                <div class="col-3 has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      name="default_qty"
                      placeholder="default_qty"
                      class="form-control"
                      id=""
                    />
                    <label for="inputState" class="col-form-label">{{
                      $t("default_qty")
                    }}</label>
                  </div>
                </div>
                <div class="col-3 has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      name="order_limit"
                      placeholder="order limit"
                      class="form-control"
                      id=""
                    />
                    <label for="inputState" class="col-form-label">{{
                      $t("order_limit")
                    }}</label>
                  </div>
                </div>
              </div>
              <div class="separator separator-solid my-3 mb-1"></div>
              <div class="row">
                <div
                  class="col-6 mt-2"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <fieldset class="p-2">
                    <legend>{{ $t(`dis._and_extra_sales`) }}</legend>
                    <div
                      class="has-float-label position-relative"
                      v-wow="{
                        'animation-name': 'fadeInUp',
                        'animation-duration': '1s',
                      }"
                    >
                      <div class="d-flex">
                        <div class="col p-0">
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              :name="`cash_commission`"
                              id="cash_commission"
                              ref="cash_commission"
                              placeholder="cash"
                            />
                            <label for class="col-form-label">
                              {{ $t("cash") }}
                            </label>
                            <button
                              @click.prevent="
                                clearValueInput(`cash_commission`)
                              "
                              id="button_cash_commission"
                              class="close"
                              ref="button_cash_commission"
                            >
                              &times;
                            </button>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              :name="`later_commission`"
                              id="later_commission"
                              ref="later_commission"
                              placeholder="later"
                            />
                            <label for class="col-form-label">
                              {{ $t("later") }}
                            </label>
                            <button
                              @click.prevent="
                                clearValueInput(`later_commission`)
                              "
                              id="button_later_commission"
                              class="close"
                              ref="button_later_commission"
                            >
                              &times;
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="row mt-2 mb-3">
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                            col-6
                            p-0
                          "
                        >
                          <input
                            type="radio"
                            :name="`commission_type`"
                            :value="1"
                          />
                          <span></span>
                          {{ $t("on_collect") }}
                        </label>

                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                            col-6
                            p-0
                          "
                        >
                          <input
                            type="radio"
                            :name="`commission_type`"
                            :value="0"
                          />
                          <span></span>
                          {{ $t("on_sale") }}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <!-- vvv -->

                <div
                  class="col-6 mt-2"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <fieldset class="p-2">
                    <legend>{{ $t(`taxes`) }}</legend>
                    <div class="d-flex">
                      <div class="col p-0">
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                        >
                          <input
                            type="checkbox"
                            name="apply_taxes"
                            :value="1"
                          />
                          <span class="mr-2"></span>
                          {{ $t("Apply_Tax") }}</label
                        >
                      </div>
                      <div class="col p-0">
                        <div class="form-group has-float-label">
                          <select class="form-control" name="apply_tax_id">
                            <option value=""></option>
                          </select>
                          <label for="" class="col-form-label">{{
                            $t("type")
                          }}</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group has-float-label mb-1">
                      <multiselect
                        :tax-placeholder="$t('Add_this_as_new_tax')"
                        :placeholder="$t('Search_or_add_a_tax')"
                        label="name_ar"
                        track-by="code"
                        :options="options"
                        :multiple="true"
                        :taxgable="true"
                        @tax="addtax"
                      ></multiselect>
                      <label class="col-form-label">{{ $t("taxes") }}</label>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-6">
                  <div class="box-customer box-date p-3 bg-lighten border">
                    <h6>{{ $t("dis_Extra_purchases") }}</h6>
                    <div class="row mt-3">
                      <div class="col-6">
                        <div class="form-group has-float-label">
                          <select
                            class="form-control"
                            name="purchase_disc_type_id"
                            id="purchase_disc_type"
                          >
                            <option value=""></option>
                          </select>
                          <label for="inputState" class="col-form-label">{{
                            $t("type")
                          }}</label>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-group has-float-label">
                          <select
                            class="form-control"
                            name="purchase_disc_amount_type_id"
                          >
                            <option value=""></option>
                          </select>
                          <label for="inputState" class="col-form-label">{{
                            $t("Purshase_value_type")
                          }}</label>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="d-flex align-items-center">
                          <div class="col has-float-label p-0">
                            <div class="form-group">
                              <input
                                type="number"
                                name="purchase_disc_amount"
                                placeholder="purshase_value"
                                class="form-control"
                                id="purchase_disc_amount"
                                ref="purchase_disc_amount"
                              />
                              <label for="inputState" class="col-form-label">{{
                                $t("value")
                              }}</label>
                            </div>
                          </div>

                          <div class="col p-0 text-end">
                            <div class="form-group m-0">
                              <input
                                type="checkbox"
                                name="purshase_effect"
                                id=""
                                :value="1"
                                class="mr-2"
                              />
                              <label for="">{{
                                $t("effect_on_cost_pri")
                              }}</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-6 has-float-label">
                        <div class="form-group">
                          <input
                            type="number"
                            name="buy_free_percent"
                            placeholder="purshase_free"
                            class="form-control"
                            id="buy_free_percent"
                            ref="buy_free_percent"
                          />
                          <label for="inputState" class="col-form-label">{{
                            $t("Free_Qty")
                          }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="box-customer box-date p-3 bg-lighten border">
                    <h6>{{ $t("disc_Extra_Sales") }}</h6>
                    <div class="row mt-3">
                      <div class="col-6">
                        <div class="form-group has-float-label">
                          <select
                            class="form-control"
                            name="sale_disc_type_id"
                            id="sale_disc_type"
                          >
                            <option value=""></option>
                          </select>
                          <label for="inputState" class="col-form-label">{{
                            $t("type")
                          }}</label>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-group has-float-label">
                          <select
                            class="form-control"
                            name="sale_disc_amount_type_id"
                            id="sale_disc_amount_type"
                          >
                            <option value=""></option>
                          </select>
                          <label for="inputState" class="col-form-label">{{
                            $t("Sales_value_type")
                          }}</label>
                        </div>
                      </div>
                      <div class="col-6 has-float-label">
                        <div class="form-group">
                          <input
                            type="number"
                            name="sale_disc_amount"
                            placeholder="sales_value"
                            class="form-control"
                            id="sale_disc_amount"
                            ref="sale_disc_amount"
                          />
                          <label for="inputState" class="col-form-label">{{
                            $t("value")
                          }}</label>
                        </div>
                      </div>

                      <div class="col-6 has-float-label">
                        <div class="form-group">
                          <input
                            type="number"
                            name="sale_free_percent"
                            placeholder="sale_free_percent"
                            class="form-control"
                            id="sale_free_percent"
                            ref="sale_free_percent"
                          />
                          <label for="inputState" class="col-form-label">{{
                            $t("Free_Qty")
                          }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dataa: "",
      addactive: "",
      isEmpty: false,
      backErrors: {},
      active: false,
      data: "",
      //mulit select
      value: [{ name: "tax1", code: "t1" }],
      options: [
        { name: "tax2", code: "t2" },
        { name: "tax1", code: "t1" },
        { name: "tax3", code: "t3" },
      ],
    };
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
  },
  created() {},
  computed: {},
  methods: {
    addtax(newTax) {
      const tax = {
        name: newTax,
        code: newTax.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tax);
      this.value.push(tax);
    },
  },
};
</script>

<style></style>
