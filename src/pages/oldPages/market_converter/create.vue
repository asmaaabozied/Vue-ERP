<template>
  <div>
    <top-bar-card
      :newUrlName="`market_converter.create`"
      :submit="newMarketCurrency"
    />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0">
        <div class="card-title mb-7">
          <h3 class="card-label">{{ $t("Market_Converter") }}</h3>
        </div>

        <div class="add-tabs w-100 sub-tabs">
          <form
            @submit.prevent="newMarketCurrency"
            id="convert_form"
            method="get"
            action="#"
          >
            <div class="col-12 d-flex">
              <select
                id="currency_from"
                name="currency_code_from"
                class="form-control"
                style="margin: 5px !important"
              >
                <option disabled selected>{{ $t("Convert_From") }}</option>
                <option
                  v-for="(code, index) in currency_codes"
                  :value="code.code"
                  :key="index"
                >
                  {{ code.code }}
                </option>
              </select>
              <select
                id="currency_to"
                name="currency_code_to"
                class="form-control"
                style="margin: 5px !important"
              >
                <option disabled selected>Convert To</option>
                <option
                  v-for="(code, index) in currency_codes"
                  :value="code.code"
                  :key="index"
                >
                  {{ code.code }}
                </option>
              </select>
              <input
                style="margin: 5px !important"
                type="text"
                class="form-control"
                placeholder="Selling Rate"
                name="selling_rate"
              />
              <input
                style="margin: 5px !important"
                type="text"
                class="form-control"
                placeholder="Buying Rate"
                name="buying_rate"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";

export default {
  name: "market_converter.create",
  components: { LangTabs, UAnimateContainer, UAnimate },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      currencies: {},
      currency_codes: [],
    };
  },
  created() {
    this.getCurrencies();
  },
  methods: {
    async newMarketCurrency() {
      try {
        var form = document.getElementById("convert_form");
        var formData = new FormData(form);
        const currencies = { URL: "market_converter", data: formData };
        await this.$store.dispatch("store", currencies);
      } catch (errors) {
        this.errors = errors;
      }
    },
    getCurrencies() {
      $axios
        .get("/market_converter/getCurrency")
        .then((response) => {
          this.currency_codes = response.data.data.currencies_code;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style>
</style>