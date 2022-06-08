<template>
  <div>
    <top-bar-card :newUrlName="`add-pointOfSales`" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form>
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs
                      :language="language"
                      :errors="errors"
                      :pointOfSale="pointOfSale"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group">
                  <input
                    type="text"
                    name="code"
                    id=""
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
import Inputs from "./Inputs.vue";

export default {
  name: "add-pointOfSales",
  components: { LangTabs, Inputs },

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
    async newPos() {
      try {
        var data = document.getElementById("currentForm");
        var formData = new FormData(data);
        var URL = "pointOfSales";
        await $axios.post(`/pointOfSales`, formData);
        router.push({ name: URL });
        Swal.fire(
          "Changes Saved",
          "The product details have been updated",
          "success"
        );
      } catch (error) {
        this.errors = error.response.data.errors;
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