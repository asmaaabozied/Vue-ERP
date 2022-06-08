<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-invoiceSettingGroups`"
      :submit="updateInvoiceSettingGroup"
      :id="invoiceSettingGroup.id"
      :editUrlName="`edit-invoiceSettingGroups`"
      :navigationUrl="`invoiceGroupNavigation`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateInvoiceSettingGroup" id="currentForm">
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
                      :invoiceSettingGroup="invoiceSettingGroup"
                    />
                  </template>
                </lang-tabs>
              </div>

              <div class="col-md-6 col-12 mt-7">
                <div class="col-md-6 col-12 mt-7">
                  <active-toggle />
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
  name: "add-invoiceSettingGroups",
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
      invoiceSettingGroup: {},
      languages: window.$languages,
    };
  },
  created() {
    this.getInvoiceSettingGroup();
    this.getCities();
  },

  computed: {
    cities() {
      return this.$store.getters.getCities;
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
        document.location.href = "invoiceSettingGroups";
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
    async getCities() {
      const cityUrl = {
        URL: "cities",
        all: 1,
      };
      const cities = await this.$store.dispatch("fetchCities", cityUrl);
    },
  },
};
</script>

<style></style>
