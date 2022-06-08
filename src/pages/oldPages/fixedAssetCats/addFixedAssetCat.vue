<template>
  <div>
    <top-bar-card
      :newUrlName="`add-fixedAssetCats`"
      :submit="newFixedAssetCat"
      :id="0"
      :editUrlName="`edit-fixedAssetCats`"
      :navigationUrl="`fixedAssetCatNavigation`"
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
        <form @submit.prevent="newFixedAssetCat" id="currentForm">
          <h5 class="font-weight-bolder text-primary">
            {{ $t("general_info") }}
          </h5>
          <div class="separator separator-solid my-3"></div>
          <div class="row align-items-end">
            <div class="col-6 has-float-label">
              <lang-tabs :languages="languages">
                <template v-slot:input="{ language }">
                  <inputs :language="language" :errors="errors" />
                </template>
              </lang-tabs>
              <div class="form-group">
                <input
                  type="text"
                  name="note"
                  id=""
                  placeholder="note"
                  class="form-control"
                  v-on:input="valCode($event)"
                  :class="{ [`${addClassCode}`]: errors.note }"
                />
                <label for="" class="col-form-label">{{ $t("note") }}</label>
                <span class="text-danger" v-if="errors.note" :class="seenCode">
                  {{ errors.note[0] }}
                </span>
              </div>
            </div>

            <div class="col-6 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  name="code"
                  id=""
                  placeholder="code"
                  class="form-control"
                  v-on:input="valCode($event)"
                  :class="{ [`${addClassCode}`]: errors.code }"
                />
                <label for="" class="col-form-label">{{ $t("code") }}</label>
                <span class="text-danger" v-if="errors.code" :class="seenCode">
                  {{ errors.code[0] }}
                </span>
              </div>
              <div class="form-group has-float-label">
                <select
                  class="form-control"
                  id=""
                  name="category_id"
                  :class="{ [`${addCategories}`]: errors.category_id }"
                  v-on:click="valCategories($event)"
                >
                  <option value=""></option>
                  <option
                    v-for="category in categories.data"
                    :key="category.id"
                    v-bind:value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
                <label for="exampleSelectl" class="col-form-label">{{
                  $t("categories")
                }}</label>
                <span
                  class="text-danger"
                  v-if="errors.category_id"
                  :class="seenCategories"
                >
                  {{ errors.category_id[0] }}
                </span>
              </div>

              <div class="form-group p-0 has-float-label">
                <select class="form-control" name="connect_with">
                  <option selected value=""></option>
                  <option value="account">{{ $t("account") }}</option>
                  <option value="car">{{ $t("car") }}</option>
                  <option value="trailer">{{ $t("trailer") }}</option>
                  <option value="account_with_car">
                    {{ $t("account_with_car") }}
                  </option>
                  <option value="account_with_trailer">
                    {{ $t("account_with_trailer") }}
                  </option>
                </select>
                <label for="" class="col-form-label">{{
                  $t("connect_with")
                }}</label>

                <span class="text-danger" v-if="errors.connect_with">
                  {{ errors.connect_with[0] }}
                </span>
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
  name: "add-fixedAssetCats",
  components: { LangTabs, Inputs, Errors, UAnimateContainer, UAnimate },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      fixedAssetCat: {},
      languages: window.$languages,
      isEmpty: false,
      addCountries: "is-invalid",
      seenCountries: "",
      addCategories: "is-invalid",
      seenCategories: "",
    };
  }, ////// end
  created() {
    this.getCountries();
    this.getCategories();
    this.getfinancialaccounts();
  },
  computed: {
    countries() {
      return this.$store.getters.getCountries;
    },
    categories() {
      return this.$store.getters.getCategories;
    },
    accounts() {
      return this.$store.getters.getfinancialaccounts;
    },
  },
  methods: {
    async newFixedAssetCat() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const fixedAssetCat = { URL: "fixedAssetCats", data: formData };
        await this.$store.dispatch("storeFixedAssetCat", fixedAssetCat);
        document.location.href = "fixedAssetCats";
      } catch (errors) {
        if (errors) {
          this.errors = errors;
          this.isEmpty = true;
        }
      }
    },

    ///////end
    async getCountries() {
      const countryUrl = { URL: "countries" };
      const countries = await this.$store.dispatch(
        "fetchCountries",
        countryUrl
      );
    },

    async getCategories() {
      const categoryUrl = { URL: "categories" };
      const categories = await this.$store.dispatch(
        "fetchCategories",
        categoryUrl
      );
    },
    async getfinancialaccounts() {
      const accountUrl = { URL: "financialAccounts" };
      const accounts = await this.$store.dispatch(
        "fetchfinancialaccounts",
        accountUrl
      );
    },

    //////// END
    valCountries(e) {
      if (e.target.value == "") {
        this.addCountries = "is-invalid";
        this.seenCountries = "";
      } else {
        this.addCountries = "";
        this.seenCountries = "d-none";
      }
    },

    valCategories(e) {
      if (e.target.value == "") {
        this.addCategories = "is-invalid";
        this.seenCategories = "";
      } else {
        this.addCategories = "";
        this.seenCategories = "d-none";
      }
    },
  },
};
</script>

<style></style>
