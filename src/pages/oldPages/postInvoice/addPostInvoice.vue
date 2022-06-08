<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`add-products`"
      :submit="newProduct"
      :model="`postinvoice`"
    />
    <div class="card card-custom mb-9 mt-10" v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newPriceSetting" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>

            <div class="row">
              <div class="col-3">
                <div class="bg-lighten border p-3 sidbar-priceSet post-invoice">
                  <v-jstree
                    :data="data"
                    show-checkbox
                    multiple
                    allow-batch
                    whole-row
                    @item-click="itemClick"
                  ></v-jstree>

                  <div class="border-top-md flex-wrap mt-3 pt-3 text-center">
                    <a href="#" class="btn btn-outline-primary mr-1"
                      ><i class="icon-xl la la-clipboard-list"></i>
                      {{ $t("Prepare") }}</a
                    >
                    <a href="#" class="btn btn-outline-primary disabled mr-1">
                      <i class="icon-xl la la-clipboard-check"></i>
                      {{ $t("Post") }}</a
                    >
                    <a href="#" class="btn btn-outline-primary disabled">
                      <i class="icon-xl la la-clipboard-list"></i>
                      {{ $t("Post_all") }}</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-9">
                <div class="bg-lighten border p-3">
                  <div class="row">
                    <div class="col-4 has-float-label">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="warehouse"
                          placeholder="warehouse"
                        />
                        <label for="">{{ $t("warehouse") }}</label>
                      </div>
                    </div>
                    <div class="col-4 has-float-label">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="Delegate-name"
                          placeholder="Delegate name"
                        />
                        <label for="">Delegate_name</label>
                      </div>
                    </div>
                    <div class="has-float-label col-4">
                      <div class="form-group has-float-label">
                        <select class="form-control" id="" name="">
                          <option value="">
                            {{ $t("sitting_then_date_then_number") }}
                          </option>
                          <option value="">{{ $t("date_then_number") }}</option>
                          <option value="">{{ $t("number") }}</option>
                          <option value="">
                            {{
                              $t(
                                "reference_then_reference_date_then_reference_number"
                              )
                            }}
                          </option>
                          <option value="">
                            {{ $t("reference_then_reference_number") }}
                          </option>
                          <option value="">{{ $t("reference_date") }}</option>
                        </select>
                        <label for="" class="col-form-label">{{
                          $t("sort_by")
                        }}</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="box-date p-3">
                        <h6>period</h6>
                        <div class="form-group">
                          <div class="col-form-label">
                            <div class="checkbox-inline">
                              <label
                                class="
                                  checkbox checkbox-outline checkbox-outline-2x
                                "
                              >
                                <input type="checkbox" name="Full-period " />
                                <span></span>
                                Full period
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  type="date"
                                  name="start_date"
                                  id=""
                                />
                                <label class="checkbox checkbox-single">{{
                                  $t("From")
                                }}</label>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  type="date"
                                  name="end_date"
                                  id=""
                                />
                                <label class="checkbox checkbox-single">{{
                                  $t("to")
                                }}</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="box-payways p-3">
                        <h6>pay type</h6>
                        <div class="form-group">
                          <div class="col-form-label">
                            <div class="checkbox-inline">
                              <label
                                class="
                                  checkbox checkbox-outline checkbox-outline-2x
                                "
                              >
                                <input type="checkbox" name="payways" />
                                <span></span>
                                {{ $t("cash") }}
                              </label>
                              <label
                                class="
                                  checkbox checkbox-outline checkbox-outline-2x
                                "
                              >
                                <input
                                  type="checkbox"
                                  name="payways"
                                  checked="checked"
                                />
                                <span></span>
                                {{ $t("credit") }}
                              </label>
                              <label
                                class="
                                  checkbox checkbox-outline checkbox-outline-2x
                                "
                              >
                                <input type="checkbox" name="payways" />
                                <span></span>
                                {{ $t("installment") }}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                >
                  <table class="datatable-table table table-bordered">
                    <thead class="datatable-head">
                      <tr class="datatable-row" style="left: 0px">
                        <th
                          class="
                            datatable-cell-center datatable-cell
                            text-center
                          "
                        >
                          <span>#</span>
                        </th>
                        <th
                          class="select-cell"
                          rowspan="1"
                          colspan="1"
                          style="width: 30px"
                        >
                          <label class="checkbox checkbox-single">
                            <input
                              type="checkbox"
                              value=""
                              class="group-checkable"
                            />
                            <span></span>
                          </label>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $T("No") }} </span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("date") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("type") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("pay_type") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $T("store") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("delegte_name") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("user_name") }} </span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("value") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("cashier") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("reference") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("ref_num") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("total_qty") }}.</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("acc") }} </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="datatable-body">
                      <tr class="datatable-row datatable-row-even">
                        <td class="datatable-cell-center datatable-cell">
                          <span>1</span>
                        </td>
                        <td class="select-cell" tabindex="0">
                          <label class="checkbox checkbox-single">
                            <input type="checkbox" value="" class="checkable" />
                            <span></span>
                          </label>
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
                        <td class="datatable-cell"><span></span></td>
                      </tr>
                    </tbody>
                  </table>
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
import VJstree from "vue-jstree";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  components: {
    VJstree,
    UAnimateContainer,
    UAnimate,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      priceSetting: {},
      data: [
        {
          text: "Invoices",
          children: [
            {
              text: "initially selected",
              selected: true,
            },
            {
              text: "custom icon",
              icon: "fa fa-warning icon-state-danger",
            },
            {
              text: "initially open",
              icon: "fa fa-folder icon-state-default",
              opened: true,
              children: [
                {
                  text: "Another node",
                },
              ],
            },
            {
              text: "custom icon",
              icon: "fa fa-warning icon-state-warning",
            },
          ],
        },
      ],
    };
  },
  methods: {
    newPriceSetting() {},
    itemClick(node) {
      console.log(node.model.text + " clicked !");
    },
  },
};
</script>