<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-determinant`"
      :submit="updateDeterminant"
      :id="formData.id"
      :editUrlName="`edit-determinant`"
      :navigationUrl="`determinantNavigation`"
      :model="`determinant`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="`determinant`"
      :operation="`edit`"
      :listUrlName="`determinant`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div v-if="isEmpty">
        <errors :backErrors="backErrors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateDeterminant" id="determinant">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("determinant") }}
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

              <div class="col-12">
                <name-input :errors="backErrors" :formData="formData" />
              </div>

              <!-- ظظظظظظظظظظظظظظ -->

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
                    class="validation-provider"
                  >
                    <input
                      type="string"
                      class="form-control"
                      v-model="formData.max_qty"
                      placeholder="max_qty"
                      id="max_qty"
                    />
                    <label for class="col-form-label">
                      {{ $t("max_qty") }}
                    </label>
                    <button
                      @click.prevent="clearValueInput(`max_qty`)"
                      id="button_max_qty"
                      class="close"
                    >
                      &times;
                    </button>
                  </validation-provider>
                </div>
              </div>

              <!-- ////////////// -->

              <div class="col-6">
                <div class="form-group has-float-label">
                  <validation-provider>
                    <select
                      class="form-control"
                      v-model="value" 
                      @change="append()"
                    >
                      <option selected value>Type</option>
                      <option :value="1" :selected="formData.smallint == 1">
                        Text
                      </option>
                      <option :value="2" :selected="formData.smallint == 2">
                        Number
                      </option>
                      <option :value="3" :selected="formData.smallint == 3">
                        Date
                      </option>
                      <option :value="4" :selected="formData.smallint == 4">
                        yes/no
                      </option>
                       <option :value="5" :selected="formData.smallint == 5">
                        list
                      </option>
                    </select>
                    <label for="exampleSelectl" class="col-form-label">
                      {{ $t("smallint") }}</label
                    >
                  </validation-provider>
                </div>
              </div>

              <!-- ////////////// -->

              <div
                v-if="inStock_1"
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
                      v-model="formData.default_value"
                      placeholder="default_value"
                      id="default_value"
                      @keyup="chanagClass($event, `default_value`)"
                    />
                    <label for class="col-form-label">
                      <span class="text-danger0">*</span>
                      {{ $t("default_value") }}
                    </label>
                    <button
                      @click.prevent="clearValueInput(`default_value`)"
                      id="button_default_value"
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
                  <validation-provider
                    rules="required"
                    v-slot="{ errors }"
                    class="validation-provider"
                  >
                    <input
                      type="number"
                      class="form-control"
                      v-model="formData.default_value"
                      placeholder="default_value"
                      id="default_value"
                      @keyup="chanagClass($event, `default_value`)"
                    />
                    <label for class="col-form-label">
                      <span class="text-danger0"></span>
                      {{ $t("default_value") }}
                    </label>
                    <button
                      @click.prevent="clearValueInput(`default_value`)"
                      id="button_default_value"
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
                  <validation-provider
                    rules="required"
                    v-slot="{ errors }"
                    class="validation-provider"
                  >
                    <input
                      type="date"
                      class="form-control"
                      v-model="formData.default_value"
                      placeholder="default_value"
                      id="default_value"
                      @keyup="chanagClass($event, `default_value`)"
                    />
                    <label for class="col-form-label">
                      <span class="text-danger0"></span>
                      {{ $t("default_value") }}
                    </label>
                    <button
                      @click.prevent="clearValueInput(`default_value`)"
                      id="button_default_value"
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
              <!-- /////-->
              <div class="col-6" v-if="inStock_4">
                <div class="form-group has-float-label">
                  <validation-provider>
                    <select
                      class="form-control"
                      v-model="formData.default_value"
                    >
                      <option
                        :selected="formData.default_value == yes"
                        value="yes"
                      >
                        yes
                      </option>
                      <option
                        :selected="formData.default_value == no"
                        value="no"
                      >
                        no
                      </option>
                    </select>
                    <label for="exampleSelectl" class="col-form-label">
                      {{ $t("default_value") }}</label
                    >
                  </validation-provider>
                </div>
              </div>

              <!-- ////////////// -->

              <div
                class="col-6"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <active-toggle :formData="formData" class="col p-0" />

                <active-toggle
                  class="col"
                  :formData="formData"
                  :name="`is_unique`"
                  :label="`is_unique`"
                />
              </div>
            </div>
          </div>

          <div v-if="inStock_5"  :class="`add-tabs w-100 sub-tabs p-0 mt-3 ${gridClassName}`">
            <ul class="nav nav-tabs0" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="cards-tab"
                  data-toggle="tab"
                  href="#page-cards"
                >
                  <span class="nav-icon">
                    <i class="flaticon2-contract"></i>
                  </span>
                  <span class="nav-text"> {{ $t("cards") }}</span>
                </a>
              </li>
            </ul>
            <div class="tab-content main-tab-content" id="myTabContent">
              <div class="btn-collapse">
                <button @click.prevent="showwdata">
                  {{ $t("Collapse_All") }}
                </button>
                |
                <button @click.prevent="hidedata">
                  {{ $t("Expand_All") }}
                </button>
              </div>

              <edit-cards :formData="formData" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import EditCards from "./EditCards.vue";

import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";

export default {
  name: "edit-determinant",
  components: { EditCards },

  data() {
    return {
      gridClassName: window.$gridClassName,

      formData: {},

      inStock_1: false,
      inStock_2: false,
      inStock_3: false,
      inStock_4: false,
      inStock_5: false,

      backErrors: {},
      isEmpty: false,
    };
  },

  validations() {
    return {
      formData: {
        inStock_1: false,
        inStock_2: false,
        inStock_3: false,
        inStock_4: false,
        inStock_5: false,
      },
    };
  },

  setup: () => ({ $v: useVuelidate() }),

  created() {
    this.getDeterminant();
    console.log(this.formData);
  },

  methods: {
    async updateDeterminant() {
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

          await this.$store.dispatch("updateDeterminant", params);
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

    async getDeterminant() {
      const getDeterminant = await this.$store.dispatch("getDeterminant", {
        Id: this.$route.params.id,
      });
      this.formData = getDeterminant.data.data;
      console.log(this.formData);
    },

    chanagClass(e, id) {
      if (e.target.value !== "") {
        this.$refs[`button_${id}`].classList.remove(`d-none`);
      } else {
        this.$refs[`button_${id}`].classList.add(`d-none`);
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
