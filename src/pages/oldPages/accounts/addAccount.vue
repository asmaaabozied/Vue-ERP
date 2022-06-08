<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`add-accounts`"
      :submit="newAccount"
      :id="0"
      :editUrlName="`edit-accounts`"
      :navigationUrl="`accountNavigation`"
      :model="`account`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }"
    >
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newAccount" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs :language="language" :errors="errors" />
                  </template>
                </lang-tabs>
              </div>
              <div
                class="col-md-6 col-12 mt-7"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="row">
                  <div class="col">
                    <div class="form-group has-float-label">
                      <select
                        class="form-control"
                        @change="getType($event)"
                        name="account_type"
                      >
                        <option value="main" selected>{{ $t("main") }}</option>
                        <option value="sub">{{ $t("sub") }}</option>
                      </select>
                      <label for="exampleSelectl">{{
                        $t("account_type")
                      }}</label>
                      <span class="text-danger" v-if="errors.account_type">
                        {{ errors.account_type[0] }}
                      </span>
                    </div>
                  </div>
                  <div class="col" v-show="active">
                    <div class="form-group has-float-label" v-show="active">
                      <select class="form-control" name="parent_id">
                        <option value="">{{ $t("Choose") }}</option>
                        <option
                          v-for="parent in parents"
                          v-bind:value="parent.id"
                        >
                          {{ parent.name }}
                        </option>
                      </select>
                      <label for="exampleSelectl">{{ $t("parents") }}</label>

                      <span class="text-danger" v-if="errors.parent_id">
                        {{ errors.parent_id[0] }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="has-float-label">
                  <div class="form-group" v-if="!active">
                    <input
                      type="text"
                      name="account_reference"
                      class="form-control"
                      placeholder="account reference"
                    />
                    <label for="exampleSelectl">{{
                      $t("account_reference")
                    }}</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="has-float-label">
                      <div class="form-group">
                        <select
                          class="form-control"
                          @change="getCustomers($event)"
                          name="account_category"
                        >
                          <option value="supplier" selected>
                            {{ $t("supplier") }}
                          </option>
                          <option value="customer">{{ $t("customer") }}</option>
                          <option value="customer_supplier">
                            {{ $t("customer_supplier") }}
                          </option>
                        </select>
                        <label for="exampleSelectl">{{
                          $t("account_category")
                        }}</label>
                      </div>
                    </div>
                  </div>
                  <div class="col" v-show="customerType">
                    <div class="has-float-label">
                      <div class="form-group has-float-label">
                        <div v-show="customerType">
                          <select class="form-control" name="classification_id">
                            <option value="">{{ $t("Choose") }}</option>
                            <option
                              v-for="classification in classifications.data"
                              v-bind:value="classification.id"
                            >
                              {{ classification.name }}
                            </option>
                          </select>
                          <label for="exampleSelectl">{{
                            $t("classifications")
                          }}</label>
                          <span
                            class="text-danger"
                            v-if="errors.classification_id"
                          >
                            {{ errors.classification_id[0] }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="text"
                      name="account_code"
                      class="form-control"
                      placeholder="account code"
                    />
                    <label for="exampleSelectl">{{ $t("account_code") }}</label>
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
                      <i class="flaticon2-gear"></i>
                    </span>
                    <span class="nav-text">{{ $t("data") }}</span>
                  </a>
                </li>
              </ul>

              <div class="tab-content main-tab-content" id="myTabContent">
                <div class="btn-collapse">
                  <button @click.prevent="showwdata">
                    {{ $t("Collapse_All") }}
                  </button>
                  |
                  <button @click.prevent="hidedata">
                    {{ $t("Expand_All") }}
                  </button>
                </div>
                <div
                  class="tab-pane fade show active tab-product-main"
                  id="page-data"
                  role="tabpanel"
                  aria-labelledby="data-tab"
                >
                  <div class="panel panel-default">
                    <div
                      class="panel-heading"
                      v-wow="{
                        'animation-name': 'fadeInUp',
                        'animation-duration': '2s',
                      }"
                    >
                      <h4
                        class="panel-title"
                        @click.prevent="changeclass"
                        :class="[{ active: active }, `${addactive}`]"
                      >
                        <a
                          data-toggle="collapse"
                          data-parent=".tab-pane"
                          href="#collapseOne"
                        >
                          <i class="flaticon2-contract"></i>
                          <span>{{ $t("data") }}</span>
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      class="panel-collapse collapse"
                      :class="`${dataa}`"
                    >
                      <div class="panel-body">
                        <div
                          class="row"
                          v-wow="{
                            'animation-name': 'fadeInUp',
                            'animation-duration': '1s',
                          }"
                        >
                          <div class="col-4">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="phone[]"
                                  class="form-control"
                                  placeholder="phone"
                                />
                                <label for="exampleSelectl">{{
                                  $t("phone")
                                }}</label>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="phone[]"
                                  class="form-control"
                                  placeholder="phone"
                                />
                                <label for="exampleSelectl">{{
                                  $t("phone")
                                }}</label>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="mobile"
                                  class="form-control"
                                  placeholder="mobile"
                                />
                                <label for="exampleSelectl">{{
                                  $t("mobile")
                                }}</label>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="fax"
                                  class="form-control"
                                  placeholder="fax"
                                />
                                <label for="exampleSelectl">{{
                                  $t("fax")
                                }}</label>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="telefax"
                                  class="form-control"
                                  placeholder="telefax"
                                />
                                <label for="exampleSelectl">{{
                                  $t("telefax")
                                }}</label>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="email"
                                  class="form-control"
                                  placeholder="email"
                                />
                                <label for="exampleSelectl">{{
                                  $t("email")
                                }}</label>
                              </div>
                            </div>
                          </div>

                          <div class="col-4">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="website"
                                  class="form-control"
                                  placeholder="website"
                                />
                                <label for="exampleSelectl">{{
                                  $t("website")
                                }}</label>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="bank_account_number"
                                  class="form-control"
                                  placeholder="bank account number"
                                />
                                <label for="exampleSelectl">{{
                                  $t("bank_account_number")
                                }}</label>
                              </div>
                            </div>
                          </div>

                          <div class="col-4">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="iban"
                                  class="form-control"
                                  placeholder="iban"
                                />
                                <label for="exampleSelectl">{{
                                  $t("iban")
                                }}</label>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="text"
                                  name="tax_number"
                                  class="form-control"
                                  placeholder="tax number"
                                />
                                <label for="exampleSelectl">{{
                                  $t("tax_number")
                                }}</label>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="form-group has-float-label">
                              <select class="form-control" name="employee_id">
                                <option value="">{{ $t("Choose") }}</option>
                                <option
                                  v-for="employee in employees.data"
                                  v-bind:value="employee.id"
                                >
                                  {{ employee.name }}
                                </option>
                              </select>
                              <label for="exampleSelectl"
                                >{{ $t("employess") }}
                              </label>
                              <span
                                class="text-danger"
                                v-if="errors.employee_id"
                              >
                                {{ errors.employee_id[0] }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="separator separator-solid my-3"></div>
                        <div class="row">
                          <div
                            class="col-6"
                            v-wow="{
                              'animation-name': 'fadeInUp',
                              'animation-duration': '1s',
                            }"
                          >
                            <div class="has-float-label">
                              <div class="form-group">
                                <h5 class="font-weight-bolder text-primary">
                                  {{ $t("current_balance") }}
                                </h5>
                                <div
                                  class="separator separator-solid my-3"
                                ></div>
                                <div class="has-float-label col-12 p-0">
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      name="total_debit"
                                      class="form-control"
                                      placeholder="total debit"
                                    />
                                    <label for="exampleSelectl">
                                      {{ $t("total_debit") }}</label
                                    >
                                  </div>
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      name="total_credit"
                                      class="form-control"
                                      placeholder="total credit"
                                    />
                                    <label for="exampleSelectl">
                                      {{ $t("total_credit") }}</label
                                    >
                                  </div>
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      name="posted_balance"
                                      class="form-control"
                                      placeholder="posted balance"
                                    />
                                    <label for="exampleSelectl">
                                      {{ $t("posted_balance") }}</label
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-6"
                            v-show="active"
                            v-wow="{
                              'animation-name': 'fadeInUp',
                              'animation-duration': '1s',
                            }"
                          >
                            <div class="has-float-label col-12 p-0">
                              <div class="form-group">
                                <div>
                                  <h5 class="font-weight-bolder text-primary">
                                    {{ $t("Credit_limit") }}
                                  </h5>
                                  <div
                                    class="separator separator-solid my-3"
                                  ></div>

                                  <div class="form-group">
                                    <input
                                      type="text"
                                      name="credit_limit_debit"
                                      class="form-control"
                                      placeholder="debit"
                                    />
                                    <label for="exampleSelectl">
                                      {{ $t("debit") }}</label
                                    >
                                  </div>
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      name="credit_limit_credit"
                                      class="form-control"
                                      placeholder="credit"
                                    />
                                    <label for="exampleSelectl">
                                      {{ $t("credit") }}</label
                                    >
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
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";
import Inputs from "./Inputs.vue";
export default {
  name: "add-accounts",
  components: {
    LangTabs,
    Inputs,
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
      account: {},
      parents: {},
      customerType: false,
      languages: window.$languages,
      gridClassName: window.$gridClassName,
      dataa: "",
      addactive: "",
      isEmpty: false,
      isActive: true,
      active: false,
    };
  },
  created() {
    this.getClassifications();
    this.getEmployees();
    this.getParents();
  },
  computed: {
    classifications() {
      return this.$store.getters.getClassifications;
    },
    employees() {
      return this.$store.getters.getEmployees;
    },
  },
  methods: {
    showwdata: function () {
      this.dataa = "show";
      this.addactive = "active";
    },
    hidedata: function () {
      this.dataa = "";
      this.addactive = "";
    },
    changeBt() {
      this.active = this.active == true ? false : true;
    },
    changeGrid(event) {
      this.gridClassName = event;
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
    async newAccount() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const account = {
          URL: "accounts",
          data: formData,
        };
        await this.$store.dispatch("storeAccounts", account);
      } catch (errors) {
        this.errors = errors;
      }
    },

    getType(event) {
      var type = event.target.value;
      this.active = type == "sub" ? true : false;
    },
    getCustomers(event) {
      var type = event.target.value;

      this.customerType = type == "customer" ? true : false;
    },
    async getClassifications() {
      const classificationUrl = {
        URL: "classifications",
      };
      const classifications = await this.$store.dispatch(
        "fetchClassifications",
        classificationUrl
      );
    },
    async getEmployees() {
      const employeeUrl = {
        URL: "employees",
      };
      const employees = await this.$store.dispatch(
        "fetchEmployees",
        employeeUrl
      );
    },
    getParents() {
      $axios
        .get(`account/parents`)
        .then((response) => {
          this.parents = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style></style>
