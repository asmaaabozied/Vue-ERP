<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-paymentType`"
      :submit="updatePaymentType"
      :id="formData.id"
      :editUrlName="`edit-paymentType`"
      :navigationUrl="`paymentTypeNavigation`"
      :model="`paymentType`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="`payment_type`"
      :operation="`edit`"
      :listUrlName="`paymentType`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div v-if="isEmpty">
        <errors :backErrors="backErrors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updatePaymentType" id="paymentType">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("payment_type") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <!-- ////////// -->
              <div
                class="col-md-6 col-12 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
               >
                <div class="form-group">
                  <validation-provider
                    rules="required"
                    v-slot="{ errors }"
                    class="validation-provider"
                  >
                    <input
                      type="string"
                      class="form-control"
                      v-model="formData.code"
                      placeholder="Code"
                      id="code"
                      @keyup="chanagClass($event, `code`)"
                    />
                    <label for class="col-form-label">
                      <span class="text-danger0">*</span>
                      {{ $t("code") }}
                    </label>
                    <button
                      @click.prevent="clearValueInput(`code`)"
                      id="button_code"
                      class="close"
                    >
                      &times;
                    </button>
                    <span class="text-danger" v-if="errors">
                      {{ errors[0] }}
                    </span>
                  </validation-provider>
                </div>
              </div>

              <div class="col-6">
                <div class="form-group has-float-label">
                  <validation-provider>
                    <select
                      class="form-control"
                      v-model="formData.temp_account_id"
                    >
                      <option
                        :selected="formData.temp_account_id == 1"
                        value="1"
                      >
                        Group.NO.1
                      </option>
                      <option
                        :selected="formData.temp_account_id == 2"
                        value="2"
                      >
                        Group.NO.2
                      </option>
                      <option
                        :selected="formData.temp_account_id == 3"
                        value="3"
                      >
                        Group.NO.3
                      </option>
                      <option
                        :selected="formData.temp_account_id == 4"
                        value="4"
                      >
                        Group.NO.4
                      </option>
                      <option
                        :selected="formData.temp_account_id == 5"
                        value="5"
                      >
                        Group.NO.5
                      </option>
                    </select>
                    <label for="exampleSelectl" class="col-form-label">
                      {{ $t("temp_account_id") }}</label
                    >
                  </validation-provider>
                </div>
              </div>
              <!-- /////////// -->
              <div class="col-12">
                <name-input :errors="backErrors" :formData="formData" />
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <validation-provider>
                    <select
                      class="form-control"
                      v-model="formData.tax_account_id"
                    >
                      <option
                        :selected="formData.tax_account_id == 1"
                        value="1"
                      >
                        Group.NO.1
                      </option>
                      <option
                        :selected="formData.tax_account_id == 2"
                        value="2"
                      >
                        Group.NO.2
                      </option>
                      <option
                        :selected="formData.tax_account_id == 3"
                        value="3"
                      >
                        Group.NO.3
                      </option>
                      <option
                        :selected="formData.tax_account_id == 4"
                        value="4"
                      >
                        Group.NO.4
                      </option>
                      <option
                        :selected="formData.tax_account_id == 5"
                        value="5"
                      >
                        Group.NO.5
                      </option>
                    </select>
                    <label for="exampleSelectl" class="col-form-label">{{
                      $t("tax_account_id")
                    }}</label>
                  </validation-provider>
                </div>
              </div>
              <div
                class="col-md-6 col-12 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="has-float-label">
                  <div class="form-group">
                    <input
                      type="number"
                      v-model="formData.tax_percent"
                      placeholder="tax_percent"
                      class="form-control"
                    />
                    <label for class="col-form-label">
                      {{ $t("tax_percent") }}
                      <span class="text-danger0">*</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group has-float-label">
                  <validation-provider>
                    <select
                      class="form-control"
                      v-model="formData.fees_account_id"
                    >
                      <option
                        :selected="formData.fees_account_id == 1"
                        value="1"
                      >
                        Group.NO.1
                      </option>
                      <option
                        :selected="formData.fees_account_id == 2"
                        value="2"
                      >
                        Group.NO.2
                      </option>
                      <option
                        :selected="formData.fees_account_id == 3"
                        value="3"
                      >
                        Group.NO.3
                      </option>
                      <option
                        :selected="formData.fees_account_id == 4"
                        value="4"
                      >
                        Group.NO.4
                      </option>
                      <option
                        :selected="formData.fees_account_id == 5"
                        value="5"
                      >
                        Group.NO.5
                      </option>
                    </select>
                    <label for="exampleSelectl" class="col-form-label">
                      {{ $t("fees_account_id") }}</label
                    >
                  </validation-provider>
                </div>
              </div>
              <!-- ////////////// -->
              <div class="has-float-label col">
                <div class="form-group">
                  <input
                    type="number"
                    v-model="formData.fees_value"
                    placeholder="fees_value"
                    class="form-control"
                  />
                  <label for class="col-form-label">
                    {{ $t("fees_value") }}
                  </label>
                </div>
              </div>
              <!-- ////////////// -->
              <div class="has-float-label col">
                <div class="form-group">
                  <input
                    type="number"
                    v-model="formData.max_fees_value"
                    placeholder="max_fees_value"
                    class="form-control"
                  />
                  <label for class="col-form-label">
                    {{ $t("max_fees_value") }}
                  </label>
                </div>
              </div>

              <!-- ////////////// -->

              <!-- ////////////// -->

              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <active-toggle :formData="formData" class="col p-0" />
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

export default {
  name: "edit-paymentType",
  components: {},

  data() {
    return {
      formData: {},
      backErrors: {},
      isEmpty: false,
    };
  },

  validations() {
    return {
      formData: {},
    };
  },

  setup: () => ({ $v: useVuelidate() }),

  created() {
    this.getPaymentType();
    console.log(this.formData);
  },

  methods: {
    async updatePaymentType() {
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

          const params = {
            Id: this.$route.params.id,
            data: this.formData,
          };

          await this.$store.dispatch("updatePaymentType", params);
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },

    clearValueInput(inputId, buttonId) {
      this.formData[`${inputId}`] = "";
      this.$refs[`${buttonId}`].classList.add("d-none");
    },

    async getPaymentType() {
      const getPaymentType = await this.$store.dispatch("getPaymentType", {
        Id: this.$route.params.id,
      });
      this.formData = getPaymentType.data.data;
      console.log(this.formData);
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
