   <template>
  <div
    class="tab-pane fade show"
    id="data-data"
    role="tabpanel"
    aria-labelledby="data-tab"
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
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseTwo">
            <i class="flaticon2-contract"></i> <span>{{ $t("data") }}</span>
          </a>
        </h4>
      </div>
      <div id="collapseTwo" class="panel-collapse collapse" :class="`${dataa}`">
        <div class="panel-body">
          <div class="row mt-3">
            <div class="col-3">
              <div class="form-group has-float-label">
                <select class="form-control" id="" name="guarantee_id">
                  <option value=""></option>
                  <option></option>
                </select>
                <label for="exampleSelectl" class="col-form-label">{{
                  $t("guarantees")
                }}</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group has-float-label">
                <select class="form-control" id="" name="currency_id">
                  <option value=""></option>
                  <option></option>
                </select>
                <label for="exampleSelectl" class="col-form-label">{{
                  $t("currencies")
                }}</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group has-float-label">
                <select class="form-control" id="" name="product_type_id">
                  <option value="" disabled selected></option>
                  <option></option>
                </select>
                <label for="exampleSelectl" class="col-form-label">{{
                  $t("Product_Types")
                }}</label>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <select class="form-control" id="" name="cost_way_id">
                  <option value=""></option>
                  <option></option>
                </select>
                <label for="exampleSelectl" class="col-form-label">{{
                  $t("costWays")
                }}</label>
              </div>
            </div>
            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  name="cost_way_price"
                  placeholder="cost_way_price"
                  class="form-control"
                  id=""
                />
                <label for="inputState" class="col-form-label">{{
                  $t("cost_way_price")
                }}</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group has-float-label">
                <select class="form-control" id="" name="discount_id">
                  <option value=""></option>
                  <option></option>
                </select>
                <label for="exampleSelectl" class="col-form-label">{{
                  $t("discounts")
                }}</label>
              </div>
            </div>

            <div class="col-3">
              <div class="form-grou has-float-label">
                <select class="form-control" name="producer_id">
                  <option value=""></option>
                  <option></option>
                </select>
                <label class="col-form-label">{{ $t("producers") }}</label>
              </div>
            </div>

            <div class="col-3 has-float-label">
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
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  class="form-control"
                  id=""
                />
                <label for="inputState" class="col-form-label">{{
                  $t("price")
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
            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  name="consumer_price"
                  placeholder="consumer price"
                  class="form-control"
                  id=""
                />
                <label for="inputState" class="col-form-label">{{
                  $t("consumer_price")
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

            <div class="col-3 has-float-label">
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
                <select
                  type="text"
                  name="tabulations"
                  placeholder="tabulation"
                  multiple
                  class="form-control"
                >
                  <option disabled selected>
                    {{ $t("choose_tabulation") }}
                  </option>
                </select>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group">
                <input
                  type="checkbox"
                  name="active"
                  id="active-product"
                  value="1"
                />
                <label for="inputState" class="col-form-label ml-1">
                  {{ $t("Active_Product") }}</label
                >
              </div>
            </div>
          </div>
          <div class="separator separator-solid my-3"></div>
          <div class="row">
            <div class="col-6">
              <div class="box-customer box-date p-3 bg-lighten border">
                <h6>{{ $t("Discount_or_Adding_for_Purshase") }}</h6>
                <div class="row mt-3">
                  <div class="col-6">
                    <div class="form-group has-float-label">
                      <select class="form-control" id="" name="purshase_type">
                        <option></option>
                        <option value="add">{{ $t("Add") }}</option>
                        <option value="minus">{{ $t("Minus") }}</option>
                      </select>
                      <label for="inputState" class="col-form-label"
                        >Purshase Type</label
                      >
                    </div>
                  </div>
                  <div class="col-6 has-float-label">
                    <div class="form-group">
                      <input
                        type="number"
                        name="purshase_value"
                        placeholder="purshase_value"
                        class="form-control"
                        id="purshase_value"
                        aria-describedby="emailHelp"
                      />
                      <label for="inputState" class="col-form-label">{{
                        $t("purshase_value")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group has-float-label">
                      <select
                        class="form-control"
                        id=""
                        name="purshase_value_type"
                      >
                        <option></option>
                        <option value="fixed">{{ $t("Fixed") }}</option>
                        <option value="percentage">
                          {{ $t("Percentage") }}
                        </option>
                      </select>
                      <label for="inputState" class="col-form-label">{{
                        $t("Purshase_value_type")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6 align-self-end">
                    <div class="form-group">
                      <input
                        type="checkbox"
                        name="purshase_effect"
                        id=""
                        value="1"
                        class="mr-2"
                      />
                      <label for="">{{ $t("Purshase_effect") }}</label>
                    </div>
                  </div>
                  <div class="col-6 has-float-label">
                    <div class="form-group">
                      <input
                        type="number"
                        name="purshase_free"
                        placeholder="purshase_free"
                        class="form-control"
                        id="purshase_free"
                        aria-describedby="emailHelp"
                      />
                      <label for="inputState" class="col-form-label">{{
                        $t("Purshase_Free")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group has-float-label">
                      <select
                        class="form-control"
                        id=""
                        name="purshase_free_type"
                      >
                        <option></option>
                        <option value="fixed">{{ $t("Fixed") }}</option>
                        <option value="percentage">
                          {{ $t("Percentage") }}
                        </option>
                      </select>
                      <label for="inputState" class="col-form-label">{{
                        $t("Purshase_Free_Type")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6 has-float-label">
                    <div class="form-group">
                      <input
                        type="number"
                        name="purshase_max_value"
                        placeholder="purshase_max_value"
                        class="form-control"
                        id="purshase_max_value"
                        aria-describedby="emailHelp"
                      />
                      <label for="inputState" class="col-form-label">{{
                        $t("purshase_max_value")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group has-float-label">
                      <select
                        class="form-control"
                        id=""
                        name="purshase_max_type"
                      >
                        <option></option>
                        <option value="fixed">{{ $t("Fixed") }}</option>
                        <option value="percentage">
                          {{ $t("Percentage") }}
                        </option>
                      </select>
                      <label for="inputState" class="col-form-label">{{
                        $t("purshase_max_type")
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="box-customer box-date p-3 bg-lighten border">
                <h6>{{ $t("Discount_or_Adding_for_Sales") }}</h6>
                <div class="row mt-3">
                  <div class="col-6">
                    <div class="form-group has-float-label">
                      <select class="form-control" id="" name="sales_type">
                        <option></option>
                        <option value="add">{{ $t("Add") }}</option>
                        <option value="minus">{{ $t("Minus") }}</option>
                      </select>
                      <label for="inputState" class="col-form-label">{{
                        $t("Sales_type")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6 has-float-label">
                    <div class="form-group">
                      <input
                        type="number"
                        name="sales_value"
                        placeholder="sales_value"
                        class="form-control"
                        id="sales_value"
                        aria-describedby="emailHelp"
                      />
                      <label for="inputState" class="col-form-label">{{
                        $t("Sales_value")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group has-float-label">
                      <select
                        class="form-control"
                        id=""
                        name="sales_value_type"
                      >
                        <option></option>
                        <option value="fixed">{{ $t("Fixed") }}</option>
                        <option value="percentage">
                          {{ $t("Percentage") }}
                        </option>
                      </select>
                      <label for="inputState" class="col-form-label">{{
                        $t("Sales_value_type")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6 align-self-end">
                    <div class="form-group">
                      <input
                        type="checkbox"
                        name="sales_effect"
                        id="sales_effect"
                        value="1"
                        class="mr-2"
                      />
                      <label for="">{{ $t("Sales_effect") }}</label>
                    </div>
                  </div>
                  <div class="col-6 has-float-label">
                    <div class="form-group">
                      <input
                        type="number"
                        name="sales_free"
                        placeholder="sales_free"
                        class="form-control"
                        id="sales_free"
                        aria-describedby="emailHelp"
                      />
                      <label for="inputState" class="col-form-label"
                        >Sales Free</label
                      >
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group has-float-label">
                      <select class="form-control" id="" name="sales_free_type">
                        <option></option>
                        <option value="fixed">{{ $t("Fixed") }}</option>
                        <option value="percentage">
                          {{ $t("Percentage") }}
                        </option>
                      </select>
                      <label for="inputState" class="col-form-label">{{
                        $t("Sales_free_type")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6 has-float-label">
                    <div class="form-group">
                      <input
                        type="number"
                        name="sales_max_value"
                        placeholder="sales_max_value"
                        class="form-control"
                        id="purshase_max_value"
                        aria-describedby="emailHelp"
                      />
                      <label for="inputState" class="col-form-label">{{
                        $t("Sales_max_value")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group has-float-label">
                      <select class="form-control" id="" name="sales_max_type">
                        <option></option>
                        <option value="fixed">{{ $t("Fixed") }}</option>
                        <option value="percentage">
                          {{ $t("Percentage") }}
                        </option>
                      </select>
                      <label for="inputState" class="col-form-label">{{
                        $t("Sales_max_type")
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
</template>

   <script>
import { bus } from "../../../main";
export default {
  name: "data-inputs",

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
  },
  data() {
    return {
      categories: {},
      active: false,
    };
  },
  created() {
    this.getResults();
    this.getTabulations();
    this.getGuarantees();
    this.getCurrencies();
    this.getProductTypes();
    this.getCostWays();
    this.getDiscounts();
    this.getUnits();
    this.getPrice();
  },
  computed: {
    guarantees() {
      return this.$store.getters.getGuarantees;
    },
    currencies() {
      return this.$store.getters.getCurrencies;
    },
    productTypes() {
      return this.$store.getters.getProductTypes;
    },
    costWays() {
      return this.$store.getters.getCostWays;
    },
    discounts() {
      return this.$store.getters.getDiscounts;
    },
    units() {
      return this.$store.getters.getUnits;
    },
    producers() {
      return this.$store.getters.getProducers;
    },
    tabulations() {
      return this.$store.getters.gettabulations;
    },
  },
  mounted: function () {
    // console.log(this.$refs.inputprice);
  },
  methods: {
    getPrice(event) {
      bus.$emit("priceFromData", event.target.value);
    },
    async getResults(page = 1) {
      const producerUrl = {
        URL: "producers",
        page,
      };
      const producers = await this.$store.dispatch(
        "fetchProducers",
        producerUrl
      );
    },

    async getGuarantees(page = 1) {
      const guaranteeUrl = {
        URL: "guarantees",
        page,
      };
      const guarantees = await this.$store.dispatch(
        "fetchGuarantees",
        guaranteeUrl
      );
    },
    async getCurrencies(page = 1) {
      const guaranteeUrl = {
        URL: "currencies",
        page,
      };
      const currencies = await this.$store.dispatch(
        "fetchCurrencies",
        guaranteeUrl
      );
    },
    async getProductTypes(page = 1) {
      const productTypeUrl = {
        URL: "productTypes",
        page,
      };
      const productTypes = await this.$store.dispatch(
        "fetchProductTypes",
        productTypeUrl
      );
    },
    async getCostWays(page = 1) {
      const costWayUrl = {
        URL: "costWays",
        page,
      };
      const costWays = await this.$store.dispatch("fetchCostWays", costWayUrl);
    },
    async getDiscounts(page = 1) {
      const discountUrl = {
        URL: "discounts",
        page,
      };
      const discounts = await this.$store.dispatch(
        "fetchDiscounts",
        discountUrl
      );
    },

    async getUnits(page = 1) {
      const unitUrl = {
        URL: "units",
        page,
      };
      const units = await this.$store.dispatch("fetchUnits", unitUrl);
    },

    async getTabulations(page = 1) {
      const tabulationUrl = {
        URL: "tabulations",
        page,
      };
      const tabulations = await this.$store.dispatch(
        "fetchtabulations",
        tabulationUrl
      );
    },

    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>
