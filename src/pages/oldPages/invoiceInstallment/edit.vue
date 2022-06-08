<template>
  <div>
    <top-bar-card
      :newUrlName="`add-invoiceInstallment`"
      :submit="UpdateInvoiceInstallment"
      :id="showinvoiceinstallmet.id"
      :editUrlName="`edit-invoiceInstallment`"
      :navigationUrl="`cityNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="UpdateInvoiceInstallment" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">{{ $t("general_info") }}</h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-4">
                <div class="form-group has-float-label">
                  <!--                                    @change="getInvoices($event)"-->
                  <select name="invoice_settings" class="form-control">
                    <option value>Choose</option>
                    <option
                      v-for="invoice in invoiceSettings"
                      :key="invoice.id"
                      v-bind:value="invoice.id"
                      :selected="
                        invoice.id == showinvoiceinstallmet.invoice_settings
                      "
                    >{{ invoice.name }}</option>
                  </select>
                  <label for>invoice_settings</label>
                </div>
              </div>

              <div class="col-4">
                <!--                                @change="getInvoices($event)"-->
                <div class="has-float-label">
                  <div class="form-group">
                    <select
                      name="invoice_id"
                      class="form-control"
                      @change="getInstallmentValue($event)"
                    >
                      <option value>Choose</option>
                      <option
                        v-for="Invoice in invoices"
                        :key="Invoice.id"
                        v-bind:value="Invoice.id"
                        :selected="
                          Invoice.id == showinvoiceinstallmet.invoice_id
                        "
                      >{{ Invoice.invoice_no }}</option>
                    </select>
                    <label for="exampleSelectl">invoice No.</label>
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
                      :value="showinvoiceinstallmet.start_date"
                      placeholder="start_date"
                    />
                    <label class="checkbox checkbox-single">start_date</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="box-customer box-date p-3 bg-lighten border">
                  <h6>customer</h6>
                  <div class="form-group has-float-label m-0 mt-2">
                    <!--                                        v-model="account_id"-->
                    <select name="account_id" class="form-control" @change="getAccountInfo">
                      <option value>Choose</option>
                      <option
                        v-for="account in accounts.data"
                        :key="account.id"
                        v-bind:value="account.id"
                        :selected="
                          account.id == showinvoiceinstallmet.account_id
                        "
                      >{{ account.name }}</option>
                    </select>
                    <label for>account</label>
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
                          <label for="exampleSelectl">phone</label>
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
                          <label for="exampleSelectl">fax</label>
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
                      <EditClientInputs
                        :language="language"
                        :errors="errors"
                        :showinvoiceinstallmet="showinvoiceinstallmet"
                      />
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
                            :value="showinvoiceinstallmet.agent_phone"
                            placeholder="phone"
                          />
                          <label for="exampleSelectl">phone</label>
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
                            :value="showinvoiceinstallmet.agent_fax"
                            placeholder="fax"
                          />
                          <label for="exampleSelectl">fax</label>
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
                            :value="showinvoiceinstallmet.agent_civil_registry"
                          />
                          <label for="exampleSelectl">register</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="has-float-label">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name
                            placeholder="holder No"
                            :value="showinvoiceinstallmet.agent_civil_registry"
                          />
                          <label for="exampleSelectl">holder No</label>
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
                            :value="showinvoiceinstallmet.agent_date"
                            placeholder="in date"
                          />
                          <label for="exampleSelectl">in date</label>
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
                            :value="showinvoiceinstallmet.agent_sector"
                            placeholder="work side"
                          />
                          <label for="exampleSelectl">agent sector</label>
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
                            :value="showinvoiceinstallmet.agent_source"
                            placeholder="source"
                          />
                          <label for>source</label>
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
                  <a class="nav-link active" id="data-tab" data-toggle="tab" href="#page-data">
                    <span class="nav-icon">
                      <i class="flaticon2-contract"></i>
                    </span>
                    <span class="nav-text">Installment</span>
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
                        <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">
                          <i class="flaticon2-contract"></i>
                          <span>Installment</span>
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse" :class="`${dataa}`">
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-6">
                            <div class="box-date p-3 bg-lighten border">
                              <h6>Installment way</h6>
                              <div class="form-group">
                                <div class="col-form-label">
                                  <div class="radio-list">
                                    <div class="d-flex mb-3">
                                      <label
                                        class="radio radio-outline radio-outline-2x radio-primary col-3 m-0"
                                      >
                                        <input type="radio" name="pay-every" value="1" />
                                        <span></span>
                                        monthly
                                      </label>
                                      <div class="col-6">
                                        <div class="align-items-center d-flex has-float-label">
                                          <input
                                            type="number"
                                            class="form-control"
                                            name="monthly_count"
                                            placeholder="every"
                                            v-model="monthly_count"
                                            @change="checkcount()"
                                          />
                                          <label for="exampleSelectl">every</label>
                                          <p class="m-0 pl-3">Month(s)</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="d-flex mb-3">
                                      <label
                                        class="radio radio-outline radio-outline-2x radio-primary col-3 m-0"
                                      >
                                        <input
                                          type="radio"
                                          namemonthly_count="weekly"
                                          checked="checked"
                                          value="1"
                                          name="pay-every"
                                        />
                                        <span></span>
                                        weekly
                                      </label>
                                      <div class="col-6">
                                        <div class="align-items-center d-flex has-float-label">
                                          <input
                                            type="number"
                                            class="form-control"
                                            name="weekly_count"
                                            placeholder="every"
                                            v-model="weekly_count"
                                            @change="checkcount()"
                                          />
                                          <label for="exampleSelectl">every</label>
                                          <p class="m-0 pl-3">Week(s)</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="d-flex mb-3">
                                      <label
                                        class="radio radio-outline radio-outline-2x radio-primary col-3 m-0"
                                      >
                                        <input
                                          type="radio"
                                          name="pay-every"
                                          checked="checked"
                                          value="1"
                                        />
                                        <span></span>
                                        daily
                                      </label>
                                      <div class="col-6">
                                        <div class="align-items-center d-flex has-float-label">
                                          <input
                                            type="number"
                                            class="form-control"
                                            name="daily_count"
                                            placeholder="every"
                                            v-model="daily_count"
                                            @change="checkcount()"
                                          />
                                          <label for="exampleSelectl">every</label>
                                          <p class="m-0 pl-3">Day(s)</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="border-top col-form-label">
                                  <div class="checkbox-inline">
                                    <label class="checkbox checkbox-outline checkbox-outline-2x">
                                      <input type="checkbox" name="Checkboxes16" checked="checked" />
                                      <span></span>
                                      calc by hijri date
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
                                        :value="invoiceinstallment.total"
                                      />
                                      <label for="exampleSelectl">invoice Net</label>
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
                                        @change="getTotal"
                                      />
                                      <label for="exampleSelectl">down payment</label>
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
                                        :value="
                                          showinvoiceinstallmet.payment_date
                                        "
                                        placeholder="payment date"
                                      />
                                      <label for="exampleSelectl">payment date</label>
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
                                      <label for="exampleSelectl">installment</label>
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
                                      <label for="exampleSelectl">installment start date</label>
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
                                      <label for="exampleSelectl">installment count</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div class="has-float-label">
                                    <div class="form-group">
                                      <input
                                        type="number"
                                        class="form-control"
                                        name
                                        placeholder="total paid"
                                        v-model="totalpaid"
                                      />
                                      <label for="exampleSelectl">total paid</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div class="has-float-label">
                                    <div class="form-group">
                                      <input
                                        type="number"
                                        class="form-control"
                                        name
                                        placeholder="remainder"
                                        v-model="remainder"
                                      />
                                      <label for="exampleSelectl">remainder</label>
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
                                class="datatable-cell-center datatable-cell datatable-cell-sort"
                              >
                                <span style="width: 30px">#</span>
                              </th>
                              <th>
                                <span>date</span>
                              </th>
                              <th>
                                <span>the day</span>
                              </th>
                              <th>
                                <span>period</span>
                              </th>
                              <th>
                                <span>value</span>
                              </th>
                              <th>
                                <span>rate</span>
                              </th>
                              <th>
                                <span>due</span>
                              </th>
                              <th>
                                <span>state</span>
                              </th>
                              <th>
                                <span>notes</span>
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
                                  <input type="hidden" :value="getdate(index)" />
                                  <input
                                    type="date"
                                    placeholder="date"
                                    :value="calcDays(dates, index)"
                                    :name="`installmentTerms[${index}][date]`"
                                    class="form-control"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>
                                  <input
                                    type="text"
                                    placeholder="the day"
                                    :value="dayName(calcDays(dates, index))"
                                    class="form-control"
                                    :name="`installmentTerms[${index}][day]`"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>
                                  <input
                                    type="text"
                                    placeholder="period"
                                    v-model="period"
                                    class="form-control"
                                    :name="`installmentTerms[${index}][time]`"
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
                                    :name="`installmentTerms[${index}][value]`"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>
                                  <input
                                    type="number"
                                    placeholder="rate"
                                    class="form-control"
                                    v-model="rate"
                                    :name="`installmentTerms[${index}][percentage]`"
                                  />
                                </span>
                              </td>
                              <td>
                                <select :class="'form-control tax_' + index">
                                  <option selected value>Choose...</option>
                                  <option value="1">deserving</option>
                                  <option value="0">unDeserving</option>
                                </select>
                              </td>
                              <td>
                                <select :class="'form-control tax_' + index">
                                  <option
                                    selected
                                    value
                                    :name="`installmentTerms[${index}][active]`"
                                  >Choose...</option>
                                  <option value="1">Active</option>
                                  <option value="0">unActive</option>
                                </select>
                              </td>
                              <td>
                                <span>
                                  <input type="text" placeholder="notes" name class="form-control" />
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
                              <td colspan="8">
                                <span></span>
                              </td>
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
import EditClientInputs from "./EditClientInputs.vue";

