<template>
  <div>
    <top-bar-card
      :newUrlName="`add-pointOfSales`"
      :submit="newPos"
      :id="0"
      :editUrlName="`edit-pointOfSales`"
      :navigationUrl="`pointOfSaleNavigation`"
      :model="`pointsale`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form ref="my-form" id="currentForm">
          <div class="inf0-top-fixed">
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
              <div class="col-md-6 col-12 mt-7 has-float-label">
                <div class="form-group m-0">
                  <input
                    type="text"
                    name="code"
                    id=""
                    placeholder="code"
                    class="form-control"
                    v-on:input="valCode($event)"
                    :class="{ [`${addClassCode}`]: errors.code }"
                  />
                  <label for="" class="col-form-label">{{ $t("code") }}</label>
                  <span
                    class="text-danger"
                    v-if="errors.code"
                    :class="seenCode"
                  >
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
import Errors from "@/components/layouts/errors.vue";
import Inputs from "./Inputs.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-pointOfSales",
  components: { LangTabs, Inputs, Errors, UAnimateContainer, UAnimate },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      pointOfSales: {},
      languages: window.$languages,
      isEmpty: false,
      addClassCode: "is-invalid",
      seenCode: "",
    };
  },
  methods: {
    async newPos() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const product = {
          URL: "pointOfSales",
          data: formData,
        };
        await this.$store.dispatch("storePointOfSale", product);
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    valCode(e) {
      if (e.target.value == "") {
        this.addClassCode = "is-invalid";
        this.seenCode = "";
      } else {
        this.addClassCode = "";
        this.seenCode = "d-none";
      }
    },
  },
};
</script>

<style>
</style>