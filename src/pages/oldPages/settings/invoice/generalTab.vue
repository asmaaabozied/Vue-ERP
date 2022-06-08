<template>
  <div
    class="tab-pane fade show tab-product-main active"
    id="page-general2"
    role="tabpanel"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: !active }, `${addactive}`]"
        >
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">
            <i class="flaticon2-gear"></i> <span>{{ $t("General") }}</span>
          </a>
        </h4>
      </div>

      <div
        id="collapseOne"
        class="panel-collapse collapse show"
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <div class="row">
            <div class="col-6">
              <div class="box-customer box-date p-3 bg-lighten border">
                <h6>stock effect</h6>
                <div class="row mt-3">
                  <div class="col-6">
                    <div class="radio-list">
                      <label
                        class="
                          radio radio-outline radio-outline-2x radio-primary
                        "
                      >
                        <input type="radio" name="stock_effect" value="0" />
                        <span></span>
                        {{ $t("not_affect_stores") }}
                      </label>
                      <label
                        class="
                          radio radio-outline radio-outline-2x radio-primary
                        "
                      >
                        <input type="radio" name="stock_effect" value="1" />
                        <span></span>
                        {{ $t("manual_post_to_stores") }}
                      </label>
                      <label
                        class="
                          radio radio-outline radio-outline-2x radio-primary
                        "
                      >
                        <input type="radio" name="stock_effect" value="2" />
                        <span></span>
                        {{ $t("auto_post_to_stores") }}
                      </label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="checkbox-list">
                      <label
                        class="checkbox checkbox-outline checkbox-outline-2x"
                        :class="!affect_cost_price ? 'checkbox-disabled' : ''"
                      >
                        <input
                          type="checkbox"
                          name="affect_cost_price"
                          value="1"
                          unchecked-value="0"
                          :disabled="!affect_cost_price"
                        />
                        <span></span>
                        {{ $t("affect_on_cost_price") }}
                      </label>
                      <label
                        class="checkbox checkbox-outline checkbox-outline-2x"
                        :class="
                          !discount_on_cost_price ? 'checkbox-disabled' : ''
                        "
                      >
                        <input
                          type="checkbox"
                          name="discount_on_cost_price"
                          value="1"
                          unchecked-value="0"
                          :disabled="!discount_on_cost_price"
                        />
                        <span></span>
                        {{ $t("discount_affects_on_cost_price") }}
                      </label>
                      <label
                        class="checkbox checkbox-outline checkbox-outline-2x"
                        :class="
                          !addition_on_cost_price ? 'checkbox-disabled' : ''
                        "
                      >
                        <input
                          type="checkbox"
                          name="addition_on_cost_price"
                          value="1"
                          unchecked-value="0"
                          :disabled="!addition_on_cost_price"
                        />
                        <span></span>
                        {{ $t("addition_affects_on_cost_price") }}
                      </label>
                    </div>
                  </div>
                </div>
                <div class="separator separator-solid my-3"></div>
                <div class="row">
                  <div class="col-6 mt-3">
                    <div class="form-group has-float-label">
                      <select
                        name="distribution_way"
                        id="dist_way"
                        class="form-control"
                      >
                        <option selected="selected" disabled>
                          {{ $t("Choose") }}
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option></select
                      ><label for="dist_way" class="col-form-label"
                        >{{ $t("distribution_way") }}</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="box-customer box-date p-3 bg-lighten border mt-8">
                <h6>{{ $t("accounting_effect") }}</h6>
                <div class="row mt-3">
                  <div class="col-6">
                    <div class="radio-list">
                      <label
                        class="
                          radio radio-outline radio-outline-2x radio-primary
                        "
                      >
                        <input
                          type="radio"
                          name="accounting_effect"
                          value="0"
                        />
                        <span></span>
                        {{ $t("not_generate_entry") }}
                      </label>
                      <label
                        class="
                          radio radio-outline radio-outline-2x radio-primary
                        "
                      >
                        <input
                          type="radio"
                          name="accounting_effect"
                          value="1"
                        />
                        <span></span>
                        {{ $t("manual_generate_entry") }}
                      </label>
                      <label
                        class="
                          radio radio-outline radio-outline-2x radio-primary
                        "
                      >
                        <input
                          type="radio"
                          name="accounting_effect"
                          value="2"
                        />
                        <span></span>
                        {{ $t("auto_generate_entry") }}
                      </label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="checkbox-list">
                      <label
                        class="checkbox checkbox-outline checkbox-outline-2x"
                      >
                        <input
                          type="checkbox"
                          name="auto_post_entry"
                          value="1"
                          unchecked-value="0"
                        />
                        <span></span>
                        {{ $t("auto_post_entry") }}
                      </label>
                    </div>
                  </div>
                </div>
                <div class="separator separator-solid my-3"></div>
              </div>
            </div>

            <div class="col-6">
              <div class="row">
                <div class="col-6">
                  <div class="box-customer box-date p-3 bg-lighten border">
                    <h6>{{ $t("invoice_position") }}</h6>
                    <div class="mt-3">
                      <div class="radio-list">
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="0"
                          />
                          <span></span>
                          {{ $t("stock_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="1"
                          />
                          <span></span>
                          {{ $t("workshop_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                          :class="!trans_invoice ? 'radio-disabled' : ''"
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="2"
                            :disabled="!trans_invoice"
                          />
                          <span></span>
                          {{ $t("transfer_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                          :class="
                            !stock_inventory_invoice ? 'radio-disabled' : ''
                          "
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="3"
                            :disabled="!stock_inventory_invoice"
                          />
                          <span></span>
                          {{ $t("stock_inventory_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                          :class="
                            !transfer_item_invoice ? 'radio-disabled' : ''
                          "
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="4"
                            :disabled="!transfer_item_invoice"
                          />
                          <span></span>
                          {{ $t("transfer_item_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                          :class="!POS_invoice ? 'radio-disabled' : ''"
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="5"
                            :disabled="!POS_invoice"
                          />
                          <span></span>
                          {{ $t("POS_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                          :class="!industry_invoice ? 'radio-disabled' : ''"
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="6"
                            :disabled="!industry_invoice"
                          />
                          <span></span>
                          {{ $t("industry_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                          :class="!maintenance_invoice ? 'radio-disabled' : ''"
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="7"
                            :disabled="!maintenance_invoice"
                          />
                          <span></span>
                          {{ $t("maintenance_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="8"
                          />
                          <span></span>
                          {{ $t("asset_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                          :class="
                            !customs_clearance_invoice ? 'radio-disabled' : ''
                          "
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="9"
                            :disabled="!customs_clearance_invoice"
                          />
                          <span></span>
                          {{ $t("customs_clearance_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                          :class="!renting_invoice ? 'radio-disabled' : ''"
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="10"
                            :disabled="!renting_invoice"
                          />
                          <span></span>
                          {{ $t("renting_invoice") }}
                        </label>
                        <label
                          class="
                            radio radio-outline radio-outline-2x radio-primary
                          "
                        >
                          <input
                            type="radio"
                            name="invoice_position"
                            value="11"
                          />
                          <span></span>
                          {{ $t("project_management") }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="box-customer box-date p-3 bg-lighten border">
                    <h6>other options</h6>
                    <div class="mt-3">
                      <div class="checkbox-list">
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                        >
                          <input
                            type="checkbox"
                            name="generate_compound_entry"
                            value="1"
                            unchecked-value="0"
                          />
                          <span></span>
                          {{ $t("generate_compound_entry") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                          :class="
                            !group_debit_accounts ? 'checkbox-disabled' : ''
                          "
                        >
                          <input
                            type="checkbox"
                            name="group_debit_accounts"
                            value="1"
                            unchecked-value="0"
                            :disabled="!group_debit_accounts"
                          />
                          <span></span>
                          {{ $t("group_debit_accounts") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                          :class="
                            !group_credit_accounts ? 'checkbox-disabled' : ''
                          "
                        >
                          <input
                            type="checkbox"
                            name="group_credit_accounts"
                            value="1"
                            unchecked-value="0"
                            :disabled="!group_credit_accounts"
                          />
                          <span></span>
                          {{ $t("group_credit_accounts") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                          :class="
                            !load_generated_entry_browsing
                              ? 'checkbox-disabled'
                              : ''
                          "
                        >
                          <input
                            type="checkbox"
                            name="load_generated_entry_browsing"
                            value="1"
                            unchecked-value="0"
                            :disabled="!load_generated_entry_browsing"
                          />
                          <span></span>
                          {{ $t("load_generated_entry_browsing") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                          :class="
                            !replace_expense_acc_revenue_acc
                              ? 'checkbox-disabled'
                              : ''
                          "
                        >
                          <input
                            type="checkbox"
                            name="replace_expense_acc_revenue_acc"
                            value="1"
                            unchecked-value="0"
                            :disabled="!replace_expense_acc_revenue_acc"
                          />
                          <span></span>
                          {{ $t("replace_expense_acc_revenue_acc") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                          :class="
                            !replace_mat_acc_stock_acc
                              ? 'checkbox-disabled'
                              : ''
                          "
                        >
                          <input
                            type="checkbox"
                            name="replace_mat_acc_stock_acc"
                            value="1"
                            unchecked-value="0"
                            :disabled="!replace_mat_acc_stock_acc"
                          />
                          <span></span>
                          {{ $t("replace_mat_acc_stock_acc") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                          :class="
                            !post_invoice_cost_to_acc ? 'checkbox-disabled' : ''
                          "
                        >
                          <input
                            type="checkbox"
                            name="post_invoice_cost_to_acc"
                            value="1"
                            unchecked-value="0"
                            :disabled="!post_invoice_cost_to_acc"
                          />
                          <span></span>
                          {{ $t("post_invoice_cost_to_acc") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                          :class="!balance_account ? 'checkbox-disabled' : ''"
                        >
                          <input
                            type="checkbox"
                            name="balance_account"
                            value="1"
                            unchecked-value="0"
                            :disabled="!balance_account"
                          />
                          <span></span>
                          {{ $t("balance_account") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                        >
                          <input
                            type="checkbox"
                            name="save_invoice_irregular_shutdown"
                            value="1"
                            unchecked-value="0"
                          />
                          <span></span>
                          {{ $t("save_invoice_irregular_shutdown") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                        >
                          <input
                            type="checkbox"
                            name="allow_selling_serial_no_not_entered"
                            value="1"
                            unchecked-value="0"
                          />
                          <span></span>
                          {{ $t("allow_selling_serial_no_not_entered") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                          :class="!random_serial_no ? 'checkbox-disabled' : ''"
                        >
                          <input
                            type="checkbox"
                            name="random_serial_no"
                            value="1"
                            unchecked-value="0"
                            :disabled="!random_serial_no"
                          />
                          <span></span>
                          {{ $t("random_serial_no") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                          :class="
                            !ignore_discount_addition_mat
                              ? 'checkbox-disabled'
                              : ''
                          "
                        >
                          <input
                            type="checkbox"
                            name="ignore_discount_addition_mat"
                            value="1"
                            unchecked-value="0"
                            :disabled="!ignore_discount_addition_mat"
                          />
                          <span></span>
                          {{ $t("ignore_discount_addition_mat") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                        >
                          <input
                            type="checkbox"
                            name="confirm_cost_center"
                            value="1"
                            unchecked-value="0"
                          />
                          <span></span>
                          {{ $t("confirm_cost_center") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                        >
                          <input
                            type="checkbox"
                            name="confirm_delegate"
                            value="1"
                            unchecked-value="0"
                          />
                          <span></span>
                          {{ $t("confirm_delegate") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                        >
                          <input
                            type="checkbox"
                            name="multi_versions"
                            value="1"
                            unchecked-value="0"
                          />
                          <span></span>
                          {{ $t("multi_versions") }}
                        </label>
                        <label
                          class="checkbox checkbox-outline checkbox-outline-2x"
                        >
                          <input
                            type="checkbox"
                            name="coding_user"
                            value="1"
                            unchecked-value="0"
                          />
                          <span></span>
                          {{ $t("coding_user") }}
                        </label>
                      </div>
                    </div>
                    <div class="separator separator-solid my-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "generalTab",

  props: {
    invoice_type_id: [Number, String, Array],
    data: {},
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
  },
  data() {
    return {
      /* stock effect */
      affect_cost_price: true,
      discount_on_cost_price: true,
      addition_on_cost_price: true,

      /* invoice position */
      trans_invoice: true,
      stock_inventory_invoice: true,
      transfer_item_invoice: true,
      maintenance_invoice: true,
      POS_invoice: true,
      industry_invoice: true,
      customs_clearance_invoice: true,
      renting_invoice: true,

      /* other options */
      group_debit_accounts: true,
      group_credit_accounts: true,
      load_generated_entry_browsing: true,
      replace_expense_acc_revenue_acc: true,
      replace_mat_acc_stock_acc: true,
      post_invoice_cost_to_acc: true,
      balance_account: true,
      random_serial_no: true,
      ignore_discount_addition_mat: true,

      isActive: true,
      active: false,
    };
  },
  watch: {
    invoice_type_id: function (invoiceTypeId) {
      this.initInputs();
      // if purchase
      if (invoiceTypeId == 1) {
        // invoice position
        this.customs_clearance_invoice = false;
        // other
        this.disableOtherInputs();
        this.post_invoice_cost_to_acc = false;
        this.random_serial_no = false;
        this.ignore_discount_addition_mat = false;
      }
      // if purchase return
      if (invoiceTypeId == 3) {
        // stock effect
        this.affect_cost_price = false;
        this.discount_on_cost_price = false;
        this.addition_on_cost_price = false;
        // invoice position
        this.customs_clearance_invoice = false;
        this.renting_invoice = false;
        // other
        this.disableOtherInputs();
        this.post_invoice_cost_to_acc = false;
        this.random_serial_no = false;
        this.ignore_discount_addition_mat = false;
      }
      // if selling
      if (invoiceTypeId == 4) {
        // stock effect
        this.affect_cost_price = false;
        this.disableStockEffectInputs();
        // other
        this.disableOtherInputs();
      }
      // if selling return
      if (invoiceTypeId == 5) {
        // stock effect
        this.affect_cost_price = false;
        this.disableStockEffectInputs();
        // invoice position
        this.customs_clearance_invoice = false;
        this.renting_invoice = false;
        // other
        this.disableOtherInputs();
        this.random_serial_no = false;
        this.ignore_discount_addition_mat = false;
      }
      // if beginning inventory
      if (invoiceTypeId == 3) {
        // stock effect
        this.disableStockEffectInputs();
        // invoice position
        this.disableInvoicePositionInputs();
        // other
        this.disableOtherInputs();
        this.maintenance_invoice = false;
        this.post_invoice_cost_to_acc = false;
        this.random_serial_no = false;
        this.ignore_discount_addition_mat = false;
      }
    },
  },
  created() {
    this.invoiceTypeChanged();
  },
  methods: {
    initInputs() {
      /* stock effect */
      this.affect_cost_price = true;
      this.discount_on_cost_price = true;
      this.addition_on_cost_price = true;

      /* invoice position */
      this.trans_invoice = true;
      this.stock_inventory_invoice = true;
      this.transfer_item_invoice = true;
      this.maintenance_invoice = true;
      this.POS_invoice = true;
      this.industry_invoice = true;
      this.customs_clearance_invoice = true;
      this.renting_invoice = true;

      /* other options */
      this.group_debit_accounts = true;
      this.group_credit_accounts = true;
      this.load_generated_entry_browsing = true;
      this.replace_expense_acc_revenue_acc = true;
      this.replace_mat_acc_stock_acc = true;
      this.post_invoice_cost_to_acc = true;
      this.balance_account = true;
      this.random_serial_no = true;
      this.ignore_discount_addition_mat = true;
    },
    disableStockEffectInputs() {
      // last 3 checkboxes
      this.discount_on_cost_price = false;
      this.addition_on_cost_price = false;
    },
    disableInvoicePositionInputs() {
      this.customs_clearance_invoice = false;
      this.renting_invoice = false;
    },
    disableOtherInputs() {
      // from 2:6 element
      this.group_debit_accounts = false;
      this.group_credit_accounts = false;
      this.load_generated_entry_browsing = false;
      this.replace_expense_acc_revenue_acc = false;
      this.replace_mat_acc_stock_acc = false;
    },
    invoiceTypeChanged() {
      console.log(this.invoice_type_id);
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>

<style scoped></style>
