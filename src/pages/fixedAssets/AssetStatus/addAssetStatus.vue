<template>
    <div>
        <top-bar-card
            :newUrlName="`add-assetStatus`"
            :listUrlName="`asset-status`"
            :submit="newAssetStatus"
            :id="0"
            :editUrlName="`edit-assetStatus`"
            :navigationUrl="`asset-status`"
            :model="`assetStatus`"
            :mainModuel="`tools`"
            :MainCategory="`cards`"
            :pageName="`asset_status`"
            :operation="`add`"
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
        <form @submit.prevent="newAssetStatus" id="assetStatus">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("asset_status") }}
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
                    v-model="$v.formData.code.$model"
                    :class="{
                      'is-invalid':
                        $v.formData.code.$error || backErrors[`code`],
                    }"
                    placeholder="Code"
                    id="code"
                    @keyup="chanagClass($event, `code`)"
                  />
                  <label for="code" class="col-form-label">
                    {{ $t("code") }} <span class="text-danger0">*</span></label
                  >
                  <button
                    @click.prevent="clearValueInput(`code`)"
                    id="button_code"
                    class="close"
                  >
                    &times;
                  </button>
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
                    :name="`name_ar`"
                    :class="{
                      'is-invalid': $v.formData.name_ar.$error,
                    }"
                    id="name_ar"
                    ref="name_ar"
                    v-model="$v.formData.name_ar.$model"
                    :placeholder="`Name`"
                    v-on:input="valinput($event)"
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
                    v-model="$v.formData.name_en.$model"
                    :class="{
                      'is-invalid': $v.formData.name_en.$error,
                    }"
                    :placeholder="`Name`"
                    v-on:input="valinput($event)"
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
                class="col-md-3 col-12"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <active-toggle :formData="formData" class="col p-0" />
              </div>
            </div>

            <!-- </div> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf, alphaNum } from "@vuelidate/validators";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-assetStatus",
  components: { UAnimateContainer, UAnimate },
  data() {
    return {
      formData: {
        name_ar: "",
        name_en: "",
        code: "",
        is_active: true,
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
        code: { required, alphaNum },
      },
    };
  },

  setup: () => ({ $v: useVuelidate() }),

  mounted() {
    this.getCode();
    console.log(this.formData.code);
  },

  methods: {
    async newAssetStatus() {
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

          await this.$store.dispatch("storeAssetStatus", {
            data: this.formData,
          });
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },

    // to clear any data in any button
    clearValueInput(inputId, buttonId) {
      this.formData[`${inputId}`] = "";
      this.$refs[`${buttonId}`].classList.add("d-none");
    },

    // To add and remove class d-none
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

    // to clear any data in any button
    clearValueInput(inputId, buttonId) {
      this.formData[`${inputId}`] = "";
      this.$refs[`${buttonId}`].classList.add("d-none");
    },

    // To add and remove class d-none
    chanagClass(e, id) {
      if (e.target.value !== "") {
        this.$refs[`button_${id}`].classList.remove(`d-none`);
      } else {
        this.$refs[`button_${id}`].classList.add(`d-none`);
      }
    },
    // changeBt(event) {
    // this.active = event.value;
    // },

    async getCode() {
      const code = await this.$store.dispatch("getAssetStatusCode");

      this.formData.code = code.data.data;
      console.log(this.formData.code);
    },
  },
};
</script>

<style></style>
