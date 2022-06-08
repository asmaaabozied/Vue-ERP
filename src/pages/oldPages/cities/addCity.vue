<template>
  <div>
    <top-bar-card
      :newUrlName="`add-cities`"
      :submit="newCity"
      :id="0"
      :editUrlName="`edit-cities`"
      :navigationUrl="`cityNavigation`"
      :model="`city`"
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
        <form @submit.prevent="newCity" id="currentForm">
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
                <name-input :errors="errors" />
              </div>

              <div
                class="col-md-6 col-12 mt-7"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label mb-0">
                  <select
                    class="form-control"
                    id=""
                    name="country_id"
                    :class="{ [`${addCountries}`]: errors.country_id }"
                    v-on:click="valCountries($event)"
                  >
                    <option value=""></option>
                    <option
                      v-for="country in countries.data"
                      :key="country.id"
                      v-bind:value="country.id"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">
                    {{ $t(`countries`) }}
                    <span class="text-danger">*</span></label
                  >
                  <span
                    class="text-danger"
                    v-if="errors.country_id"
                    :class="seenCountries"
                  >
                    {{ errors.country_id[0] }}
                  </span>
                  <!-- <vs-chips
                    v-for="chip in chips"
                    placeholder="New Element"
                    v-model="chips"
                    class="con-vs-chip vs-chip-null closable"
                  >
                    <span class="text-chip vs-chip--text"> {{ chip }}</span>
                    <vs-chip
                      @click="remove(chip)"
                      closable
                      class="btn-close vs-chip--close"
                    >
                      &times;
                    </vs-chip>
                  </vs-chips> -->
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
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-cities",
  components: { LangTabs, Inputs, UAnimateContainer, UAnimate },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      city: {},
      languages: window.$languages,
      isEmpty: false,
      addCountries: "is-invalid",
      seenCountries: "",
      chips: ["Vuejs", "Node", "Vuesax"],
    };
  },
  created() {
    this.getCountries();
  },
  computed: {
    countries() {
      return this.$store.getters.getCountries;
    },
  },
  methods: {
    async newCity() {
      try {
        console.log("ok here");
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const city = { data: formData };
        await this.$store.dispatch("storeCity", city);
        document.location.href = "cities";
      } catch (errors) {
        if (errors) {
          this.errors = errors;
          this.isEmpty = true;
        }
      }
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
    },
    async getCountries() {
      const countryUrl = { URL: "countries" };
      const countries = await this.$store.dispatch(
        "fetchCountries",
        countryUrl
      );
    },
    valCountries(e) {
      if (e.target.value == "") {
        this.addCountries = "is-invalid";
        this.seenCountries = "";
      } else {
        this.addCountries = "is-valid";
        this.seenCountries = "d-none";
      }
    },
  },
};
</script>

<style></style>
