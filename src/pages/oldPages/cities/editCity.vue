<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-cities`"
      :submit="updateCity"
      :id="city.id"
      :editUrlName="`edit-cities`"
      :navigationUrl="`cityNavigation`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateCity" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <edit-input :errors="errors" :data="city" />
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label mb-0">
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
                  <label for="exampleSelectl">{{ $t(`countries`) }}</label>
                  <span class="text-danger" v-if="errors.country_id">
                    {{ errors.country_id[0] }}
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
export default {
  name: "add-cities",
  components: {},
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      city: {},
      // languages: window.$languages,
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
        document.location.href = "cities";
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getCity() {
      const city = {
        URL: "cities/" + this.$route.params.id,
      };
      const getCity = await this.$store.dispatch("getCity", city);
      this.city = getCity.data.data;
    },
    async getCountries() {
      const countryUrl = {
        URL: "countries",
      };
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