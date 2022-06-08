<template>
  <div>
    <top-bar-card
      :newUrlName="`add-determinant`"
      :submit="newDeterminant"
      :id="0"
      :editUrlName="`edit-determinant`"
      :navigationUrl="`determinantNavigation`"
      :model="`determinant`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="`determinant`"
      :operation="`add`"
      :listUrlName="`determinant`"
    />
    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :backErrors="backErrors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newDeterminant" id="determinant">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("determinant") }}
            </h5>
            <div class="separator separator-solid my-3"></div>

            <div class="row">
              <!-- ///////////////////////////////// -->

              <div
                class="col-md-6 col-12 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="numper"
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
                  <label for class="col-form-label">
                    {{ $t("code") }}
                    <span class="text-danger0">*</span>
                  </label>
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

              <!-- ///////////////////////////////// -->

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
                        'is-invalid': $v.formData.name_ar.$error,
                        'is-vaild': !$v.formData.name_ar.$invalid,
                      }"
                      :name="`name_ar`"
                      id="name_ar"
                      ref="name_ar"
                      v-model="$v.formData.name_ar.$model"
                      :placeholder="`Name`"
                      @keyup="chanagClass($event, `ar`)"
                    />

                    <label class="col-form-label">
                      {{ $t(`ar.name`) }}
                      <span class="text-danger0">*</span>
                    </label>
                    <span
                      class="text-danger"
                      v-if="backErrors[`name_ar`]"
                      :class="seenName"
                      >{{ backErrors[`name_ar`][0] }}</span
                    >

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
                      :class="{
                        'is-invalid': $v.formData.name_en.$error,
                        'is-vaild': !$v.formData.name_en.$invalid,
                      }"
                      :name="`name_en`"
                      id="name_en"
                      ref="name_en"
                      v-model="$v.formData.name_en.$model"
                      :placeholder="`Name`"
                      @keyup="chanagClass($event, `en`)"
                    />

                    <label class="col-form-label">
                      {{ $t(`en.name`) }}
                      <span class="text-danger0">*</span>
                    </label>
                    <span
                      class="text-danger"
                      v-if="backErrors[`name_en`]"
                      :class="seenName"
                      >{{ backErrors[`name_en`][0] }}</span
                    >

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

              <!-- ///////////////////////////////// -->

              <!-- ///////////////////////////////// -->

              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <active-toggle
                  class="col"
                  :formData="formData"
                  :name="`is_unique`"
                  :label="$t(`is_unique`)"
                />
              </div>

              <!-- ///////////////////////////////// -->

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

              <!-- ///////////////////////////////// -->

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
                    name="max_qty"
                    :class="{
                      'is-invalid': $v.formData.max_qty.$error,
                      'is-vaild': !$v.formData.max_qty.$invalid,
                    }"
                    v-model="$v.formData.max_qty.$model"
                    placeholder="max_qty"
                    ref="max_qty"
                    id="max_qty"
                    @keyup="chanagClass($event, `max_qty`)"
                  />
                  <label for class="col-form-label">{{ $t("max_qty") }}</label>
                  <button
                    @click.prevent="clearValueInput(`max_qty`)"
                    id="button_max_qty"
                    class="close"
                    ref="button_max_qty"
                  >
                    &times;
                  </button>
                </div>
              </div>

              <!-- ///////////////////////////////// -->

              <div class="col-6">
                <div class="form-group has-float-label">
                  <select
                    @change="append()"
                    class="form-control"
                    name="smallint"
                    :class="{
                      'is-invalid': $v.formData.smallint.$error,
                    }"
                    v-model="value"
                  >
                    <option selected value>Type</option>
                    <option :value="1">Text</option>
                    <option :value="2">Number</option>
                    <option :value="3">Date</option>
                    <option :value="4">yes/no</option>
                    <option :value="5">list</option>
                  </select>

                  <label for class="col-form-label">{{ $t("smallint") }}</label>

                  <span
                    class="text-danger"
                    v-if="backErrors[`smallint`]"
                    :class="seenName"
                    >{{ backErrors[`smallint`][0] }}</span
                  >
                </div>
              </div>

              <!-- ///////////////////////////////// -->

              <div
                v-if="inStock_1"
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
                    name="default_value"
                    :class="{
                      'is-invalid': $v.formData.default_value.$error,
                      'is-vaild': !$v.formData.default_value.$invalid,
                    }"
                    v-model="$v.formData.default_value.$model"
                    placeholder="string"
                    ref="default_value"
                    id="default_value"
                    @keyup="chanagClass($event, `default_value`)"
                  />
                  <label for class="col-form-label">string</label>
                  <button
                    @click.prevent="clearValueInput(`default_value`)"
                    id="button_default_value"
                    class="close"
                    ref="button_default_value"
                  >
                    &times;
                  </button>
                </div>
              </div>
