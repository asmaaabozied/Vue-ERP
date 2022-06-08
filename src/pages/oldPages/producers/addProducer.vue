<template>
  <div>
    <top-bar-card
      :newUrlName="`add-producers`"
      :submit="newProducer"
      :id="0"
      :editUrlName="`producers.edit`"
      :navigationUrl="`producerNavigation`"
      :model="`producer`"
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
              <div class="col-md-6 col-12 mt-7">
                <active-toggle />
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
  name: "add-currencies",
  components: { LangTabs, Inputs, Errors, UAnimateContainer, UAnimate },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      producer: {},
      languages: window.$languages,
      active: false,
      isEmpty: false,
    };
  },
  methods: {
    async newProducer() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const producer = { URL: "producers", data: formData };
        await this.$store.dispatch("storeProducer", producer);
        document.location.href = "producers";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    changeBt(event) {
      this.active = event.value;
    },
  },
};
</script>

<style></style>
