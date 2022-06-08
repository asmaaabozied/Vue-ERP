<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-pointOfSales`"
      :submit="updatepointOfSales"
      :id="pointOfSale.id"
      :editUrlName="`edit-pointOfSales`"
      :navigationUrl="`pointOfSaleNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form
          ref="my-form"
          id="currentForm"
          @submit.prevent="updatepointOfSales"
        >
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="align-items-end row">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :pointOfSale="pointOfSale"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7 has-float-label">
                <div class="form-group m-0">
                  <input
                    type="text"
                    name="code"
                    id=""
                    placeholder="code"
                    class="form-control"
                    :value="pointOfSale.code"
                  />
                  <label for="" class="col-form-label">{{ $t("code") }}</label>
                  <span class="text-danger" v-if="errors.code">
                    {{ errors.code[0] }}
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
  name: "edit-pointOfSales",
  components: { LangTabs, EditInputs },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      pointOfSale: {},
      languages: window.$languages,
    };
  },
  created() {
    this.pointOfSaleId = this.$route.params.id;
    this.getpointOfSales();
  },
  methods: {
    async updatepointOfSales() {
      try {
        console.log("updated");
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        // const pointOfSale = {
        //     URL: "/pointOfSales/" + this.$route.params.id,
        //     data: formData,
        // };

        var URL = "pointOfSales";

        await $axios
          .post(`/pointOfSales/${this.$route.params.id}`, formData)
          .then(function (data) {
            Swal.fire(
              "Changes Saved",
              "The pointOfSales details have been updated",
              "success"
            );
            document.location.href = "pointOfSales";
          })
          .catch((errors) => {
            this.errors = errors;
          });

        // await $axios.post(paramObject.URL, paramObject.data);
        // router.push({ name: paramObject.URL });
        // Swal.fire(
        //     "Changes Saved",
        //     "The Guarantees details have been updated",
        //     "success"
        // );
        // await this.$store.dispatch("updateGuarantees", pointOfSale);
      } catch (errors) {
        this.errors = errors;
      }
    },

    getpointOfSales() {
      $axios
        .get("/pointOfSales/" + this.pointOfSaleId)
        .then((response) => {
          console.log(response.data.data.id);
          this.pointOfSale = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style>
</style>