<!-- /////-->
              <div
                v-if="inStock_2"
                class="col-md-6 col-12 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    name="default_value"
                    :class="{
                      'is-invalid': $v.formData.default_value.$error,
                      'is-vaild': !$v.formData.default_value.$invalid,
                    }"
                    v-model="$v.formData.default_value.$model"
                    placeholder="number"
                    ref="default_value"
                    id="default_value"
                    @keyup="chanagClass($event, `default_value`)"
                  />
                  <label for class="col-form-label">number</label>
                  <button
                    @click.prevent="clearValueInput(`default_value`)"
                    id="button_default_value"
                    class="close"
                    ref="button_default_value"
                  >
                    &times;
                  </button>
                </div>
              </div>
<!-- /////-->
              <div
                v-if="inStock_3"
                class="col-md-6 col-12 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="date"
                    class="form-control"
                    name="default_value"
                    :class="{
                      'is-invalid': $v.formData.default_value.$error,
                      'is-vaild': !$v.formData.default_value.$invalid,
                    }"
                    v-model="$v.formData.default_value.$model"
                    placeholder="date"
                    ref="default_value"
                    id="default_value"
                    @keyup="chanagClass($event, `default_value`)"
                  />
                  <label for class="col-form-label">date</label>
                  <button
                    @click.prevent="clearValueInput(`default_value`)"
                    id="button_default_value"
                    class="close"
                    ref="button_default_value"
                  >
                    &times;
                  </button>
                </div>
              </div>
