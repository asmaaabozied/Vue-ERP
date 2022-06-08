<template>
  <div>
    <top-bar-card

        :newUrlName="`add_currencies`"
        :submit="updateCurrency"
        :id="formData.id"
        :editUrlName="`edit_currencies`"
        :navigationUrl="`currenciesNavigation`"
        :model="`Currency`"
        :mainModuel="`tools`"
        :MainCategory="`cards`"
        :pageName="$t(`currencies`)"
        :operation="`edit`"
        :listUrlName="`currencies`"

    />

    <div
        class="card card-custom mb-9 mt-10"
        v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :backErrors="backErrors"  :parentRefs="$refs"/>
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">

        <form @submit.prevent="updateCurrency" id="Currency">

          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("currencies") }}
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
                      'is-invalid': $v.formData.code.$error || backErrors [`code`],
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
                        'is-invalid': $v.formData.name_ar.$error || backErrors [`name_ar`],
                        'is-vaild': !$v.formData.name_ar.$invalid,
                      }"

                        v-model="$v.formData.name_ar.$model"

                        id="name_ar"
                        ref="name_ar"
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
                        'is-invalid': $v.formData.name_en.$error || backErrors [`name_en`],
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
                        'is-invalid': $v.formData.part_name_ar.$error || backErrors [`part_name_ar`],
                        'is-vaild': !$v.formData.part_name_ar.$invalid,
                      }"

                        v-model="$v.formData.part_name_ar.$model"
                        :name="`part_name_ar`"
                        :placeholder="`Part Name Arabic`"
                    />

                    <label class="col-form-label">
                      {{ $t(`part_name_ar`) }}
                    </label>
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
                        :name="`part_name_en`"
                        :class="{
                        'is-invalid': $v.formData.part_name_en.$error || backErrors [`part_name_en`],
                        'is-vaild': !$v.formData.part_name_en.$invalid,
                      }"

                        v-model="$v.formData.part_name_en.$model"

                        :placeholder="`Part Name English`"
                    />

                    <label class="col-form-label">
                      {{ $t(`part_name_en`) }}
                    </label>
                  </div>
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
                      :name="`symbol`"
                      id="symbol"
                      ref="symbol"

                      v-model="formData.symbol"
                      :placeholder="`symbol`"
                      @keyup="chanagClass($event, `en`)"
                  />

                  <label class="col-form-label">
                    {{ $t(`symbol`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <span
                      class="text-danger"
                      v-if="backErrors[`symbol`]"
                      :class="seenName"
                  >
                      {{ backErrors[`symbol`][0] }}
                    </span>

                  <button
                      @click.prevent="clearValueInput(`symbol`, 'button_en')"
                      id="button_en"
                      class="close d-none"
                      ref="button_en"
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
                <div class="d-flex">
                  <active-toggle :formData="formData" class="col p-0" />
                </div>
              </div>
            </div>
          </div>
          <!--START Currency parts -->
          <div class="row">
            <div :class="`add-tabs w-100 sub-tabs ${gridClassName}`">
              <ul class="nav nav-tabs0" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                      @click="openModel"
                      class="nav-link"
                      id="currencyExchenge-tab"
                      data-toggle="tab"
                      href="#currencyExchenge"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-gear"></i>
                    </span>
                    <span class="nav-text">{{ $t("currencyExchenge") }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                      class="nav-link"
                      id="CurrencyParts-tab"
                      data-toggle="tab"
                      href="#CurrencyParts"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-gear"></i>
                    </span>
                    <span class="nav-text">{{ $t("CurrencyParts") }}</span>
                  </a>
                </li>
              </ul>

              <div class="tab-content main-tab-content" id="myTabContent">
                <div class="btn-collapse">
                  <button @click.prevent="hidedata">
                    {{ $t("Collapse_All") }}
                  </button>
                  |
                  <button @click.prevent="showwdata">
                    {{ $t("Expand_All") }}
                  </button>
                </div>

                <currency-exchange
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                    :formData="formData.exchanges"
                />
                <currency-parts
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                    :formData="formData.parts"
                />
              </div>
            </div>
          </div>
          <!--end Currency parts -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, requiredUnless } from "@vuelidate/validators";
import { UAnimateContainer, UAnimate } from "vue-wow";
import CurrencyParts from "./CurrencyParts.vue";
import CurrencyExchange from "./CurrencyExchange.vue";

export default {
  name: "add-currencies",
  components: { UAnimateContainer, UAnimate, CurrencyParts, CurrencyExchange },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      selectedIndex: 0,

      formData: {
        code: "",
        symbol:"",
        is_active: true,
        name_ar: "",
        name_en: "",
        part_name_ar:"",
        part_name_en:"",
        exchanges:[],
        parts:[],
      },
      isEmpty: false,
      incrment: 2,
      backErrors: {},
      isActive: true,
      activeAssign: false,
      active: false,
      mainModuel: "",
      MainCategory: "",
      gridClassName: "product_list",
      dataa: "",
      addactive: "",
      showModal: false,
      rows: [],
      deleteIcon: function (cell, formatterParams, onRendered) {
        return "<i class='la la-trash'></i>";
      },
    };
  },
  created() {
    this.getResults();
  },
  validations() {
    return {
      formData: {
        name_ar: {
          requiredIfNameAr: requiredUnless(this.formData.name_en),
          requiredIfFuction: requiredUnless(this.validatorName),
        },
        name_en: {
          requiredINameEn: requiredUnless(this.formData.name_ar),
          requiredIfFuction: requiredUnless(this.validatorName),
        },
        part_name_ar: {
          requiredIfPartNameAr: requiredUnless(this.formData.part_name_en),
          requiredIfFuction: requiredUnless(this.validatorName),
        },
        part_name_en: {
          requiredIfPartNameEn: requiredUnless(this.formData.part_name_ar),
          requiredIfFuction: requiredUnless(this.validatorName),
        },
        code: { required },
      },
    };
  },
  setup: () => ({ $v: useVuelidate() }),
  mounted() {

    this.mainModuel = this.$route.params["mainModule"];
    this.MainCategory = this.$route.params["MainCategory"];
  },
  methods: {
    async updateCurrency() {
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



          this.formData.part_name_ar = this.formData.part_name_ar
              ? this.formData.part_name_ar
              : this.formData.part_name_en;
          this.formData.part_name_en = this.formData.part_name_en
              ? this.formData.part_name_ar
              : this.formData.part_name_ar;

          const params = {
            Id: this.$route.params.id,
            data: this.formData,
          };
          await this.$store.dispatch("updateCurrencies", params);
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },
    validatorName() {
      if (this.formData.name_en == "" || this.formData.name_ar == "") {
        return true;
      }
      return false;
    },

    async getResults() {
      const getCurrencies = await this.$store.dispatch("getCurrencies", {
        Id: this.$route.params.id,
      });
      this.formData = getCurrencies.data.data;
      console.log(this.formData)
    },


    /**
     *
     * to clear any data in any button
     */
    clearValueInput(inputId, buttonId) {
      this.formData[`${inputId}`] = "";
      this.$refs[`${buttonId}`].classList.add("d-none");
    },

    openModel() {
      setTimeout(() => {
        this.$refs.modal.show();
      }, 100);
      setTimeout(() => {
        this.$refs.modal.hide();
      }, 200);
      setTimeout(() => {
        this.$refs.modal.show();
      }, 300);
    },
    /**
     *
     * to add and remove class d-none
     */
    chanagClass(e, id) {
      if (e.target.value !== "") {
        this.$refs[`button_${id}`].classList.remove(`d-none`);
      } else {
        this.$refs[`button_${id}`].classList.add(`d-none`);
      }
    },
    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenName = "";
      } else {
        this.seenName = "d-none";
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
    changeGrid(event) {
      this.gridClassName = event;
    },
  },
};
</script>

<style lang="scss">
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
</style>
