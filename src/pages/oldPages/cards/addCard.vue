<template>
  <div>
    <top-bar-card
      :newUrlName="`add-cards`"
      :submit="newCard"
      :id="0"
      :editUrlName="`edit-cards`"
      :navigationUrl="`cardNavigation`"
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
  name: "add-cards",
  components: { LangTabs, Inputs, Errors, UAnimateContainer, UAnimate },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      card: {},
      languages: window.$languages,
      isEmpty: false,
    };
  },
  methods: {
    async newCard() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const card = { URL: "cards", data: formData };
        await this.$store.dispatch("storeCard", card);
        document.location.href = "cards";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
  },
};
</script>

<style>
</style>