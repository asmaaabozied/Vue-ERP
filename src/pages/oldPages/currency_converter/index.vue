<template>
  <div>
    <top-bar-card :newUrlName="`add-currencies`" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form
          @submit.prevent="currencyConvert"
          id="convert_form"
          method="get"
          action="#"
        >
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary d-b">
              currency converter
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
              <div class="col has-float-label">
                <div class="form-group">
                  <input
                    type="number"
                    id="amount"
                    class="form-control"
                    value="1"
                    min="1"
                    name="amount"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group has-float-label">
                  <select
                    id="currency_from"
                    name="currency_from"
                    class="form-control"
                  >
                    <option disabled selected>Convert From</option>
                    <option
                      v-for="(code, index) in currency_codes"
                      :value="code.code"
                      :key="index"
                    >
                      {{ code.code }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col">
                <div class="form-group has-float-label">
                  <select
                    id="currency_to"
                    name="currency_to"
                    class="form-control"
                  >
                    <option disabled selected>{{ $("convert_to") }}</option>
                    <option
                      v-for="(code, index) in currency_codes"
                      :value="code.code"
                      :key="index"
                    >
                      {{ code.code }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col">
                <div class="form-group m-0">
                  <strong> {{ $("Currency_Rate") }}</strong>
                  <h3
                    v-model="currency_rate"
                    id="currency_rate"
                    style="color: #004890"
                    class="line-height-xs m-0"
                  >
                    {{ currency_rate }}
                  </h3>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <button
                    type="submit"
                    style="margin: 0 !important"
                    class="btn btn-primary mb-2 mt-5"
                  >
                    {{ $("Convert") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <hr />
        <div class="p-3">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary d-b">
              {{ $t("currencies") }}
            </h5>
            <div class="separator separator-solid my-3"></div>

            <!--begin: Datatable-->
            <div
              class="
                datatable
                datatable-bordered
                datatable-head-custom
                datatable-default
                datatable-primary
                datatable-scroll
                datatable-loaded
              "
              id="kt_datatable_2"
              style=""
            >
              <table class="datatable-table">
                <thead class="datatable-head">
                  <tr class="datatable-row" style="left: 0px">
                    <th
                      data-field="id"
                      class="
                        datatable-cell-center
                        datatable-cell
                        datatable-cell-check
                      "
                    >
                      <span style=""
                        ><label class="checkbox checkbox-single checkbox-all"
                          ><input type="checkbox" />&nbsp;<span></span></label
                      ></span>
                    </th>

                    <th data-field="name" class="datatable-cell">
                      <span style=""> {{ $("code_from") }}</span>
                    </th>
                    <th data-field="name" class="datatable-cell">
                      <span style=""> {{ $("code_to") }}</span>
                    </th>
                    <th data-field="start_date" class="datatable-cell">
                      <span style=""> {{ $("code") }}</span>
                    </th>

                    <th data-field="created_at" class="datatable-cell">
                      <span style=""> {{ $("created_at") }}</span>
                    </th>
                    <th data-field="Actions" class="datatable-cell">
                      <span style="">{{ $("action") }}</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="datatable-body">
                  <tr
                    class="datatable-row datatable-row-even"
                    v-for="(currency, i) in currency_history"
                    :key="i"
                  >
                    <td
                      class="
                        datatable-cell-center
                        datatable-cell
                        datatable-cell-check
                      "
                    >
                      <span style=""
                        ><label class="checkbox checkbox-single">
                          <input type="checkbox" value="" />&nbsp;<span
                          ></span></label
                      ></span>
                    </td>

                    <td class="datatable-cell">
                      <span>{{ currency.currency_code_from }}</span>
                    </td>
                    <td class="datatable-cell">
                      <span>{{ currency.currency_code_to }}</span>
                    </td>
                    <td class="datatable-cell">
                      <span>{{ currency.rate }}</span>
                    </td>

                    <td class="datatable-cell">
                      <span>{{ currency.created_at }}</span>
                    </td>
                    <td class="datatable-cell">
                      <span style="overflow: visible; position: relative">
                        <router-link
                          :to="{
                            name: 'currency_converter.history',
                            query: { code: currency.currency_code_from },
                          }"
                          class="btn btn-sm btn-clean btn-icon mr-2"
                          title="Show history"
                        >
                          <i class="fas fa-eye"></i>
                        </router-link>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card-footer font-weight-boldest">
          <router-link :to="{ name: 'market_converter' }"
            >Go To Market</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "currency_converter",
  data() {
    return {
      currency_history: [],
      currency_codes: [],
      currency_rate: 0,
      page: 1,
      perPage: 20,
    };
  },
  created() {
    // this.getResults();
    this.getCurrencyHistory();
  },
  computed: {
    currencies() {
      return this.$store.getters.getCurrencies;
    },
  },
  methods: {
    // async getResults(page = 1) {
    //   const currencyUrl = { URL: "currencies", page };
    //   const currencies = await this.$store.dispatch(
    //     "fetchCurrencies",
    //     currencyUrl
    //   );
    // },
    getCurrencyHistory() {
      $axios
        .get("/currency_converter")
        .then((response) => {
          this.currency_history = response.data.data.currency_history;
          this.currency_codes = response.data.data.currencies_code;
        })
        .catch((error) => {});
    },
    currencyConvert() {
      if (
        $("#currency_from option:selected").val() == "" ||
        $("#currency_to option:selected").val() == ""
      )
        this.currency_rate = "Please fill the fields";
      $axios
        .get("/currency_converter/today", {
          params: {
            amount: $("#amount").val(),
            currency_from: $("#currency_from option:selected").val(),
            currency_to: $("#currency_to option:selected").val(),
          },
        })
        .then((response) => {
          console.log(response.data.data);
          this.currency_rate = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>
