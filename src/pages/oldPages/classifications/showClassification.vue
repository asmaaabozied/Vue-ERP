<template>
  <div>
    <top-bar-card :newUrlName="`add-classifications`" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form ref="my-form" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
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

              <div class="col-md-6">
                <div class="form-group m-0 has-float-label">
                  <select id="" class="form-control" name="active">
                    <option selected value=""></option>
                    <option value="1" :selected="classification.active == 1">
                      Active
                    </option>
                    <option value="0" :selected="classification.active == 0">
                      unActive
                    </option>
                  </select>
                  <label for="" class="col-form-label">active</label>
                  <span class="text-danger" v-if="errors.active">
                    {{ errors.active[0] }}
                  </span>
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
    },
  },
};
</script>

<style>
</style>