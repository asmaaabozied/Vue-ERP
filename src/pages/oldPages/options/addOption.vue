<template>
  <div>
    <top-bar-card
      :newUrlName="`add-options`"
      :submit="newOption"
      :id="0"
      :editUrlName="`edit-options`"
      :navigationUrl="`optionNavigation`"
      :model="`option`"
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
        <form @submit.prevent="newOption" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>

            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs :language="language" :errors="errors" />
                  </template>
                </lang-tabs>
              </div>
              <div
                class="col-md-6 col-12 mt-7"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    id=""
                    name="type"
                    :class="{ [`${addType}`]: errors.type }"
                    v-on:click="valType($event)"
                  >
                    <option value="" disabled selected>
                      {{ $t("choose_type") }}
                    </option>
                    <option value="number">{{ $t("number") }}</option>
                    <option value="text">{{ $t("text") }}</option>
                    <option value="choose_yes_no">
                      {{ $t("Choose_yes_or_no") }}
                    </option>
                    <option value="date">{{ $t("date") }}</option>
                    <option value="choose_menu">{{ $t("Choose_menu") }}</option>
                  </select>
                  <label for="exampleSelectl"
                    >{{ $t("type") }} <span class="text-danger">*</span></label
                  >
                  <span
                    class="text-danger"
                    v-if="errors.type"
                    :class="seenType"
                  >
                    {{ errors.type[0] }}
                  </span>
                </div>

                <active-toggle />
              </div>
            </div>
          </div>
          <div class="separator separator-solid my-3"></div>

          <optionvalues :errors="errors" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import ValueInputs from "./valueInputs.vue";
import optionvalues from "./optionvalues.vue";
import ValueTabs from "./valueTabs.vue";
import Errors from "@/components/layouts/errors.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "add-options",
  components: {
    LangTabs,
    Inputs,
    ValueInputs,
    ValueTabs,
    optionvalues,
    Errors,
    UAnimateContainer,
    UAnimate,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      option: {},
      languages: window.$languages,
      active: false,
      trs: [
        {
          id: 1,
        },
      ],
      nextItemId: 2,
      isEmpty: false,
      addType: "is-invalid",
      seenType: "",
    };
  },
  methods: {
    addRow() {
      this.trs.push({
        id: (this.nextItemId += this.nextItemId),
      });
    },
    deleteRow(index) {
      this.trs.splice(index, 1);
    },
    async newOption() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const option = { URL: "options", data: formData };
        await this.$store.dispatch("storeOptions", option);
        document.location.href = "options";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    changeBt(event) {
      this.active = event.value;
    },

    valType(e) {
      if (e.target.value == "") {
        this.addType = "is-invalid";
        this.seenType = "";
      } else {
        this.addType = "";
        this.seenType = "d-none";
      }
    },
  },
};
</script>

<style></style>