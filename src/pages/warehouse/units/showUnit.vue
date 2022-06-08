<template>
  <div>
    <top-bar-card :newUrlName="`edit-units`" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateUnit" id="currentForm" ref="my-form">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :unit="unit"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group m-0 has-float-label">
                  <select id="" class="form-control" name="active">
                    <option selected value=""></option>
                    <option value="1" :selected="unit.active == 1">
                      Active
                    </option>
                    <option value="0" :selected="unit.active == 0">
                      unActive
                    </option>
                  </select>
                  <label for="" class="col-form-label">{{
                    $t("active")
                  }}</label>
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
  name: "edit-units",
  components: { LangTabs, EditInputs },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      unit: {},
      languages: window.$languages,
    };
  },

  created() {
    this.unitId = this.$route.params.id;
    this.getUnit();
  },
  methods: {
    async updateUnit() {
      try {
        console.log("updated");
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const unit = {
          URL: "/units/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateUnit", unit);
        document.location.href = "units";
      } catch (errors) {
        this.errors = errors;
      }
    },

    getUnit() {
      $axios
        .get("/units/" + this.unitId)
        .then((response) => {
          console.log(response.data.data.id);
          this.unit = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style></style>
