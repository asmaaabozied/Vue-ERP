<template>
  <div>
    <top-bar-card
      :newUrlName="`add-classifications`"
      :submit="updateClassification"
      :id="classification.id"
      :editUrlName="`edit-classifications`"
      :navigationUrl="`classificationNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form ref="my-form" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-md-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :classification="classification"
                    />
                  </template>
                </lang-tabs>
              </div>

              <div class="col-md-6 col-12 mt-7">
                <active-toggle :active="active" />
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
  name: "edit-classifications",
  components: { LangTabs, EditInputs },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      classification: {},
      active: {},
      languages: window.$languages,
    };
  },
  created() {
    this.getClassification();
  },
  methods: {
    async updateClassification() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const classification = {
          URL: "classifications/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateClassification", classification);
        document.location.href = "classifications";
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getClassification() {
      const classification = {
        URL: "classifications/" + this.$route.params.id,
      };
      const getClassification = await this.$store.dispatch(
        "getClassification",
        classification
      );
      this.classification = getClassification.data.data;
      this.active = getClassification.data.data.active;
    },
  },
};
</script>

<style></style>
