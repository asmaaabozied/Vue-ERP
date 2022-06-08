<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`purchase.create`"
      :submit="newInvoice"
    />

    <form
      @submit.prevent="newInvoice"
      id="invoice_form"
      autocomplete="off"
      method="POST"
      action="#"
    >
      <div class="card card-custom mt-10">
        <div class="card-header flex-wrap border-0 pb-0 d-block">
          <div :class="`add-tabs w-100 sub-tabs ${gridClassName}`">
            <ul class="nav nav-tabs0" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="Invoice-info-tab"
                  data-toggle="tab"
                  href="#Invoice-info"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-gear"></i>
                  </span>
                  <span class="nav-text">{{ $t("Invoice_information") }}</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="customer-info-tab"
                  data-toggle="tab"
                  href="#customer-info"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text">{{ $t("customer_information") }}</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pay-condition-tab"
                  data-toggle="tab"
                  href="#pay-condition"
                >
                  <span class="nav-icon">
                    <i class="flaticon-notes"></i>
                  </span>
                  <span class="nav-text">{{ $t("pay_conditions") }}</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="notes-tab"
                  data-toggle="tab"
                  href="#notes-info"
                >
                  <span class="nav-icon">
                    <i class="flaticon-notes"></i>
                  </span>
                  <span class="nav-text">{{ $t("notes") }}</span>
                </a>
              </li>
            </ul>

            <div id="myTabContent" class="tab-content main-tab-content">
              <div
                class="tab-pane fade show tab-product-main active"
                id="Invoice-info"
                role="tabpanel"
                aria-labelledby="Invoice-info-tab"
              >
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent=".tab-pane"
                        href="#collapseOne"
                      >
                        <i class="flaticon2-gear"></i>
                        <span>{{ $t("Invoice_information") }}</span>
                      </a>
                    </h4>
                  </div>

                  <div id="collapseOne" class="panel-collapse collapse in show">
                    <div class="panel-body">
                      <div class="row">
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label>{{ $t("Invoice_Settings") }}</label>
                            <select
                              name="invoice_setting_id"
                              id="invoice_setting_id"
                              v-model="invoice_setting_id"
                              @change="getInvoiceSettingDetails"
                              class="form-control select"
                              tabindex="null"
                            >
                              <option class="form-control" disabled>
                                Choose Invoice Setting
                              </option>
                              <option
                                class="form-control"
                                style="border-radius: 10px"
                                v-for="(
                                  invoiceSetting, i
                                ) in invoice.invoiceSettings"
                                :value="invoiceSetting.id"
                                :key="i"
                              >
                                {{ invoiceSetting.name }}
                              </option>
                            </select>
                            <span
                              class="text-danger"
                              v-if="errors['invoice_setting_id']"
                            >
                              {{ errors["invoice_setting_id"] }}
                            </span>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label invoice-box">
                            <label>{{ $t("invoice_No") }}</label>
                            <div class="d-flex">
                              <input
                                type="text"
                                class="form-control"
                                name="prefix"
                                id="prefix"
                                readonly
                                :disabled="this.selectedInvoiceSetting == null"
                                :value="this.selectedInvoiceSetting.prefix"
                              />
                              <input
                                type="number"
                                class="form-control"
                                name="invoice_no"
                                :disabled="this.selectedInvoiceSetting == null"
                                :value="
                                  this.selectedInvoiceSetting.invoice_no
                                    ? this.selectedInvoiceSetting.invoice_no
                                    : this.selectedInvoiceSetting.start_serial
                                "
                              />
                              <input
                                type="text"
                                class="form-control"
                                name="vendor_invoice_no"
                              />
                              <input
                                type="number"
                                class="form-control w-50"
                                name="invoice_version"
                                value="1"
                                min="0"
                                readonly
                              />
                            </div>
                            <span class="text-danger" v-if="errors['prefix']">
                              {{ errors["prefix"] }}
                            </span>
                            <span
                              class="text-danger"
                              v-if="errors['invoice_no']"
                            >
                              {{ errors["invoice_no"] }}
                            </span>
                            <span
                              class="text-danger"
                              v-if="errors['vendor_invoice_no']"
                            >
                              {{ errors["vendor_invoice_no"] }}
                            </span>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label>{{ $t("warehouse_name") }}</label>
                            <select
                              name="warehouse_id"
                              class="form-control select"
                              tabindex="null"
                            >
                              <option class="form-control" disabled>
                                {{ $t("Choose") }}
                              </option>
                              <option
                                class="form-control"
                                style="border-radius: 10px"
                                v-for="(warehouse, i) in invoice.warehouses"
                                :value="warehouse.id"
                                :key="i"
                              >
                                {{ warehouse.name }}
                              </option>
                            </select>
                            <span
                              class="text-danger"
                              v-if="errors['warehouse_id']"
                            >
                              {{ errors["warehouse_id"] }}
                            </span>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label>{{ $t("date") }}</label>
                            <input
                              type="date"
                              id="date"
                              @input="hijri($event)"
                              class="form-control"
                              name="date"
                              :value="date"
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label>{{ $t("date_hijri") }}</label>
                            <input
                              type="text"
                              class="form-control"
                              id="date_hijri"
                              name="date_hijri"
                              placeholder="date h"
                              :value="hijri_date"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="has-float-label">
                            <div class="form-group">
                              <label>{{ $t("Delivery_due_Days") }}</label>
                              <input
                                type="number"
                                class="form-control"
                                value="0"
                                id="delivery_due_day"
                                name="delivery_due_day"
                                min="0"
                                placeholder="Delivery Days"
                                oninput="this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null"
                              />
                              <span
                                class="text-danger"
                                v-if="errors['delivery_due_day']"
                              >
                                {{ errors["delivery_due_day"] }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="has-float-label">
                            <div class="form-group">
                              <label>{{ $t("payment_due_date") }}</label>
                              <input
                                type="date"
                                class="form-control"
                                id="payment_due_date"
                                @input="hijri($event)"
                                min=""
                                :value="date"
                                name="payment_due_date"
                              />
                              <span
                                class="text-danger"
                                v-if="errors['payment_due_date']"
                              >
                                {{ errors["payment_due_date"] }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="has-float-label">
                            <div class="form-group">
                              <label>{{ $t("payment_due_date_hijri") }}</label>
                              <input
                                type="text"
                                class="form-control"
                                :value="hijri_date"
                                id="payment_due_date_hijri"
                                name="payment_due_date_hijri"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label for="exampleSelectl">{{
                              $t("payment_method")
                            }}</label>
                            <select
                              class="form-control"
                              name="invoice_payment_method_id"
                            >
                              <option
                                class="form-control"
                                style="border-radius: 10px"
                                v-for="(
                                  paymentMethod, i
                                ) in invoice.paymentMethods"
                                :value="paymentMethod.id"
                                :key="i"
                              >
                                {{ paymentMethod.name }}
                              </option>
                            </select>
                            <span
                              class="text-danger"
                              v-if="errors['invoice_payment_method_id']"
                            >
                              {{ errors["invoice_payment_method_id"] }}
                            </span>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label for="exampleTextarea">{{
                              $t("acc.purchases")
                            }}</label>
                            <select
                              class="form-control"
                              name="purchase_account_id"
                            >
                              <option></option>
                              <option
                                class="form-control"
                                style="border-radius: 10px"
                                value=""
                              >
                                {{ $t("account_purchase_name") }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label for="exampleSelectl">{{
                              $t("provider_Acc")
                            }}</label>
                            <select
                              class="form-control"
                              name="provider_account_id"
                            >
                              <option></option>
                              <option
                                class="form-control"
                                style="border-radius: 10px"
                                value=""
                              >
                                {{ $t("account_providor_name") }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="has-float-label">
                            <div class="form-group">
                              <label>{{ $t("Period_Date_Calender") }}</label>
                              <input
                                type="date"
                                class="form-control"
                                id="period_date_calender"
                                @input="hijri($event)"
                                :value="date"
                                name="period_date_calender"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="has-float-label">
                            <div class="form-group">
                              <label>{{ $t("Period_Date_Calender_h") }}</label>
                              <input
                                type="text"
                                class="form-control"
                                id="period_date_calender_hijri"
                                :value="hijri_date"
                                name="period_date_calender_hijri"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="has-float-label">
                            <div class="form-group">
                              <label>{{ $t("period_Days") }}</label>
                              <input
                                type="number"
                                class="form-control"
                                value="0"
                                name="period_date"
                                min="0"
                                placeholder="period Days"
                                oninput="this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label for="exampleSelectl">{{
                              $t("currency")
                            }}</label>
                            <select
                              class="form-control"
                              name="currency_id"
                              v-model="invoiceCurrency"
                              @change="currencyChange"
                            >
                              <option class="form-control" disabled>
                                {{ $t("Choose") }}
                              </option>
                              <option
                                class="form-control"
                                style="border-radius: 10px"
                                v-for="(currency, i) in invoice.currencies"
                                :value="currency.id"
                                :key="i"
                              >
                                {{ currency.name }}
                              </option>
                            </select>
                            <span
                              class="text-danger"
                              v-if="errors['currency_id']"
                            >
                              {{ errors["currency_id"] }}
                            </span>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label for="exampleSelectl">
                              {{ $t("choose_converter_type") }}</label
                            >
                            <select
                              class="form-control"
                              name="converter_type"
                              v-model="marketOrGlobal"
                              @change="converter"
                            >
                              <option class="form-control" disabled>
                                {{ $t("Choose") }}
                              </option>
                              <option class="form-control" value="0">
                                {{ $t("Market_Rate") }}
                              </option>
                              <option class="form-control" value="1">
                                {{ $t("Global_Rate") }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="has-float-label">
                            <div class="form-group">
                              <label>{{ $t("selling_rate") }}</label>
                              <input
                                disabled
                                type="text"
                                class="form-control"
                                v-model="selling_rate"
                                name="selling_rate"
                                placeholder="selling rate"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label for="exampleTextarea">{{
                              $t("reference")
                            }}</label>
                            <select
                              class="form-control"
                              v-model="reference_setting_id"
                              name="invoice_setting_reference_id"
                              :disabled="!invoice_setting_id"
                              @change="getReferences"
                            >
                              <option>{{ $t("Choose") }}</option>
                              <option
                                class="form-control"
                                style="border-radius: 10px"
                                v-for="(
                                  referenceSetting, i
                                ) in invoice.referenceSettings"
                                :value="referenceSetting.id"
                                :key="i"
                              >
                                {{ referenceSetting.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label for="exampleTextarea">{{
                              $t("reference_NO")
                            }}</label>
                            <select
                              class="form-control"
                              v-model="reference_id"
                              name="reference_id"
                              :disabled="!invoice_setting_id"
                              @change="getReferenceDetails"
                            >
                              <option selected disabled>
                                {{ $t("reference_NO") }}
                              </option>
                              <option
                                class="form-control"
                                style="border-radius: 10px"
                                v-for="(reference, i) in references"
                                :value="reference.id"
                                :key="i"
                              >
                                {{ reference.prefix }}{{ reference.invoice_no }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="has-float-label">
                            <div class="form-group">
                              <label>{{ $t("reference_date") }} </label>
                              <input
                                type="date"
                                class="form-control"
                                id="reference_date"
                                v-model="referenceDetails.date"
                                placeholder="reference date"
                                value=""
                                name="reference_date"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label for="exampleTextarea">{{
                              $t("employees")
                            }}</label>
                            <select class="form-control" name="employee_id">
                              <option disabled>{{ $t("Choose") }}</option>
                              <option
                                class="form-control"
                                style="border-radius: 10px"
                                v-for="(employee, i) in invoice.employees"
                                :value="employee.id"
                                :key="i"
                              >
                                {{ employee.first_name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group has-float-label">
                            <label for="exampleTextarea">{{
                              $t("CostCenters")
                            }}</label>
                            <select class="form-control" name="cost_center_id">
                              <option
                                class="form-control"
                                style="border-radius: 10px"
                                v-for="(costCenter, i) in invoice.costCenters"
                                :value="costCenter.id"
                                :key="i"
                              >
                                {{ costCenter.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-8">
                          <div class="has-float-label">
                            <div class="form-group Statement-form">
                              <textarea
                                class="form-control"
                                name="note"
                                placeholder="Note"
                              ></textarea>
                              <label
                                for="exampleTextarea"
                                class="Statement-label"
                                >{{ $t("note") }}</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <customer-tab :vendors="invoice.vendors" :errors="errors" />
              <div
                class="tab-pane fade tab-product-main"
                id="pay-condition"
                role="tabpanel"
                aria-labelledby="pay-condition-tab"
              >
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent=".tab-pane"
                        href="#collapseThree"
                      >
                        <i class="flaticon2-contract"></i>
                        <span>{{ $t("pay_conditions") }} </span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapseThree" class="panel-collapse collapse">
                    <div class="panel-body">
                      <div
                        class="
                          datatable
                          datatable-bordered
                          datatable-head-custom
                          datatable-default
                          datatable-primary
                          datatable-loaded
                          table-price0
                        "
                        id="kt_datatable_2"
                        style=""
                      >
                        <table class="datatable-table table table-bordered">
                          <thead class="datatable-head">
                            <tr class="datatable-row" style="left: 0px">
                              <th class="datatable-cell-center datatable-cell">
                                <span style="">#</span>
                              </th>
                              <th class="datatable-cell">
                                <span style="">{{ $t("amount") }}</span>
                              </th>
                              <th class="datatable-cell">
                                <span style="">{{ $t("rate") }}</span>
                              </th>
                              <th class="datatable-cell">
                                <span style="">{{ $t("date") }}</span>
                              </th>
                              <th class="datatable-cell">
                                <span style="">{{ $t("notes") }}</span>
                              </th>
                              <th class="datatable-cell">
                                <span style="">{{ $t("mark") }}</span>
                              </th>
                              <th class="datatable-cell">
                                <span style=""></span>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="datatable-body">
                            <tr class="datatable-row datatable-row-even">
                              <td class="datatable-cell-center datatable-cell">
                                1
                              </td>
                              <td class="datatable-cell">
                                <input type="number" class="form-control" />
                              </td>
                              <td class="datatable-cell">
                                <input type="text" class="form-control" />
                              </td>
                              <td class="datatable-cell">
                                <input type="text" class="form-control" />
                              </td>
                              <td class="datatable-cell">
                                <input type="date" class="form-control" />
                              </td>
                              <td class="datatable-cell">
                                <input type="text" class="form-control" />
                              </td>
                              <td class="datatable-cell">
                                <button
                                  type="button"
                                  onclick="$('#option-value-row0').remove();"
                                  data-toggle="tooltip"
                                  title="Remove"
                                  class="btn btn-light-danger font-weight-bold"
                                >
                                  <i class="fa fa-minus-circle"></i>
                                </button>
                              </td>
                            </tr>
                            <tr class="datatable-row datatable-row-odd">
                              <td class="datatable-cell-center datatable-cell">
                                2
                              </td>
                              <td class="datatable-cell">
                                <input type="text" class="form-control" />
                              </td>
                              <td class="datatable-cell">
                                <input type="text" class="form-control" />
                              </td>
                              <td class="datatable-cell">
                                <input type="text" class="form-control" />
                              </td>
                              <td class="datatable-cell">
                                <input type="text" class="form-control" />
                              </td>
                              <td class="datatable-cell">
                                <input type="text" class="form-control" />
                              </td>
                              <td class="datatable-cell">
                                <button
                                  type="button"
                                  title=""
                                  class="
                                    btn btn-light-primary
                                    font-weight-bold
                                    mr-2
                                    btn-option
                                  "
                                >
                                  <i class="fa fa-plus-circle"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade tab-product-main"
                id="notes-info"
                role="tabpanel"
                aria-labelledby="notes-tab"
              >
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent=".tab-pane"
                        href="#collapseFour"
                      >
                        <i class="flaticon2-tag"></i>
                        <span>{{ $t("notes") }}</span>
                      </a>
                    </h4>
                  </div>

                  <div id="collapseFour" class="panel-collapse collapse">
                    <div class="panel-body">
                      <div class="row">
                        <div
                          class="has-float-label col-md-12 col-12"
                          id="locale-general"
                          role="tabpanel"
                          aria-labelledby="locale-tab"
                        >
                          <div class="form-group">
                            <textarea
                              type="text"
                              class="form-control"
                              id="Textarea0"
                              rows="2"
                              name="description"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end::Form-->
        </div>
      </div>
      <div class="card card-custom mb-8">
        <div class="card-header flex-wrap border-0 pb-0 d-block">
          <!--begin: Datatable-->
          <div
            class="
              datatable
              datatable-bordered
              datatable-head-custom
              datatable-default
              datatable-primary
              datatable-loaded
              table-product
              p-4
            "
            id="kt_datatable_2"
            style=""
          >
            <table class="datatable-table table table-bordered">
              <thead class="datatable-head">
                <tr class="datatable-row" style="left: 0px">
                  <th data-field="" class="datatable-cell end-cell">
                    <span style=""></span>
                  </th>
                  <th data-field="name" class="datatable-cell">
                    <span style="">{{ $t("Product_Name") }}</span>
                  </th>
                  <th data-field="hire_date" class="datatable-cell">
                    <span style="">{{ $t("unit") }}</span>
                  </th>
                  <th data-field="employee_id" class="datatable-cell">
                    <span style="">{{ $t("price") }}</span>
                  </th>
                  <th data-field="gender" class="datatable-cell">
                    <span style="">{{ $t("quantity") }}</span>
                  </th>
                  <th data-field="name" class="datatable-cell">
                    <span style="">{{ $t("Total_without_tax") }}</span>
                  </th>
                  <th data-field="hire_date" class="datatable-cell">
                    <span style="">{{ $t("tax_rate") }}</span>
                  </th>
                  <th data-field="total" class="datatable-cell">
                    <span style="">{{ $t("total") }}</span>
                  </th>
                  <th data-field="discount" class="datatable-cell">
                    <span style="">{{ $("discount") }}</span>
                  </th>
                  <th data-field="discount-percentage" class="datatable-cell">
                    <span style="">{{ $t("discount") }} (%)</span>
                  </th>
                  <th data-field="addition" class="datatable-cell">
                    <span style="">{{ $t("addition") }}</span>
                  </th>
                  <th data-field="addition_percentage" class="datatable-cell">
                    <span style="">{{ $t("addition") }} (%)</span>
                  </th>
                  <th data-field="notes" class="datatable-cell">
                    <span style="">{{ $t("notes") }}</span>
                  </th>
                </tr>
              </thead>
              <tbody class="datatable-body">
                <tr
                  v-for="(tr, index) in referenceProductRows"
                  :key="tr.id"
                  v-if="
                    referenceDetails.products &&
                    referenceDetails.products[index]
                  "
                  :class="
                    'datatable-row datatable-row-even productRow_' +
                    parseInt(index)
                  "
                  style="left: 0px"
                >
                  <td class="text-center end-td">
                    <button
                      type="button"
                      data-toggle="tooltip"
                      title="Remove"
                      @click="removeReferenceProduct(index)"
                      class="btn btn-danger btn-option"
                    >
                      <i class="fa fa-minus-circle"></i>
                    </button>
                  </td>
                  <td class="datatable-cell">
                    <span>
                      <select
                        class="form-control productRow products-options"
                        :id="'rp_' + index"
                        :name="'products[' + index + '][product_id]'"
                        @change="productChange($event, index)"
                      >
                        <option
                          label="Choose Product"
                          disabledn
                          selected
                        ></option>
                        <option
                          class="form-control"
                          style="border-radius: 10px"
                          v-for="(product, i) in invoice.products"
                          :key="i"
                          :value="product.id"
                          :selected="
                            referenceDetails.products[index].product_id ==
                            product.id
                          "
                        >
                          {{ product.name }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="datatable-cell">
                    <select
                      class="form-control products-options"
                      :name="'products[' + index + '][unit]'"
                    >
                      <option label="Choose Product Unit" disabled></option>
                      <option
                        class="form-control"
                        style="border-radius: 10px"
                        v-for="(unit, i) in referenceUnits[parseInt(index)]"
                        :key="i"
                        :value="unit.id"
                        :selected="referenceUnits[index].id == unit.id"
                      >
                        {{ unit.name }}
                      </option>
                    </select>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        max="10000000"
                        :name="'products[' + index + '][price]'"
                        :class="'form-control productPrice_' + index"
                        @change="priceChange(index)"
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        max="10000000"
                        :name="'products[' + index + '][quantity]'"
                        :class="'form-control productQuantity_' + index"
                        @change="quantityChange(index)"
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        max="10000000"
                        :name="'products[' + index + '][total_before_tax]'"
                        :class="
                          'form-control productTotalBeforeTax totalBeforeTax_' +
                          index
                        "
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        max="100"
                        :name="'products[' + index + '][tax_value]'"
                        :class="'form-control productTax_' + index"
                        @change="taxChange(index)"
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        :name="'products[' + index + '][total]'"
                        :class="
                          'form-control productTotal productTotal_' + index
                        "
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        :name="'products[' + index + '][discount]'"
                        :class="'form-control productDiscount_' + index"
                        @change="discountChange(index)"
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        max="100"
                        :name="'products[' + index + '][discount_percentage]'"
                        :class="
                          'form-control productDiscountPercentage_' + index
                        "
                        @change="discountPercentageChange(index)"
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        :name="'products[' + index + '][addition]'"
                        :class="'form-control productAddition_' + index"
                        @change="additionChange(index)"
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        max="100"
                        :name="'products[' + index + '][addition_percentage]'"
                        :class="
                          'form-control productAdditionPercentage_' + index
                        "
                        @change="additionPercentageChange(index)"
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="text"
                        :name="'products[' + index + '][note]'"
                        :class="'form-control productNote_' + index"
                    /></span>
                  </td>
                </tr>
                <tr
                  v-for="(tr, index) in productRows"
                  :key="tr.id + reference_product_row_offset"
                  :class="
                    'datatable-row datatable-row-even productRow_' +
                    parseInt(index + reference_product_row_offset)
                  "
                  style="left: 0px"
                >
                  <td class="text-center end-td">
                    <button
                      type="button"
                      data-toggle="tooltip"
                      title="Remove"
                      @click="removeProduct(parseInt(index))"
                      class="btn btn-danger btn-option"
                    >
                      <i class="fa fa-minus-circle"></i>
                    </button>
                  </td>
                  <td class="datatable-cell">
                    <span>
                      <select
                        class="form-control products-options"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][product_id]'
                        "
                        @change="
                          productChange(
                            $event,
                            index + reference_product_row_offset
                          )
                        "
                      >
                        <option
                          label="Choose Product"
                          disabledn
                          selected
                        ></option>
                        <option
                          class="form-control"
                          style="border-radius: 10px"
                          v-for="(product, i) in invoice.products"
                          :key="i"
                          :value="product.id"
                        >
                          {{ product.name }}
                        </option>
                      </select>
                    </span>
                  </td>
                  <td class="datatable-cell">
                    <select
                      class="form-control products-options"
                      :name="
                        'products[' +
                        parseInt(index + reference_product_row_offset) +
                        '][unit]'
                      "
                    >
                      <option label="Choose Product Unit" disabled></option>
                      <option
                        class="form-control"
                        style="border-radius: 10px"
                        v-for="(unit, i) in productUnits[
                          parseInt(index + reference_product_row_offset)
                        ]"
                        :value="unit.id"
                        :key="i"
                      >
                        {{ unit.name }}
                      </option>
                    </select>
                  </td>
                  <td class="datatable-cell">
                    <span>
                      <input
                        type="number"
                        min="0"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][price]'
                        "
                        :class="
                          'form-control productPrice_' +
                          parseInt(index + reference_product_row_offset)
                        "
                        @change="
                          priceChange(index + reference_product_row_offset)
                        "
                      />
                    </span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][quantity]'
                        "
                        :class="
                          'form-control productQuantity_' +
                          parseInt(index + reference_product_row_offset)
                        "
                        @change="
                          quantityChange(index + reference_product_row_offset)
                        "
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][total_before_tax]'
                        "
                        :class="
                          'form-control productTotalBeforeTax totalBeforeTax_' +
                          parseInt(index + reference_product_row_offset)
                        "
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][tax_value]'
                        "
                        :class="
                          'form-control productTax_' +
                          parseInt(index + reference_product_row_offset)
                        "
                        @change="
                          taxChange(index + reference_product_row_offset)
                        "
                    /></span>
                    <!--  <span><input type="text" name="tax_value[]" :class="'form-control productTax_' + index" :value="productDetails.tax"></span>-->
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][total]'
                        "
                        :class="
                          'form-control productTotal productTotal_' +
                          parseInt(index + reference_product_row_offset)
                        "
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][discount]'
                        "
                        :class="
                          'form-control productDiscount_' +
                          parseInt(index + reference_product_row_offset)
                        "
                        @change="
                          discountChange(index + reference_product_row_offset)
                        "
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][discount_percentage]'
                        "
                        :class="
                          'form-control productDiscountPercentage_' +
                          parseInt(index + reference_product_row_offset)
                        "
                        @change="
                          discountPercentageChange(
                            index + reference_product_row_offset
                          )
                        "
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][addition]'
                        "
                        :class="
                          'form-control productAddition_' +
                          parseInt(index + reference_product_row_offset)
                        "
                        @change="
                          additionChange(index + reference_product_row_offset)
                        "
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="number"
                        min="0"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][addition_percentage]'
                        "
                        :class="
                          'form-control productAdditionPercentage_' +
                          parseInt(index + reference_product_row_offset)
                        "
                        @change="
                          additionPercentageChange(
                            index + reference_product_row_offset
                          )
                        "
                    /></span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="text"
                        :name="
                          'products[' +
                          parseInt(index + reference_product_row_offset) +
                          '][notes]'
                        "
                        :class="
                          'form-control productNote_' +
                          parseInt(index + reference_product_row_offset)
                        "
                    /></span>
                  </td>
                </tr>
                <tr class="datatable-row datatable-row-even" style="left: 0px">
                  <td class="text-center end-td">
                    <button
                      type="button"
                      title="Add"
                      class="btn btn-primary btn-option"
                      @click="addNewProduct"
                    >
                      <i class="fa fa-plus-circle"></i>
                    </button>
                  </td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                  <td class="datatable-cell"><span></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--end: Datatable-->
        </div>
      </div>
      <div class="card card-custom mb-lg-40">
        <div class="card-header flex-wrap border-0 pb-0 d-block">
          <div
            class="
              datatable
              datatable-bordered
              datatable-head-custom
              datatable-default
              datatable-primary
              datatable-loaded
              table-price0
            "
            id="kt_datatable_2"
            style=""
          >
            <table class="datatable-table table table-bordered">
              <thead class="datatable-head">
                <tr class="datatable-row" style="left: 0px">
                  <th class="datatable-cell-center datatable-cell">
                    <span style=""
                      ><label class="">&nbsp;<span>#</span></label></span
                    >
                  </th>
                  <th class="datatable-cell"><span style=""></span></th>
                  <th class="datatable-cell">
                    <span style="">{{ $t("discount") }}</span>
                  </th>
                  <th class="datatable-cell">
                    <span style="">{{ $t("discount") }} %</span>
                  </th>
                  <th class="datatable-cell">
                    <span style=""> {{ $t("addition") }}</span>
                  </th>
                  <th class="datatable-cell">
                    <span style=""> {{ $t("addition") }} %</span>
                  </th>
                  <th class="datatable-cell">
                    <span style=""> {{ $t("notes") }}</span>
                  </th>
                </tr>
              </thead>
              <tbody class="datatable-body">
                <tr
                  v-for="(tr, index) in discountAdditionRows"
                  :key="tr.id"
                  class="datatable-row datatable-row-even"
                >
                  <td class="datatable-cell text-center"></td>
                  <td class="datatable-cell">
                    <button
                      type="button"
                      data-toggle="tooltip"
                      title="Remove"
                      class="btn btn-light-danger font-weight-bold"
                      @click="removeDiscountAdditionRow(index)"
                    >
                      <i class="fa fa-minus-circle"></i>
                    </button>
                  </td>
                  <td class="datatable-cell">
                    <input
                      type="text"
                      min="0"
                      max="10000000"
                      :name="
                        'invoice_discount_addition[' + index + '][discount]'
                      "
                      :class="
                        'form-control invoiceDiscount invoiceDiscount_' + index
                      "
                      @change="invoiceDiscountChange(index)"
                    />
                  </td>
                  <td class="datatable-cell">
                    <input
                      type="text"
                      min="0"
                      max="100"
                      :name="
                        'invoice_discount_addition[' +
                        index +
                        '][discount_percentage]'
                      "
                      :class="
                        'form-control invoiceDiscountPercentage invoiceDiscountPercentage_' +
                        index
                      "
                      @change="invoiceDiscountPercentageChange(index)"
                    />
                  </td>
                  <td class="datatable-cell">
                    <input
                      type="text"
                      min="0"
                      max="10000000"
                      :name="
                        'invoice_discount_addition[' + index + '][addition]'
                      "
                      :class="
                        'form-control invoiceAddition invoiceAddition_' + index
                      "
                      @change="invoiceAdditionChange(index)"
                    />
                  </td>
                  <td class="datatable-cell">
                    <input
                      type="text"
                      min="0"
                      max="100"
                      :name="
                        'invoice_discount_addition[' +
                        index +
                        '][addition_percentage]'
                      "
                      :class="
                        'form-control invoiceAdditionPercentage invoiceAdditionPercentage_' +
                        index
                      "
                      @change="invoiceAdditionPercentageChange(index)"
                    />
                  </td>
                  <td class="datatable-cell">
                    <input
                      type="text"
                      min="0"
                      :name="'invoice_discount_addition[' + index + '][note]'"
                      class="form-control"
                    />
                  </td>
                </tr>
                <tr class="datatable-row datatable-row-odd">
                  <td class="datatable-cell text-center"></td>
                  <td class="datatable-cell">
                    <button
                      type="button"
                      title="add new row"
                      class="
                        btn btn-light-primary
                        font-weight-bold
                        mr-2
                        btn-option
                      "
                      @click="addDiscountAdditionRow"
                    >
                      <i class="fa fa-plus-circle"></i>
                    </button>
                  </td>
                  <td class="datatable-cell"></td>
                  <td class="datatable-cell"></td>
                  <td class="datatable-cell"></td>
                  <td class="datatable-cell"></td>
                  <td class="datatable-cell"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!--begin: Datatable-->
          <div class="total-table p-1">
            <table class="datatable-table table table-bordered mb-0">
              <tbody class="datatable-body">
                <tr class="datatable-row datatable-row-even" style="left: 0px">
                  <td class="datatable-cell font-weight-boldest">
                    <span> {{ $t("Total_before_tax") }}</span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="text"
                        class="form-control"
                        name="total_before_tax"
                        v-model="invoiceTotalBeforeTax"
                    /></span>
                  </td>
                </tr>
                <tr class="datatable-row datatable-row-even" style="left: 0px">
                  <td class="datatable-cell font-weight-boldest">
                    <span> {{ $t("Total_after_discount_addition") }}</span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="text"
                        class="form-control"
                        name="total_after_discount_addition"
                        v-model="invoiceTotalAfterDA"
                    /></span>
                  </td>
                </tr>
                <tr class="datatable-row datatable-row-even" style="left: 0px">
                  <td class="datatable-cell font-weight-boldest">
                    <span>{{ "tax" }}</span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="text"
                        class="form-control invoice_tax0"
                        name="invoice_tax"
                        :value="
                          this.selectedInvoiceSetting.invoice_tax
                            ? this.selectedInvoiceSetting.invoice_tax
                            : 0
                        "
                        readonly
                      /><strong> %</strong></span
                    >
                  </td>
                </tr>
                <tr class="datatable-row datatable-row-even" style="left: 0px">
                  <td class="datatable-cell font-weight-boldest">
                    <span>{{ $t("total") }}</span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="text"
                        class="form-control"
                        name="total"
                        v-model="invoiceTotal"
                    /></span>
                  </td>
                </tr>
                <tr class="datatable-row datatable-row-even" style="left: 0px">
                  <td class="datatable-cell font-weight-boldest">
                    <span>{{ $t("paid") }}</span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="text"
                        class="form-control"
                        name="paid"
                        v-model="invoicePaid"
                        @change="invoicePaidChange"
                    /></span>
                  </td>
                </tr>
                <tr class="datatable-row datatable-row-even" style="left: 0px">
                  <td class="datatable-cell font-weight-boldest">
                    <span>{{ $t("Remaining_Amount") }}</span>
                  </td>
                  <td class="datatable-cell">
                    <span
                      ><input
                        type="text"
                        class="form-control"
                        name="remaining_amount"
                        v-model="remainingAmount"
                    /></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--end: Datatable-->

          <div
            class="accordion accordion-toggle-arrow mt-3"
            id="invoice-collapse-last"
          >
            <div class="card">
              <div class="card-header">
                <div
                  class="card-title collapsed"
                  data-toggle="collapse"
                  data-target="#collapseOne6"
                  aria-expanded="false"
                >
                  <span class="svg-icon svg-icon-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                        <path
                          d="M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z"
                          fill="#000000"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z"
                          fill="#000000"
                          fill-rule="nonzero"
                          opacity="0.3"
                          transform="translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) "
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div
                id="collapseOne6"
                class="collapse"
                data-parent="#invoice-collapse-last"
                style=""
              >
                <div class="d-flex">
                  <div class="col-md-20">
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="otal befor discount"
                        />
                        <label>{{ $t("total_befor_discount") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="less sale price"
                        />
                        <label>{{ $t("less_sale_price") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="total before tax"
                        />
                        <label>{{ $t("total_befor_tax") }}</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-20">
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="last price"
                        />
                        <label>{{ $t("last_price") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="less price"
                        />
                        <label> {{ $t("less_price") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="add tax"
                        />
                        <label>{{ $t("add_tax") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="luxury tax"
                        />
                        <label>{{ $t("luxury_tax") }}</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-20">
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="total Qty"
                        />
                        <label>{{ $t("total_Qty") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="current Qty"
                        />
                        <label>{{ $t("current_Qty") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder=" Actual_quantities"
                        />
                        <label>{{ $t("Actual_quantities") }} </label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder=" total_count"
                        />
                        <label> {{ $t("total_count") }}</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-20">
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="cost price"
                        />
                        <label>{{ $t("cost_price") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="store cost"
                        />
                        <label>{{ $t("store_cost") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="bill cost"
                        />
                        <label>{{ $t("bill_cost") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder=" Profit_Ratio"
                        />
                        <label> {{ $t("Profit_Ratio") }}</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-20">
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="count"
                        />
                        <label>{{ $t("count") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="otal repeated"
                        />
                        <label>{{ $t("total_repeated") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="profits"
                        />
                        <label>{{ $t("profits") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="bill profit"
                        />
                        <label>{{ $t("bill_profit") }}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import CustomerTab from "./customerTab.vue";
export default {
  name: "purchase.create",
  components: {
    LangTabs,
    Inputs,
    CustomerTab,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      languages: window.languages,
      pageUrl: "invoice/2",
      invoice_setting_id: "",
      reference_setting_id: "",
      selectedInvoiceSetting: {},
      invoiceTax: 0,
      // selectedReferenceSetting: {},
      invoiceCurrency: "",
      marketOrGlobal: "",
      selling_rate: 0.0,
      references: "",
      reference_id: "",
      referenceDetails: "",
      gridClassName: "product_list",
      // products
      productRows: [{ id: "", price: "" }],
      product_row_offset: 1,
      // reference products
      referenceProductRows: [{ id: "" }],
      reference_product_row_offset: 1,
      product_id: "",
      productDetails: "",
      productUnits: [],
      referenceUnits: [],
      invoiceTotalBeforeTax: 0,
      invoiceTotalAfterDA: 0,
      invoiceTotal: 0,
      invoicePaid: 0,
      remainingAmount: 0,
      // discountAdditionRows
      discountAdditionRows: [
        {
          id: "",
        },
      ],
      discount_addition_rows: 1,
      isDiscountAddition: false,
      date: "",
      hijri_date: "",
    };
  },
  created() {
    this.createInvoice();
    this.initDates();
    this.initDateHijri();
  },
  computed: {
    invoice() {
      return this.$store.getters.getInvoice;
    },
  },
  methods: {
    checkProductExists() {
      if (
        !$(".products-options").length ||
        $(".products-options").val() == ""
      ) {
        Swal.fire("Product empty!", "Please add at least one product", "error");
        return false;
      }
      return true;
    },
    async newInvoice() {
      try {
        if (!this.checkProductExists()) return;
        var form = document.getElementById("invoice_form");
        var formData = new FormData(form);
        const invoice = {
          URL: this.pageUrl,
          data: formData,
        };
        await this.$store.dispatch("storeInvoice", invoice);
      } catch (errors) {
        this.errors = errors;
      }
    },
    async createInvoice() {
      const invoiceUrl = {
        URL: this.pageUrl + "/create",
      };
      const invoice = await this.$store.dispatch("createInvoice", invoiceUrl);
    },
    async getInvoiceSettingDetails() {
      this.selectedInvoiceSetting = await this.$store.dispatch(
        "showInvoiceSetting",
        {
          data: this.invoice_setting_id,
        }
      );
      // console.log(this.selectedInvoiceSetting);
      if (this.invoiceTotalBeforeTax) this.calculateInvoiceTotal();
      this.invoicePaidChange();
    },
    async getReferences() {
      this.references = await this.$store.dispatch("getInvoiceBySetting", {
        data: this.reference_setting_id,
      });
      this.referenceProductRows = [];
    },
    async getReferenceDetails() {
      this.referenceDetails = await this.$store.dispatch("getInvoiceDetails", {
        URL: this.pageUrl,
        data: this.reference_id,
      });
      this.reference_product_row_offset = 1;
      // console.log(this.referenceDetails.products[0]);
      this.referenceDetails.products.map(
        (product) => (
          this.referenceProductRows.push({
            id: this.reference_product_row_offset,
            price: product.price,
          }),
          this.reference_product_row_offset++
        )
      );
      this.referenceProductChange();
      this.productRows = [];
      // this.productRows = this.referenceDetails.products.length;
      // console.log(this.productRows);
      // console.log(this.referenceDetails.products);
    },
    referenceProductChange() {
      for (let i = 0; i < this.reference_product_row_offset - 1; i++) {
        this.productChange(
          this.referenceDetails.products[i].product_id,
          i,
          this.referenceDetails.products[i]
        );
      }
    },
    async converter() {
      let convertUrl = "";
      parseInt(this.marketOrGlobal)
        ? (convertUrl = "currency_converter/today")
        : (convertUrl = "market_converter/today");
      $axios
        .get(convertUrl, {
          params: {
            currency_to: this.invoiceCurrency,
          },
        })
        .then((response) => {
          parseInt(this.marketOrGlobal)
            ? (this.selling_rate = response.data.data)
            : (this.selling_rate = response.data.data.selling_rate);
          // console.log(this.selling_rate);
        })
        .catch((error) => {
          // console.log(error)
        });
    },
    currencyChange() {
      if (this.marketOrGlobal) this.converter();
    },
    // Products
    init(index) {
      let productTotal = this.calculateProduct(index);
      $(".totalBeforeTax_" + index).val(productTotal);
      let productTotalAfterDiscountAddition =
        this.calculateProductAfterDiscountAddition(index, productTotal);
      $(".productTotal_" + index).val(
        this.calculateProductTotalAfterTax(
          index,
          productTotalAfterDiscountAddition
        )
      );

      var eleClassName = ["product", "invoice"];
      eleClassName.forEach((item, i) => {
        if (
          $("." + item + "Discount_" + index).val() ||
          $("." + item + "DiscountPercentage_" + index).val()
        ) {
          $("." + item + "Addition_" + index).prop("disabled", true);
          $("." + item + "AdditionPercentage_" + index).prop("disabled", true);
        } else {
          $("." + item + "Addition_" + index).prop("disabled", false);
          $("." + item + "AdditionPercentage_" + index).prop("disabled", false);
        }
        if (
          $("." + item + "Addition_" + index).val() ||
          $("." + item + "AdditionPercentage_" + index).val()
        ) {
          $("." + item + "Discount_" + index).prop("disabled", true);
          $("." + item + "DiscountPercentage_" + index).prop("disabled", true);
        } else {
          $("." + item + "Discount_" + index).prop("disabled", false);
          $("." + item + "DiscountPercentage_" + index).prop("disabled", false);
        }
      });
      // product discount addition
      // if ($('.productDiscount_' + index).val() || $('.productDiscountPercentage_' + index).val()) {
      //     $('.productAddition_' + index).prop('disabled', true);
      //     $('.productAdditionPercentage_' + index).prop('disabled', true);
      // } else {
      //     $('.productAddition_' + index).prop('disabled', false);
      //     $('.productAdditionPercentage_' + index).prop('disabled', false);
      // }
      // if ($('.productAddition_' + index).val() || $('.productAdditionPercentage_' + index).val()) {
      //     $('.productDiscount_' + index).prop('disabled', true);
      //     $('.productDiscountPercentage_' + index).prop('disabled', true);
      // } else {
      //     $('.productDiscount_' + index).prop('disabled', false);
      //     $('.productDiscountPercentage_' + index).prop('disabled', false);
      // }
      //
      // // invoice discount addition
      // if ($('.invoiceDiscount_' + index).val() || $('.invoiceDiscountPercentage_' + index).val()) {
      //     $('.invoiceAddition_' + index).prop('disabled', true);
      //     $('.invoiceAdditionPercentage_' + index).prop('disabled', true);
      //  } else {
      //     $('.invoiceAddition_' + index).prop('disabled', false);
      //     $('.invoiceAdditionPercentage_' + index).prop('disabled', false);
      // }
      // if ($('.invoiceAddition_' + index).val() || $('.invoiceAdditionPercentage_' + index).val()) {
      //     $('.invoiceDiscount_' + index).prop('disabled', true);
      //     $('.invoiceDiscountPercentage_' + index).prop('disabled', true);
      // } else {
      //     $('.invoiceDiscount_' + index).prop('disabled', false);
      //     $('.invoiceDiscountPercentage_' + index).prop('disabled', false);
      // }

      this.calculateInvoiceTotalBeforeTax();
      this.calculateInvoiceAfterDiscountAddition();
      this.calculateInvoiceTotal();
      this.invoicePaidChange();
    },
    async productChange(e, index, product = null) {
      // console.log(typeof(e));
      this.product_id = typeof e == "object" ? e.target.value : e;
      this.productDetails = await this.$store.dispatch("getProductById", {
        data: this.product_id,
      });

      if (typeof e == "object") {
        $(".productPrice_" + index).val(this.productDetails.price);
        $(".productTax_" + index).val(this.productDetails.total_tax);
        this.productUnits[index] = this.productDetails.units;
        this.$forceUpdate();
      } else {
        $(".productPrice_" + index).val(product.price);
        $(".productQuantity_" + index).val(product.quantity);
        $(".productTax_" + index).val(product.tax_value);
        // this.referenceUnits.push({ units: product.units });
        this.referenceUnits[index] = this.productDetails.units;
      }
      if (
        $(".productPrice_" + index).val() ||
        $(".productQuantity_" + index).val()
      ) {
        this.init(index);
      }
    },
    addNewProduct() {
      // let newRow = document.getElementById('product_row_0').cloneNode(true);
      // let newRow = $('.product_row_0').clone(true).removeClass('product_row_0').addClass('product_row_' + this.row_no);
      // $('.datatable-body.products tr:last').before(newRow);
      // this.row_no++;
      this.productRows.push({
        id: this.product_row_offset,
      });
      this.product_row_offset++;
    },
    removeProduct(index) {
      index = index + this.reference_product_row_offset;
      // if (this.productRows.length !== 1) {
      this.productRows.splice(index, 1);
      $(".productRow_" + index).remove();
      this.init(index);
      // }
    },
    removeReferenceProduct(index) {
      // if (this.referenceProductRows.length !== 1) {
      this.referenceProductRows.splice(index, 1);
      $(".productRow_" + index).remove();
      this.init(index);
      // }
    },
    priceChange(index) {
      if ($(".productQuantity_" + index).val()) {
        this.init(index);
      }
    },
    quantityChange(index) {
      if ($(".productPrice_" + index).val()) {
        this.init(index);
      }
    },
    taxChange(index) {
      if (
        $(".productPrice_" + index).val() ||
        $(".productQuantity_" + index).val()
      ) {
        this.init(index);
      }
    },
    // product discount addition
    discountChange(index) {
      $(".productDiscountPercentage_" + index).val("");
      this.init(index);
    },
    discountPercentageChange(index) {
      $(".productDiscount_" + index).val("");
      this.init(index);
    },
    additionChange(index) {
      $(".productAdditionPercentage_" + index).val("");
      this.init(index);
    },
    additionPercentageChange(index) {
      $(".productAddition_" + index).val("");
      this.init(index);
    },
    // end product discount addition

    // invoice discount addition
    invoiceDiscountChange(index) {
      $(".invoiceDiscountPercentage_" + index).val("");
      this.init(index);
    },
    invoiceDiscountPercentageChange(index) {
      $(".invoiceDiscount_" + index).val("");
      this.init(index);
    },
    invoiceAdditionChange(index) {
      $(".invoiceAdditionPercentage_" + index).val("");
      this.init(index);
    },
    invoiceAdditionPercentageChange(index) {
      $(".invoiceAddition_" + index).val("");
      this.init(index);
    },
    // end invoice discount addition
    calculateProduct(index) {
      let price = $(".productPrice_" + index).val();
      let quantity = $(".productQuantity_" + index).val();
      return price * quantity;
    },
    calculateProductAfterDiscountAddition(index, productTotal) {
      let discount = parseFloat($(".productDiscount_" + index).val());
      let discountPercentage = parseFloat(
        $(".productDiscountPercentage_" + index).val()
      );
      let addition = parseFloat($(".productAddition_" + index).val());
      let additionPercentage = parseFloat(
        $(".productAdditionPercentage_" + index).val()
      );
      if (discount || discountPercentage || addition || additionPercentage) {
        if (discount || discountPercentage) {
          addition = additionPercentage = 0;
          if (discount) {
            discountPercentage = (discount / productTotal) * 100;
            $(".productDiscountPercentage_" + index).val(discountPercentage);
          } else {
            discount = (discountPercentage * productTotal) / 100;
            $(".productDiscount_" + index).val(discount);
          }
          return productTotal - discount;
        } else if (addition || additionPercentage) {
          discount = discountPercentage = 0;
          if (addition) {
            additionPercentage = (addition / productTotal) * 100;
            $(".productAdditionPercentage_" + index).val(additionPercentage);
          } else {
            addition = (additionPercentage * productTotal) / 100;
            $(".productAddition_" + index).val(addition);
          }
        }
        return productTotal + addition;
      }
      return productTotal;
    },
    calculateProductTotalAfterTax(index, total) {
      let tax = 0;
      if (this.selectedInvoiceSetting.is_taxed)
        tax = this.selectedInvoiceSetting.tax_on_line
          ? $(".productTax_" + index).val()
          : 0;
      return total + total * (tax / 100);
    },
    calculateInvoiceTotalBeforeTax() {
      let total = 0;
      $(".productTotal").each(function () {
        total += isNaN(parseFloat($(this).val()))
          ? 0
          : parseFloat($(this).val());
      });
      this.invoiceTotalBeforeTax = total;
    },
    calculateInvoiceAfterDiscountAddition() {
      var totalBeforeTax = this.invoiceTotalBeforeTax;
      var totalBeforeTax_ = this.invoiceTotalBeforeTax;

      $(".invoiceDiscount").each(function (index) {
        let discount = isNaN(parseFloat($(".invoiceDiscount_" + index).val()))
          ? 0
          : parseFloat($(".invoiceDiscount_" + index).val());
        let discountPercentage = isNaN(
          parseFloat($(".invoiceDiscountPercentage_" + index).val())
        )
          ? 0
          : parseFloat($(".invoiceDiscountPercentage_" + index).val());
        let addition = isNaN(parseFloat($(".invoiceAddition_" + index).val()))
          ? 0
          : parseFloat($(".invoiceAddition_" + index).val());
        let additionPercentage = isNaN(
          parseFloat($(".invoiceAdditionPercentage_" + index).val())
        )
          ? 0
          : parseFloat($(".invoiceAdditionPercentage_" + index).val());
        if (discount || discountPercentage || addition || additionPercentage) {
          if (discount || discountPercentage) {
            addition = additionPercentage = 0;
            if (discount) {
              discountPercentage = (discount / totalBeforeTax_) * 100;
              $(".invoiceDiscountPercentage_" + index).val(discountPercentage);
            } else {
              discount = (discountPercentage * totalBeforeTax_) / 100;
              $(".invoiceDiscount_" + index).val(discount);
            }
            totalBeforeTax = totalBeforeTax - discount;
          } else if (addition || additionPercentage) {
            discount = discountPercentage = 0;
            if (addition) {
              additionPercentage = (addition / totalBeforeTax_) * 100;
              $(".invoiceAdditionPercentage_" + index).val(additionPercentage);
            } else {
              addition = (additionPercentage * totalBeforeTax_) / 100;
              $(".invoiceAddition_" + index).val(addition);
            }
          }
          totalBeforeTax = totalBeforeTax + addition;
        }
      });
      this.invoiceTotalAfterDA = totalBeforeTax;
    },
    calculateInvoiceTotal() {
      let tax = 0;
      if (this.selectedInvoiceSetting.is_taxed)
        tax = !this.selectedInvoiceSetting.tax_on_line
          ? this.selectedInvoiceSetting.invoice_tax
          : 0;
      this.invoiceTotal =
        this.invoiceTotalAfterDA + this.invoiceTotalAfterDA * (tax / 100);
    },
    invoicePaidChange() {
      this.remainingAmount = this.invoiceTotal - this.invoicePaid;
    },
    addDiscountAdditionRow() {
      this.discountAdditionRows.push({
        id: this.discount_addition_rows,
      });
      this.discount_addition_rows++;
    },
    removeDiscountAdditionRow(index) {
      if (this.discountAdditionRows.length !== 1) {
        this.discountAdditionRows.splice(index, 1);
        setTimeout(
          function () {
            this.calculateInvoiceAfterDiscountAddition();
          }.bind(this),
          1
        );
      }
    },
    // UI
    changeBt() {
      this.active = this.active == true ? false : true;
    },
    changeGrid(event) {
      this.gridClassName = event;
    },
    initDates() {
      let d = new Date();
      var DateYear = d.getFullYear();
      var DateMonth = ("0" + (d.getMonth() + 1)).slice(-2);
      var DateDay = ("0" + d.getDate()).slice(-2);
      this.date = DateYear + "-" + DateMonth + "-" + DateDay;
    },
    initDateHijri(value = null) {
      var now = value ? new Date(value) : new Date();
      var dayOfYear = Math.floor(
        (now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
      );
      var hijriDate =
        ((now.getFullYear() - 621.5643) * 365.24225 + (dayOfYear - 1)) /
        354.36707;
      var hijriYear = Math.floor(hijriDate);
      var hijriMonth = Math.ceil(
        ((hijriDate - Math.floor(hijriDate)) * 354.36707) / 29.5
      );
      var hijriDay = Math.floor(
        ((hijriDate - Math.floor(hijriDate)) * 354.36707) % 29.5
      );
      if (value) {
        return `${hijriMonth}/${hijriDay} /${hijriYear}`;
      } else this.hijri_date = `${hijriMonth}/${hijriDay} /${hijriYear}`;
    },
    hijri(e) {
      var hijri_element = e.target.id + "_hijri";
      $("#" + hijri_element).val(this.initDateHijri(e.target.value));
    },
  },
};
</script>