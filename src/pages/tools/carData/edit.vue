<template>
  <div>
    <top-bar-card

        :newUrlName="`add_carData`"
        :submit="updateVehicleData"
        :id="formData.id"
        :editUrlName="`edit_carData`"
        :navigationUrl="`vehicleDataNavigation`"
        :model="`CarData`"
        :listUrlName="`carData`"
        :mainModuel="`tools`"
        :MainCategory="`cards`"
        :pageName="`carData`"
        :operation="`edit`"
    />

    <div
        class="card card-custom mb-9 mt-10"
        v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :backErrors="backErrors" :parentRefs="$refs" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">

        <form @submit.prevent="updateVehicleData" id="carData">

          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("carData") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
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
                      'is-invalid': $v.formData.code.$error || backErrors[`code`],
                      'is-vaild': !$v.formData.code.$invalid,
                    }"
                      v-model="$v.formData.code.$model"
                      placeholder="Code"
                      ref="code"
                      id="code"
                      @keyup="chanagClass($event, `code`)"
                  />
                  <label for="" class="col-form-label">{{ $t("code") }}<span class="">*</span></label>
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
              <div class="col-12 d-flex p-0">
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
                        'is-invalid': $v.formData.plate_number_en.$error || backErrors[`plate_number_en`],
                        'is-vaild': !$v.formData.plate_number_en.$invalid,
                      }"
                        id="plate_number_en"
                        ref="plate_number_en"
                        v-model="$v.formData.plate_number_en.$model"
                        :placeholder="`plate_number_en`"
                        @keyup="chanagClass($event, `ar`)"
                    />

                    <label class="col-form-label">
                      {{ $t(`ar.plate_number_en`) }}
                      <span class="text-danger0">*</span></label
                    >
                    <span
                        class="text-danger"
                        v-if="backErrors[`plate_number_en`]"
                        :class="seenName"
                    >
                      {{ backErrors[`plate_number_en`][0] }}
                    </span>

                    <button
                        @click.prevent="clearValueInput(`plate_number_en`, 'button_ar')"
                        id="button_ar"
                        class="close d-none"
                        ref="button_ar"
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
                        :name="`plate_number_ar`"
                        id="plate_number_ar"
                        ref="plate_number_ar"
                        :class="{
                        'is-invalid': $v.formData.plate_number_ar.$error || backErrors[`plate_number_ar`],
                        'is-vaild': !$v.formData.plate_number_ar.$invalid,
                      }"
                        v-model="$v.formData.plate_number_ar.$model"

                        @keyup="chanagClass($event, `en`)"
                    />

                    <label class="col-form-label">
                      {{ $t(`ar.plate_number_ar`) }}
                      <span class="text-danger0">*</span></label
                    >
                    <span
                        class="text-danger"
                        v-if="backErrors[`plate_number_ar`]"
                        :class="seenName"
                    >
                      {{ backErrors[`plate_number_ar`][0] }}
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
              </div>


            </div>
            <div class="row align-items-end">
              <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <select class="form-control"
                          @keyup="chanagClass($event, `ar`)"
                          v-model="formData.vehicle_classification_id"
                          id="vehicle_classification_id"

                  >
                    <option
                        v-for="VehicleType in VehicleClassification"
                        :key="VehicleType.id"
                        v-bind:value="VehicleType.id"
                        :selected="formData.vehicle_classification_id==VehicleType.id"
                    >
                      {{ VehicleType.name }}
                    </option>
                  </select>
                  <label for class="col-form-label"> {{ $t("vehicle_classification_id") }}</label>


                  <span
                      class="text-danger"
                      v-if="backErrors[`vehicle_classification_id`]"
                      :class="seenName"
                  >
                      {{ backErrors[`vehicle_classification_id`][0] }}
                    </span>

                  <button
                      @click.prevent="clearValueInput(`vehicle_classification_id`, 'button_ar')"

                      class="close d-none"
                      ref="button_ar"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
            <div class="row align-items-end">

              <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <select


                      v-model="formData.account_id"
                      class="form-control w-100"

                      id="account_id"
                      ref="account_id"
                      :placeholder="`account_id`"
                      @keyup="chanagClass($event, `ar`)"

                  >

                    <option value></option>
                    <option value="1" :selected="vehicleData.account_id == 1">Dr. Alphonso Volkman Jr.</option>
                    <option value="2" :selected="vehicleData.account_id ==2">Aimee Kovacek.</option>
                    <option value="3" :selected="vehicleData.account_id == 3">Emmett Brown.</option>
                    <option value="4" :selected="vehicleData.account_id == 4">Maria Will.</option>
                    <option value="5" :selected="vehicleData.account_id ==5">Dr. Alphonso Volkman Jr.</option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">
                    {{ $t("accounts") }}</label>

                  <span
                      class="text-danger text-valid"
                      v-if="backErrors.account_id"
                  >
                      {{ backErrors.account_id[0] }}
                    </span>
                </div>
              </div>


              <div class="col-lg-6 has-float-label position-relative">


                <div class="form-group">
                  <select
                      v-model="formData.cost_center_id"
                      class="form-control w-100"
                      id="cost_center_id"
                      ref="cost_center_id"
                      :placeholder="`cost_center_id`"
                      @keyup="chanagClass($event, `ar`)"
                  >
                    <option value></option>
                    <option value="1" :selected="vehicleData.cost_center_id == 1">Dr. Alphonso Volkman Jr.</option>
                    <option value="2" :selected="vehicleData.cost_center_id == 2">Aimee Kovacek.</option>
                    <option value="3" :selected="vehicleData.cost_center_id == 3">Emmett Brown.</option>
                    <option value="4" :selected="vehicleData.cost_center_id == 4">Maria Will.</option>
                    <option value="5" :selected="vehicleData.cost_center_id == 5">Dr. Alphonso Volkman Jr.</option>


                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                  >{{ $t("CostCenters") }}
                  </label>
                  <span
                      class="text-danger text-valid"
                      v-if="backErrors.cost_center_id"
                  >
                      {{ backErrors.cost_center_id[0] }}
                    </span>

                </div>


              </div>

            </div>
            <div class="row align-items-end">
              <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                      type="date"
                      :min="formData.prod_date"
                      :class="{
                    'is-invalid': $v.formData.purchase_date.$error || backErrors[`purchase_date`],
                    'is-vaild': !$v.formData.purchase_date.$invalid,
                  }"
                      v-model="$v.formData.purchase_date.$model"
                      placeholder="purchase_date"
                      class="form-control"
                      @keyup="chanagClass($event, `ar`)"
                  />
                  <label for class="col-form-label">{{ $t("purchase_date") }}</label>
                  <span
                      class="text-danger"
                      v-if="backErrors[`purchase_date`]"
                      :class="seenName"
                  >
                      {{ backErrors[`purchase_date`][0] }}
                    </span>
                </div>
              </div>
            </div>
            <div class="row align-items-end">
              <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                      type="date"
                      :min="formData.purchase_date"
                      :class="{
                    'is-invalid': $v.formData.renew_date.$error || backErrors[`renew_date`],
                    'is-vaild': !$v.formData.renew_date.$invalid,
                  }"
                      v-model="$v.formData.renew_date.$model"
                      placeholder="renew_date"
                      class="form-control"
                      @keyup="chanagClass($event, `ar`)"


                  />
                  <label for class="col-form-label">{{ $t("form_renewal_date") }}</label>
                  <span
                      class="text-danger"
                      v-if="backErrors.renew_date"
                      :class="seenCode"
                  >{{ errors.renew_date[0] }}</span>
                </div>
              </div>
            </div>


            <div class="row align-items-end">
              <div
                  class="col-lg-6 has-float-label position-relative"
                  v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <select class="form-control"
                          @keyup="chanagClass($event, `ar`)"
                          v-model="formData.vehicle_type_id"

                          :class="{
                      'is-invalid': $v.formData.vehicle_type_id.$error || backErrors[`vehicle_type_id`],
                      'is-vaild': !$v.formData.vehicle_type_id.$invalid,
                    }"
                          id="vehicle_type_id"


                  >
                    <option></option>
                    <option
                        v-for="VehicleType in VehicleTypes"
                        :key="VehicleType.id"
                        v-bind:value="VehicleType.id"
                        :selected="vehicleData.vehicle_type_id == VehicleType.id"
                    >
                      {{ VehicleType.name }}
                    </option>
                  </select>
                  <label for class="col-form-label"> {{ $t("vehicle_type_id") }}</label>


                  <span
                      class="text-danger"
                      v-if="backErrors[`vehicle_type_id`]"
                      :class="seenName"
                  >
                      {{ backErrors[`vehicle_type_id`][0] }}
                    </span>

                  <button
                      @click.prevent="clearValueInput(`vehicle_type_id`, 'button_ar')"

                      class="close d-none"
                      ref="button_ar"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>


            <input type="hidden" name="vtype" value="1">


          </div>


          <div :class="`add-tabs w-100 sub-tabs p-0 mt-3 ${gridClassName}`">
            <ul class="nav nav-tabs0" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                    class="nav-link active"
                    id="carcard-tab"
                    data-toggle="tab"
                    href="#carcard-data"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text"> {{ $t("data") }}</span>
                </a>
              </li>

              <li class="nav-item">
                <a
                    class="nav-link"
                    id="cards-tab"
                    data-toggle="tab"
                    href="#page-cards"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text"> {{ $t("cards") }}</span>
                </a>
              </li>


              <li class="nav-item">
                <a
                    class="nav-link"
                    id="covers-tab"
                    data-toggle="tab"
                    href="#page-covers"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text"> {{ $t("covers") }}</span>
                </a>
              </li>
            </ul>


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
              <data-input

                  :dataa="dataa" :formData="formData"
              />
              <edit-cards :formData="formData"/>

              <edit-cover  :covers="covers"/>
            </div>


          </div>
        </form>
        <!-- </ValidationObserver> -->
      </div>
    </div>
  </div>
