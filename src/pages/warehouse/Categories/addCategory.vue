<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`add-categories`"
      :submit="newCategory"
      :id="0"
      :editUrlName="`edit-categories`"
      :navigationUrl="`categoryNavigation`"
      :model="`category`"
      :mainModuel="mainModuel"
      :MainCategory="MainCategory"
      :pageName="`categories`"
      :operation="`add`"
      :listUrlName="`categories`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :backErrors="backErrors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newCategory" id="currentForm" autocomplete="off">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("add-categories") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
              <div
                class="col-md-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select class="form-control" name="parent_id" @change="getParentCategory" 
                  v-model="$v.formData.$model.parent_id" :class="{ 'is-invalid': $v.formData.$error.parent_id, }">
                    <option v-for="mainCategory in mainCategories" :key="mainCategory.id" v-bind:value="mainCategory.id">
                      {{ mainCategory.name_ar }} - {{ mainCategory.name_en }} - {{ mainCategory.code }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("Main_Category")
                  }}</label>
                </div>
              </div>
              <div
                class="col-md-6 col-12 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="string"
                    class="form-control"
                    name="code"
                    :class="{
                      'is-invalid': $v.formData.code.$error,
                      'is-vaild': !$v.formData.code.$invalid,
                    }"
                    v-model="$v.formData.code.$model"
                    placeholder="Code"
                    ref="code"
                    id="code"
                    @keyup="chanagClass($event, `code`)"
                  />
                  <label for="" class="col-form-label"
                    >{{ $t("code") }}<span class="text-danger0">*</span></label
                  >
                  <button
                    @click.prevent="clearValueInput(`code`, 'button_code')"
                    id="button_code"
                    class="close"
                    ref="button_code"
                  >
                    &times;
                  </button>
                </div>
              </div>
              <div class="col-12 d-flex p-0">
                <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control w-100"
                      :class="{
                        'is-invalid': $v.formData.name_ar.$error,
                        'is-vaild': !$v.formData.name_ar.$invalid,
                      }"
                      id="name_ar"
                      ref="name_ar"
                      v-model="$v.formData.name_ar.$model"
                      :placeholder="`Name`"
                      @keyup="chanagClass($event, `ar`)"
                    />

                    <label class="col-form-label">
                      {{ $t(`ar.name`) }}
                      <span class="text-danger0">*</span></label
                    >
                    <span
                      class="text-danger"
                      v-if="backErrors[`name_ar`]"
                      :class="seenName"
                    >
                      {{ backErrors[`name_ar`][0] }}
                    </span>

                    <button
                      @click.prevent="clearValueInput(`name_ar`, 'button_ar')"
                      id="button_ar"
                      class="close d-none"
                      ref="button_ar"
                    >
                      &times;
                    </button>
                  </div>
                </div>
                <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control w-100"
                      :name="`name_en`"
                      id="name_en"
                      ref="name_en"
                      :class="{
                        'is-invalid': $v.formData.name_en.$error,
                        'is-vaild': !$v.formData.name_en.$invalid,
                      }"
                      v-model="$v.formData.name_en.$model"
                      :placeholder="`Name`"
                      @keyup="chanagClass($event, `en`)"
                    />

                    <label class="col-form-label">
                      {{ $t(`en.name`) }}
                      <span class="text-danger0">*</span></label
                    >
                    <span
                      class="text-danger"
                      v-if="backErrors[`name_en`]"
                      :class="seenName"
                    >
                      {{ backErrors[`name_en`][0] }}
                    </span>

                    <button
                      @click.prevent="clearValueInput(`name_en`, 'button_en')"
                      id="button_en"
                      class="close d-none"
                      ref="button_en"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="col-md-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select class="form-control" name="unit_id" 
                  v-model="$v.formData.$model.unit_id" :class="{ 'is-invalid': $v.formData.$error.unit_id, }">
                    <option value=""></option>
                    <option v-for="unit in units" :key="unit.id" v-bind:value="unit.id">
                      {{ unit.name_ar }} - {{ unit.name_en }} - {{ unit.code }}
                    </option>
                  </select>
                  <label class="col-form-label">{{ $t("units") }}</label>
                </div>
              </div>
              <div
                class="col-md-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select class="form-control" name="cost_way_id" 
                  v-model="$v.formData.$model.cost_way" :class="{ 'is-invalid': $v.formData.$error.cost_way, }">
                    <option value=""></option>
                    <option v-for="(costWay, index) in constCostWay" :key="index" v-bind:value="index">
                      {{ costWay }}
                    </option>
                  </select>
                  <label class="col-form-label">{{ $t("costWays") }}</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label m-0">
                  <select class="form-control" name="product_type_id" 
                    v-model="$v.formData.$model.product_type" :class="{ 'is-invalid': $v.formData.$error.product_type, }">
                    <option value=""></option>
                    <option v-for="(productType, index) in constProductType" :key="index" v-bind:value="index">
                      {{ productType }}
                    </option>
                  </select>
                  <label>{{ $t("Product_Types") }}</label>
                </div>
              </div>
              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="d-flex">
                  <active-toggle :formData="formData" class="col p-0 m-0" />
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
                            :class="{
                              'is-invalid': $v.formData.$model.cash_commission.$error,
                              'is-vaild': !$v.formData.$model.cash_commission.$invalid,
                            }"
                            :name="`cash_commission`"
                            v-model="$v.formData.$model.cash_commission"
                            id="cash_commission"
                            ref="cash_commission"
                            placeholder="cash"
                            @keyup="chanagClass($event, `button_cash_commission`)"
                          />
                          <label for class="col-form-label">
                            {{ $t("cash") }}
                          </label>
                          <button
                            @click.prevent="clearValueInput(`cash_commission`)"
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
                            :class="{
                              'is-invalid': $v.formData.$model.later_commission.$error,
                              'is-vaild': !$v.formData.$model.later_commission.$invalid,
                            }"
                            :name="`later_commission`"
                            v-model="$v.formData.$model.later_commission"
                            id="later_commission"
                            ref="later_commission"
                            placeholder="later"
                            @keyup="chanagClass($event, `button_later_commission`)"
                          />
                          <label for class="col-form-label">
                            {{ $t("later") }}
                          </label>
                          <button
                            @click.prevent="clearValueInput(`later_commission`)"
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
                        <input type="radio" v-model="$v.formData.$model.commission_type" :name="`commission_type`" :value="1" />
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
                        <input type="radio" v-model="$v.formData.$model.commission_type" :name="`commission_type`" :value="0" />
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
                          v-model="$v.formData.$model.taxable"
                          :value="1"
                        />
                        <span class="mr-2"></span>
                        {{ $t("Apply_Tax") }}</label
                      >
                    </div>
                    <div class="col p-0">
                      <div class="form-group has-float-label">
                        <select class="form-control" name="apply_tax_id" :disabled="$v.formData.$model.taxable == 0"
                          v-model="$v.formData.$model.apply_tax" :class="{ 'is-invalid': $v.formData.$error.apply_tax, }">
                          <option value=""></option>
                          <option v-for="(applyTax, index) in constApplyTax" :key="index" v-bind:value="index">
                            {{ applyTax }}
                          </option>
                        </select>
                        <label for="" class="col-form-label">{{ $t("type") }}</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group has-float-label mb-1">
                    <multiselect
                      v-model="$v.formData.$model.taxes"
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
                        <select class="form-control" name="purchase_disc_type_id" id="purchase_disc_type"
                          v-model="$v.formData.$model.purchase_disc_type" :class="{ 'is-invalid': $v.formData.$error.purchase_disc_type, }">
                          <option value=""></option>
                          <option v-for="(purchaseDiscType, index) in constPurchaseDiscType" :key="index" v-bind:value="index">
                            {{ purchaseDiscType }}
                          </option>
                        </select>
                        <label for="inputState" class="col-form-label">{{
                          $t("type")
                        }}</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group has-float-label">
                        <select class="form-control" name="purchase_disc_amount_type_id"
                          v-model="$v.formData.$model.purchase_disc_amount_type" :class="{ 'is-invalid': $v.formData.$error.purchase_disc_amount_type, }">
                          <option value=""></option>
                          <option v-for="(purchaseDiscAmountType, index) in constPurchaseDiscAmountType" :key="index" v-bind:value="index">
                            {{ purchaseDiscAmountType }}
                          </option>
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
                              :class="{
                                'is-invalid': $v.formData.$model.purchase_disc_amount.$error,
                                'is-vaild': !$v.formData.$model.purchase_disc_amount.$invalid,
                              }"
                              v-model="$v.formData.$model.purchase_disc_amount"
                              id="purchase_disc_amount"
                              ref="purchase_disc_amount"
                              @keyup="chanagClass($event, `button_purchase_disc_amount`)"
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
                              v-model="$v.formData.$model.cost_price_effect"
                              :value="1"
                              class="mr-2"
                            />
                            <label for="">{{ $t("effect_on_cost_pri") }}</label>
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
                          :class="{
                            'is-invalid': $v.formData.$model.buy_free_percent.$error,
                            'is-vaild': !$v.formData.$model.buy_free_percent.$invalid,
                          }"
                          v-model="$v.formData.$model.buy_free_percent"
                          id="buy_free_percent"
                          ref="buy_free_percent"
                          @keyup="chanagClass($event, `button_buy_free_percent`)"
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
                        <select class="form-control" name="sale_disc_type_id" id="sale_disc_type"
                          v-model="$v.formData.$model.sale_disc_type" :class="{ 'is-invalid': $v.formData.$error.sale_disc_type, }">
                          <option value=""></option>
                          <option v-for="(saleDiscType, index) in constSaleDiscType" :key="index" v-bind:value="index">
                            {{ saleDiscType }}
                          </option>
                        </select>
                        <label for="inputState" class="col-form-label">{{
                          $t("type")
                        }}</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group has-float-label">
                        <select class="form-control" name="sale_disc_amount_type_id" id="sale_disc_amount_type"
                          v-model="$v.formData.$model.sale_disc_amount_type" :class="{ 'is-invalid': $v.formData.$error.sale_disc_amount_type, }">
                          <option value=""></option>
                          <option v-for="(saleDiscAmountType, index) in constSaleDiscAmountType" :key="index" v-bind:value="index">
                            {{ saleDiscAmountType }}
                          </option>
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
                          :class="{
                            'is-invalid': $v.formData.$model.sale_disc_amount.$error,
                            'is-vaild': !$v.formData.$model.sale_disc_amount.$invalid,
                          }"
                          v-model="$v.formData.$model.sale_disc_amount"
                          id="sale_disc_amount"
                          ref="sale_disc_amount"
                          @keyup="chanagClass($event, `button_sale_disc_amount`)"
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
                          :class="{
                            'is-invalid': $v.formData.$model.sale_free_percent.$error,
                            'is-vaild': !$v.formData.$model.sale_free_percent.$invalid,
                          }"
                          v-model="$v.formData.$model.sale_free_percent"
                          id="sale_free_percent"
                          ref="sale_free_percent"
                          @keyup="chanagClass($event, `button_sale_free_percent`)"
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
            <div class="row">
              <div :class="`add-tabs w-100 sub-tabs ${gridClassName}`">
                <ul class="nav nav-tabs0" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="accounts-items-tab"
                      data-toggle="tab"
                      href="#accounts-items"
                    >
                      <span class="nav-icon">
                        <i class="flaticon2-gear"></i>
                      </span>
                      <span class="nav-text">{{ $t("accounts") }}</span>
                    </a>
                  </li>
                </ul>

                <template v-if="isAccountVisible">
                  <div class="tab-content main-tab-content" id="myTabContent">
                    <div class="btn-collapse">
                      <button @click.prevent="hidedata">
                        {{ $t("Collapse_All") }}
                      </button>
                      |
                      <button @click.prevent="showwdata">
                        {{ $t("Expand_All") }}
                      </button>
                    </div>

                      <accounts
                        :errors="errors"
                        :data="data"
                        :accounts="accounts"
                        @getSalesAccountId="getSalesAccountId($event)"
                        @getResalesAccountId="getResalesAccountId($event)"
                        @getPurchaseAccountId="getPurchaseAccountId($event)"
                        @getRepurchaseAccountId="getRepurchaseAccountId($event)"
                        @getCostAccountId="getCostAccountId($event)"
                        @getStockAccountId="getStockAccountId($event)"
                        :addactive="addactive"
                      />
                  </div>
                </template>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";
