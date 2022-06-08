<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`settings.invoice.create`"
      :submit="newInvoiceSetting"
    />

    <div
      class="card card-custom mt-10 mb-3"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form
          @submit.prevent="newInvoiceSetting"
          id="invoice_setting_form"
          autocomplete="off"
          method="POST"
          action="#"
        >
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
                <div
                  class="form-group has-float-label m-0"
                  style="visibility: hidden"
                >
                  <select name="" class="form-control">
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <label class="col-form-label">{{ $t("Group") }}</label>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="form-group has-float-label">
                  <select
                    name="invoice_type_id"
                    class="form-control"
                    v-model="invoice_type_id"
                  >
                    <option disabled selected>
                      {{ $t("Select_Invoice_Type") }}
                    </option>
                    <option
                      v-for="(invoiceType, i) in invoiceSetting.invoiceTypes"
                      :value="invoiceType.id"
                      :key="i"
                    >
                      {{ invoiceType.name }}
                    </option>
                  </select>
                  <span class="text-danger" v-if="errors['invoice_type_id']">
                    {{ errors["invoice_type_id"] }}
                  </span>
                  <label class="col-form-label">{{ $t("invoice_type") }}</label>
                </div>
                <div class="row">
                  <div class="col has-float-label">
                    <div class="form-group m-0">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="prefix"
                        name="prefix"
                      />
                      <label class="col-form-label">{{ $t("prefix") }}</label>
                    </div>
                  </div>

                  <div class="col has-float-label">
                    <div class="form-group m-0">
                      <input
                        type="number"
                        name="start_serial"
                        min="1"
                        class="form-control"
                      />
                      <label class="col-form-label">{{
                        $t("start_serial")
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="`add-tabs w-100 sub-tabs ${gridClassName}`">
            <ul class="nav nav-tabs0" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="general"
                  data-toggle="tab"
                  href="#page-general2"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-gear"></i>
                  </span>
                  <span class="nav-text">{{ $t("General") }}</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="data"
                  data-toggle="tab"
                  href="#page-data"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text">{{ $t("data") }}</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="tax" data-toggle="tab" href="#page-tax">
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text">{{ $t("tax") }}</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="options"
                  data-toggle="tab"
                  href="#page-options"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text">{{ $t("options") }}</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="default_values"
                  data-toggle="tab"
                  href="#page-default_values"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text">{{ $t("default_values") }}</span>
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

              <GeneralTab
                :invoice_type_id="invoice_type_id"
                :errors="errors"
                :dataa="dataa"
                :addactive="addactive"
              ></GeneralTab>

              <DataTab
                :data="data"
                :errors="errors"
                :dataa="dataa"
                :addactive="addactive"
              ></DataTab>

              <TaxTab
                :taxes="invoiceSetting.taxes"
                :data="data"
                :errors="errors"
                :dataa="dataa"
                :addactive="addactive"
              ></TaxTab>

              <OptionsTab
                :invoiceSetting="invoiceSetting"
                :data="data"
                :errors="errors"
                :dataa="dataa"
                :addactive="addactive"
              ></OptionsTab>

              <DefaultValuesTab
                :invoiceSetting="invoiceSetting"
                :data="data"
                :errors="errors"
                :dataa="dataa"
                :addactive="addactive"
              ></DefaultValuesTab>
            </div>
          </div>
        </form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import GeneralTab from "./generalTab.vue";
import DataTab from "./dataTab";
import TaxTab from "./taxTab";
import OptionsTab from "./optionsTab";
import DefaultValuesTab from "./defaultValuesTab";
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "settings.invoice.create",

  components: {
    GeneralTab,
    DataTab,
    TaxTab,
    OptionsTab,
    DefaultValuesTab,
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
      languages: window.languages,
      gridClassName: "product_list",
      invoice_type_id: "",
      data: true,
      isActive: true,
      activeAssign: false,
      tab1Active: true,
      tab2Active: false,
      active: false,
      dataa: "",
      addactive: "",
      addclass: "is-invalid",
    };
  },
  created() {
    this.createInvoiceSetting();
  },
  computed: {
    invoiceSetting() {
      return this.$store.getters.getInvoiceSettings;
    },
  },
  methods: {
    async newInvoiceSetting() {
      try {
        var form = document.getElementById("invoice_setting_form");
        var formData = new FormData(form);
        const invoiceSetting = {
          URL: "settings/invoice",
          data: formData,
        };
        await this.$store.dispatch("storeInvoiceSetting", invoiceSetting);
      } catch (errors) {
        this.errors = errors;
      }
    },
    async createInvoiceSetting() {
      const invoiceSettingUrl = {
        URL: "settings/invoice/create",
        all: 1,
      };
      const invoiceSettings = await this.$store.dispatch(
        "createInvoiceSetting",
        invoiceSettingUrl
      );
    },
    changeBt() {
      this.active = this.active == true ? false : true;
    },
    changeGrid(event) {
      this.gridClassName = event;
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    showwdata: function () {
      this.dataa = "show";
      this.addactive = "active";
    },
    hidedata: function () {
      this.dataa = "";
      this.addactive = "";
    },
  },
};
</script>
