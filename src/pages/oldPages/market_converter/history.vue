<template>
  <div class="card card-custom mb-9 mt-50">
    <div class="card-header flex-wrap border-0 pb-0 bg-card">
      <!--begin::Subheader-->
      <div class="subheaderpage py-2 subheader-solid" id="kt_subheader">
        <div class="subheader-box">
          <div
            class="
              align-items-center
              d-flex
              flex-sm-nowrap flex-wrap
              justify-content-between
            "
          >
            <!--begin::Toolbar-->
            <div class="d-flex align-items-center">
              <router-link
                :to="{ name: 'market_converter.create' }"
                class="btn btn-outline-primary mr-1"
              >
                {{ $t("Add") }} <i class="icon-lg la la-plus-circle"></i
              ></router-link>

              <a href="#" class="btn btn-outline-primary mr-1">
                {{ $t("update") }} <i class="icon-lg la la-redo-alt"></i
              ></a>
              <a href="#" class="btn btn-outline-primary mr-1">
                {{ $t("delete") }} <i class="icon-lg la la-trash"></i
              ></a>
              <a href="#" class="btn btn-outline-primary mr-1">
                {{ $t("copy") }} <i class="icon-lg la la-copy"></i
              ></a>
              <a href="#" class="btn btn-outline-primary mr-1">
                {{ $t("print") }} <i class="icon-lg la la-print"></i
              ></a>
              <a href="#" class="btn btn-outline-primary mr-1">
                {{ $t("export") }} <i class="icon-lg la la-file-export"></i
              ></a>

              <label class="checkbox checkbox-outline checkbox-primary mr-1">
                <input type="checkbox" name="select all" />
                {{ $t("select_all") }}
                <span></span>
              </label>
              <a href="#" class="btn btn-outline-primary mr-1">
                {{ $t("more") }}<i class="icon-lg la la-ellipsis-v"></i
              ></a>
            </div>

            <div class="d-flex align-items-center right-side-box">
              <div class="input-icon mr-1">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <span><i class="flaticon2-search-1 icon-md"></i></span>
              </div>
              <a href="#" class="btn btn-outline-primary">
                {{ $("settings") }}
                <i class="text-dark-50 flaticon2-settings"></i
              ></a>
            </div>
            <!--end::Toolbar-->
          </div>
        </div>
      </div>
      <!--end::Subheader-->
      <div class="card-title">
        <h3 class="card-label">{{ $t("Market_Currency") }}</h3>
      </div>
      <!--end::Form-->
      <div class="card-body">
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
                <!--                <th data-field="currency_id" class="datatable-cell">-->
                <!--                  <span style="">currency ID</span>-->
                <!--                </th>-->
                <th data-field="name" class="datatable-cell">
                  <span style="">{{ $t("Code_from") }}</span>
                </th>
                <th data-field="name" class="datatable-cell">
                  <span style="">{{ $t("Code_to") }}</span>
                </th>
                <th data-field="start_date" class="datatable-cell">
                  <span style="">{{ $t("Selling_Code") }}</span>
                </th>
                <th data-field="start_date" class="datatable-cell">
                  <span style="">{{ $t("Buying_Code") }}</span>
                </th>

                <th data-field="created_at" class="datatable-cell">
                  <span style="">{{ $t("created_at") }}</span>
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

                <td class="datatable-cell">
                  <span>{{ currency.currency_code_from }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ currency.currency_code_to }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ currency.selling_rate }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ currency.buying_rate }}</span>
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
        .get("/market_converter/history/" + this.currency_code)
        .then((response) => {
          this.currency_history = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>