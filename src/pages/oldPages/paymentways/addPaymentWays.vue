<template>
  <div>
    <top-bar-card
      :newUrlName="`add-paymentWays`"
      :submit="newPaymentWay"
      :model="`paymentway`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newPaymentWay" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>

            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs :language="language" :errors="errors" />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-6 mt-7 has-float-label">
                <div class="form-group">
                  <input
                    type="number"
                    name="code"
                    id=""
                    placeholder="code"
                    class="form-control"
                    v-on:input="valiCode($event)"
                    :class="{ [`${addclass}`]: errors.code }"
                  />
                  <label for="" class="col-form-label">{{ $t("code") }}</label>
                  <span
                    class="text-danger"
                    v-if="errors.code"
                    :class="seenCode"
                  >
                    {{ errors.code[0] }}
                  </span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="account_id">
                    <option value=""></option>
                    <option
                      v-for="account in accounts.data"
                      :key="account.id"
                      v-bind:value="account.id"
                    >
                      {{ account.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("account")
                  }}</label>
                  <span class="text-danger" v-if="errors.account_id">
                    {{ errors.account_id[0] }}
                  </span>
                </div>
              </div>

              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="discount_percentage"
                      min="0"
                      placeholder="discount_percentage"
                    />
                    <label for="exampleSelectl">{{
                      $t("discount_percentage")
                    }}</label>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="discount_value"
                      min="0"
                      placeholder="discount_value"
                    />
                    <label for="exampleSelectl">{{
                      $t("discount_value")
                    }}</label>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="max_discount"
                      min="0"
                      placeholder="max_discount"
                    />
                    <label for="exampleSelectl">{{ $t("max_discount") }}</label>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="discount_account_id">
                    <option value=""></option>
                    <option
                      v-for="discount_account in accounts.data"
                      :key="discount_account.id"
                      v-bind:value="discount_account.id"
                    >
                      {{ discount_account.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("discount_account")
                  }}</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="tax_account_id">
                    <option value=""></option>
                    <option
                      v-for="tax_account in accounts.data"
                      :key="tax_account.id"
                      v-bind:value="tax_account.id"
                    >
                      {{ tax_account.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("tax_account")
                  }}</label>
                </div>
              </div>

              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="tax_percentag"
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
import Errors from "@/components/layouts/errors.vue";

export default {
  name: "add-paymentways",
  components: { LangTabs, Inputs, Errors, UAnimateContainer, UAnimate },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      paymentway: {},
      languages: window.$languages,
      isEmpty: false,
      addclass: "is-invalid",
      seenCode: "",
    };
  },

  created() {
    this.getfinancialaccounts();
  },
  computed: {
    accounts() {
      return this.$store.getters.getfinancialaccounts;
    },
  },

  methods: {
    async newPaymentWay() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        console.log(formData);

        const paymentway = { URL: "paymentWays", data: formData };
        await this.$store.dispatch("storePaymentWay", paymentway);
        document.location.href = "paymentWays";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    async getfinancialaccounts() {
      const accountUrl = { URL: "financialAccounts" };
      const accounts = await this.$store.dispatch(
        "fetchfinancialaccounts",
        accountUrl
      );
    },
    valiCode(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenCode = "";
      } else {
        this.addclass = "is-valid";
        this.seenCode = "d-none";
      }
    },
  },
};
</script>

<style></style>
