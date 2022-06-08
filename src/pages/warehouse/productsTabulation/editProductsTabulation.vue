<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-productTabulation`"
      :submit="updateProductTabulation"
      :id="formData.id"
      :editUrlName="`edit-productTabulation`"
      :navigationUrl="`productTabulationNavigation`"
      :model="`productTabulation`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="`productTabulation`"
      :operation="`edit`"
      :listUrlName="`productTabulation`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div v-if="isEmpty">
        <errors :backErrors="backErrors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateProductTabulation" id="productTabulation">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">ProductTabulation</h5>
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
              <!-- ////////// -->
              <div class="col-12">
                <name-input :errors="backErrors" :formData="formData" />
              </div>

              <!-- ظظظظظظظظظظظظظظ -->

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

          <div :class="`add-tabs w-100 sub-tabs p-0 mt-3 ${gridClassName}`">
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
  name: "edit-productTabulation",
  components: { EditCards },

  data() {
    return {
      gridClassName: window.$gridClassName,

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
    this.getProductTabulation();
    console.log(this.formData);
  },

  methods: {
    async updateProductTabulation() {
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

          await this.$store.dispatch("updateProductTabulation", params);
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

    async getProductTabulation() {
      const getProductTabulation = await this.$store.dispatch(
        "getProductTabulation",
        {
          Id: this.$route.params.id,
        }
      );
      this.formData = getProductTabulation.data.data;
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
