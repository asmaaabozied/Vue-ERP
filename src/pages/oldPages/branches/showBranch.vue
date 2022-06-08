<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-branches`"
      @onChangeGrid="changeGrid"
      :id="branch.id"
      :editUrlName="`edit-branches`"
      :navigationUrl="`branchNavigation`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateBranch" id="currentForm">
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
                      :branch="branch"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-6">
                <div class="col p-0">
                  <div class="form-group has-float-label m-0">
                    <select
                      class="form-control"
                      v-on:change="getCities($event)"
                      name="country_id"
                    >
                      <option value="">{{ $t("Choose") }}</option>
                      <option
                        v-for="country in countries.data"
                        v-bind:value="country.id"
                        :selected="country.id == branch.country_id"
                      >
                        {{ country.name }}
                      </option>
                    </select>
                    <label for="exampleSelectl">{{ $t("countries") }}</label>
                    <span class="text-danger" v-if="errors.country_id">
                      {{ errors.country_id[0] }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6" v-if="cities.length">
                <br />
                <div class="col p-0">
                  <div class="form-group has-float-label m-0">
                    <select
                      class="form-control"
                      @change="getDistricts($event)"
                      name="city_id"
                    >
                      <option value="">{{ $t("Choose") }}</option>
                      <option
                        v-for="city in cities"
                        v-bind:value="city.id"
                        :selected="city.id == branch.city_id"
                      >
                        {{ city.name }}
                      </option>
                    </select>
                    <label> {{ $t("cities") }}</label>
                    <span class="text-danger" v-if="errors.city_id">
                      {{ errors.city_id[0] }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-6" v-if="districts.length">
                <div class="col p-0">
                  <br />
                  <div class="form-group has-float-label m-0">
                    <select class="form-control" name="district_id">
                      <option value="">{{ $t("Choose") }}</option>
                      <option
                        v-for="district in districts"
                        v-bind:value="district.id"
                        :selected="district.id == branch.district_id"
                      >
                        {{ district.name }}
                      </option>
                    </select>
                    <label>{{ $t("districts") }}</label>
                    <span class="text-danger" v-if="errors.district_id">
                      {{ errors.district_id[0] }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="`add-tabs w-100 sub-tabs p-0 mt-3 ${gridClassName}`">
            <ul class="nav nav-tabs0" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="map-tab"
                  data-toggle="tab"
                  href="#map-data"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text">{{ $t("Map") }}</span>
                </a>
              </li>
            </ul>
            <div class="tab-content main-tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active tab-product-main"
                id="map-data"
                role="tabpanel"
                aria-labelledby="map-tab"
              >
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent=".tab-pane"
                        href="#collapseOne"
                      >
                        <i class="flaticon2-contract"></i>
                        <span>{{ $t("Map") }}</span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse in show">
                    <div class="panel-body">
                      <div class="row">
                        <div class="col-md-6 col-12 has-float-label">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              v-model="branch.lat"
                              id="lat"
                              name="lat"
                              value="branch.lat"
                            />
                            <label class="col-form-label">{{
                              $t("Lat")
                            }}</label>
                            <span class="text-danger" v-if="errors.lat">
                              {{ errors.lat[0] }}
                            </span>
                          </div>
                        </div>
                        <div class="col-md-6 col-12 has-float-label">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              v-model="branch.lng"
                              id="lng"
                              name="long"
                            />
                            <label class="col-form-label">{{
                              $t("Long")
                            }}</label>
                            <span class="text-danger" v-if="errors.long">
                              {{ errors.long[0] }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-12" style="height: 200px">
                          <div id="map" style="height: 100%"></div>
                        </div>
                      </div>
                    </div>
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
import MainErrors from "@/components/form/MainErrors.vue";
import GoogleMap from "@/components/layouts/GoogleMap.vue";
import switcherLang from "@/components/layouts/switcherLang.vue";
import EditInputs from "./EditInputs.vue";
export default {
  name: "add-countries",
  components: {
    LangTabs,
    EditInputs,
    MainErrors,
    GoogleMap,
    switcherLang,
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      branch: {},
      cities: {},
      districts: {},
      lat: "",
      lng: "",
      languages: window.$languages,
      gridClassName: window.$gridClassName,
    };
  },
  created() {
    this.getResults();
    this.getBranch();
  },
  computed: {
    countries() {
      return this.$store.getters.getCountries;
    },
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    async updateBranch() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const branch = {
          URL: "branches/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateBranch", branch);
        document.location.href = "branches";
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getBranch() {
      const branch = {
        URL: "branches/" + this.$route.params.id,
      };
      const getBranch = await this.$store.dispatch("getBranch", branch);

      this.branch = getBranch.data.data;
    },
    async getResults() {
      const countryUrl = {
        URL: "countries",
      };
      const countries = await this.$store.dispatch(
        "fetchCountries",
        countryUrl
      );
    },
    getCities(event) {
      var countryID = event.target.value;
      $axios
        .get(`/country/cities/${countryID}}`)
        .then((response) => {
          this.cities = response.data.data;
        })
        .catch((error) => {});
    },
    changeGrid(event) {
      this.gridClassName = event;
    },

    getDistricts(event) {
      var cityID = event.target.value;
      $axios
        .get(`city/districts/${cityID}`)
        .then((response) => {
          this.districts = response.data.data;
        })
        .catch(function (error) {});
    },
    initializeMap() {
      const myLatlng = {
        lat: -25.363,
        lng: 131.044,
      };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatlng,
      });
      // Create the initial InfoWindow.
      let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,
      });
      infoWindow.open(map);
      // Configure the click listener.
      map.addListener("click", (mapsMouseEvent) => {
        this.lat = mapsMouseEvent.latLng.lat();
        this.lng = mapsMouseEvent.latLng.lng();
        // Close the current InfoWindow.
        infoWindow.close();
        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
          position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(
          JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );
        infoWindow.open(map);
      });
    },
  },
};
</script>

<style>
</style>