<template>
  <div>
    <top-bar-card
      :newUrlName="`add-customers`"
      :submit="newCustomer"
      :id="0"
      :editUrlName="`edit-customers`"
      :navigationUrl="`customersNavigation`"
      :model="`Customer`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="`customers`"
      :operation="`add`"
      :listUrlName="`customers`"
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
        <form @submit.prevent="newCustomer" id="Customer">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("customers") }}
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
                      'is-invalid':
                        $v.formData.code.$error || backErrors[`code`],
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
                  <!--                  <span-->
                  <!--                      class="text-danger"-->
                  <!--                      v-if="backErrors[`code`]"-->
                  <!--                      :class="seenName"-->
                  <!--                  >-->
                  <!--                      {{ backErrors[`code`][0] }}-->
                  <!--                    </span>-->
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
                        'is-invalid':
                          $v.formData.name_ar.$error || backErrors[`name_ar`],
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
                    <!--                    <span-->
                    <!--                        class="text-danger"-->
                    <!--                        v-if="backErrors[`name_ar`]"-->
                    <!--                        :class="seenName"-->
                    <!--                    >-->
                    <!--                      {{ backErrors[`name_ar`][0] }}-->
                    <!--                    </span>-->

                    <button
                      @click.prevent="clearValueInput(`name_ar`)"
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
                        'is-invalid':
                          $v.formData.name_en.$error || backErrors[`name_en`],
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
                    <!--                    <span-->
                    <!--                        class="text-danger"-->
                    <!--                        v-if="backErrors[`name_en`]"-->
                    <!--                        :class="seenName"-->
                    <!--                    >-->
                    <!--                      {{ backErrors[`name_en`][0] }}-->
                    <!--                    </span>-->

                    <button
                      @click.prevent="clearValueInput(`name_en`)"
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
                      'is-invalid':
                        $v.formData.tax_number.$error ||
                        backErrors[`tax_number`],
                      'is-vaild': !$v.formData.tax_number.$invalid,
                    }"
                    id="tax_number"
                    ref="tax_number"
                    v-model="$v.formData.tax_number.$model"
                    :placeholder="`tax_number`"
                    @keyup="chanagClass($event, 'tax_number')"
                  />

                  <label class="col-form-label">
                    {{ $t(`tax`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <!--                  <span-->
                  <!--                      class="text-danger"-->
                  <!--                      v-if="backErrors[`tax_number`]"-->
                  <!--                      :class="seenName"-->
                  <!--                  >-->
                  <!--                    {{ backErrors[`tax_number`][0] }}-->
                  <!--                  </span>-->

                  <button
                    @click.prevent="clearValueInput(`tax_number`)"
                    id="button_tax_number"
                    class="close d-none"
                    ref="button_tax_number"
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
                      'is-invalid':
                        $v.formData.fax_number.$error ||
                        backErrors[`fax_number`],
                      'is-vaild': !$v.formData.fax_number.$invalid,
                    }"
                    id="fax_number"
                    ref="fax_number"
                    v-model="$v.formData.fax_number.$model"
                    :placeholder="`fax_number`"
                    @keyup="chanagClass($event, 'fax_number')"
                  />

                  <label class="col-form-label">
                    {{ $t(`fax`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <!--                  <span-->
                  <!--                      class="text-danger"-->
                  <!--                      v-if="backErrors[`fax_number`]"-->
                  <!--                      :class="seenName"-->
                  <!--                  >-->
                  <!--                    {{ backErrors[`fax_number`][0] }}-->
                  <!--                  </span>-->

                  <button
                    @click.prevent="clearValueInput(`fax_number`)"
                    id="button_fax_number"
                    class="close d-none"
                    ref="button_fax_number"
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
                      'is-invalid':
                        $v.formData.address.$error || backErrors[`address`],
                      'is-vaild': !$v.formData.address.$invalid,
                    }"
                    id="address"
                    ref="address"
                    v-model="$v.formData.address.$model"
                    :placeholder="`address`"
                    @keyup="chanagClass($event, 'address')"
                  />

                  <label class="col-form-label">
                    {{ $t(`address`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <!--                  <span-->
                  <!--                      class="text-danger"-->
                  <!--                      v-if="backErrors[`address`]"-->
                  <!--                      :class="seenName"-->
                  <!--                  >-->
                  <!--                    {{ backErrors[`address`][0] }}-->
                  <!--                  </span>-->

                  <button
                    @click.prevent="clearValueInput(`address`)"
                    id="button_address"
                    class="close d-none"
                    ref="button_address"
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
                      'is-invalid':
                        $v.formData.telephone.$error || backErrors[`telephone`],
                      'is-vaild': !$v.formData.telephone.$invalid,
                    }"
                    id="telephone"
                    ref="telephone"
                    v-model="$v.formData.telephone.$model"
                    :placeholder="`telephone`"
                    @keyup="chanagClass($event, 'telephone')"
                  />

                  <label class="col-form-label">
                    {{ $t(` phone`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <!--                  <span-->
                  <!--                      class="text-danger"-->
                  <!--                      v-if="backErrors[`telephone`]"-->
                  <!--                      :class="seenName"-->
                  <!--                  >-->
                  <!--                    {{ backErrors[`telephone`][0] }}-->
                  <!--                  </span>-->

                  <button
                    @click.prevent="clearValueInput(`telephone`)"
                    id="button_telephone"
                    class="close d-none"
                    ref="button_telephone"
                  >
                    &times;
                  </button>
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
  name: "add-customers",
  components: { UAnimateContainer, UAnimate },
  data() {
    return {
      formData: {
        code: "",
        tax_number: "",
        fax_number: "",
        telephone: "",
        address: "",
        is_active: true,
        name_ar: "",
        name_en: "",
        branch_id: "",
      },
      isEmpty: false,
      backErrors: {},
      gridClassName: window.$gridClassName,
      active: false,
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
        telephone: {},
      },
    };
  },

  setup: () => ({ $v: useVuelidate() }),
  mounted() {
    this.getCode();
    this.getBranches();
  },
  computed: {
    branches() {
      return this.$store.getters.getBranches.data;
    },
  },
  methods: {
    async newCustomer() {
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

          await this.$store.dispatch("storeCustomer", {
            data: this.formData,
          });
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
          console.log(this.backErrors);
        }
      }
    },
    async getBranches() {
      await this.$store.dispatch("fetchBranches");
      try {
      } catch (error) {}
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
    changeclass() {
      this.active = this.active == true ? false : true;
    },
    /**
     *
     * to clear any data in any button
     */

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

    /**
     *
     * to add and remove class d-none
     */

    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenName = "";
      } else {
        this.seenName = "d-none";
      }
    },
    async getCode() {
      const code = await this.$store.dispatch("getCustomerCode");

      this.formData.code = code.data.data;
    },
  },
};
</script>

<style>
</style>