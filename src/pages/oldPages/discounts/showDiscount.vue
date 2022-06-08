<template>
  <div>
    <top-bar-card :newUrlName="`edit-discounts`" @onChangeGrid="changeGrid" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateDiscount" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :Discount="Discount"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label">
                  <select class="form-control" name="active">
                    <option selected value=""></option>
                    <option value="1" :selected="Discount.active == 1">
                      {{ $t("active") }}
                    </option>
                    <option value="0" :selected="Discount.active == 0">
                      {{ $t("unActive") }}
                    </option>
                  </select>
                  <label for="" class="col-form-label">{{
                    $t("active")
                  }}</label>
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
                        <div class="row">
                          <div class="col-3">
                            <div class="form-group has-float-label">
                              <select
                                class="form-control"
                                @change="setMax($event)"
                                name="type"
                              >
                                <option value="">{{ $t("Choose") }}</option>
                                <option
                                  value="fixed"
                                  :selected="Discount.type == 'fixed'"
                                >
                                  {{ $t("Fixed") }}
                                </option>
                                <option
                                  value="percentage"
                                  :selected="Discount.type == 'percentage'"
                                >
                                  {{ $t("percentage") }}
                                </option>
                              </select>
                              <label for="exampleSelectl">{{
                                $t("type")
                              }}</label>
                              <span class="text-danger" v-if="errors.type">
                                {{ errors.type[0] }}
                              </span>
                            </div>
                          </div>
                          <div class="col-3">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="number"
                                  class="form-control"
                                  name="amount"
                                  min="0"
                                  :max="max"
                                  :value="Discount.amount"
                                />
                                <label for="exampleSelectl">{{
                                  $t("amount")
                                }}</label>
                                <span class="text-danger" v-if="errors.amount">
                                  {{ errors.amount[0] }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-3">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  type="date"
                                  name="start_date"
                                  id="example-date-input"
                                  :value="Discount.start_date"
                                />
                                <label class="checkbox checkbox-single">{{
                                  $t("start_date")
                                }}</label>
                                <span
                                  class="text-danger"
                                  v-if="errors.start_date"
                                >
                                  {{ errors.start_date[0] }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-3">
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  type="date"
                                  name="end_date"
                                  id="example-date-input"
                                  :value="Discount.end_date"
                                />
                                <label class="checkbox checkbox-single">{{
                                  $t("end_date")
                                }}</label>
                                <span
                                  class="text-danger"
                                  v-if="errors.end_date"
                                >
                                  {{ errors.end_date[0] }}
                                </span>
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
import EditInputs from "./EditInputs.vue";
export default {
  name: "edit-discounts",
  components: {
    LangTabs,
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
      Discount: {},
      languages: window.$languages,
      max: null,
      gridClassName: window.$gridClassName,
      dataa: "",
    };
  },
  created() {
    this.discountId = this.$route.params.id;
    this.getDiscount();
  },
  methods: {
    async updateDiscount() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const Discount = {
          URL: "/discounts/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateDiscount", Discount);
        document.location.href = "discounts";
      } catch (errors) {
        this.errors = errors;
      }
    },
    showwdata: function () {
      this.dataa = "show";
    },
    hidedata: function () {
      this.dataa = "";
    },
    changeBt() {
      this.active = this.active == true ? false : true;
    },
    changeGrid(event) {
      this.gridClassName = event;
    },
    getDiscount() {
      $axios
        .get("/discounts/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data.data.id);
          this.Discount = response.data.data;
        })
        .catch((error) => {});
    },
    setMax(event) {
      this.max = event.target.value == "percentage" ? 100 : "";
    },
  },
};
</script>

<style></style>