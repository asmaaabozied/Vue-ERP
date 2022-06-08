<template>
  <div>
    <top-bar-card
      :newUrlName="`add-priceSettings`"
      :submit="newSetting"
      :model="`price_setting`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newSetting" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>

            <div class="row">
              <div class="col-3">
                <div class="bg-lighten border p-3 sidbar-priceSet">
                  <div class="tab-content">
                    <div
                      class="tab-pane fade active show"
                      id="search-ps"
                      role="tabpanel"
                      aria-labelledby="search-tab"
                    >
                      <div class="has-float-label">
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              value=""
                              type="text"
                              placeholder="Search...."
                              class="form-control"
                            />
                            <label class="col-form-label">{{
                              $t("Search")
                            }}</label>
                            <div class="input-group-append">
                              <div class="btn btn-icon btn-search-o">
                                <span
                                  class="svg-icon svg-icon-xl svg-icon-primary"
                                >
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
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <path
                                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                        fill="#000000"
                                        fill-rule="nonzero"
                                        opacity="0.3"
                                      ></path>
                                      <path
                                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                        fill="#000000"
                                        fill-rule="nonzero"
                                      ></path>
                                    </g></svg
                                ></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <v-jstree
                        :data="data"
                        show-checkbox
                        multiple
                        allow-batch
                        whole-row
                        @item-click="itemClick"
                      ></v-jstree>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="Settings-ps"
                      role="tabpanel"
                      aria-labelledby="Settings-ps-tab"
                    >
                      <div class="form-group has-float-label">
                        <select
                          @change="setProducerID($event)"
                          class="form-control"
                        >
                          <option value="0">{{ $t("Choose") }}</option>
                          <option
                            :value="producer.id"
                            v-for="producer in producers.data"
                            :key="producer.id"
                          >
                            {{ producer.name }}
                          </option>
                        </select>
                        <label for="">{{ $t("producers") }}</label>
                      </div>

                      <div class="form-group float-label-OPTIONS">
                        <label class="label-options">Options</label>
                        <div class="checkbox-list">
                          <label class="checkbox checkbox-square">
                            <input type="checkbox" checked="checked" />
                            <span></span>
                            {{ $t("Products_in_stock") }}
                          </label>
                          <label class="checkbox checkbox-square">
                            <input type="checkbox" />
                            <span></span>
                            {{ $t("Products_out_of_stock") }}
                          </label>
                          <label class="checkbox checkbox-square">
                            <input type="checkbox" />
                            <span></span>
                            {{ $t("Activated_products") }}
                          </label>
                          <label class="checkbox checkbox-square">
                            <input type="checkbox" />
                            <span></span>
                            {{ $t("Inactive_products") }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul class="nav nav-pills" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="search-tab"
                        data-toggle="tab"
                        href="#search-ps"
                      >
                        <span class="nav-icon">
                          <i class="flaticon2-shopping-cart-1"></i>
                        </span>
                        <span class="nav-text">{{ $t("Products") }}</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="Settings-ps-tab"
                        data-toggle="tab"
                        href="#Settings-ps"
                      >
                        <span class="nav-icon">
                          <i class="flaticon2-layers-1"></i>
                        </span>
                        <span class="nav-text">{{ $t("options") }}</span>
                      </a>
                    </li>
                  </ul>

                  <div class="border-top-md flex-wrap mt-3 pt-3 text-center">
                    <a
                      @click="removeProducts('all')"
                      class="
                        btn
                        btn-hover-text-primary
                        btn-icon
                        btn-sm
                        btn-transparent-primary
                        mx-1
                      "
                    >
                      <i class="ki ki-bold-double-arrow-back icon-xs"></i
                    ></a>
                    <a
                      @click="removeProducts()"
                      class="
                        btn
                        btn-hover-text-primary
                        btn-icon
                        btn-sm
                        btn-transparent-primary
                        mx-1
                      "
                    >
                      <i class="ki ki-bold-arrow-back icon-xs"></i
                    ></a>
                    <a
                      href="#"
                      class="
                        btn
                        btn-hover-text-primary
                        btn-icon
                        btn-sm
                        btn-transparent-primary
                        mx-1
                      "
                      ><i class="ki ki-bold-arrow-next icon-xs"></i
                    ></a>
                    <a
                      @click="filterProducts('all')"
                      class="
                        btn
                        btn-hover-text-primary
                        btn-icon
                        btn-sm
                        btn-transparent-primary
                        mx-1
                      "
                      ><i class="ki ki-bold-double-arrow-next icon-xs"></i
                    ></a>
                    <a class="btn btn-primary" @click="calculateSetting()">{{
                      $t("Calculate_Setting")
                    }}</a>
                  </div>
                </div>
              </div>

              <div class="col-9">
                <div class="bg-lighten border p-3">
                  <div class="row">
                    <div class="col-4 has-float-label">
                      <div class="form-group">
                        <select
                          class="form-control"
                          name="apply_from"
                          placeholder="Fixed Value"
                          id="apply_from"
                        >
                          <option value="price">{{ $t("price") }}</option>
                          <option value="cost_way_price">
                            {{ $t("cost_way_price") }}
                          </option>
                          <option value="consumer_price">
                            {{ $t("consumer_price") }}
                          </option>
                          <option value="min_price_sale">
                            {{ $t("min_price_sale") }}
                          </option>
                          <option value="price_buy">
                            {{ $t("price_buy") }}
                          </option>
                          <option value="beginning_cost_price">
                            {{ $t("beginning_cost_price") }}
                          </option>
                          <option value="transport_price">
                            {{ $t("transport_price") }}
                          </option>
                        </select>
                        <label for="">{{ $t("Apply_from") }}</label>
                      </div>
                    </div>
                    <div class="col-4 math-calc">
                      <div class="form-group">
                        <div class="radio-inline">
                          <label class="radio radio-accent">
                            <input type="radio" name="function" value="plus" />
                            <span><i class="fas fa-plus"></i></span>
                          </label>
                          <label class="radio radio-accent">
                            <input
                              type="radio"
                              name="function"
                              checked="checked"
                              value="divide"
                            />
                            <span><i class="fas fa-divide"></i></span>
                          </label>
                          <label class="radio radio-accent">
                            <input
                              type="radio"
                              name="function"
                              value="multiply"
                            />
                            <span><i class="fas fa-times"></i></span>
                          </label>
                          <label class="radio radio-accent">
                            <input type="radio" name="function" value="minus" />
                            <span><i class="fas fa-minus"></i></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="col-4 has-float-label">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="value"
                          placeholder="value"
                        />
                        <label for="">Value</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4 has-float-label">
                      <div class="form-group">
                        <select
                          class="form-control"
                          name="apply_to"
                          placeholder="Fixed Value"
                          id="apply_to"
                        >
                          <option value="price">{{ $t("price") }}</option>
                          <option value="cost_way_price">
                            {{ $t("cost_way_price") }}
                          </option>
                          <option value="consumer_price">
                            {{ $t("consumer_price") }}
                          </option>
                          <option value="min_price_sale">
                            {{ $t("min_price_sale") }}
                          </option>
                          <option value="price_buy">
                            {{ $t("price_buy") }}
                          </option>
                          <option value="beginning_cost_price">
                            {{ $t("beginning_cost_price") }}
                          </option>
                          <option value="transport_price">
                            {{ $t("transport_price") }}
                          </option>
                        </select>
                        <label for="">{{ $t("Apply_to") }}</label>
                      </div>
                      <div class="col-4 has-float-label">
                        <div class="form-group">
                          <select class="form-control" name="type">
                            <option value="fixed" selected>
                              {{ $t("Fixed") }}
                            </option>
                            <option value="percentage">
                              {{ $t("Percentage") }}
                            </option>
                          </select>
                          <label for="">{{ $t("type") }}</label>
                        </div>
                      </div>
                    </div>

                    <div class="col-4">
                      <div class="form-group has-float-label">
                        <select name="rounding" class="form-control">
                          <option></option>
                          <option value="decimal">{{ $t("Decimal") }}</option>
                          <option value="upper">{{ $t("Upper") }}</option>
                          <option value="lower">{{ $t("Lower") }}</option>
                        </select>
                        <label for="">{{ $t("Rounding") }}</label>
                      </div>
                    </div>
                    <div class="has-float-label col-4">
                      <div class="form-group">
                        <input
                          type="number"
                          class="form-control"
                          name="fixed_value"
                          Value="2"
                        />
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
                  <table
                    class="table table-striped p-3 mb-0 table-bordered mt-4"
                  >
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
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("Product_Code") }} </span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("Product_Name") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("price") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("price_buy") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span>{{ $t("New_Price") }}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="items">
                      <tr v-for="(product, index) in products" :key="index">
                        <th
                          class="
                            datatable-cell-center datatable-cell
                            text-center
                          "
                        >
                          <input
                            type="checkbox"
                            @click="selectProduct(product.id)"
                            class="checkbox"
                          />
                          <span>{{ index + 1 }}</span>
                        </th>
                        <input
                          type="hidden"
                          :name="`products[${index}][product_id]`"
                          :value="product.id"
                        />
                        <td>{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.price_buy }}</td>
                        <td>
                          <input
                            type="number"
                            :name="`products[${index}][new_price]`"
                            :id="`${product.id}-product`"
                          />
                        </td>
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
import LangTabs from "@/components/form/LangTabs.vue";
import VJstree from "vue-jstree";
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "add-priceSettings",
  components: {
    LangTabs,
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
  created() {
    this.getCategories();
    this.getResults();
  },
  computed: {
    producers() {
      return this.$store.getters.getProducers;
    },
  },
  data() {
    return {
      categories: [],
      selected_categories: [],
      selected_products: [],
      priceSetting: {},
      data: [],
      products: [],
      producer_id: 0,
      // data: [
      // {
      //     text: "Same but with checkboxes",
      //     children: [
      //         {
      //             text: "initially selected",
      //             selected: true,
      //         },
      //         {
      //             text: "custom icon",
      //             icon: "fa fa-warning icon-state-danger",
      //         },
      //         {
      //             text: "initially open",
      //             icon: "fa fa-folder icon-state-default",
      //             opened: true,
      //             children: [
      //                 {
      //                     text: "Another node",
      //                 },
      //             ],
      //         },
      //         {
      //             text: "custom icon",
      //             icon: "fa fa-warning icon-state-warning",
      //         },
      //         {
      //             text: "disabled node",
      //             icon: "fa fa-check icon-state-success",
      //             disabled: true,
      //         },
      //     ],
      // },
      // {
      //     text: "Same but with checkboxes",
      //     opened: true,
      //     children: [
      //         {
      //             text: "initially selected",
      //             selected: true,
      //         },
      //         {
      //             text: "custom icon",
      //             icon: "fa fa-warning icon-state-danger",
      //         },
      //         {
      //             text: "initially open",
      //             icon: "fa fa-folder icon-state-default",
      //             opened: true,
      //             children: [
      //                 {
      //                     text: "Another node",
      //                 },
      //             ],
      //         },
      //         {
      //             text: "custom icon",
      //             icon: "fa fa-warning icon-state-warning",
      //         },
      //         {
      //             text: "disabled node",
      //             icon: "fa fa-check icon-state-success",
      //             disabled: true,
      //         },
      //     ],
      // },
      // {
      //     text: "And wholerow selection",
      // },
      // ],
    };
  },
  methods: {
    newPriceSetting() {},

    itemClick(node) {
      if (this.selected_categories.includes(node.model.id)) {
        this.selected_categories.splice(
          this.selected_categories.indexOf(node.model.id),
          1
        );
      } else {
        this.selected_categories.push(node.model.id);
      }
    },
    async getCategories() {
      await $axios
        .get("/allCategories")
        .then((res) => {
          this.categories = res.data.data;
          for (var i = 0; i < this.categories.length; i++) {
            this.data.push({
              text: this.categories[i].name,
              id: this.categories[i].id,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async filterProducts(status) {
      await $axios
        .get("getProducts", {
          params: {
            ids: this.selected_categories,
            producer_id: this.producer_id,
          },
        })
        .then((res) => {
          this.products = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    removeProducts(status = null) {
      if (status == "all") {
        this.products = [];
      } else {
        for (var index in this.selected_products) {
          this.products = this.products.filter(function (val, i) {
            return this.products[i].id != this.selected_products[index];
          }, this);
        }
        var checkboxes = document.getElementsByClassName("checkbox");
        for (let checkbox of checkboxes) {
          checkbox.checked = false;
        }

        this.selected_products = [];
      }
    },

    selectProduct(id) {
      if (this.selected_products.includes(id)) {
        this.selected_products.splice(this.selected_products.indexOf(id), 1);
      } else {
        this.selected_products.push(id);
      }
    },
    async getResults(page = 1) {
      const producerUrl = {
        URL: "producers",
        page,
      };
      const producers = await this.$store.dispatch(
        "fetchProducers",
        producerUrl
      );
    },
    setProducerID(e) {
      var value = e.target.value;
      this.producer_id = value;
    },
    async newSetting() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const price_setting = { URL: "priceSettings", data: formData };
        await this.$store.dispatch("storeSetting", price_setting);
        document.location.href = "priceSettings/create";
      } catch (errors) {}
    },
    async calculateSetting() {
      var form = document.getElementById("currentForm");
      var formData = new FormData(form);
      await $axios
        .post("calculatePrices", formData)
        .then((res) => {
          for (var index in res.data) {
            document.getElementById(`${res.data[index].id}-product`).value =
              res.data[index].new_price;
          }
        })
        .catch((error) => {});
    },
  },
};
</script>

<style>
</style>