<!-- /////-->
              <div
                v-if="inStock_4"
                class="col-md-6 col-12 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    name="default_value"
                    :class="{
                      'is-invalid': $v.formData.default_value.$error,
                    }"
                    v-model="$v.formData.default_value.$model"
                  >
                    <option selected value></option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </select>

                  <label for class="col-form-label">
                    {{ $t("default_value") }}
                  </label>

                  <span
                    class="text-danger"
                    v-if="backErrors[`default_value`]"
                    :class="seenName"
                    >{{ backErrors[`default_value`][0] }}</span
                  >
                </div>
              </div>
              <!-- ///////////////////////////////// -->
            </div>

            <div
              v-if="inStock_5"
              :class="`add-tabs w-100 sub-tabs p-0 mt-3 ${gridClassName}`"
             >
              <ul class="nav nav-tabs0" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="cards-tab"
                    data-toggle="tab"
                    href="#page-determinantsDetails"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-contract"></i>
                    </span>
                    <span class="nav-text">card</span>
                  </a>
                </li>
              </ul>

              <div class="tab-content main-tab-content" id="myTabContent">
                <div class="btn-collapse">
                  <button @click.prevent="showwdata">Collapse_All</button>
                  |
                  <button @click.prevent="hidedata">Expand_All</button>
                </div>

                <cards :formData="formData" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "./cards.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf, requiredUnless } from "@vuelidate/validators";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-determinant",
  components: { UAnimateContainer, UAnimate, Cards },

  props: {
    backErrors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      gridClassName: window.$gridClassName,

      formData: {
        default_value: "",
        max_qty: "",
        fees_value: "",
        is_unique: false,
        smallint: "1",
        tax_account_id: "",
        code: "",
        is_active: true,
        name_ar: "",
        name_en: "",
        dtype: 2,
        days_count: "",
        determinantsDetail: [
          {
            name_ar: "",
            name_en: "",
          },
        ],
      },
      inStock_1: false,
      inStock_2: false,
      inStock_3: false,
      inStock_4: false,
      inStock_5: false,

      isEmpty: false,
      is_show: "",
      backErrors: {},
    };
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
        fees_value: {},
        default_value: {},
        max_qty: {},
        is_unique: {},
        smallint: {},
        tax_account_id: {},
        fees_type: {},
        determinantsDetail: [
          {
            name_ar: {},
            name_en: {},
          },
        ], // days_count: {
        //   requiredIfFollowRenewal: requiredIf(
        //     this.formData.follow_renewal == true
        //   ),
        // },
      },
    };
  },
  /////
  setup: () => ({ $v: useVuelidate() }),
  mounted() {
    this.getCode();
  },
  methods: {
    async newDeterminant() {
      ////

      this.$v.$touch();
      if (this.$v.$invalid) {
        return; //
      } else {
        console.log(this.formData);
        try {
          this.formData.name_ar = this.formData.name_ar
            ? this.formData.name_ar
            : this.formData.name_en;
          this.formData.name_en = this.formData.name_en
            ? this.formData.name_en
            : this.formData.name_ar;

          await this.$store.dispatch("storeDeterminant", {
            data: this.formData,
          });
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },

    /**
     *
     * to clear any data in any button
     */
    clearValueInput(inputId, buttonId) {
      this.formData[`${inputId}`] = "";
      this.$refs[`${buttonId}`].classList.add("d-none");
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

    addtocartt: function () {
      this.inStock_1 = true;
    },
    addtocartt_2: function () {
      this.inStock_2 = true;
    },
    addtocartt_3: function () {
      this.inStock_3 = true;
    },
    addtocartt_4: function () {
      this.inStock_4 = true;
    },
    addtocartt_5: function () {
      this.inStock_5 = true;
    },
    append: function () {
      if (this.value == 1) {
        this.inStock_2 = false;
        this.inStock_3 = false;
        this.inStock_4 = false;
        this.inStock_5 = false;
        return this.addtocartt();
      } else if (this.value == 2) {
        this.inStock_1 = false;
        this.inStock_3 = false;
        this.inStock_4 = false;
        this.inStock_5 = false;
        return this.addtocartt_2();
      } else if (this.value == 3) {
        this.inStock_1 = false;
        this.inStock_2 = false;
        this.inStock_4 = false;
        this.inStock_5 = false;
        return this.addtocartt_3();
      } else if (this.value == 4) {
        this.inStock_1 = false;
        this.inStock_2 = false;
        this.inStock_3 = false;
        this.inStock_5 = false;
        return this.addtocartt_4();
      }else if (this.value == 5) {
        this.inStock_1 = false;
        this.inStock_2 = false;
        this.inStock_3 = false;
        this.inStock_4 = false;
        return this.addtocartt_5();
      }
    },

    // append: function() {
    //   var id = this.value;
    //   var instock = {
    //     1: this.inStock_1,
    //     2: this.inStock_2,
    //     3: this.inStock_3,
    //     4: this.inStock_4,
    //     5: this.inStock_5
    //   };
    //   for (var i = 1; i <= 5; i++) {
    //     instock[i]  = false;
    //   }
    //   console.log(id,instock[id]);
    //    (instock[id] = true);
    //       console.log(id,instock[id]);

    async getCode() {
      const code = await this.$store.dispatch("getDeterminantCode");

      this.formData.code = code.data.data;
    },
    changeGrid(event) {
      this.gridClassName = event;
    },
  },
};
</script>

<style>
</style>