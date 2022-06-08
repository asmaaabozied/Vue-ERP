<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-wareHouses`"
      :submit="updateWareHouse"
      :id="formData.id"
      :editUrlName="`edit-wareHouses`"
      :navigationUrl="`ware-houses`"
      :model="`warehouse`"
      :mainModuel="`warehouses`"
      :MainCategory="`cards`"
      :pageName="`warehouse`"
      :operation="`update`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div v-if="isEmpty">
        <errors :backErrors="backErrors" />
      </div>

      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateWareHouse" id="warehouse">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("Warehouse") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
              <div
                class="col-md-6 col-12 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="string"
                    class="form-control"
                    name="code"
                    :class="{
                      'is-invalid': $v.formData.code.$error,
                      'is-vaild': !$v.formData.code.$invalid,
                    }"
                    v-model="$v.formData.code.$model"
                    placeholder="Code"
                    ref="code"
                    id="code"
                    @keyup="chanagClass($event, `code`)"
                  />
                  <label for="" class="col-form-label"
                    >{{ $t("code") }}<span class="text-danger0">*</span></label
                  >
                  <button
                    @click.prevent="clearValueInput(`code`)"
                    id="button_code"
                    class="close"
                    ref="button_code"
                  >
                    &times;
                  </button>
                </div>
              </div>

              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    v-model="formData.fp_account_id"
                    name="fp_account_id"
                  >
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="account in accounts"
                      :key="account.id"
                      v-bind:value="account.id"
                    >
                      {{ account.name_ar }}
                    </option>
                  </select>
                  <label class="col-form-label">{{ $t("fpAccountId") }}</label>
                  <span
                    class="text-danger text-valid"
                    v-if="backErrors.fp_account_id"
                  >
                    {{ backErrors.fp_account_id[0] }}
                  </span>
                </div>
              </div>

              <div
                class="col-lg-6 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control w-100"
                    :name="`name_en`"
                    id="name_en"
                    ref="name_en"
                    :class="{
                      'is-invalid': $v.formData.name_en.$error,
                      'is-vaild': !$v.formData.name_en.$invalid,
                    }"
                    v-model="$v.formData.name_en.$model"
                    :placeholder="`Name`"
                    @keyup="chanagClass($event, `en`)"
                  />

                  <label class="col-form-label">
                    {{ $t(`en.name`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <span
                    class="text-danger"
                    v-if="backErrors[`name_en`]"
                    :class="seenName"
                  >
                    {{ backErrors[`name_en`][0] }}
                  </span>

                  <button
                    @click.prevent="clearValueInput(`name_en`, 'button_en')"
                    id="button_en"
                    class="close d-none"
                    ref="button_en"
                  >
                    &times;
                  </button>
                </div>
              </div>

              <div
                class="col-lg-6 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control w-100"
                    :class="{
                      'is-invalid': $v.formData.name_ar.$error,
                      'is-vaild': !$v.formData.name_ar.$invalid,
                    }"
                    id="name_ar"
                    ref="name_ar"
                    v-model="$v.formData.name_ar.$model"
                    :placeholder="`Name`"
                    @keyup="chanagClass($event, `ar`)"
                  />

                  <label class="col-form-label">
                    {{ $t(`ar.name`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <span
                    class="text-danger"
                    v-if="backErrors[`name_ar`]"
                    :class="seenName"
                  >
                    {{ backErrors[`name_ar`][0] }}
                  </span>

                  <button
                    @click.prevent="clearValueInput(`name_ar`, 'button_ar')"
                    id="button_ar"
                    class="close d-none"
                    ref="button_ar"
                  >
                    &times;
                  </button>
                </div>
              </div>

              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    v-model="formData.lp_account_id"
                    name="lp_account_id"
                  >
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="account in accounts"
                      :key="account.id"
                      v-bind:value="account.id"
                    >
                      {{ account.name_ar }}
                    </option>
                  </select>
                  <label class="col-form-label">{{ $t("lpAccountId") }}</label>
                  <span
                    class="text-danger text-valid"
                    v-if="backErrors.lp_account_id"
                  >
                    {{ backErrors.lp_account_id[0] }}
                  </span>
                </div>
              </div>

              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    v-model="formData.parent_id"
                    name="parent_id"
                  >
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="parent in parents.data"
                      :key="parent.id"
                      v-bind:value="parent.id"
                    >
                      {{ parent.name_ar }}
                    </option>
                  </select>
                  <label class="col-form-label"
                    >{{ $t("stockparents") }}
                  </label>
                  <span class="text-danger" v-if="backErrors.parent_id">
                    {{ backErrors.parent_id[0] }}
                  </span>
                </div>
              </div>
              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    v-model="formData.warehouse_keeper_id"
                    name="warehouse_keeper_id"
                  >
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="employee in employees"
                      :key="employee.id"
                      v-bind:value="employee.id"
                    >
                      {{ employee.name_en }}
                    </option>
                  </select>
                  <label class="col-form-label">{{
                    $t("warehouse_keeper")
                  }}</label>
                  <span
                    class="text-danger text-valid"
                    v-if="backErrors.warehouse_keeper_id"
                  >
                    {{ backErrors.warehouse_keeper_id[0] }}
                  </span>
                </div>
              </div>

              <div class="col-6">
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    v-model="formData.district_id"
                    name="district_id"
                  >
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="district in districts"
                      :key="district.id"
                      v-bind:value="district.id"
                    >
                      {{ district.name_ar }}
                    </option>
                  </select>
                  <label class="col-form-label">{{ $t("districts") }}</label>
                  <span
                    class="text-danger text-valid"
                    v-if="backErrors.district_id"
                  >
                    {{ backErrors.district_id[0] }}
                  </span>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    v-model="formData.branch_id"
                    name="branch_id"
                  >
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="branch in branches"
                      :key="branch.id"
                      v-bind:value="branch.id"
                    >
                      {{ branch.name_ar }}
                    </option>
                  </select>
                  <label class="col-form-label">{{ $t("branches") }}</label>
                  <span
                    class="text-danger text-valid"
                    v-if="backErrors.branch_id"
                  >
                    {{ backErrors.branch_id[0] }}
                  </span>
                </div>
              </div>
              <div
                class="col-6 has-float-label"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <label class="col-form-label">{{ $t("inBillTypeId") }}</label>

                  <select
                    class="form-control"
                    v-model="formData.in_bill_type_id"
                    name="in_bill_type_id"
                  >
                    <option selected value=""></option>
                    <option value="1">inBillTypeId</option>
                  </select>
                </div>
              </div>

              <div
                class="col-6 has-float-label"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <label class="col-form-label">{{
                    $t("outBillTypeId")
                  }}</label>

                  <select
                    class="form-control"
                    v-model="formData.out_bill_type_id"
                    name="out_bill_type_id"
                  >
                    <option selected value=""></option>
                    <option value="1">outBillTypeId</option>
                  </select>
                </div>
              </div>

              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    v-model="formData.driver_id"
                    name="driver_id"
                  >
                    <option value="">{{ $t("Choose") }}</option>
                    <option value="1">driver one</option>
                  </select>
                  <label class="col-form-label">{{ $t("drivers") }}</label>
                  <span
                    class="text-danger text-valid"
                    v-if="backErrors.driver_id"
                  >
                    {{ backErrors.driver_id[0] }}
                  </span>
                </div>
              </div>
              <div
                class="col-6 has-float-label"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <textarea
                    name=""
                    v-model="formData.notes"
                    id=""
                    cols="30"
                    rows="5"
                    class="form-control"
                    placeholder="Data notes"
                  ></textarea>
                  <label for="" class="col-form-label">{{ $t("notes") }}</label>
                </div>
              </div>
              <div
                class="col-6 has-float-label"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <textarea
                    name=""
                    v-model="formData.address"
                    id=""
                    class="form-control"
                    cols="30"
                    rows="5"
                    placeholder="Data address"
                  ></textarea>
                  <label for="" class="col-form-label">
                    {{ $t("Data address") }}
                  </label>
                </div>
              </div>

              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="d-flex">
                  <active-toggle :formData="formData" class="col p-0" />
                  <active-toggle
                    class="col p-0"
                    :formData="formData"
                    :name="`effect_in_store_value`"
                    :label="`effect_in_store_value`"
                  />
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
                <div class="btn-collapse">
                  <button @click.prevent="showwdata">
                    {{ $t("Expand_All") }}
                  </button>
                  |
                  <button @click.prevent="hidedata">
                    {{ $t("Collapse_All") }}
                  </button>
                </div>
                <div
                  class="tab-pane fade show active tab-product-main"
                  id="map-data"
                  role="tabpanel"
                  aria-labelledby="map-tab"
                >
                  <div class="panel panel-default">
                    <div class="panel-heading">
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
                          <div class="col-md-6 col-12 has-float-label">
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                style="border-radius: 20px"
                                v-model="formData.lat"
                                id="lat"
                                placeholder="Lat"
                                name="lat"
                              />
                              <label class="col-form-label">{{
                                $t("Lat")
                              }}</label>
                              <span class="text-danger" v-if="backErrors.lat">
                                {{ backErrors.lat[0] }}
                              </span>
                            </div>
                          </div>
                          <div class="col-md-6 col-12 has-float-label">
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                style="border-radius: 20px"
                                v-model="formData.lng"
                                id="lng"
                                placeholder="Long"
                                name="long"
                              />
                              <label class="col-form-label">{{
                                $t("Long")
                              }}</label>
                              <span class="text-danger" v-if="backErrors.long">
                                {{ backErrors.long[0] }}
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
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import GoogleMap from "@/components/layouts/GoogleMap.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";
export default {
  name: "edit-wareHouses",
  components: {
    GoogleMap,
  },

  data() {
    return {
      formData: {},
      active: {},
      frontErrors: [],
      gridClassName: window.$gridClassName,
      dataa: "",
      addactive: "",
      isActive: true,
      active: false,
      isEmpty: false,
      backErrors: {},
    };
  },

  computed: {
    employees() {
      return this.$store.getters.getEmployees;
    },
    parents() {
      return this.$store.getters.getWareHouses;
    },
    branches() {
      return this.$store.getters.getBranches.data;
    },
    districts() {
      return this.$store.getters.getDistricts.data;
    },
    accounts() {
      return this.$store.getters.getTempAccounts.data;
    },
  },
  created() {
    this.getDistricts();
    this.getBranches();
    this.getEmployees();
    this.getParents();
    this.getAccounts();
  },
  validations() {
    return {
      formData: {
        name_ar: {
          requiredIfNameAr: requiredIf(this.formData.name_en == ""),
        },
        name_en: {
          requiredIfNameEn: requiredIf(this.formData.name_ar == ""),
        },
        code: { required },
      },
    };
  },
  setup: () => ({ $v: useVuelidate() }),
  mounted() {
    this.initializeMap();
    this.getWareHouse();
  },
  methods: {
    showwdata: function () {
      this.dataa = "show";
      this.addactive = "active";
    },
    hidedata: function () {
      this.dataa = "";
      this.addactive = "";
    },
    changeGrid(event) {
      this.gridClassName = event;
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
    async updateWareHouse() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        try {
          this.formData.name_ar = this.formData.name_ar
            ? this.formData.name_ar
            : this.formData.name_en;
          this.formData.name_en = this.formData.name_en
            ? this.formData.name_en
            : this.formData.name_ar;

          const wareHouse = {
            Id: this.$route.params.id,
            data: this.formData,
          };
          await this.$store.dispatch("updateWareHouse", wareHouse);
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },
    async getWareHouse() {
      const getWareHouse = await this.$store.dispatch("getWareHouse", {
        Id: this.$route.params.id,
      });
      this.formData = getWareHouse.data.data;
      this.active = getWareHouse.data.data.active;
    },

    async getDistricts() {
      await this.$store.dispatch("fetchDistricts");
      try {
      } catch (error) {}
    },
    async getBranches() {
      await this.$store.dispatch("fetchBranches");
      try {
      } catch (error) {}
    },

    // async getEmployees() {
    //   const employeeUrl = { URL: "employees" };
    //   const employees = await this.$store.dispatch(
    //     "fetchEmployees",
    //     employeeUrl
    //   );
    // },
    async getParents() {
      await this.$store.dispatch("fetchWareHouses");
    },
    // ===================Temp===================
    async getAccounts() {
      await this.$store.dispatch("fetchAccounts");
    },
    async getEmployees() {
      await this.$store.dispatch("fetchEmployees");
    },
    // ===================End Temp===================
    clearValueInput(event, inputId, buttonId) {
      console.log(inputId, buttonId);
      this.formData[`${inputId}`] = "";
      this.$refs[`${buttonId}`].classList.add("d-none");
    },
    chanagClass(e, id) {
      if (e.target.value !== "") {
        this.$refs[`button_${id}`].classList.remove(`d-none`);
      } else {
        this.$refs[`button_${id}`].classList.add(`d-none`);
      }
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
        this.formData.lat = mapsMouseEvent.latLng.lat();
        this.formData.lng = mapsMouseEvent.latLng.lng();
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