import { UAnimateContainer, UAnimate } from "vue-wow";
import accounts from "./accounts.vue";
export default {
  name: "add-categories",
  components: { UAnimateContainer, UAnimate, accounts },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      mainModuel: "",
      MainCategory: "",
      gridClassName: window.$gridClassName,
      category: {},
      mainCategories: {},
      constCostWay: {},
      constProductType: {},
      constApplyTax: {},
      constPurchaseDiscType: {},
      constPurchaseDiscAmountType: {},
      constSaleDiscType: {},
      constSaleDiscAmountType: {},
      units: {},
      accounts: {},
      formData: {
        code: "",
        is_active: true,
        taxable: false,
        name_ar: "",
        name_en: "",
        parent_id: "",
        unit_id: "",
        cost_way: "",
        product_type: "",
        cash_commission: "",
        later_commission: "",
        commission_type: "",
        apply_tax: "",
        purchase_disc_type: "",
        purchase_disc_amount_type: "",
        purchase_disc_amount: "",
        buy_free_percent: "",
        sale_disc_type: "",
        sale_disc_amount_type: "",
        sale_disc_amount: "",
        sale_free_percent: "",
        sales_account_id: "",
        resales_account_id: "",
        purchase_account_id: "",
        repurchase_account_id: "",
        cost_account_id: "",
        stock_account_id: "",
        taxes: [],
      },
      isEmpty: false,
      backErrors: {},
      checked: 0,
      selectedValues: {},
      //
      gridClassName: "product_list",
      active: false,
      data: "",
      addactive: "",
      //mulit select
      value: [],
      options: [],
    };
  },
  validations() {
    return {
      formData: {
        name_ar: {
          requiredIfNameAr: requiredIf(this.formData.name_en == ""),
        },
        name_en: {
          requiredIfNameEn: requiredIf(this.formData.name_ar == ""),
        },
        code: { required },
      },
    };
  },
  setup: () => ({ $v: useVuelidate() }),
  computed: {
    isAccountVisible() {
      return this.accounts.length > 0;
    },
  },
  mounted() {
    this.getCode();
    this.getMainCategories();
    this.getUnits();
    this.getTaxes();
    this.getAccounts();
    this.getConstants();
    this.mainModuel = this.$route.params["mainModule"];
    this.MainCategory = this.$route.params["MainCategory"];
  },

  methods: {
    getSalesAccountId(sales_account_id)
    {
      this.formData.sales_account_id=sales_account_id;
    },
    getResalesAccountId(resales_account_id)
    {
      this.formData.resales_account_id=resales_account_id;
    },
    getPurchaseAccountId(purchase_account_id)
    {
      this.formData.purchase_account_id=purchase_account_id;
    },
    getRepurchaseAccountId(repurchase_account_id)
    {
      this.formData.repurchase_account_id=repurchase_account_id;
    },
    getCostAccountId(cost_account_id)
    {
      this.formData.cost_account_id=cost_account_id;
      console.log(this.formData.cost_account_id)
    },
    getStockAccountId(stock_account_id)
    {
      this.formData.stock_account_id=stock_account_id;
    },
    
    async newCategory() {
      console.log("data");
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        try {
          this.formData.name_ar = this.formData.name_ar
            ? this.formData.name_ar
            : this.formData.name_en;
          this.formData.name_en = this.formData.name_en
            ? this.formData.name_en
            : this.formData.name_ar;

          await this.$store.dispatch("storeCategories", {
            data: this.formData,
          });
          console.log(data);
        } catch (errors) {
          console.log(errors);
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },
    addtax(newTax) {
      const tax = {
        name: newTax,
        code: newTax.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tax);
      this.formData.taxes.push(tax);
    },
    showwdata: function () {
      this.data = "show";
      this.addactive = "active";
    },
    hidedata: function () {
      this.data = "";
      this.addactive = "";
    },
    changeGrid(event) {
      this.gridClassName = event;
    },

    /**
     *
     * to clear any data in any button
     */
    clearValueInput(inputId, buttonId) {
      this.formData[`${inputId}`] = "";
      this.$refs[`${buttonId}`].classList.add("d-none");
    },

    /**
     *
     * to add and remove class d-none
     */
    chanagClass(e, id) {
      if (e.target.value !== "") {
        this.$refs[`button_${id}`].classList.remove(`d-none`);
      } else {
        this.$refs[`button_${id}`].classList.add(`d-none`);
      }
    },
    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenName = "";
      } else {
        this.seenName = "d-none";
      }
    },
    async getCode() {
      const code = await this.$store.dispatch("getCategoryCode");

      this.formData.code = code.data.data;
    },
    async getParentCategory(event) {
      const parent_id = this.formData.parent_id
      const code = this.formData.code
      const getParentCategory = await this.$store.dispatch("getCategory", {
        Id: event.target.value,
      });
      this.formData = getParentCategory.data.data;
      this.formData.parent_id = parent_id;
      this.formData.code = code;
    },
    async getAccounts() {
      const accounts = await this.$store.dispatch("getAccounts");

      this.accounts = accounts.data.data;
    },
    async getMainCategories() {
      const mainCategories = await this.$store.dispatch("getMainCategories");
      this.mainCategories = mainCategories.data.data;
    },
    async getUnits() {
      const units = await this.$store.dispatch("getUnits");
      this.units = units.data.data;
    },
    async getTaxes() {
      const taxes = await this.$store.dispatch("getTaxes");
      this.options = taxes.data.data;
    },
    async getConstants() {
      const constants = await this.$store.dispatch("getConstants");
      this.constCostWay = constants.data.data.cost_way;
      this.constProductType = constants.data.data.product_type;
      this.constApplyTax = constants.data.data.apply_tax;
      this.constPurchaseDiscType = constants.data.data.purchase_disc_type
      this.constPurchaseDiscAmountType = constants.data.data.purchase_disc_amount_type
      this.constSaleDiscType = constants.data.data.sale_disc_type
      this.constSaleDiscAmountType = constants.data.data.sale_disc_amount_type
    },
  },
};
</script>

 
