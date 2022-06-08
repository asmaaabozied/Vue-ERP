<template>
  <div>
    <top-bar-card :newUrlName="``" />

    <div class="card card-custom mb-9 mt-10 gutter-b">
      <!--begin::Header-->
      <div class="card-header">
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
                    datatable-cell-center datatable-cell datatable-cell-check
                  "
                >
                  <span style=""
                    ><label class="checkbox checkbox-single checkbox-all"
                      ><input type="checkbox" />&nbsp;<span></span></label
                  ></span>
                </th>

                <th data-field="name" class="datatable-cell">
                  <span style=""> {{ $t("code_from") }}</span>
                </th>
                <th data-field="name" class="datatable-cell">
                  <span style="">{{ $t("code_to") }}</span>
                </th>
                <th data-field="start_date" class="datatable-cell">
                  <span style="">{{ $t("code") }}</span>
                </th>

                <th data-field="created_at" class="datatable-cell">
                  <span style=""> {{ $t("created_at") }}</span>
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
                    datatable-cell-center datatable-cell datatable-cell-check
                  "
                >
                  <span style=""
                    ><label class="checkbox checkbox-single">
                      <input type="checkbox" value="" />&nbsp;<span
                      ></span></label
                  ></span>
                </td>
                <!--                <td class="datatable-cell">-->
                <!--                  <span>{{ i + 1 }}</span>-->
                <!--                </td>-->
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "currency_converter.history",
  data() {
    return {
      currency_history: [],
      currency_code: "",
      currency_codes: [],
      currency_rate: 0,
      page: 1,
      perPage: 20,
    };
  },
  created() {
    this.currency_code = this.$route.query.code;
    this.getCurrencyHistory();
  },
  computed: {
    currencies() {
      return this.$store.getters.getCurrencies;
    },
  },
  methods: {
    getCurrencyHistory() {
      $axios
        .get("/currency_converter/history/" + this.currency_code)
        .then((response) => {
          this.currency_history = response.data.data;
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
          this.currency_rate = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>