<template>
  <div
    class="tab-pane fade tab-product-main"
    id="accounts-items"
    role="tabpanel"
    aria-labelledby="#accounts-items-tab"
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
            href="#collapseeight"
          >
            <i class="flaticon2-layers-2"></i> <span>{{ $t("accounts") }}</span>
          </a>
        </h4>
      </div>
      <div
        id="collapseeight"
        class="panel-collapse collapse"
        :class="`${data}`"
      >
        <div class="panel-body">
          <div class="row">
            <div class="col-12">
              <!--begin: Datatable-->

              <div
                class="
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
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("sales_account") }}</span>
                      </th>
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("purchase_account") }}</span>
                      </th>
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("sales_returns_account") }}</span>
                      </th>
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("purchase_returns_account") }}</span>
                      </th>
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("sales_costs") }}</span>
                      </th>
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("inventory_account") }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="datatable-body">
                    <tr class="datatable-row datatable-row-even">
                      <td class="datatable-cell">
                        <select class="form-control" name="sale_disc_amount_type_id" id="sale_disc_amount_type"
                          v-model="sales_account_id" @click='salesAccountIdEvent'>
                          <option value="">
                            {{ $t("Choose") }} 
                          </option>
                          <option v-for="account in accounts" :key="account.id" v-bind:value="account.id">
                            {{ account.code}} - {{ account.name_ar }} - {{ account.name_en}} {{account.id}}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select class="form-control" name="sale_disc_amount_type_id" id="sale_disc_amount_type"
                          v-model="resales_account_id" @click='resalesAccountIdEvent'>
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                          <option v-for="account in accounts" :key="account.id" v-bind:value="account.id">
                            {{ account.code}} - {{ account.name_ar }} - {{ account.name_en}}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select class="form-control" name="sale_disc_amount_type_id" id="sale_disc_amount_type"
                          v-model="purchase_account_id" @click='purchaseAccountIdEvent'>
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                          <option v-for="account in accounts" :key="account.id" v-bind:value="account.id">
                            {{ account.code}} - {{ account.name_ar }} - {{ account.name_en}}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select class="form-control" name="sale_disc_amount_type_id" id="sale_disc_amount_type"
                          v-model="repurchase_account_id" @click='repurchaseAccountIdEvent'>
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                          <option v-for="account in accounts" :key="account.id" v-bind:value="account.id">
                            {{ account.code}} - {{ account.name_ar }} - {{ account.name_en}}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select class="form-control" name="sale_disc_amount_type_id" id="sale_disc_amount_type"
                          v-model="cost_account_id" @click='costAccountIdEvent'>
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                          <option v-for="account in accounts" :key="account.id" v-bind:value="account.id">
                            {{ account.code}} - {{ account.name_ar }} - {{ account.name_en}}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select class="form-control" name="sale_disc_amount_type_id" id="sale_disc_amount_type"
                          v-model="stock_account_id" @click='stockAccountIdEvent'>
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                          <option v-for="account in accounts" :key="account.id" v-bind:value="account.id">
                            {{ account.code}} - {{ account.name_ar }} - {{ account.name_en}}
                          </option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
  name: "edit-accounts-inputs",
  props: {
    data: {
      type: String,
    },
    addactive: {
      type: String,
    },
    accounts: {
      type: Array,
    },
    formData: {
      type: Array
    },
  },
  data() {
    return {
      accounts: this.accounts,
      sales_account_id: "",
      resales_account_id: "",
      purchase_account_id: "",
      repurchase_account_id: "",
      cost_account_id: "",
      stock_account_id: "",
      index: 0,
      isActive: true,
      activeAssign: false,

      active: false,
    };
  },
  created(){
    this.sales_account_id = this.formData.sales_account_id;
    this.resales_account_id = this.formData.resales_account_id;
    this.purchase_account_id = this.formData.purchase_account_id;
    this.repurchase_account_id = this.formData.repurchase_account_id;
    this.cost_account_id = this.formData.cost_account_id;
    this.stock_account_id = this.formData.stock_account_id;
  },
  methods: {
    salesAccountIdEvent()
    {
      this.$emit('getSalesAccountId', this.sales_account_id)
    },
    resalesAccountIdEvent()
    {
      this.$emit('getResalesAccountId', this.resales_account_id)
    },
    purchaseAccountIdEvent()
    {
      this.$emit('getPurchaseAccountId', this.purchase_account_id)
    },
    repurchaseAccountIdEvent()
    {
      this.$emit('getRepurchaseAccountId', this.repurchase_account_id)
    },
    costAccountIdEvent()
    {
      this.$emit('getCostAccountId', this.cost_account_id)
    },
    stockAccountIdEvent()
    {
      this.$emit('getStockAccountId', this.stock_account_id)
    },
    
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>
