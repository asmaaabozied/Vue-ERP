<template>
  <div>
    <top-bar-card
      :newUrlName="`add-Suppliers`"
      :submit="newSupplier"
      :id="0"
      :editUrlName="`edit-Suppliers`"
      :navigationUrl="`SupplierNavigation`"
      :model="`Supplier`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="`Suppliers`"
      :operation="`add`"
      :listUrlName="`Suppliers`"
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
        <form @submit.prevent="newSupplier" id="Supplier">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("Suppliers") }}
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
                  <label for="" class="col-form-label"
                    >{{ $t("code") }}<span class="text-danger0">*</span></label
                  >
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
                    name="telephone"
                    
                    v-model="formData.telephone"
                    placeholder="telephone"
                    ref="telephone"
                    id="telephone"
                    @keyup="chanagClass($event, `telephone`)"
                  />
                  <label for="" class="col-form-label"
                    >{{ $t("telephone") }}<span class="text-danger0">*</span></label
                  >
                  <button
                    @click.prevent="
                      clearValueInput(`telephone`, 'button_telephone')
                    "
                    id="button_telephone"
                    class="close"
                    ref="button_telephone"
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
                      'is-invalid': $v.formData.tax_number.$error,
                      'is-vaild': !$v.formData.tax_number.$invalid,
                    }"
                    id="tax"
                    ref="tax"
                    v-model="$v.formData.tax_number.$model"
                    :placeholder="`tax`"
                    @keyup="chanagClass($event, 'tax')"
                  />

                  <label class="col-form-label">
                    {{ $t(`tax`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <span
                    class="text-danger"
                    v-if="backErrors[`tax`]"
                    :class="seenName"
                  >
                    {{ backErrors[`tax`][0] }}
                  </span>

                  <button
                    @click.prevent="clearValueInput(`tax`, 'button_tax')"
                    id="button_tax"
                    class="close d-none"
                    ref="button_tax"
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
                      'is-invalid': $v.formData.fax_number.$error,
                      'is-vaild': !$v.formData.fax_number.$invalid,
                    }"
                    id="fax"
                    ref="fax"
                    v-model="$v.formData.fax_number.$model"
                    :placeholder="`fax`"
                    @keyup="chanagClass($event, 'fax')"
                  />

                  <label class="col-form-label">
                    {{ $t(`fax`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <span
                    class="text-danger"
                    v-if="backErrors[`fax`]"
                    :class="seenName"
                  >
                    {{ backErrors[`fax`][0] }}
                  </span>

                  <button
                    @click.prevent="clearValueInput(`fax`, 'button_fax')"
                    id="button_fax"
                    class="close d-none"
                    ref="button_fax"
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
                      'is-invalid': $v.formData.address.$error,
                      'is-vaild': !$v.formData.address.$invalid,
                    }"
                    id="address"
                    ref="address"
                    v-model="$v.formData.address.$model"
                    :placeholder="`address`"
                    @keyup="chanagClass($event, 'address')"
                  />

                  <label class="col-form-label">
                    {{ $t(` address`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <span
                    class="text-danger"
                    v-if="backErrors[`address`]"
                    :class="seenName"
                  >
                    {{ backErrors[`address`][0] }}
                  </span>

                  <button
                    @click.prevent="
                      clearValueInput(`address`, 'button_address')
                    "
                    id="button_address"
                    class="close d-none"
                    ref="button_address"
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
                  <select class="form-control" v-model="formData.account_id">
                    <option selected value=""></option>
                    <option value="1">Account.NO.1</option>
                    <option value="2">Account.NO.2</option>
                    <option value="3">Account.NO.3</option>
                    <option value="4">Account.NO.4</option>
                    <option value="5">Account.NO.5</option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("account")
                  }}</label>
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
        </form>
        <!-- </ValidationObserver> -->
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-Suppliers",
  components: { UAnimateContainer, UAnimate },

  data() {
    return {
      formData: {
        code: "",
        telephone:"",
        tax_number: "",
        fax_number: "",
        address: "",
        is_active: true,
        name_ar: "",
        name_en: "",
      },
      isEmpty: false,
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
        tax_number: { required },
        fax_number: { required },
        address: { required },
        
      },
    };
  },

  setup: () => ({ $v: useVuelidate() }),
  mounted() {
    this.getCode();
  },
  methods: {
    async newSupplier() {
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

          await this.$store.dispatch("storesuppliers", {
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
      const code = await this.$store.dispatch("getsuppliersCode");

      this.formData.code = code.data.data;
    },
  },
};
</script>

<style>
</style>