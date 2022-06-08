<template>
  <div>
    <top-bar-card
      :newUrlName="`add-trailerDocumentType`"
      :submit="newTrailerDocumentType"
      :id="0"
      :editUrlName="`edit-trailerDocumentType`"
      :navigationUrl="`districtNavigation`"
      :model="`trailerDocumentType`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="`trailerDocumentType`"
      :operation="`add`"
      :listUrlName="`trailerDocumentType`"
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
        <form @submit.prevent="newTrailerDocumentType" id="trailerDocumentType">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("nav.trailer_card") }}
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
                    @click.prevent="clearValueInput(`code`, 'button_code')"
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
              <active-toggle
                class="col"
                :formData="formData"
                :name="`follow_renewal`"
                :label="$t(`follow_renewal`)"
              />
              <div class="has-float-label col position-relative">
                <div class="form-group" v-if="formData.follow_renewal">
                  <input
                    type="number"
                    v-model="formData.days_count"
                    :name="`days_count`"
                    placeholder="days_count"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.formData.days_count.$error,
                      'is-vaild': !$v.formData.days_count.$invalid,
                    }"
                    @keyup="chanagClass($event, `days_count`)"
                  />
                  <label for class="col-form-label">
                    {{ $t("days_count") }}
                    <span class="text-danger0">*</span>
                  </label>
                  <button
                    @click.prevent="
                      clearValueInput(`days_count`, 'button_days_count')
                    "
                    id="button_days_count"
                    class="close d-none"
                    ref="button_days_count"
                  >
                    &times;
                  </button>
                </div>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf, requiredUnless } from "@vuelidate/validators";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-trailerDocumentType",
  components: { UAnimateContainer, UAnimate },

  props: {
    backErrors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formData: {
        code: "",
        is_active: true,
        name_ar: "",
        name_en: "",
        dtype: 3,
        follow_renewal: true,
        days_count: "",
      },
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
        days_count: {
          requiredIfFollowRenewal: requiredIf(
            this.formData.follow_renewal == true
          ),
        },
      },
    };
  },
  /////
  setup: () => ({ $v: useVuelidate() }),
  mounted() {
    this.getCode();
  },
  methods: {
    async newTrailerDocumentType() {
      ////
      this.$v.$touch();
      if (this.$v.$invalid) {
        return; //
      } else {
        try {
          this.formData.name_ar = this.formData.name_ar
            ? this.formData.name_ar
            : this.formData.name_en;
          this.formData.name_en = this.formData.name_en
            ? this.formData.name_en
            : this.formData.name_ar;

          await this.$store.dispatch("storeTrailerDocumentType", {
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
    async getCode() {
      const code = await this.$store.dispatch("getTrailerDocumentTypeCode");

      this.formData.code = code.data.data;
    },
  },
};
</script>

<style>
</style>