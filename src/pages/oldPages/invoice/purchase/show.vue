<template>
  <div>
    <top-bar-card :newUrlName="`purchase.create`" @onChangeGrid="changeGrid" />
    <div class="card card-custom mt-10 mb-4">
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
                    <div class="bg-lighten border p-3">
                      <div class="row">
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              {{ $t("Invoice_Settings") }}
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{ invoice.invoice_setting }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Invoice No.
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              {{ invoice.invoice_no }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Warehouse Name
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{ invoice.warehouse.name }}
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              {{ $t("date") }}
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{ invoice.date ? invoice.date : "N/A" }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Date Hijri
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              {{
                                invoice.date_hijri ? invoice.date_hijri : "N/A"
                              }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Delivery Due Days
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{
                                invoice.delivery_due_day
                                  ? invoice.delivery_due_day
                                  : "N/A"
                              }}
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Payment_due_date
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{
                                invoice.payment_due_date
                                  ? invoice.payment_due_date
                                  : "N/A"
                              }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Payment_due_date_hijri
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              {{
                                invoice.payment_due_date_hijri
                                  ? invoice.payment_due_date_hijri
                                  : "N/A"
                              }}
                            </div>
                          </div>
                          <!-- <div class="mb-6">
                                                      <div class="fw-bold text-gray-600 fs-7">
                                                        Payment Method
                                                      </div>
                                                      <div class="fw-bolder text-gray-800 fs-6">{{ invoice.payment_due_date_hijri ? invoice.payment_due_date_hijri : "not found" }}</div>
                                                    </div> -->
                        </div>
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Acc.Purchases
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{
                                invoice.payment_due_date_hijri
                                  ? invoice.payment_due_date_hijri
                                  : "N/A"
                              }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Provider Acc.
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              {{
                                invoice.payment_due_date_hijri
                                  ? invoice.payment_due_date_hijri
                                  : "N/A"
                              }}
                            </div>
                            <div class="mb-6">
                              <div class="fw-bold text-gray-600 fs-7">
                                Period Date Calender
                              </div>
                              <div class="fw-bolder text-gray-800 fs-6">
                                {{
                                  invoice.payment_due_date_hijri
                                    ? invoice.payment_due_date_hijri
                                    : "N/A"
                                }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Period Date Calender H
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{
                                invoice.payment_due_date_hijri
                                  ? invoice.payment_due_date_hijri
                                  : "N/A"
                              }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Period Days
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              <span class="badge-light-success">
                                {{
                                  invoice.payment_due_date_hijri
                                    ? invoice.payment_due_date_hijri
                                    : "N/A"
                                }}
                              </span>
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Currency
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{
                                invoice.currency ? invoice.currency.name : "N/A"
                              }}
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              {{ $t("Choose") }} Converter Type
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{
                                !invoice.conversion_type
                                  ? "Market Price"
                                  : "Global Price"
                              }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Selling Rate
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              <span class="badge-light-success">
                                {{ invoice.selling_rate || "N/A" }}
                              </span>
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Reference
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{
                                invoice.invoice_setting_reference_id || "N/A"
                              }}
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Reference NO.
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{ invoice.reference_no || "N/A" }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Reference Date
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              {{ invoice.reference_date || "N/A" }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Employee
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{
                                invoice.employee
                                  ? invoice.employee.first_name
                                  : "N/A"
                              }}
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Cost Center
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{
                                invoice.cost_center
                                  ? invoice.cost_center.name
                                  : "N/A"
                              }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              Statement
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              {{ invoice.note ? invoice.note : "N/A" }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade show tab-product-main"
              id="customer-info"
              role="tabpanel"
              aria-labelledby="customer-info-tab"
            >
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent=".tab-pane"
                      href="#collapseTwo"
                    >
                      <i class="flaticon2-tag"></i>
                      <span>customer information</span>
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse">
                  <div class="panel-body">
                    <div class="bg-lighten border p-3">
                      <div class="row">
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">Name</div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{ invoice.vendor ? invoice.vendor.name : "N/A" }}
                            </div>
                          </div>
                          <!--                                                    <div class="mb-6">-->
                          <!--                                                        <div class="fw-bold text-gray-600 fs-7">-->
                          <!--                                                            customer-->
                          <!--                                                        </div>-->
                          <!--                                                        <div class="fw-bolder text-gray-800 fs-6 mt-2">-->
                          <!--                                                            ali-->
                          <!--                                                        </div>-->
                          <!--                                                    </div>-->
                        </div>
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              address
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              {{
                                invoice.vendor ? invoice.vendor.address : "N/A"
                              }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">email</div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              <span class="badge-light-success">{{
                                invoice.vendor ? invoice.vendor.email : "N/A"
                              }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              phone number
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6 mt-2">
                              {{
                                invoice.vendor ? invoice.vendor.phone : "N/A"
                              }}
                            </div>
                          </div>
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">
                              mobile number
                            </div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{
                                invoice.vendor ? invoice.vendor.mobile : "N/A"
                              }}
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="mb-6">
                            <div class="fw-bold text-gray-600 fs-7">fax</div>
                            <div class="fw-bolder text-gray-800 fs-6">
                              {{ invoice.vendor ? invoice.vendor.fax : "N/A" }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      <span>pay conditions </span>
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
                              <span style="">amount</span>
                            </th>
                            <th class="datatable-cell">
                              <span style="">rate</span>
                            </th>
                            <th class="datatable-cell">
                              <span style="">date</span>
                            </th>
                            <th class="datatable-cell">
                              <span style="">term_details</span>
                            </th>
                            <th class="datatable-cell">
                              <span style="">notes</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="datatable-body">
                          <tr
                            class="datatable-row datatable-row-even"
                            v-for="termItem in invoice.payment_terms"
                            :key="termItem.invoice_id"
                          >
                            <td class="datatable-cell-center datatable-cell">
                              {{ termItem.invoice_id }}
                            </td>
                            <td class="datatable-cell">
                              {{ termItem.amount }}
                            </td>
                            <td class="datatable-cell">
                              {{ termItem.percentage }}
                            </td>
                            <td class="datatable-cell">
                              {{ termItem.term_date }}
                            </td>
                            <td class="datatable-cell">
                              {{ termItem.term_details || "note found" }}
                            </td>
                            <td class="datatable-cell">
                              {{ termItem.term_note }}
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
                      <i class="flaticon2-tag"></i> <span>notes</span>
                    </a>
                  </h4>
                </div>

                <div id="collapseFour" class="panel-collapse collapse">
                  <div class="panel-body">
                    <div class="bg-lighten border p-3">
                      <div class="mb-6">
                        <div class="fw-bolder text-gray-800 fs-6">
                          {{ invoice.note }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-custom mb-4">
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
            p-3
          "
          id="kt_datatable_2"
          style=""
        >
          <table class="datatable-table table table-bordered">
            <thead class="datatable-head">
              <tr class="datatable-row" style="left: 0px">
                <th data-field="name" class="datatable-cell">
                  <span style="">Product Name</span>
                </th>
                <th data-field="hire_date" class="datatable-cell">
                  <span style="">unit</span>
                </th>
                <th data-field="employee_id" class="datatable-cell">
                  <span style="">price</span>
                </th>
                <th data-field="gender" class="datatable-cell">
                  <span style="">selling price</span>
                </th>
                <th data-field="employee_id" class="datatable-cell">
                  <span style="">quantity</span>
                </th>
                <th data-field="name" class="datatable-cell">
                  <span style="">total_before_tax</span>
                </th>
                <th data-field="hire_date" class="datatable-cell">
                  <span style="">tax value</span>
                </th>
                <th data-field="total" class="datatable-cell">
                  <span style="">total</span>
                </th>
                <th data-field="discount" class="datatable-cell">
                  <span style="">warehouse name</span>
                </th>
                <th data-field="discount-percentage" class="datatable-cell">
                  <span style="">warehouse_partition</span>
                </th>
              </tr>
            </thead>
            <tbody class="datatable-body">
              <tr
                v-for="product in invoice.products"
                :key="product.product_id"
                class="datatable-row datatable-row-even"
                style="left: 0px"
              >
                <td class="datatable-cell">
                  <span> {{ product.product_name }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ product.unit }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ product.price }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ product.selling_price }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ product.quantity }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ product.total_before_tax }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ product.tax_value }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ product.total }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{
                    product.warehouse ? product.warehouse.name : "N/A"
                  }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ product.warehouse_partition }}</span>
                </td>
              </tr>
              <tr class="datatable-row datatable-row-even" style="left: 0px">
                <td class="datatable-cell"></td>
                <td class="datatable-cell"></td>
                <td class="datatable-cell"></td>
                <td class="datatable-cell"></td>
                <td class="datatable-cell"></td>
                <td class="datatable-cell"></td>
                <td class="datatable-cell"></td>
                <td class="datatable-cell"></td>
                <td class="datatable-cell"></td>
                <td class="datatable-cell"></td>
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
                <th class="datatable-cell"><span style="">Discount</span></th>
                <th class="datatable-cell">
                  <span style="">Discount %</span>
                </th>
                <th class="datatable-cell"><span style="">Addition</span></th>
                <th class="datatable-cell">
                  <span style="">Addition %</span>
                </th>
                <th class="datatable-cell"><span style="">Notes</span></th>
              </tr>
            </thead>
            <tbody class="datatable-body">
              <tr
                v-for="(item, index) in invoice.invoice_discount_addition"
                :key="index"
                class="datatable-row datatable-row-even"
              >
                <td class="datatable-cell-center datatable-cell">
                  {{ index }}
                </td>
                <td class="datatable-cell">{{ item.discount || "0" }}</td>
                <td class="datatable-cell">
                  {{ item.discount_percentage || "0" }}
                </td>
                <td class="datatable-cell">{{ item.addition || 0 }}</td>
                <td class="datatable-cell">
                  {{ item.addition_percentage || 0 }}
                </td>
                <td class="datatable-cell">{{ item.note || "N/A" }}</td>
              </tr>
              <tr class="datatable-row datatable-row-even empty-row">
                <td class="datatable-cell-center datatable-cell"></td>
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
                  <span>Total before tax</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoice.total_before_tax }}</span>
                </td>
              </tr>
              <tr class="datatable-row datatable-row-even" style="left: 0px">
                <td class="datatable-cell font-weight-boldest">
                  <span>Total after discount addition</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoice.total_after_discount_addition }}</span>
                </td>
              </tr>
              <tr class="datatable-row datatable-row-even" style="left: 0px">
                <td class="datatable-cell font-weight-boldest">
                  <span>Tax</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoice.invoice_tax }}</span>
                </td>
              </tr>
              <tr class="datatable-row datatable-row-even" style="left: 0px">
                <td class="datatable-cell font-weight-boldest">
                  <span>Total</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoice.total }}</span>
                </td>
              </tr>
              <tr class="datatable-row datatable-row-even" style="left: 0px">
                <td class="datatable-cell font-weight-boldest">
                  <span>Paid</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoice.paid }}</span>
                </td>
              </tr>
              <tr class="datatable-row datatable-row-even" style="left: 0px">
                <td class="datatable-cell font-weight-boldest">
                  <span>Remaining Amount</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoice.remaining_amount }}</span>
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
                      <label>otal befor discount</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="less sale price"
                      />
                      <label>less sale price</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="total before tax"
                      />
                      <label>total before tax</label>
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
                      <label>last price</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="less price"
                      />
                      <label>less price</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="add tax"
                      />
                      <label>add tax</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="luxury tax"
                      />
                      <label>luxury tax</label>
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
                      <label>total Qty</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="current Qty"
                      />
                      <label>current Qty</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="الكميات الفعلية"
                      />
                      <label>الكميات الفعلية</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="اجمالي العدد"
                      />
                      <label>اجمالي العدد</label>
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
                      <label>cost price</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="store cost"
                      />
                      <label>store cost</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="bill cost"
                      />
                      <label>bill cost</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="نسبة الربح"
                      />
                      <label>نسبة الربح</label>
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
                      <label>count</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="otal repeated"
                      />
                      <label>otal repeated</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="profits"
                      />
                      <label>profits</label>
                    </div>
                  </div>
                  <div class="has-float-label">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="bill profit"
                      />
                      <label>bill profit</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      invoice: {},
      languages: window.$languages,
      language: "en",
      gridClassName: "product_list",
    };
  },
  created() {
    this.getInvoiceById();
  },
  methods: {
    async getInvoiceById() {
      const invoice = {
        URL: "invoice/" + this.$route.params.id,
      };
      const getInvoiceById = await this.$store.dispatch(
        "getInvoiceById",
        invoice
      );
      this.invoice = getInvoiceById.data.data;
      console.log(this.invoice);
    },
    // UI
    changeBt() {
      this.active = this.active == true ? false : true;
    },
    changeGrid(event) {
      this.gridClassName = event;
    },
  },
};
</script>

<style></style>
