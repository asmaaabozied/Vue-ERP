<template>
  <div>
    <top-bar-card
      :newUrlName="`add_vendorsContracts`"
      :submit="newVendorsContracts"
      @onChangeGrid="changeGrid"
      :id="0"
      :editUrlName="`edit_vendorsContracts`"
      :navigationUrl="`vendorContractNavigation`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newVendorsContracts" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs :language="language" :errors="errors" />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="days"
                      placeholder="Days"
                    />
                    <label for="" class="col-form-label">{{
                      $t("Days")
                    }}</label>
                  </div>

                  <span class="text-danger" v-if="errors.days">
                    {{ errors.days[0] }}
                  </span>
                </div>
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="date"
                      class="form-control"
                      name="date"
                      placeholder="date"
                    />
                    <label for="" class="col-form-label">{{
                      $t("date")
                    }}</label>
                  </div>

                  <span class="text-danger" v-if="errors.date">
                    {{ errors.date[0] }}
                  </span>
                </div>
                <div class="has-float-label">
                  <div class="form-group m-0">
                    <input
                      type="date"
                      class="form-control"
                      name="expiry_date"
                      placeholder="expiry_date"
                    />
                    <label for="" class="col-form-label">{{
                      $t("expiry_date")
                    }}</label>
                  </div>

                  <span class="text-danger" v-if="errors.expiry_date">
                    {{ errors.expiry_date[0] }}
                  </span>
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
                    <div class="panel-heading">
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
                          <div class="col has-float-label">
                            <div class="form-group">
                              <input
                                type="number"
                                class="form-control"
                                name="code"
                                placeholder="Code"
                              />
                              <label for="" class="col-form-label">{{
                                $t("code")
                              }}</label>
                            </div>

                            <span class="text-danger" v-if="errors.code">
                              {{ errors.code[0] }}
                            </span>
                          </div>
                          <div class="col has-float-label">
                            <div class="form-group">
                              <input
                                type="number"
                                class="form-control"
                                name="account_value"
                                placeholder="account_value"
                              />
                              <label for="" class="col-form-label">{{
                                $t("account_begining_value")
                              }}</label>
                            </div>

                            <span
                              class="text-danger"
                              v-if="errors.account_value"
                            >
                              {{ errors.account_value[0] }}
                            </span>
                          </div>

                          <!--                                                put a comment (attach_with_others_accounting)-->
                          <div class="col">
                            <div class="form-group has-float-label">
                              <select
                                class="form-control"
                                name="discount_account"
                              >
                                <option selected value=""></option>
                                <option value="first account">
                                  {{ $t("first_account") }}
                                </option>
                                <option value="second account">
                                  {{ $t("second_account") }}
                                </option>
                              </select>
                              <label for="" class="col-form-label">{{
                                $t("discount_account")
                              }}</label>
                            </div>
                            <span
                              class="text-danger"
                              v-if="errors.discount_account"
                            >
                              {{ errors.discount_account[0] }}
                            </span>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-4">
                            <div class="form-group has-float-label">
                              <select
                                class="form-control"
                                name="vendor_account"
                              >
                                <option selected value=""></option>
                                <option value="first account">
                                  {{ $t("first_account") }}
                                </option>
                                <option value="second account">
                                  {{ $t("second_account") }}
                                </option>
                              </select>
                              <label for="" class="col-form-label">{{
                                $t("vendor_account")
                              }}</label>
                            </div>
                            <span
                              class="text-danger"
                              v-if="errors.vendor_account"
                            >
                              {{ errors.vendor_account[0] }}
                            </span>
                          </div>
                          <div class="col-4">
                            <div class="form-group has-float-label">
                              <select class="form-control" name="account">
                                <option selected value=""></option>
                                <option value="first account">
                                  {{ $t("first_account") }}
                                </option>
                                <option value="second account">
                                  {{ $t("second_account") }}
                                </option>
                              </select>
                              <label for="" class="col-form-label">{{
                                $t("account")
                              }}</label>
                            </div>

                            <span class="text-danger" v-if="errors.account">
                              {{ errors.account[0] }}
                            </span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div
                              class="justify-content-between has-float-label"
                            >
                              <div class="form-group">
                                <label for="exampleSelectl">{{
                                  $t("Upload_Files")
                                }}</label>
                                <file-upload></file-upload>
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
import FileUpload from "@/components/form/fileUpload";
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "add_vendorsContracts",
  components: {
    LangTabs,
    Inputs,
    FileUpload,
    UAnimateContainer,
    UAnimate,
    Errors,
    isEmpty: false,
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
      vendorsContract: {},
      languages: window.languages,
      active: false,
      gridClassName: window.$gridClassName,
      dataa: "",
      addactive: "",
      isEmpty: false,
      dataa: "",
      isActive: true,
    };
  },
  created() {},
  computed: {},
  methods: {
    async newVendorsContracts() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        console.log(formData);
        const vendorsContract = {
          URL: "vendorsContracts",
          data: formData,
        };
        await this.$store.dispatch("storevendorsContract", vendorsContract);
        document.location.href = "vendorsContracts";
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
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>

<style></style>
