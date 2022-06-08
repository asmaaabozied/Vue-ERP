<template>
  <div>
    <top-bar-card
      :newUrlName="`add-masters`"
      :submit="newMaster"
      :id="0"
      :editUrlName="`edit-masters`"
      :navigationUrl="`taxNavigation`"
      :model="`Master`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newMaster" id="currentForm">
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
                <active-toggle :name="`active`" />
              </div>
            </div>
            <hr />
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
  name: "add-master",
  components: { LangTabs, Inputs, Errors, UAnimateContainer, UAnimate },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      Master: {},
      activeAssign: false,
      languages: window.$languages,
      active: false,
      isEmpty: false,
    };
  },
  mounted() {
    this.initializeDate();
  },
  methods: {
    async newMaster() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const Master = { URL: "masters", data: formData };
        await this.$store.dispatch("storemasters", Master);
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    changeBt(event) {
      this.active = event.value;
    },
    initializeDate() {
      $("#hijri-date-input").hijriDatePicker();
    },
  },
};
</script>

<style></style>
