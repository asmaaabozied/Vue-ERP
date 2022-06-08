<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-fixedAssetCats`"
      :submit="updateFixedAssetCat"
      :id="fixedAssetCat.id"
      :editUrlName="`edit-fixedAssetCats`"
      :navigationUrl="`fixedAssetCatNavigation`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateFixedAssetCat" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :fixedAssetCat="fixedAssetCat"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
                  <select class="form-control" id name="category_id">
                    <option value>Choose {{ $t("note") }}</option>
                    <option
                      v-for="category in categories.data"
                      v-bind:value="category.id"
                      :selected="category.id == fixedAssetCat.category"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl"> {{ $t("category") }}</label>
                  <span class="text-danger" v-if="errors.category_id">{{
                    errors.category_id[0]
                  }}</span>
                </div>
              </div>

              <div class="col-md-6 col-12 mt-7 has-float-label">
                <div class="form-group m-0">
                  <input
                    type="number"
                    name="code"
                    id
                    placeholder="code"
                    class="form-control"
                    :value="fixedAssetCat.code"
                  />
                  <label for class="col-form-label"> {{ $t("code") }}</label>
                  <span class="text-danger" v-if="errors.code">{{
                    errors.code[0]
                  }}</span>
                </div>
              </div>

              <div class="col-md-6 col-12 mt-7 has-float-label">
                <div class="form-group m-0">
                  <input
                    type="text"
                    name="note"
                    id
                    placeholder="note"
                    class="form-control"
                    :value="fixedAssetCat.note"
                  />
                  <label for class="col-form-label"> {{ $t("note") }}</label>
                  <span class="text-danger" v-if="errors.note">{{
                    errors.note[0]
                  }}</span>
                </div>
              </div>
              <div class="col-md-6 col-12 mt-7 has-float-label">
                <div class="form-group p-0 mb-0 has-float-label">
                  <select class="form-control" name="connect_with">
                    <option selected value></option>
                    <option
                      value="account"
                      :selected="fixedAssetCat.connect_with == 'account'"
                    >
                      {{ $t("account") }}
                    </option>
                    <option
                      value="car"
                      :selected="fixedAssetCat.connect_with == 'car'"
                    >
                      {{ $t("car") }}
                    </option>
                    <option
                      value="trailer"
                      :selected="fixedAssetCat.connect_with == 'trailer'"
                    >
                      {{ $t("trailer") }}
                    </option>
                    <option
                      value="account_with_car"
                      :selected="
                        fixedAssetCat.connect_with == 'account_with_car'
                      "
                    >
                      {{ $t("account_with_car") }}
                    </option>
                    <option
                      value="account_with_trailer"
                      :selected="
                        fixedAssetCat.connect_with == 'account_with_trailer'
                      "
                    >
                      {{ $t("account_with_trailer") }}
                    </option>
                  </select>
                  <label for class="col-form-label">
                    {{ $t("connect_with") }}</label
                  >

                  <span class="text-danger" v-if="errors.connect_with">{{
                    errors.connect_with[0]
                  }}</span>
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
  name: "add-fixedAssetCats",
  components: {
    LangTabs,
    EditInputs,
  },
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
    };
  },
  created() {
    this.getFixedAssetCat();
    this.getCategories();
  },

  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
  },
  methods: {
    async updateFixedAssetCat() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const fixedAssetCat = {
          URL: "fixedAssetCats/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateFixedAssetCat", fixedAssetCat);
        document.location.href = "fixedAssetCats";
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getFixedAssetCat() {
      const fixedAssetCat = {
        URL: "fixedAssetCats/" + this.$route.params.id,
      };
      const getFixedAssetCat = await this.$store.dispatch(
        "getFixedAssetCat",
        fixedAssetCat
      );
      this.fixedAssetCat = getFixedAssetCat.data.data;
    },
    async getCategories() {
      const categoryUrl = {
        URL: "categories",
        all: 1,
      };
      const categories = await this.$store.dispatch(
        "fetchCategories",
        categoryUrl
      );
    },
  },
};
</script>

<style>
</style>