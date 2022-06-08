<template>
  <div>
    <top-bar-card
      :newUrlName="`add-CompanyInfo`"
      :submit="newCompanyInfo"
      :id="0"
      :editUrlName="`edit-CompanyInfo`"
      :navigationUrl="`CompanyInfoNavigation`"
      :model="`CompanyInfo`"
      :mainModuel="mainModuel"
      :MainCategory="MainCategory"
      :pageName="`CompanyInfo`"
      :operation="`add`"
      :listUrlName="`CompanyInfo`"
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
        <form @submit.prevent="newCompanyInfo" id="CompanyInfo">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("CompanyInfo") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
              <div
                class="col-2"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="img-upload-box">
                  <div v-if="!image">
                    <img
                      :src="url"
                      width="100%"
                      height="100%"
                      :title="$t(uploadimg)"
                    />
                    <input
                      type="file"
                      @change="onFileChange"
                      class="w-100"
                      :title="$t('upload_logo')"
                    />
                  </div>
                  <div v-else>
                    <img :src="image" class="w-100" />
                    <button
                      @click="removeImage"
                      class="
                        border-redius-50
                        btn-shadow btn-white
                        position-absolute
                        right-0
                        border-0
                      "
                    >
                      <span class="ki ki-bold-close icon-ss text-muted"></span>
                    </button>
                  </div>
                  <label class="col-form-label p-2">
                    {{ $t("logo") }}
                  </label>
                </div>
              </div>
              <div class="col-10 p-0">
                <div class="d-flex">
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="acronym"
                        v-model="$v.formData.acronym.$model"
                        placeholder="acronym"
                        ref="acronym"
                        id="acronym"
                        @keyup="chanagClass($event, `acronym`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("acronym")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`acronym`, 'button_acronym')
                        "
                        id="button_acronym"
                        class="close d-none"
                        ref="button_acronym"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                  <div
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
                        name="tax_no"
                        v-model="$v.formData.tax_no.$model"
                        placeholder="tax_no"
                        ref="tax_no"
                        id="tax_no"
                        @keyup="chanagClass($event, `tax_no`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("tax_no")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`tax_no`, 'button_tax_no')
                        "
                        id="button_tax_no"
                        class="close d-none"
                        ref="button_tax_no"
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
                          'is-invalid': $v.formData.companyName_ar.$error,
                          'is-vaild': !$v.formData.companyName_ar.$invalid,
                        }"
                        id="companyName_ar"
                        ref="companyName_ar"
                        v-model="$v.formData.companyName_ar.$model"
                        :placeholder="`Name`"
                        @keyup="chanagClass($event, `ar`)"
                      />

                      <label class="col-form-label">
                        {{ $t(`companyName_ar`) }}
                        <span class="text-danger0">*</span></label
                      >
                      <span
                        class="text-danger"
                        v-if="backErrors[`companyName_ar`]"
                        :class="seenName"
                      >
                        {{ backErrors[`companyName_ar`][0] }}
                      </span>

                      <button
                        @click.prevent="
                          clearValueInput(`companyName_ar`, 'button_ar')
                        "
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
                        :name="`companyName_en`"
                        id="companyName_en"
                        ref="companyName_en"
                        :class="{
                          'is-invalid': $v.formData.companyName_en.$error,
                          'is-vaild': !$v.formData.companyName_en.$invalid,
                        }"
                        v-model="$v.formData.companyName_en.$model"
                        :placeholder="`Name`"
                        @keyup="chanagClass($event, `en`)"
                      />

                      <label class="col-form-label">
                        {{ $t(`companyName_en`) }}
                        <span class="text-danger0">*</span></label
                      >
                      <span
                        class="text-danger"
                        v-if="backErrors[`companyName_en`]"
                        :class="seenName"
                      >
                        {{ backErrors[`companyName_en`][0] }}
                      </span>

                      <button
                        @click.prevent="
                          clearValueInput(`companyName_en`, 'button_en')
                        "
                        id="button_en"
                        class="close d-none"
                        ref="button_en"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="address_ar"
                        v-model="$v.formData.address_ar.$model"
                        placeholder="address_ar"
                        ref="address_ar"
                        id="address_ar"
                        @keyup="chanagClass($event, `address_ar`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("address_ar")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`address_ar`, 'button_address_ar')
                        "
                        id="button_address_ar"
                        class="close d-none"
                        ref="button_address_ar"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="address_en"
                        v-model="$v.formData.address_en.$model"
                        placeholder="address_en"
                        ref="address_en"
                        id="address_en"
                        @keyup="chanagClass($event, `address_en`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("address_en")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`address_en`, 'button_address_en')
                        "
                        id="button_address_en"
                        class="close d-none"
                        ref="button_address_en"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="city"
                        v-model="$v.formData.city.$model"
                        placeholder="city"
                        ref="city"
                        id="city"
                        @keyup="chanagClass($event, `city`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("city")
                      }}</label>
                      <button
                        @click.prevent="clearValueInput(`city`, 'button_city')"
                        id="button_city"
                        class="close d-none"
                        ref="button_city"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                  <div
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
                        name="P_O_Box"
                        v-model="$v.formData.P_O_Box.$model"
                        placeholder="P_O_Box"
                        ref="P_O_Box"
                        id="P_O_Box"
                        @keyup="chanagClass($event, `P_O_Box`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("P_O_Box")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`P_O_Box`, 'button_P_O_Box')
                        "
                        id="button_P_O_Box"
                        class="close d-none"
                        ref="button_P_O_Box"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="tel"
                        class="form-control"
                        name="phone1"
                        v-model="$v.formData.phone1.$model"
                        placeholder="phone1"
                        ref="phone1"
                        id="phone1"
                        @keyup="chanagClass($event, `phone1`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("phone1")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`phone1`, 'button_phone1')
                        "
                        id="button_phone1"
                        class="close d-none"
                        ref="button_phone1"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="tel"
                        class="form-control"
                        name="phone2"
                        v-model="$v.formData.phone2.$model"
                        placeholder="phone2"
                        ref="phone2"
                        id="phone2"
                        @keyup="chanagClass($event, `phone2`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("phone2")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`phone2`, 'button_phone2')
                        "
                        id="button_phone2"
                        class="close d-none"
                        ref="button_phone2"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                </div>

                <div class="d-flex">
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="tel"
                        class="form-control"
                        name="mobile"
                        v-model="$v.formData.mobile.$model"
                        placeholder="mobile"
                        ref="mobile"
                        id="mobile"
                        @keyup="chanagClass($event, `mobile`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("mobile")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`mobile`, 'button_mobile')
                        "
                        id="button_mobile"
                        class="close d-none"
                        ref="button_mobile"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="tel"
                        class="form-control"
                        name="mobile2"
                        v-model="$v.formData.mobile2.$model"
                        placeholder="mobile2"
                        ref="mobile2"
                        id="mobile2"
                        @keyup="chanagClass($event, `mobile2`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("mobile2")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`mobile2`, 'button_mobile2')
                        "
                        id="button_mobile2"
                        class="close d-none"
                        ref="button_mobile2"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="Fax"
                        v-model="$v.formData.Fax.$model"
                        placeholder="Fax"
                        ref="Fax"
                        id="Fax"
                        @keyup="chanagClass($event, `Fax`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("fax")
                      }}</label>
                      <button
                        @click.prevent="clearValueInput(`Fax`, 'button_Fax')"
                        id="button_Fax"
                        class="close d-none"
                        ref="button_Fax"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="postal_code"
                        v-model="$v.formData.postal_code.$model"
                        placeholder="postal_code"
                        ref="postal_code"
                        id="postal_code"
                        @keyup="chanagClass($event, `postal_code`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("postal_code")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`postal_code`, 'button_postal_code')
                        "
                        id="button_postal_code"
                        class="close d-none"
                        ref="button_postal_code"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                </div>

                <div class="d-flex">
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="website"
                        v-model="$v.formData.website.$model"
                        placeholder="website"
                        ref="website"
                        id="website"
                        @keyup="chanagClass($event, `website`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("website")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`website`, 'button_website')
                        "
                        id="button_website"
                        class="close d-none"
                        ref="button_website"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-12 has-float-label position-relative"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        v-model="$v.formData.email.$model"
                        placeholder="email"
                        ref="email"
                        id="email"
                        @keyup="chanagClass($event, `email`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("email")
                      }}</label>
                      <button
                        @click.prevent="
                          clearValueInput(`email`, 'button_email')
                        "
                        id="button_email"
                        class="close d-none"
                        ref="button_email"
                      >
                        &times;
                      </button>
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
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "add-CompanyInfo",
  components: { UAnimateContainer, UAnimate },

  data() {
    return {
      mainModuel: "",
      MainCategory: "",
      image: "",
      url: "assets/default_product_image.png",
      formData: {
        acronym: "",
        mobile: "",
        mobile2: "",
        email: "",
        website: "",
        phone1: "",
        phone2: "",
        address_en: "",
        address_ar: "",
        city: "",
        tax_no: "",
        P_O_Box: "",
        postal_code: "",
        Fax: "",
        is_active: true,
        companyName_ar: "",
        companyName_en: "",
      },
      isEmpty: false,
      backErrors: {},
    };
  },

  validations() {
    return {
      formData: {
        companyName_ar: {
          requiredIfNameAr: requiredIf(this.formData.companyName_en == ""),
        },
        companyName_en: {
          requiredIfNameEn: requiredIf(this.formData.companyName_ar == ""),
        },
        acronym: {},
        mobile: {},
        mobile2: {},
        email: {},
        website: {},
        address_en: {},
        address_ar: {},
        city: {},
        tax_no: {},
        P_O_Box: {},
        phone1: {},
        phone2: {},
        Fax: {},
        postal_code: {},
      },
    };
  },

  setup: () => ({ $v: useVuelidate() }),
  mounted() {
    this.mainModuel = this.$route.params["mainModule"];
    this.MainCategory = this.$route.params["MainCategory"];
  },
  methods: {
    // start upload img
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = "";
    },
    // end upload img

    async newCompanyInfo() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        try {
          this.formData.companyName_ar = this.formData.companyName_ar
            ? this.formData.companyName_ar
            : this.formData.companyName_en;
          this.formData.companyName_en = this.formData.companyName_en
            ? this.formData.companyName_en
            : this.formData.companyName_ar;

          await this.$store.dispatch("storeCompanyInfo", {
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
  },
};
</script>

<style>
</style>