export default {
  name: "add-invoiceinstallments",
  components: {
    LangTabs,
    Inputs,
    EditClientInputs,
    LangTabClient,
    EditInputs
  },

  props: {
    errors: {
      type: Object,
      default: () => ({})
    }
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
      installmentCount: "",
      monthly_count: "",
      totalpaid: "",
      weekly_count: "",
      daily_count: "",
      numbercount: "",
      start_date: "",
      dates: "",
      rate: "",
      remainder: "",
      day: "",
      period: "",
      showinvoiceinstallmet: ""
    };
  },

  created() {
    this.getInvoiceSettings();
    this.getAccounts();
    this.getData();
    this.getInvoices();
  },
  computed: {
    accounts() {
      return this.$store.getters.getAccounts;
    },
    invoiceSettings() {
      return this.$store.getters.getInvoiceSettings;
    }
  },
  methods: {
    async getData() {
      const data = {
        URL: "invoiceinstallments/" + this.$route.params.id
      };
      const invoices = await this.$store.dispatch(
        "getInvoiceInstallment",
        data
      );
      this.showinvoiceinstallmet = invoices.data.data;
      this.monthly_count = invoices.data.data.monthly_count;
      this.weekly_count = invoices.data.data.weekly_count;
      this.daily_count = invoices.data.data.daily_count;
      this.down_payment = invoices.data.data.down_payment;
      this.installment_value = invoices.data.data.installment_value;
      this.start_date = invoices.data.data.installment_date;
      this.installmentCount = invoices.data.data.installments_count;
      this.rate = invoices.data.data.installment_value;
    },
    calcDays(date, index) {
      let days = 0;
      if (this.monthly_count != null) {
        days += this.monthly_count * 30;
        this.period = this.monthly_count * 30;
        // days += moment().add(this.monthly_count, 'months');
      }
      if (this.weekly_count != null) {
        days += this.weekly_count * 7;
        // this.period=this.weekly_count * 7;
      }
      if (this.daily_count != null) {
        days += this.daily_count;
        // this.period=this.daily_count;
      }

      days = days * (index - 1);

      console.log({ days });
      console.log(
        moment(this.start_date)
          .add(days, "days")
          .format("YYYY-MM-DD")
      );
      return moment(this.start_date)
        .add(days, "days")
        .format("YYYY-MM-DD");
    },
    dayName(date) {
      return moment(date).format("dddd");
    },
    async getdate(id) {
      this.rate = this.installment_value / this.invoiceinstallment.total;
      this.day = moment(this.start_date).format("dddd");
      if (id == 1) {
        this.dates = this.start_date;
      }
      // console.log(moment().add(3, 'mo').format('YYYY-MM-DD'));

      console.log(this.start_date);
    },
    async checkcount() {
      let days = 0;
      if (this.monthly_count != null) {
        // days += this.monthly_count * 30;
        days += moment().add(this.monthly_count, "months");
      }
      if (this.weekly_count != null) {
        days += this.weekly_count * 7;
      }
      if (this.daily_count != null) {
        // days += this.daily_count;
        days += moment().add(this.daily_count, "days");
      }
    },

    async getAccountInfo() {
      this.account = await this.$store.dispatch("showAccount", {
        data: this.account_id
      });
    },

    async getInstallmentCount() {
      this.installmentCount =
        (this.invoiceinstallment.total - this.down_payment) /
        this.installment_value;
    },

    async getTotal() {
      if (this.invoiceinstallment.paid == null) {
        this.totalpaid = parseInt(this.down_payment);
      } else {
        this.totalpaid =
          parseInt(this.down_payment) + parseInt(this.invoiceinstallment.paid);
      }

      this.remainder = parseInt(this.invoiceinstallment.total) - this.totalpaid;
    },

    async getInvoiceSettings() {
      const invoicesettingUrl = { URL: "settings/invoice" };
      const invoiceSettings = await this.$store.dispatch(
        "fetchInvoiceSettings",
        invoicesettingUrl
      );
    },

    async UpdateInvoiceInstallment() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const invoiceinstallment = {
          URL: "invoiceinstallments/" + this.$route.params.id,
          data: formData
        };
        await this.$store.dispatch(
          "updateInvoiceInstallments",
          invoiceinstallment
        );
        document.location.href = "invoiceInstallment";
      } catch (errors) {
        this.errors = errors;
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
        data: this.invoice_id
      });

      this.totalpaid = this.invoiceinstallment.paid;

      console.log(this.totalpaid);
      this.remainder =
        this.invoiceinstallment.total - this.invoiceinstallment.paid;

      console.log(this.invoiceinstallment);
    },

    async getInvoices() {
      var invoiceID = this.showinvoiceinstallmet.invoice_settings;

      $axios
        .get(`invoice/${invoiceID}`)
        .then(response => {
          this.invoices = response.data.data;
          console.log(this.invoices);
        })
        .catch(function(error) {});
    }
  }
};
</script>

<style></style>