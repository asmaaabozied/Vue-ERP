<template>
  <div>
    <top-bar-card :newUrlName="`edit-costWays`" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form id="currentForm" @submit.prevent="updateCostWay">
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
                      :costWay="costWay"
                      :language="language"
                      :errors="errors"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label m-0">
                  <select id="" class="form-control" name="active">
                    <option selected value=""></option>
                    <option value="1" :selected="costWay.active == 1">
                      Active
                    </option>
                    <option value="0" :selected="costWay.active == 0">
                      unActive
                    </option>
                  </select>
                  <label for="" class="col-form-label">active</label>
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
  name: "edit-costWays",
  components: { LangTabs, EditInputs },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      costWay: {},
      languages: window.$languages,
    };
  },
  created() {
    this.costWayId = this.$route.params.id;
    this.getcostWay();
  },
  methods: {
    // async newCostWay() {
    //     try {
    //         var form = document.getElementById("currentForm");
    //         var formData = new FormData(form);
    //         const costWay = { URL: "costWays", data: formData };
    //         await this.$store.dispatch("storeCostWays", costWay);
    //     } catch (errors) {
    //         this.errors = errors;
    //     }
    // },

    async updateCostWay() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const costWay = {
          URL: "/costWays/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateCostWays", costWay);
        document.location.href = "costWays";
      } catch (errors) {
        this.errors = errors;
      }
    },

    getcostWay() {
      $axios
        .get("/costWays/" + this.costWayId)
        .then((response) => {
          this.costWay = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style>
</style>