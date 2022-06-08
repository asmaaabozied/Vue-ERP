<template>
  <div>
    <top-bar-card :newUrlName="`edit-paymentWays`" />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form>
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>

            <div class="row align-items-end">
              <div class="col-md-6 col-12 mt-7 has-float-label">
                <div class="form-group m-0">
                  <input
                    type="number"
                    name="code"
                    id=""
                    placeholder="code"
                    :value="PaymentWay.code"
                    class="form-control"
                  />
                  <label for="" class="col-form-label">{{ $t("code") }}</label>
                </div>
              </div>
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs :language="language" :PaymentWay="PaymentWay" />
                  </template>
                </lang-tabs>
              </div>

              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
                  <select class="form-control" id="" name="account_id">
                    <option value=""></option>
                    <option
                      v-for="account in accounts.data"
                      :key="account.id"
                      v-bind:value="account.id"
                      :selected="account.id == PaymentWay.account_id"
                    >
                      {{ account.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("account")
                  }}</label>
                </div>
              </div>

              <div class="col-md-6 mt-7">
                <div class="has-float-label mb-0">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="discount_percentage"
                      min="0"
                      :value="PaymentWay.discount_percentage"
                      placeholder="discount_percentage"
                    />
                    <label for="exampleSelectl">{{
                      $t("discount_percentage")
                    }}</label>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mt-7">
                <div class="has-float-label mb-0">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="discount_value"
                      min="0"
                      :value="PaymentWay.discount_value"
                      placeholder="discount_value"
                    />
                    <label for="exampleSelectl">{{
                      $t("discount_value")
                    }}</label>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mt-7">
                <div class="has-float-label mb-0">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="max_discount"
                      :value="PaymentWay.max_discount"
                      min="0"
                      placeholder="max_discount"
                    />
                    <label for="exampleSelectl">{{ $t("max_discount") }}</label>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
                  <select class="form-control" id="" name="discount_account_id">
                    <option value=""></option>
                    <option
                      v-for="discount_account in accounts.data"
                      :key="discount_account.id"
                      v-bind:value="discount_account.id"
                      :selected="
                        discount_account.id == PaymentWay.discount_account_id
                      "
                    >
                      {{ discount_account.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("discount_account")
                  }}</label>
                </div>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
                  <select class="form-control" id="" name="tax_account_id">
                    <option value=""></option>
                    <option
                      v-for="tax_account in accounts.data"
                      :key="tax_account.id"
                      v-bind:value="tax_account.id"
                      :selected="tax_account.id == PaymentWay.tax_account_id"
                    >
                      {{ tax_account.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("tax_account")
                  }}</label>
                </div>
              </div>

              <div class="col-md-6 mt-7">
                <div class="has-float-label mb-0">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="tax_percentag"
                      :value="PaymentWay.tax_percentag"
                      min="0"
                      placeholder="tax_percentag "
                    />
                    <label for="exampleSelectl"
                      >{{ $t("tax_percentag") }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
export default {
  name: "add-cities",
  components: {
    LangTabs,
    Inputs,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      PaymentWay: {},
      languages: window.$languages,
    };
  },

  created() {
    this.getPaymentWay();
    this.getfinancialaccounts();
  },
  computed: {
    accounts() {
      return this.$store.getters.getfinancialaccounts;
    },
  },

  methods: {
    async updatePaymentWays() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const paymentWay = {
          URL: "paymentWays/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updatePaymentWay", paymentWay);
        document.location.href = "paymentWays";
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getPaymentWay() {
      const paymentway = {
        URL: "paymentWays/" + this.$route.params.id,
      };
      const getPaymentWay = await this.$store.dispatch(
        "getPaymentWay",
        paymentway
      );
      console.log(getPaymentWay.data.data);
      this.PaymentWay = getPaymentWay.data.data;
      console.log(this.PaymentWay);
    },
    async getfinancialaccounts() {
      const accountUrl = {
        URL: "financialAccounts",
      };
      const accounts = await this.$store.dispatch(
        "fetchfinancialaccounts",
        accountUrl
      );
    },
  },
};
</script>

<style>
</style>