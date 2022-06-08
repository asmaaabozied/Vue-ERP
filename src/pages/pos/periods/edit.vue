<template>
  <div>
    <top-bar-card
      :newUrlName="`add-periods`"
      :submit="updatePeriod"
      :id="formData.id"
      :editUrlName="`edit-periods`"
      :navigationUrl="`periods/navigation/`"
      :model="`period`"
      :listUrlName="`periods`"
      :mainModuel="`POS`"
      :MainCategory="`cards`"
      :pageName="`periods`"
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
        <errors :backErrors="backErrors" />
      </div>

      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updatePeriod" id="period">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("periods") }}
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
                    placeholder="Code"
                    v-model="$v.formData.code.$model"
                    :class="{
                      'is-invalid':
                        $v.formData.code.$error || backErrors[`code`],
                    }"
                    id="code"
                    @keyup="chanagClass($event, `code`)"
                  />
                  <label for="code" class="col-form-label">
                    {{ $t("code") }} <span class="text-danger0">*</span>
                  </label>
                  <button
                    @click.prevent="clearValueInput(`code`)"
                    id="button_code"
                    class="close"
                  >
                    &times;
                  </button>
                  <!-- <span class="text-danger" v-if="backErrors[`code`]">
                                    {{ backErrors[`code`][0] }}
                                </span> -->
                </div>
              </div>

              <div
                class="col-12"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              ></div>
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
                    }"
                    :name="`name_ar`"
                    id="name_ar"
                    ref="name_ar"
                    v-model="$v.formData.name_ar.$model"
                    :placeholder="`Name`"
                    @keyup="chanagClass($event, `ar`)"
                  />

                  <label class="col-form-label">
                    {{ $t(`ar.name`)
                    }}<span class="text-danger0">*</span></label
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
                    :class="{
                      'is-invalid': $v.formData.name_en.$error,
                    }"
                    :name="`name_en`"
                    id="name_en"
                    ref="name_en"
                    v-model="$v.formData.name_en.$model"
                    :placeholder="`Name`"
                    @keyup="chanagClass($event, `en`)"
                  />

                  <label class="col-form-label">
                    {{ $t(`en.name`)
                    }}<span class="text-danger0">*</span></label
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

              <div class="col-md-6 col-12 has-float-label">
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    id=""
                    name="account_id"
                    v-model="$v.formData.account_id.$model"
                    :class="{
                      'is-invalid': $v.formData.account_id.$error,
                    }"
                  >
                    <option
                      v-for="account in accounts.data"
                      :key="account.id"
                      :selected="account.id == $v.formData.account_id.$model"
                      v-bind:value="account.id"
                    >
                      {{ account.name_en }} - {{ account.name_ar }} -
                      {{ account.code }}
                    </option>
                  </select>
                  <label class="col-form-label">account</label>
                  <span
                    class="text-danger"
                    v-if="backErrors[`account_id`]"
                    :class="seenName"
                  >
                    {{ backErrors[`account_id`][0] }}
                  </span>
                </div>
              </div>
              <div class="col-md-6 col-12 has-float-label">
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <input
                        type="time"
                        name="from_time"
                        id="from_time"
                        v-model="$v.formData.from_time.$model"
                        :class="{
                          'is-invalid':
                            $v.formData.from_time.$error ||
                            backErrors[`from_time`],
                        }"
                        class="form-control"
                        @keyup="chanagClass($event, `from_time`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("from_time")
                      }}</label>
                      <span
                        class="text-danger"
                        v-if="backErrors[`from_time`]"
                        :class="seenName"
                      >
                        {{ backErrors[`from_time`][0] }}
                      </span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <input
                        type="time"
                        name="to_time"
                        id="to_time"
                        v-model="$v.formData.to_time.$model"
                        :class="{
                          'is-invalid':
                            $v.formData.to_time.$error || backErrors[`to_time`],
                        }"
                        class="form-control"
                        @keyup="chanagClass($event, `to_time`)"
                      />
                      <label for="" class="col-form-label">{{
                        $t("to_time")
                      }}</label>
                      <span
                        class="text-danger"
                        v-if="backErrors[`to_time`]"
                        :class="seenName"
                      >
                        {{ backErrors[`to_time`][0] }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-md-3 col-12"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              ></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { UAnimateContainer, UAnimate } from "vue-wow";
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";

// import EditInput from '../../components/form/editInput.vue';
export default {
  name: "edit-periods",
  components: { UAnimateContainer, UAnimate },
  data() {
    return {
      formData: {},
      backErrors: {},
      isEmpty: false,
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
        branche_id: { required },
        account_id: { required },
        from_time: { required },
        to_time: { required },
      },
    };
  },

  setup: () => ({ $v: useVuelidate() }),

  created() {
    this.getPeriod();
    this.getAccounts();
  },

  computed: {
    accounts() {
      return this.$store.getters.getAccounts;
    },
  },

  methods: {
    async updatePeriod() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.$v);
        return;
      } else {
        try {
          this.formData.name_ar = this.formData.name_ar
            ? this.formData.name_ar
            : this.formData.name_en;
          this.formData.name_en = this.formData.name_en
            ? this.formData.name_en
            : this.formData.name_ar;

          const params = {
            Id: this.$route.params.id,
            data: this.formData,
          };

          await this.$store.dispatch("updatePeriod", params);
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },

    async getAccounts() {
      const accountUrl = { URL: "accounts" };
      const accounts = await this.$store.dispatch("fetchAccounts", accountUrl);
    },

    clearValueInput(inputId, buttonId) {
      this.formData[`${inputId}`] = "";
      this.$refs[`${buttonId}`].classList.add("d-none");
    },

    async getPeriod() {
      const getPeriod = await this.$store.dispatch("getPeriod", {
        Id: this.$route.params.id,
      });
      this.formData = getPeriod.data.data;
    },

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

<style></style>