</template>

<script>
import EditCards from "./EditCards.vue";
import DataInput from "./dataInput.vue";
import {useVuelidate} from "@vuelidate/core";
import {required, requiredIf, requiredUnless} from "@vuelidate/validators";
import {UAnimateContainer, UAnimate} from "vue-wow";
import EditCover from "./editCover.vue";

export default {
  name: "add-vehicleData",
  components: {UAnimateContainer, UAnimate, EditCover, EditCards, DataInput},

  data() {
    return {

      gridClassName: window.$gridClassName,
      addactive: '',
      active: false,
      dataa: "testing",
      VehicleCards: "",
      vehicleData: "",
      covers: "",
      formData: {},
      VehicleTypes: '',
      isEmpty: false,
      VehicleClassification: '',
      backErrors: {},
    };
  },
  validations() {
    return {
      formData: {
        plate_number_ar: {
          requiredIfPlateNumberAr: requiredUnless(this.formData.plate_number_ar),
          requiredIfFuction: requiredUnless(this.validatorName),
        },
        plate_number_en: {
          requiredIPlateNumberEn: requiredUnless(this.formData.plate_number_en),
          requiredIfFuction: requiredUnless(this.validatorName),
        },
        code: {required},
        account_id: {},
        vehicle_type_id: {required},
        purchase_date: {

          valdateProd(val) {
            return new Date(val) < new Date(this.formData.renew_date);
          },
        },
        renew_date: {
          valdateRenew(val) {
            return new Date(val) > new Date(this.formData.purchase_date);
          },
        }
      },
    };
  },
  setup: () => ({$v: useVuelidate()}),
  created() {
    this.getVehicleType();
    this.getVehicleData();
    this.getVehicleDataCover();
    this.getCarClassifications();
  },
  mounted() {

  },
  methods: {
    valCards() {
      let valArr = [];
      this.formData.cards.forEach((element, index) => {
        valArr.push({
          document_type_id: {

          },
          document_issuer_id: {

            requiredIfDocumentTypeId: requiredIf(this.formData.cards[index].document_type_id != ""),

          },
          doc_serial: {
            requiredIfDocumentissuerId: requiredIf(this.formData.cards[index].document_issuer_id != ""),


          },
        });
      });
      return valArr;
    },
    async getCarClassifications() {
      await this.$store.dispatch("fetchCarClassifications");
      this.VehicleClassification = this.$store.getters.getCarClassifications.data;
    },
    async getVehicleType() {
      await this.$store.dispatch("fetchcarTypes");
      this.VehicleTypes = this.$store.getters.getcarTypes.data;

    },
    async getVehicleData() {
      const getVehicleData = await this.$store.dispatch("getVehicleData", {
        Id: this.$route.params.id,
      });
      this.formData = getVehicleData.data.data;
      this.vehicleData = getVehicleData.data.data;
      this.VehicleCards = getVehicleData.data.data.cards;
    },

    async getVehicleDataCover() {
      const getVehicleDataCover = await this.$store.dispatch("getVehicleDataCover", {
        Id: this.$route.params.id,
      });


      this.covers = getVehicleDataCover.data;



    },
    async updateVehicleData() {

      this.$v.$touch();
      if (this.$v.$invalid) {

        return;
      } else {
        try {
          this.formData.plate_number_en = this.formData.plate_number_en
              ? this.formData.plate_number_en
              : this.formData.plate_number_ar;
          this.formData.plate_number_ar = this.formData.plate_number_ar
              ? this.formData.plate_number_ar
              : this.formData.plate_number_en;

          const params = {
            Id: this.$route.params.id,
            data: this.formData,
          };
          await this.$store.dispatch("updateVehicleData", params);
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }


    },
    validatorName() {
      if (this.formData.plate_number_en == "" || this.formData.plate_number_ar == "") {
        return true;
      }
      return false;
    },
    /**
     *
     * to clear any data in any button
     */


    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenName = "";
      } else {
        this.seenName = "d-none";
      }
    },
    clearValueInput(inputId, buttonId) {
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

  },
};
</script>

<style>
</style>
