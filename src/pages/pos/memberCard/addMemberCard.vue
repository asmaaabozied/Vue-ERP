<template>
  <div>
    <top-bar-card
      :newUrlName="`add-memberCard`"
      :submit="newMember"
      :id="0"
      :editUrlName="`edit-memberCard`"
      :navigationUrl="`MemberNavigation`"
      :model="`Member`"
      :mainModuel="mainModuel"
      :MainCategory="MainCategory"
      :pageName="`memberCard`"
      :operation="`add`"
      :listUrlName="`memberCard`"
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
        <form @submit.prevent="newMember" id="Member">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("memberCard") }}
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

              <div class="col-6">
                <div class="form-group has-float-label">
                  <select class="form-control" name="nationality_id" id="nationality_id"
                  v-model="$v.formData.$model.nationality_id" :class="{ 'is-invalid': $v.formData.$error.nationality_id, }">
                    <option value=""></option>
                    <option v-for="nationality in nationalities" :key="nationality.id" v-bind:value="nationality.id">
                      {{ nationality.name_ar }} - {{ nationality.name_en }} - {{ nationality.code }}
                    </option>
                  </select>
                  <label for="inputState" class="col-form-label">{{
                    $t("nationality")
                  }}</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    name="work_field"
                    id="work_field"
                  >
                    <option value=""></option>
                  </select>
                  <label for="inputState" class="col-form-label">{{
                    $t("work_field")
                  }}</label>
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
                    name="address"
                    v-model="$v.formData.address.$model"
                    placeholder="address"
                    ref="address"
                    id="address"
                    @keyup="chanagClass($event, `address`)"
                  />
                  <label for="" class="col-form-label">{{
                    $t("address")
                  }}</label>
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
                  <label for="" class="col-form-label">{{ $t("email") }}</label>
                  <button
                    @click.prevent="clearValueInput(`email`, 'button_email')"
                    id="button_email"
                    class="close d-none"
                    ref="button_email"
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
                    name="telephone"
                    v-model="$v.formData.telephone.$model"
                    placeholder="phone"
                    ref="telephone"
                    id="telephone"
                    @keyup="chanagClass($event, `telephone`)"
                  />
                  <label for="" class="col-form-label">{{ $t("phone") }}</label>
                  <button
                    @click.prevent="clearValueInput(`telephone`, 'button_phone')"
                    id="button_phone"
                    class="close d-none"
                    ref="button_phone"
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
                    @click.prevent="clearValueInput(`mobile`, 'button_mobile')"
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
                    type="date"
                    class="form-control"
                    name="Subscription_date"
                    placeholder="Subscription_date"
                    ref="Subscription_date"
                    id="Subscription_date"
                  />
                  <label for="" class="col-form-label">{{
                    $t("Subscription_date")
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
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-memberCard",
  components: { UAnimateContainer, UAnimate },

  data() {
    return {
      mainModuel: "",
      MainCategory: "",
      nationalities: {},
      formData: {
        code: "",
        name_ar: "",
        name_en: "",
        work_field: "",
        telephone: "",
        mobile: "",
        email: "",
        address: "",
        is_active: true,
        nationality_id: "",
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
        email: {},
        mobile: {},
        address: {},
        telephone: {},
      },
    };
  },

  setup: () => ({ $v: useVuelidate() }),
  mounted() {
    this.getCode();
    this.getNationalities();
    this.mainModuel = this.$route.params["mainModule"];
    this.MainCategory = this.$route.params["MainCategory"];
  },
  methods: {
    async newMember() {
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

          await this.$store.dispatch("storeMember", {
            data: this.formData,
          });
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },

    async getCode() {
      const code = await this.$store.dispatch("getMemberCode");
      this.formData.code = code.data.data;
    },
    async getNationalities() {
      const nationalities = await this.$store.dispatch("getNationalities");
      this.nationalities = nationalities.data.data;
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