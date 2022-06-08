<template>
  <div>
    <top-bar-card
      :newUrlName="`add-discounts`"
      :submit="newDiscount"
      @onChangeGrid="changeGrid"
      :id="0"
      :editUrlName="`discounts.edit`"
      :navigationUrl="`discountNavigation`"
      :model="`discount`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>

      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newDiscount" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="align-items-center row">
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
                <active-toggle />
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
                  class="tab-pane fade"
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
                        <div class="row">
                          <div
                            class="col-3"
                            v-wow="{
                              'animation-name': 'fadeInUp',
                              'animation-duration': '1s',
                            }"
                          >
                            <div class="form-group has-float-label">
                              <select
                                class="form-control"
                                @change="setMax($event)"
                                name="type"
                              >
                                <option value="">{{ $t("Choose") }}</option>
                                <option value="fixed">{{ $t("Fixed") }}</option>
                                <option value="percentage">
                                  {{ $t("percentage") }}
                                </option>
                              </select>
                              <label for="exampleSelectl">
                                {{ $t("type") }}</label
                              >
                              <span class="text-danger" v-if="errors.type">
                                {{ errors.type[0] }}
                              </span>
                            </div>
                          </div>
                          <div
                            class="col-3"
                            v-wow="{
                              'animation-name': 'fadeInUp',
                              'animation-duration': '1s',
                            }"
                          >
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  type="number"
                                  class="form-control"
                                  name="amount"
                                  min="0"
                                  :max="max"
                                  placeholder="amount"
                                />
                                <label for="exampleSelectl">
                                  {{ $t("amount") }}</label
                                >
                                <span class="text-danger" v-if="errors.amount">
                                  {{ errors.amount[0] }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-3"
                            v-wow="{
                              'animation-name': 'fadeInUp',
                              'animation-duration': '1s',
                            }"
                          >
                            <div class="has-float-label">
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  type="date"
                                  name="start_date"
                                  id="example-date-input"
                                />
                                <label class="checkbox checkbox-single">
                                  {{ $t("start_date") }}</label
                                >
                                <span
                                  class="text-danger"
                                  v-if="errors.start_date"
                                >
                                  {{ errors.start_date[0] }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-3"
                            v-wow="{
                              'animation-name': 'fadeInUp',
                              'animation-duration': '1s',
                            }"
                          >
                            <div class="has-float-label">
                              <div class="form-group">
                                <label class="checkbox checkbox-single">
                                  {{ $t("end_date") }}</label
                                >
                                <input
                                  class="form-control"
                                  type="date"
                                  name="end_date"
                                  id="example-date-input"
                                />
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
import Errors from "@/components/layouts/errors.vue";
import Inputs from "./Inputs.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-discounts",
  components: {
    LangTabs,
    Inputs,
    Errors,
    UAnimateContainer,
    UAnimate,
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
      dataa: {
        type: String,
      },
      addactive: {
        type: String,
      },
    },
  },
  data() {
    return {
      discount: {},
      languages: window.$languages,
      max: null,
      gridClassName: window.$gridClassName,
      dataa: "",
      active: false,
      isEmpty: false,
      isActive: true,
      active: false,
      addactive: "",
    };
  },
  methods: {
    changeclass() {
      this.active = this.active == true ? false : true;
    },
    async newDiscount() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const discount = {
          URL: "discounts",
          data: formData,
        };
        await this.$store.dispatch("storeDiscount", discount);
        document.location.href = "discounts";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
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

    setMax(event) {
      console.log(event.target.value);
      this.max = event.target.value == "percentage" ? 100 : "";
    },
  },
};
</script>

<style></style>
