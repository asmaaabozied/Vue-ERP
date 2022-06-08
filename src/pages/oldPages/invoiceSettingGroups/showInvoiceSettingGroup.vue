<template>
  <div>
    <top-bar-card :newUrlName="`edit-invoiceSettingGroups`" />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form>
          <h5 class="font-weight-bolder text-primary">
            {{ $t("show_invoiceSettingGroup") }}.
          </h5>
          <div class="separator separator-solid my-3"></div>
          <div class="row">
            <div class="col-6">
              <div class="fw-bold text-gray-600 fs-7">
                {{ $t("invoiceSettingGroup_name") }}
              </div>
              <div class="fw-bolder text-gray-800 fs-6">
                {{ invoiceSettingGroup.name }}
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
  name: "add-invoiceSettingGroups",
  components: { LangTabs, Inputs },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      invoiceSettingGroup: {},
      languages: window.$languages,
    };
  },
  created() {
    this.getInvoiceSettingGroup();
    this.getCountries();
  },

  computed: {
    countries() {
      return this.$store.getters.getCountries;
    },
  },
  methods: {
    async updateInvoiceSettingGroup() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const invoiceSettingGroup = {
          URL: "invoiceSettingGroups/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch(
          "updateInvoiceSettingGroup",
          invoiceSettingGroup
        );
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getInvoiceSettingGroup() {
      const invoiceSettingGroup = {
        URL: "invoiceSettingGroups/" + this.$route.params.id,
      };
      const getInvoiceSettingGroup = await this.$store.dispatch(
        "getInvoiceSettingGroup",
        invoiceSettingGroup
      );
      this.invoiceSettingGroup = getInvoiceSettingGroup.data.data;
    },
    async getCountries() {
      const countryUrl = { URL: "countries", all: 1 };
      const countries = await this.$store.dispatch(
        "fetchCountries",
        countryUrl
      );
    },
  },
};
</script>

<style>
</style>