<template>
  <div>
    <top-bar-card
      :newUrlName="`add-branches`"
      :submit="newBranch"
      @onChangeGrid="changeGrid"
      :id="0"
      :editUrlName="`edit-branches`"
      :navigationUrl="`branchNavigation`"
      :model="`branch`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }"
    >
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <div v-if="isEmpty">
          <errors :errors="errors" />
        </div>
        <form @submit.prevent="newBranch" id="currentForm">
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
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="col p-0">
                  <div class="form-group has-float-label m-0">
                    <select
                      class="form-control"
                      v-on:change="getCities($event)"
                      name="country_id"
                      :class="{ [`${addCountries}`]: errors.country_id }"
                      v-on:click="valCountries($event)"
                    >
                      <option value=""></option>
                      <option
                        v-for="country in countries.data"
                        v-bind:value="country.id"
                      >
                        {{ country.name }}
                      </option>
                    </select>

                    <label class="col-form-label" for="exampleSelectl"
                      >{{ $t("countries") }} <span class="text-danger">*</span>
                    </label>
                    <span
                      class="text-danger"
                      v-if="errors.country_id"
                      :class="seenCountries"
                    >
                      {{ errors.country_id[0] }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-6"
                v-if="cities.length"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="col p-0">
                  <br />
                  <div class="col p-0">
                    <div class="form-group has-float-label m-0">
                      <select
                        class="form-control"
                        @change="getDistricts($event)"
                        name="city_id"
                        :class="{ [`${addCities}`]: errors.country_id }"
                        v-on:click="valCities($event)"
                        :required="!selected"
                      >
                        <option value=""></option>
                        <option v-for="city in cities" v-bind:value="city.id">
                          {{ city.name }}
                        </option>
                      </select>
                      <label class="col-form-label">
                        {{ $t("cities") }}
                        <span class="text-danger">*</span></label
                      >
                      <span
                        class="text-danger"
                        v-if="errors.city_id"
                        :class="seenCities"
                      >
                        {{ errors.city_id[0] }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-6"
                v-if="districts.length"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div
                  class="col p-0"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <br />
                  <div
                    class="col p-0"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group has-float-label m-0">
                      <select class="form-control" id="" name="district_id">
                        <option value=""></option>
                        <option
                          v-for="district in districts"
                          v-bind:value="district.id"
                        >
                          {{ district.name }}
                        </option>
                      </select>
                      <label class="col-form-label"
                        >{{ $t("districts") }}
                        <span class="text-danger">*</span>
                      </label>
                      <span class="text-danger" v-if="errors.district_id">
                        {{ errors.district_id[0] }}
                      </span>
                    </div>
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
                  <span class="nav-text"> {{ $t("Map") }}</span>
                </a>
              </li>
            </ul>
            <!-- <form @submit.prevent="newBranch" id="currentForm"> -->
            <div class="tab-content main-tab-content" id="myTabContent">
              <div class="btn-collapse">
                <button @click.prevent="showwdata">
                  {{ $t("Collapse_All") }}
                </button>
                |
                <button @click.prevent="hidedata">
                  {{ $t("Expand_All") }}
                </button>
              </div>
              <div
                class="tab-pane fade show active tab-product-main"
                id="map-data"
                role="tabpanel"
                aria-labelledby="map-tab"
              >
                <div class="panel panel-default">
                  <div
                    class="panel-heading"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '2s',
                    }"
                  >
                    <h4
                      class="panel-title"
                      @click.prevent="changeclass"
                      :class="[{ active: active }, `${addactive}`]"
                    >
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
                  <div
                    id="collapseOne"
                    class="panel-collapse collapse"
                    :class="`${dataa}`"
                  >
                    <div class="panel-body">
                      <div class="row">
                        <div
                          class="col-md-6 col-12 has-float-label"
                          v-wow="{
                            'animation-name': 'fadeInUp',
                            'animation-duration': '2s',
                          }"
                        >
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              style="border-radius: 20px"
                              v-model="lat"
                              id="lat"
                              placeholder="Lat"
                              name="lat"
                            />
                            <label class="col-form-label"
                              >{{ $t("Lat") }}
                              <span class="text-danger">*</span>
                            </label>
                            <span class="text-danger" v-if="errors.lat">
                              {{ errors.lat[0] }}
                            </span>
                          </div>
                        </div>
                        <div
                          class="col-md-6 col-12 has-float-label"
                          v-wow="{
                            'animation-name': 'fadeInUp',
                            'animation-duration': '2s',
                          }"
                        >
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              style="border-radius: 20px"
                              v-model="lng"
                              id="lng"
                              placeholder="Long"
                              name="long"
                            />
                            <label class="col-form-label"
                              >{{ $t("Long") }}
                              <span class="text-danger">*</span>
                            </label>
                            <span class="text-danger" v-if="errors.long">
                              {{ errors.long[0] }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row mt-2"
                        v-wow="{
                          'animation-name': 'fadeInUp',
                          'animation-duration': '2s',
                        }"
                      >
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

import GoogleMap from "@/components/layouts/GoogleMap.vue";
import switcherLang from "@/components/layouts/switcherLang.vue";
import Inputs from "./Inputs.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-countries",
  components: {
    LangTabs,
    Inputs,
    MainErrors,
    GoogleMap,
    switcherLang,

    UAnimateContainer,
    UAnimate,
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
      dataa: {
        type: String,
      },
      addactive: {
        type: String,
      },
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
      isEmpty: false,
      addCountries: "is-invalid",
      seenCountries: "",
      addCities: "is-invalid",
      seenCities: "",
      gridClassName: window.$gridClassName,
      dataa: "",
      active: false,
      addactive: "",
    };
  },
  created() {
    this.getResults();
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
    changeclass() {
      this.active = this.active == true ? false : true;
    },
    async newBranch() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const branch = {
          URL: "branches",
          data: formData,
        };
        await this.$store.dispatch("storeBranch", branch);
        document.location.href = "branches";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    async getResults() {
      const countryUrl = { URL: "countries" };
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
      const myLatlng = { lat: -25.363, lng: 131.044 };
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
    changeGrid(event) {
      this.gridClassName = event;
    },
    valCountries(e) {
      if (e.target.value == "") {
        this.addCountries = "is-invalid";
        this.seenCountries = "";
      } else {
        this.addCountries = "";
        this.seenCountries = "d-none";
      }
    },
    valCities(e) {
      if (e.target.value == "") {
        this.addCities = "is-invalid";
        this.seenCities = "";
      } else {
        this.addCities = "";
        this.seenCities = "d-none";
      }
    },
    showwdata: function () {
      this.dataa = "show";
      this.addactive = "active";
    },
    hidedata: function () {
      this.dataa = "";
      this.addactive = "";
    },
    changeBt() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>

<style></style>
