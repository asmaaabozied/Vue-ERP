<template>
  <div>
    <top-bar-card
      :editUrlName="`edit-productTypes`"
      :submit="updateproductTypes"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateproductTypes" id="currentForm">
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
                      :productType="productType"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group m-0 has-float-label">
                  <select id="" class="form-control" name="active">
                    <option selected value=""></option>
                    <option value="1" :selected="productType.active == 1">
                      Active
                    </option>
                    <option value="0" :selected="productType.active == 0">
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
  name: "edit-productTypes",
  components: { LangTabs, EditInputs },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      productType: {},
      languages: window.$languages,
    };
  },
  created() {
    this.typeId = this.$route.params.id;
    this.getproductType();
  },
  methods: {
    async updateproductTypes() {
      try {
        console.log("updated");
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const productType = {
          URL: "/productTypes/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateProductTypes", productType);
        document.location.href = "productTypes";
      } catch (errors) {
        this.errors = errors;
      }
    },
    getproductType() {
      $axios
        .get("/productTypes/" + this.typeId)
        .then((response) => {
          console.log(response.data.data.id);
          this.productType = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style></style>
