<template>
  <div>
    <top-bar-card :newUrlName="`edit-cities`" />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form>
          <h5 class="font-weight-bolder text-primary">
            {{ $t("general_info") }}
          </h5>
          <div class="separator separator-solid my-3"></div>
          <div class="row">
            <div class="col-6">
              <lang-tabs :languages="languages">
                <template v-slot:input="{ language }">
                  <inputs :language="language" :errors="errors" :city="city" />
                </template>
              </lang-tabs>
            </div>

            <div class="col-6">
              <div class="col-12">
                <div class="mt-4 d-flex justify-content-between">
                  <div class="col form-group">
                    <label for="exampleSelectl">{{ $t(`countries`) }}</label>
                    <select class="form-control" id="" name="country_id">
                      <option value="">{{ $t("Choose") }}</option>
                      <option
                        v-for="country in countries.data"
                        v-bind:value="country.id"
                        :selected="country.id == city.country_id"
                      >
                        {{ country.name }}
                      </option>
                    </select>
                    <span class="text-danger" v-if="errors.country_id">
                      {{ errors.country_id[0] }}
                    </span>
                  </div>
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
  name: "add-cities",
  components: { LangTabs, Inputs },
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
    };
  },
  created() {
    this.getCity();
    this.getCountries();
  },

  computed: {
    countries() {
      return this.$store.getters.getCountries;
    },
  },
  methods: {
    async updateCity() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const city = {
          URL: "cities/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateCity", city);
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getCity() {
      const city = { URL: "cities/" + this.$route.params.id };
      const getCity = await this.$store.dispatch("getCity", city);
      this.city = getCity.data.data;
    },
    async getCountries() {
      const countryUrl = { URL: "countries" };
      const countries = await this.$store.dispatch(
        "fetchCountries",
        countryUrl
      );
    },
  },
};
</script>

<style>
</style>