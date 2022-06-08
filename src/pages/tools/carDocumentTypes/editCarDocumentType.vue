<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-carDocumentType`"
      :submit="updateCarDocumentType"
      :id="formData.id"
      :editUrlName="`edit-carDocumentType`"
      :navigationUrl="`carDocumentTypeNavigation`"
      :model="`carDocumentType`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="`carDocumentType`"
      :operation="`edit`"
      :listUrlName="`carDocumentType`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            @submit.prevent="handleSubmit(updateCarDocumentType)"
            id="carDocumentType"
          >
            <div class="inf0-top-fixed">
              <h5 class="font-weight-bolder text-primary">
                {{ $t("CarCard") }}
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
                    <validation-provider
                      rules="required"
                      v-slot="{ errors }"
                      class="validation-provider"
                    >
                      <input
                        type="string"
                        class="form-control"
                        name="code"
                        v-model="formData.code"
                        placeholder="Code"
                        id="code"
                        @keyup="chanagClass($event, `code`)"
                      />
                      <label for="" class="col-form-label"
                        ><span class="text-danger0">*</span
                        >{{ $t("code") }}</label
                      >
                      <button
                        @click.prevent="clearValueInput(`code`)"
                        id="button_code"
                        class="close"
                      >
                        &times;
                      </button>
                      <span class="text-danger" v-if="errors">{{
                        errors[0]
                      }}</span>
                    </validation-provider>
                  </div>
                </div>

                <div class="col-12">
                  <name-input :errors="backErrors" :formData="formData" />
                </div>
                <div
                  class="col-6"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <active-toggle :formData="formData" class="col p-0" />
                </div>
                <active-toggle
                  class="col"
                  :formData="formData"
                  :name="`follow_renewal`"
                  :label="`follow_renewal`"
                />
                <div class="has-float-label col">
                  <div class="form-group" v-if="formData.follow_renewal">
                    <input
                      type="number"
                      v-model="formData.days_count"
                      name="days_count"
                      placeholder="days_count"
                      class="form-control"
                    />
                    <label for class="col-form-label"
                      >{{ $t("days_count")
                      }}<span class="text-danger0">*</span></label
                    >
                  </div>
                </div>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit-carDocumentType",

  props: {
    backErrors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formData: {},
      frontErrors: [],
    };
  },
  mounted() {
    this.getCarDocumentType();
  },

  methods: {
    async updateCarDocumentType() {
      if (this.validationNameInputs()) {
        this.uniqueErrors();
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

          console.log(this.formData);
          await this.$store.dispatch("updateCarDocumentType", params);
          this.frontErrors = [];
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },
    async getCarDocumentType() {
      const getCarDocumentType = await this.$store.dispatch(
        "getCarDocumentType",
        {
          Id: this.$route.params.id,
        }
      );
      this.formData = getCarDocumentType.data.data;
    },
    validationNameInputs() {
      const nameEn = document.getElementById("name_en");
      const nameAr = document.getElementById("name_ar");
      if (this.formData.name_ar == "" && this.formData.name_en == "") {
        this.frontErrors.push({
          id: 2,
          name: `name`,
          message: "Name required.",
        });
        nameEn.focus();
        nameEn.classList.add("is-invalid");
        nameAr.focus();
        nameAr.classList.add("is-invalid");

        return true;
      } else {
        return false;
      }
    },
    uniqueErrors() {
      this.frontErrors = [
        ...new Map(this.frontErrors.map((item) => [item[`id`], item])).values(),
      ];
    },
    getError(id) {
      const test = this.frontErrors.filter((item) => {
        if ((item.id = id)) return item;
      });
      return test[0];
    },
  },
};
</script>

<style></style>
