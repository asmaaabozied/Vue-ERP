<template>
  <div>
    <top-bar-card
      :newUrlName="`add-discounts`"
      :submit="newInvoiceInstallment"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newInvoiceInstallment" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-4">
                <div class="form-group has-float-label">
                  <select
                    name="invoice_settings"
                    class="form-control"
                    @change="getInvoices($event)"
                  >
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="invoice in invoiceSettings"
                      :key="invoice.id"
                      v-bind:value="invoice.id"
                    >
                      {{ invoice.name }}
                    </option>
                  </select>
                  <label for="">{{ $t("invoice_settings") }}</label>
                </div>
              </div>

              <div class="col-4">
                <div class="has-float-label">
                  <div class="form-group">
                    <select
                      name="invoice_id"
                      class="form-control"
                      @change="getInstallmentValue($event)"
                      v-model="invoice_id"
                    >
                      <option value="">{{ $t("Choose") }}</option>
                      <option
                        v-for="Invoice in invoices"
                        :key="Invoice.id"
                        v-bind:value="Invoice.id"
                      >
                        {{ Invoice.invoice_no }}
                      </option>
                    </select>
                    <label for="exampleSelectl">{{ $t("invoice_No") }}</label>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="date"
                      name="start_date"
                      id=""
                      placeholder="start_date"
                    />
                    <label class="checkbox checkbox-single">{{
                      $t("start_date")
                    }}</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="box-customer box-date p-3 bg-lighten border">
                  <h6>customer</h6>
                  <div class="form-group has-float-label m-0 mt-2">
                    <select
                      name="account_id"
                      class="form-control"
                      v-model="account_id"
                      @change="getAccountInfo"
                    >
                      <option value="">{{ $t("Choose") }}</option>
                      <option
                        v-for="account in accounts.data"
                        :key="account.id"
                        v-bind:value="account.id"
                      >
                        {{ account.name }}
                      </option>
                    </select>
                    <label for="">account</label>
                  </div>
                  <lang-tabs :languages="languages">
                    <template v-slot:input="{ language }">
                      <edit-inputs
                        v-if="account.names"
                        :language="language"
                        :errors="errors"
                        :account="account"
                      />
                      <inputs v-else :language="language" :errors="errors" />
                    </template>
                  </lang-tabs>

                  <div class="row">
                    <div class="col-8">
                      <div class="has-float-label">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="phone"
                            :value="account.phone"
                          />
                          <label for="exampleSelectl">{{ $t("phone") }}</label>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="has-float-label">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            :value="account.fax"
                            placeholder="fax"
                          />
                          <label for="exampleSelectl">{{ $t("fax") }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="box-warranter box-date p-3 bg-lighten border">
                  <h6>warranter</h6>
                  <lang-tab-client :languages="languages">
                    <template v-slot:input="{ language }">
                      <clientInputs :language="language" :errors="errors" />
                    </template>
                  </lang-tab-client>
                  <div class="row">
                    <div class="col-4">
                      <div class="has-float-label">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="agent_phone"
                            placeholder="phone"
                          />
                          <label for="exampleSelectl">{{ $t("phone") }}</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="has-float-label">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="agent_fax"
                            placeholder="fax"
                          />
                          <label for="exampleSelectl">{{ $t("fax") }}</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="has-float-label">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="agent_civil_registry"
                            placeholder="register"
                          />
                          <label for="exampleSelectl">{{
                            $t("register")
                          }}</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="has-float-label">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name=""
                            placeholder="holder No"
                          />
                          <label for="exampleSelectl">{{
                            $t("holder_No")
                          }}</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="has-float-label">
                        <div class="form-group">
                          <input
                            type="date"
                            class="form-control"
                            name="agent_date"
                            placeholder="in date"
                          />
                          <label for="exampleSelectl">{{
                            $t("in_date")
                          }}</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="has-float-label">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="agent_sector"
                            placeholder="work side"
                          />
                          <label for="exampleSelectl">{{
                            $t("agent_sector")
                          }}</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="has-float-label">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="agent_source"
                            placeholder="source"
                          />
                          <label for="">{{ $t("source") }}</label>
                        </div>
                      </div>
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
                    class="nav-link active"
                    id="data-tab"
                    data-toggle="tab"
                    href="#page-data"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-contract"></i>
                    </span>
                    <span class="nav-text">{{ $t("Installment") }}</span>
                  </a>
                </li>
              </ul>

              <div class="tab-content main-tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="page-data"
                  role="tabpanel"
                  aria-labelledby="data-tab"
                >
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent=".tab-pane"
                          href="#collapseOne"
                        >
                          <i class="flaticon2-contract"></i>
                          <span>{{ $t("Installment") }}</span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      class="panel-collapse collapse"
                      :class="`${dataa}`"
                    >
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-6">
                            <div class="box-date p-3 bg-lighten border">
                              <h6>{{ $t("Installment_way") }}</h6>
                              <div class="form-group">
                                <div class="col-form-label">
                                  <div class="radio-list">
                                    <div class="d-flex mb-3">
                                      <label
                                        class="
                                          radio
                                          radio-outline
                                          radio-outline-2x
                                          radio-primary
                                          col-3
                                          m-0
                                        "
                                      >
                                        <input type="radio" name="monthly" />
                                        <span></span>
                                        {{ $t("monthly") }}
                                      </label>
                                      <div class="col-6">
                                        <div
                                          class="
                                            align-items-center
                                            d-flex
                                            has-float-label
                                          "
                                        >
                                          <input
                                            type="number"
                                            class="form-control"
                                            name=""
                                            placeholder="every"
                                            v-model="monthly_count"
                                            @change="checkcount()"
                                          />
                                          <label for="exampleSelectl">{{
                                            $t("every")
                                          }}</label>
                                          <p class="m-0 pl-3">
                                            {{ $t("Month(s)") }}
                                          </p>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="d-flex mb-3">
                                      <label
                                        class="
                                          radio
                                          radio-outline
                                          radio-outline-2x
                                          radio-primary
                                          col-3
                                          m-0
                                        "
                                      >
                                        <input
                                          type="radio"
                                          namemonthly_count="weekly"
                                          checked="checked"
                                        />
                                        <span></span>
                                        {{ $t("weekly") }}
                                      </label>
                                      <div class="col-6">
                                        <div
                                          class="
                                            align-items-center
                                            d-flex
                                            has-float-label
                                          "
                                        >
                                          <input
                                            type="number"
                                            class="form-control"
                                            name="weekly_count"
                                            placeholder="every"
                                            v-model="weekly_count"
                                            @change="checkcount()"
                                          />
                                          <label for="exampleSelectl">{{
                                            $t("every")
                                          }}</label>
                                          <p class="m-0 pl-3">
                                            {{ $t("Week(s)") }}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="d-flex mb-3">
                                      <label
                                        class="
                                          radio
                                          radio-outline
                                          radio-outline-2x
                                          radio-primary
                                          col-3
                                          m-0
                                        "
                                      >
                                        <input
                                          type="radio"
                                          name="daily"
                                          checked="checked"
                                        />
                                        <span></span>
                                        daily
                                      </label>
                                      <div class="col-6">
                                        <div
                                          class="
                                            align-items-center
                                            d-flex
                                            has-float-label
                                          "
                                        >
                                          <input
                                            type="number"
                                            class="form-control"
                                            name="daily_count"
                                            placeholder="every"
                                            v-model="daily_count"
                                            @change="checkcount()"
                                          />
                                          <label for="exampleSelectl">{{
                                            $t("every")
                                          }}</label>
                                          <p class="m-0 pl-3">
                                            {{ $t("Day(s)") }}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-top col-form-label">
                                  <div class="checkbox-inline">
                                    <label
                                      class="
                                        checkbox
                                        checkbox-outline
                                        checkbox-outline-2x
                                      "
                                    >
                                      <input
                                        type="checkbox"
                                        name="Checkboxes16"
                                        checked="checked"
                                      />
                                      <span></span>
                                      {{ $t("calc_by_hijri_date") }}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="box-date p-3 bg-lighten border">
                              <h6>Info</h6>
                              <div class="row">
                                <div class="col-6">
                                  <div class="has-float-label">
                                    <div class="form-group">
                                      <input
                                        type="number"
                                        class="form-control"
                                        placeholder="invoice Net"
                                        :value="invoiceinstallment.invoice_no"
                                      />
                                      <label for="exampleSelectl">{{
                                        $t("invoice_Net")
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
                                        name="down_payment"
                                        placeholder="first payment"
                                        v-model="down_payment"
                                      />
                                      <label for="exampleSelectl">{{
                                        $t("down_payment")
                                      }}</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div class="has-float-label">
                                    <div class="form-group">
                                      <input
                                        type="date"
                                        class="form-control"
                                        name="payment_date"
                                        placeholder="payment date"
                                      />
                                      <label for="exampleSelectl">{{
                                        $t("payment_date")
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
                                        name="installment_value"
                                        placeholder="installment"
                                        @change="getInstallmentCount"
                                        v-model="installment_value"
                                      />
                                      <label for="exampleSelectl">{{
                                        $t("installment")
                                      }}</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div class="has-float-label">
                                    <div class="form-group">
                                      <input
                                        type="date"
                                        class="form-control"
                                        name="installment_date"
                                        placeholder="start date"
                                        v-model="start_date"
                                        @change="getdate()"
                                      />
                                      <label for="exampleSelectl">{{
                                        $t("installment_start_date")
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
                                        name="installments_count"
                                        placeholder="installment count"
                                        v-model="installmentCount"
                                      />
                                      <label for="exampleSelectl">{{
                                        $t("installment_count")
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
                                        name=""
                                        placeholder="total paid"
                                      />
                                      <label for="exampleSelectl">{{
                                        $t("total_paid")
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
                                        name=""
                                        placeholder="remainder"
                                      />
                                      <label for="exampleSelectl">{{
                                        $t("remainder")
                                      }}</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <table class="table table-bordered mt-2">
                          <thead class="datatable-head">
                            <tr class="datatable-row" style="left: 0px">
                              <th
                                data-field="RecordID"
                                class="
                                  datatable-cell-center
                                  datatable-cell
                                  datatable-cell-sort
                                "
                              >
                                <span style="width: 30px">#</span>
                              </th>
                              <th><span> date</span></th>
                              <th>
                                <span>the day</span>
                              </th>
                              <th>
                                <span> {{ $t("date") }}</span>
                              </th>
                              <th>
                                <span> {{ $t("the_day") }}</span>
                              </th>
                              <th>
                                <span> {{ $t("period") }}</span>
                              </th>
                              <th>
                                <span> {{ $t("value") }}</span>
                              </th>
                              <th>
                                <span> {{ $t("rate") }}</span>
                              </th>
                              <th>
                                <span> {{ $t("due") }}</span>
                              </th>
                              <th>
                                <span> {{ $t("state") }}</span>
                              </th>
                              <th>
                                <span> {{ $t("notes") }}</span>
                              </th>
                              <th class="end-cell">
                                <span></span>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="datatable-body">
                            <tr
                              v-for="index in installmentCount"
                              class="datatable-row datatable-row-even"
                              style="left: 0px"
                            >
                              <td class="datatable-cell-center datatable-cell">
                                <span style="width: 30px">1</span>
                              </td>
                              <td>
                                <span>
                                  <!--                                                                    // getDate(index).from('dddd')-->
                                  <input
                                    type="hidden"
                                    :value="getdate(index)"
                                  />
                                  <input
                                    type="date"
                                    placeholder="date"
                                    v-model="dates"
                                    class="form-control"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>
                                  <input
                                    type="text"
                                    placeholder="the day"
                                    name="day"
                                    v-model="day"
                                    class="form-control"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>
                                  <input
                                    type="number"
                                    placeholder="period"
                                    name=""
                                    class="form-control"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>
                                  <input
                                    type="number"
                                    placeholder="value"
                                    v-model="installment_value"
                                    class="form-control"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>
                                  <input
                                    type="number"
                                    placeholder="rate"
                                    name=""
                                    class="form-control"
                                    v-model="rate"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>
                                  <input
                                    type="text"
                                    placeholder="due"
                                    name=""
                                    class="form-control"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>
                                  <input
                                    type="text"
                                    placeholder="state"
                                    name=""
                                    class="form-control"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>
                                  <input
                                    type="text"
                                    placeholder="notes"
                                    name=""
                                    class="form-control"
                                  />
                                </span>
                              </td>
                            </tr>
                            <tr
                              id="relative_button_row"
                              class="datatable-row datatable-row-even"
                              style="left: 0px"
                            >
                              <td class="datatable-cell-center datatable-cell">
                                <span style="width: 30px">2</span>
                              </td>
                              <td colspan="8"><span></span></td>
                              <!--                                                        <td class="text-center end-td"><button type="button" title="" class="btn btn-primary btn-option"><i class="fa fa-plus-circle"></i></button></td>-->
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
import EditInputs from "./EditInputs.vue";
import ClientInputs from "./ClientInputs.vue";
 

export default {
  name: "add-invoiceinstallments",
  components: {
    LangTabs,
    Inputs,
    ClientInputs,
    LangTabClient,
    EditInputs,
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      invoices: {},
      languages: window.$languages,
      gridClassName: window.$gridClassName,
      dataa: "",
      account_id: "",

      down_payment: "",
      invoice_id: "",
      installment_value: "",
      account: {},
      invoiceinstallment: {},
      installmentCount: 1,
      monthly_count: "",
      weekly_count: "",
      daily_count: "",
      numbercount: "",
      start_date: "",
      dates: "",
      rate: "",
      day: "",
    };
  },

  created() {
    this.getInvoiceSettings();
    this.getAccounts();
  },
  computed: {
    accounts() {
      return this.$store.getters.getAccounts;
    },
    invoiceSettings() {
      return this.$store.getters.getInvoiceSettings;
    },
  },

  methods: {
    async getdate(id) {
      this.rate = this.installment_value / this.invoiceinstallment.invoice_no;
      this.day = moment(this.start_date).format("dddd");
      if (id == 1) {
        this.dates = this.start_date;
      }
      // console.log(moment(this.start_date).format('dddd'));
      console.log(this.day);
      console.log(this.start_date);
    },
    async checkcount() {
      if (this.monthly_count != null) {
        this.numbercount = this.monthly_count;
      }
      if (this.weekly_count != null) {
        this.numbercount = this.weekly_count;
      }
      if (this.daily_count != null) {
        this.numbercount = this.daily_count;
      }
    },

    async getAccountInfo() {
      this.account = await this.$store.dispatch("showAccount", {
        data: this.account_id,
      });
    },

    async getInstallmentCount() {
      this.installmentCount =
        (this.invoiceinstallment.invoice_no - this.down_payment) /
        this.installment_value;
    },

    async getInvoiceSettings() {
      const invoicesettingUrl = { URL: "settings/invoice" };
      const invoiceSettings = await this.$store.dispatch(
        "fetchInvoiceSettings",
        invoicesettingUrl
      );
    },
    async newInvoiceInstallment() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const invoiceinstallment = {
          URL: "invoiceinstallments",
          data: formData,
        };
        await this.$store.dispatch(
          "storeInvoiceInstallments",
          invoiceinstallment
        );
        document.location.href = "invoiceInstallment";
      } catch (errors) {
        if (errors) {
          this.errors = errors;
          this.isEmpty = true;
        }
      }
    },

    async getAccounts() {
      const accountUrl = { URL: "accounts" };
      const accounts = await this.$store.dispatch("fetchAccounts", accountUrl);
    },
    changeGrid(event) {
      this.gridClassName = event;
    },

    async getInstallmentValue() {
      this.invoiceinstallment = await this.$store.dispatch("showInvoice", {
        data: this.invoice_id,
      });
    },
    getInvoices(event) {
      var invoiceID = event.target.value;

      $axios
        .get(`invoice/getBySetting/${invoiceID}`)
        .then((response) => {
          this.invoices = response.data.data;
          console.log(this.invoices);
        })
        .catch(function (error) {});
    },
  },
};
</script>

<style></style>