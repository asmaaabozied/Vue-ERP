<template>
  <div>
    <top-bar-card :newUrlName="`show-accounts`" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs
                      :language="language"
                      :errors="errors"
                      :account="account"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7"></div>
            </div>
            <hr />
            <div class="row mt-5">
              <div class="add-tabs w-100 sub-tabs">
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
                      <span class="nav-text">data</span>
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
                    <div class="inf0-g">
                      <div class="col-12">
                        <div class="mt-4 d-flex justify-content-between">
                          <div class="col form-group">
                            <label for="exampleSelectl">Account Type</label>
                            <select
                              class="form-control"
                              @change="getType($event)"
                              name="account_type"
                            >
                              <option value="main" selected>main</option>
                              <option value="sub">Sub</option>
                            </select>
                            <span
                              class="text-danger"
                              v-if="errors.account_type"
                            >
                              {{ errors.account_type[0] }}
                            </span>
                          </div>

                          <div class="col form-group" v-show="active">
                            <label for="exampleSelectl">parents</label>

                            <select class="form-control" name="parent_id">
                              <option value="">{{ $t("Choose") }}</option>
                              <option
                                v-for="parent in parents"
                                v-bind:value="parent.id"
                                :selected="parent.id == account.parent_id"
                              >
                                {{ parent.name }}
                              </option>
                            </select>
                            <span class="text-danger" v-if="errors.parent_id">
                              {{ errors.parent_id[0] }}
                            </span>
                          </div>
                          <div class="col form-group" v-if="!active">
                            <label for="exampleSelectl"
                              >account_reference</label
                            >
                            <input
                              type="text"
                              name="account_reference"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="inf0-g">
                      <div class="col-12">
                        <div class="mt-4 d-flex justify-content-between">
                          <div class="col form-group">
                            <label for="exampleSelectl">phone</label>
                            <input
                              type="text"
                              name="phone[]"
                              class="form-control"
                            />
                          </div>
                          <div class="col form-group">
                            <label for="exampleSelectl">phone</label>
                            <input
                              type="text"
                              name="phone"
                              class="form-control"
                              :value="account.phone"
                            />
                          </div>
                          <div class="col form-group">
                            <label for="exampleSelectl">mobile</label>
                            <input
                              type="text"
                              name="mobile"
                              class="form-control"
                              :value="account.mobile"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="mt-4 d-flex justify-content-between">
                          <div class="col form-group">
                            <label for="exampleSelectl">fax</label>
                            <input
                              type="text"
                              name="fax"
                              class="form-control"
                              :value="account.fax"
                            />
                          </div>
                          <div class="col form-group">
                            <label for="exampleSelectl">telefax</label>
                            <input
                              type="text"
                              name="telefax"
                              class="form-control"
                              :value="account.telefax"
                            />
                          </div>
                          <div class="col form-group">
                            <label for="exampleSelectl">email</label>
                            <input
                              type="text"
                              name="email"
                              class="form-control"
                              :value="account.email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="inf0-g">
                      <div class="col-12">
                        <div class="mt-4 d-flex justify-content-between">
                          <div class="col form-group">
                            <label for="exampleSelectl">website</label>
                            <input
                              type="text"
                              name="website"
                              class="form-control"
                              :value="account.website"
                            />
                          </div>
                          <div class="col form-group">
                            <label for="exampleSelectl"
                              >bank_account_number</label
                            >
                            <input
                              type="text"
                              name="bank_account_number"
                              class="form-control"
                              :value="account.bank_account_number"
                            />
                          </div>
                          <div class="col form-group">
                            <label for="exampleSelectl">iban</label>
                            <input
                              type="text"
                              name="iban"
                              class="form-control"
                              :value="account.iban"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="mt-4 d-flex justify-content-between">
                          <div class="col form-group">
                            <label for="exampleSelectl">tax_number</label>
                            <input
                              type="text"
                              name="tax_number"
                              class="form-control"
                              :value="account.tax_number"
                            />
                          </div>
                          <div class="col form-group">
                            <label for="exampleSelectl">account_code</label>
                            <input
                              type="text"
                              name="account_code"
                              class="form-control"
                              :value="account.account_code"
                            />
                          </div>
                          <div class="col form-group">
                            <div>
                              <label for="exampleSelectl">employess</label>

                              <select class="form-control" name="employee_id">
                                <option value="">{{ $t("Choose") }}</option>
                                <option
                                  v-for="employee in employees.data"
                                  v-bind:value="employee.id"
                                  :selected="employee.id == account.employee_id"
                                >
                                  {{ employee.name }}
                                </option>
                              </select>
                              <span
                                class="text-danger"
                                v-if="errors.employee_id"
                              >
                                {{ errors.employee_id[0] }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="inf0-g">
                      <div class="col-12">
                        <div class="mt-4 d-flex justify-content-between">
                          <div class="col form-group">
                            <label for="exampleSelectl">account category</label>
                            <select
                              class="form-control"
                              @change="getCustomers($event)"
                              name="account_category"
                            >
                              <option value="supplier" selected>
                                supplier
                              </option>
                              <option value="customer">Customer</option>
                              <option value="customer_supplier">
                                Customer & supplier
                              </option>
                            </select>
                          </div>

                          <div class="col form-group">
                            <div v-show="customerType">
                              <label for="exampleSelectl"
                                >classifications</label
                              >

                              <select
                                class="form-control"
                                name="classification_id"
                              >
                                <option value="">{{ $t("Choose") }}</option>
                                <option
                                  v-for="classification in classifications.data"
                                  v-bind:value="classification.id"
                                  :selected="
                                    classification.id ==
                                    account.classification_id
                                  "
                                >
                                  {{ classification.name }}
                                </option>
                              </select>
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
                    <div class="inf0-g" v-show="active">
                      <div class="col-12">
                        <h5 class="font-weight-bolder text-dark mt-3">
                          Credit limit.
                        </h5>
                        <div class="separator separator-solid my-3"></div>
                        <div class="mt-4 d-flex justify-content-between">
                          <div class="col form-group">
                            <label for="exampleSelectl">debit</label>
                            <input
                              type="text"
                              name="credit_limit_debit"
                              class="form-control"
                              :value="account.total_credit"
                            />
                          </div>
                          <div class="col form-group">
                            <label for="exampleSelectl">credit</label>
                            <input
                              type="text"
                              name="credit_limit_credit"
                              class="form-control"
                              :value="account.total_debit"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="inf0-g">
                      <div class="col-12">
                        <h5 class="font-weight-bolder text-dark mt-3">
                          current balance.
                        </h5>
                        <div class="separator separator-solid my-3"></div>
                        <div class="mt-4 d-flex justify-content-between">
                          <div class="col form-group">
                            <label for="exampleSelectl">total debit</label>
                            <input
                              type="text"
                              name="total_debit"
                              class="form-control"
                              :value="account.total_debit"
                            />
                          </div>
                          <div class="col form-group">
                            <label for="exampleSelectl">total credit</label>
                            <input
                              type="text"
                              name="total_credit"
                              class="form-control"
                              :value="account.total_credit"
                            />
                          </div>
                          <div class="col form-group">
                            <label for="exampleSelectl">posted balance</label>
                            <input
                              type="text"
                              name="posted_balance"
                              class="form-control"
                              :value="account.posted_balance"
                            />
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
import Inputs from "./Inputs.vue";
export default {
  name: "show-accounts",
  components: { LangTabs, Inputs },
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
      active: false,
      customerType: false,
    };
  },
  created() {
    this.getClassifications();
    this.getEmployees();
    this.getParents();

    this.AccountId = this.$route.params.id;
    this.getAccount();
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
    async updateAccount() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const account = {
          URL: "accounts/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateAccount", account);
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
      const classificationUrl = { URL: "classifications" };
      const classifications = await this.$store.dispatch(
        "fetchClassifications",
        classificationUrl
      );
    },
    async getEmployees() {
      const employeeUrl = { URL: "employees" };
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

    getAccount() {
      $axios
        .get("/accounts/" + this.AccountId)
        .then((response) => {
          this.account = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>
