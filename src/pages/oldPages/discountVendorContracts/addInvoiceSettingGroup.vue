<template>
  <div>
    <top-bar-card
      :newUrlName="`add-invoiceSettingGroups`"
      :submit="newInvoiceSettingGroup"
      :id="0"
      :editUrlName="`edit-invoiceSettingGroups`"
      :navigationUrl="`invoiceGroupNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>

      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newInvoiceSettingGroup" id="currentForm">
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

            <div class="col-md-6 col-12 mt-7">
              <div class="col-md-6 col-12 mt-7">
                <active-toggle />
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
export default {
  name: "add-invoiceSettingGroups",
  components: { LangTabs, Inputs, Errors },
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
      isEmpty: false,
      addCities: "is-invalid",
      seenCities: "",
    };
  },

  created() {
    this.getCities();
  },
  computed: {
    cities() {
      return this.$store.getters.getCities;
    },
  },

  methods: {
    async newInvoiceSettingGroup() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const invoiceSettingGroup = {
          URL: "invoiceSettingGroups",
          data: formData,
        };
        await this.$store.dispatch(
          "storeInvoiceSettingGroup",
          invoiceSettingGroup
        );
        document.location.href = "invoiceSettingGroups";
      } catch (errors) {
        if (errors) {
          this.errors = errors;
          this.isEmpty = true;
        }
      }
    },

    async getCities() {
      const cityUrl = { URL: "cities" };
      const cities = await this.$store.dispatch("fetchCities", cityUrl);
    },

    valCities(e) {
      if (e.target.value == "") {
        this.addCities = "is-invalid";
        this.seenCities = "";
      } else {
        this.addCities = "";
        this.seenCities = "d-none";
      }
    },
  },
};
</script>

<style>
</style>