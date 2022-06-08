<template>
  <div>
    <top-bar-card
      :id="0"
      :editUrlName="`edit-products`"
      :navigationUrl="`productNavigation`"
      :mainModuel="mainModuel"
      :MainCategory="MainCategory"
      :pageName="`products`"
      :operation="`add`"
      :listUrlName="`products`"
      @onChangeGrid="changeGrid"
      :newUrlName="`add-products`"
      :submit="newProduct"
      :model="`product`"
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
        <form @submit.prevent="newproduct" id="product">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("product") }}
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
                    <input type="file" @change="onFileChange" class="w-100" />
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
                </div>

                <div
                  class="d-flex mt-3"
                  v-wow="{
                    'animation-name': 'fadeInUp',
                    'animation-duration': '1s',
                  }"
                >
                  <active-toggle :formData="formData" class="col p-0" />
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
                        >{{ $t("code")
                        }}<span class="text-danger0">*</span></label
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
                    class="col-6"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div
                      class="has-float-label"
                      v-wow="{
                        'animation-name': 'fadeInUp',
                        'animation-duration': '1s',
                      }"
                    >
                      <div class="form-group m-0">
                        <input
                          type="numper"
                          name="parcode"
                          placeholder="parcode"
                          class="form-control"
                          aria-describedby="emailHelp"
                        />
                        <label for="inputState" class="col-form-label">{{
                          $t("parcode")
                        }}</label>
                      </div>
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

                <div class="d-flex">
                  <div
                    class="col-6"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group has-float-label">
                      <select class="form-control" name="category_id">
                        <option value=""></option>
                        <option>category</option>
                      </select>
                      <label for="exampleSelectl" class="col-form-label">{{
                        $t("categories")
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
                    <div class="form-group has-float-label">
                      <select class="form-control" name="unit_id">
                        <option selected disabled value=""></option>

                        <option>unit</option>
                      </select>
                      <label class="col-form-label">{{ $t("units") }}</label>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div
                    class="col-6 has-float-label"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <textarea
                        ref="description"
                        id="description"
                        class="form-control w-100"
                        cols="30"
                        rows="5"
                        :placeholder="$t('description')"
                      ></textarea>
                      <label class="col-form-label">
                        {{ $t("description") }}
                      </label>
                    </div>
                  </div>

                  <div class="col-6 p-0">
                    <div
                      class="col-12"
                      v-wow="{
                        'animation-name': 'fadeInUp',
                        'animation-duration': '1s',
                      }"
                    >
                      <div class="form-group has-float-label">
                        <multiselect
                          v-model="value"
                          :Supplier-placeholder="$t('Add_this_as_new_Supplier')"
                          :placeholder="$t('Search_or_add_a_supplier')"
                          label="name"
                          track-by="code"
                          :options="options"
                          :multiple="true"
                          :suppliergable="true"
                          @supplier="addSupplier"
                        ></multiselect>
                        <label class="col-form-label">{{
                          $t("Suppliers")
                        }}</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="col-form-label">{{ $t("color") }}</label>
                        <input
                          type="color"
                          id="favcolor"
                          name="favcolor"
                          value="#145495"
                          class="ml-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="separator separator-solid my-3"></div>

            <!--START Currency parts -->
            <div class="row">
              <div :class="`add-tabs w-100 sub-tabs ${gridClassName}`">
                <ul class="nav nav-tabs0" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="general2-tab"
                      data-toggle="tab"
                      href="#page-general2"
                    >
                      <span class="nav-icon">
                        <i class="flaticon2-gear"></i>
                      </span>
                      <span class="nav-text">{{ $t("data") }}</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="accounts-tab"
                      data-toggle="tab"
                      href="#accounts"
                    >
                      <span class="nav-icon">
                        <i class="flaticon2-gear"></i>
                      </span>
                      <span class="nav-text">{{ $t("accounts") }}</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="alternative-tab"
                      data-toggle="tab"
                      href="#alternative"
                    >
                      <span class="nav-icon">
                        <i class="flaticon2-gear"></i>
                      </span>
                      <span class="nav-text">{{ $t("alternative") }}</span>
                    </a>
                  </li>
                </ul>

                <div class="tab-content main-tab-content" id="myTabContent">
                  <div class="btn-collapse">
                    <button @click.prevent="hidedata">
                      {{ $t("Collapse_All") }}
                    </button>
                    |
                    <button @click.prevent="showwdata">
                      {{ $t("Expand_All") }}
                    </button>
                  </div>
                  <general-inputs
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                  />

                  <accounts
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                  />
                  <alternative
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                  />
                </div>
              </div>
            </div>
            <!--end Currency parts -->
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
import accounts from "./accounts.vue";
import Alternative from "./alternative.vue";
import generalInputs from "./generalInputs.vue";

export default {
  name: "",
  components: {
    UAnimateContainer,
    UAnimate,
    accounts,
    Alternative,
    generalInputs,
  },

  data() {
    return {
      mainModuel: "",
      MainCategory: "",
      image: "",
      gridClassName: "product_list",
      dataa: "",
      addactive: "",
      url: "assets/default_product_image.png",
      formData: {
        code: "",
        is_active: true,
        name_ar: "",
        name_en: "",
      },
      isEmpty: false,
      backErrors: {},
      active: false,
      data: "",
      //mulit select
      value: [{ name: "Supplier", code: "S1" }],
      options: [
        { name: "Supplier2", code: "S2" },
        { name: "Supplier1", code: "S1" },
        { name: "Supplier3", code: "S3" },
      ],
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
      },
    };
  },

  setup: () => ({ $v: useVuelidate() }),
  mounted() {
    this.getCode();
    this.mainModuel = this.$route.params["mainModule"];
    this.MainCategory = this.$route.params["MainCategory"];
  },
  methods: {
    //multi select Supplier
    methods: {
      addtax(newSupplier) {
        const Supplier = {
          name: newSupplier,
          code:
            newSupplier.substring(0, 2) + Math.floor(Math.random() * 10000000),
        };
        this.options.push(Supplier);
        this.value.push(Supplier);
      },
      changeclass() {
        this.active = this.active == true ? false : true;
      },
    },
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
    async newproduct() {
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

          await this.$store.dispatch("storeproduct", {
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
      const code = await this.$store.dispatch("getproductCode");

      this.formData.code = code.data.data;
    },
    //tabs
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
  },
};
</script>

<style>
</style>