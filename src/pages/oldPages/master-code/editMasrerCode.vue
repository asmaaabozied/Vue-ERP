<template>
  <div>
    <top-bar-card
      :newUrlName="`add-master-code`"
      :submit="updateTax"
      :id="tax.id"
      :editUrlName="`edit-master-code`"
      :navigationUrl="`taxNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateTax" id="currentForm">
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
                      :tax="tax"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <active-toggle :name="`active`" :active="active" />
              </div>
            </div>
            <hr />
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
  name: "edit-master",
  components: { LangTabs, EditInputs },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      tax: {},
      active: {},
      CountriesTax: {},
      activeAssign: false,
      languages: window.$languages,
    };
  },
  created() {
    this.getTax();
  },
  mounted() {
    this.initializeDate();
  },
  methods: {
    async updateTax() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const tax = {
          URL: "/masters/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateTax", tax);
        document.location.href = "masters";
      } catch (errors) {
        this.errors = errors;
      }
    },

    async newTax() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const tax = { URL: "masters", data: formData };
        await this.$store.dispatch("store", tax);
      } catch (errors) {
        this.errors = errors;
      }
    },

    getTax() {
      $axios
        .get("/masters/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data.data.id);
          this.tax = response.data.data;
          this.active = response.data.data.active;
          this.CountriesTax = this.tax.pivotData;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style></style>
