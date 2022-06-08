<template>
  <div>
    <top-bar-card
      :newUrlName="`add-productsTabulation`"
      :submit="newProductTabulation"
      :id="0"
      :editUrlName="`edit-productsTabulation`"
      :navigationUrl="`ProductTabulationNavigation`"
      :model="`ProductTabulation`"
      :mainModuel="mainModuel"
      :MainCategory="MainCategory"
      :pageName="`productsTabulation`"
      :operation="`add`"
      :listUrlName="`productsTabulation`"
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
        <form @submit.prevent="newProductTabulation" id="ProductTabulation">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("productsTabulation") }}
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
              </div>
              <div class="col-10 p-0">
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
                    class="col-6 has-float-label"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group">
                      <textarea
                        ref="notes"
                        id="notes"
                        class="form-control w-100"
                        cols="30"
                        rows="5"
                        :placeholder="$t('notes')"
                      ></textarea>
                      <label class="col-form-label">
                        {{ $t("notes") }}
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
                        <select class="form-control" name="printer">
                          <option value=""></option>
                          <option>printer1</option>
                        </select>
                        <label for="" class="col-form-label">{{
                          $t("printer")
                        }}</label>
                      </div>
                    </div>
                    <div
                      class="col-12"
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
              </div>
            </div>
            <div class="row">
              <div
                class="col-12"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <!-- table  -->
                <div
                  class="
                    datatable
                    datatable-bordered
                    datatable-head-custom
                    datatable-default
                    datatable-primary
                    datatable-loaded
                    table-product
                    alternative-table
                  "
                  style=""
                >
                  <table class="datatable-table table table-bordered">
                    <thead class="datatable-head">
                      <tr class="datatable-row" style="left: 0px">
                        <th
                          data-field="RecordID"
                          class="
                            datatable-cell-center datatable-cell
                            text-center
                          "
                        >
                          <span>#</span>
                        </th>
                        <th
                          data-field=""
                          class="datatable-cell end-cell text-center"
                        >
                          <span style="">{{ $t("action") }}</span>
                        </th>
                        <th data-field="" class="datatable-cell">
                          <span style="">{{ $t("product") }} </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="datatable-body">
                      <tr
                        v-for="(product, index) in trs"
                        :key="product.id"
                        class="datatable-row datatable-row-even"
                      >
                        <td class="datatable-cell-center datatable-cell">
                          <span style="width: 30px">{{ index + 1 }}</span>
                        </td>
                        <td class="text-center end-td">
                          <button
                            type="button"
                            data-toggle="tooltip"
                            title="Remove"
                            :disabled="index + 1 == 1 ? '' : disabled"
                            class="btn btn-danger btn-option"
                            @click="deleteRow(index)"
                          >
                            <i class="fa fa-minus-circle"></i>
                          </button>
                        </td>
                        <td class="datatable-cell">
                          <select class="form-control">
                            <option selected value="">Choose...</option>
                          </select>
                        </td>
                      </tr>
                      <tr class="datatable-row datatable-row-even">
                        <td class="datatable-cell-center datatable-cell">
                          <span style="width: 30px">{{ incrment }}</span>
                        </td>
                        <td class="text-center end-td">
                          <button
                            @click="addRow()"
                            type="button"
                            class="btn btn-primary add_new"
                          >
                            <i class="fa fa-plus-circle"></i>
                          </button>
                        </td>
                        <td class="datatable-cell"><span></span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--  -->
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
  name: "add-productsTabulation",
  components: { UAnimateContainer, UAnimate },

  data() {
    return {
      mainModuel: "",
      MainCategory: "",
      image: "",
      url: "assets/default_product_image.png",
      formData: {
        code: "",
        is_active: true,
        name_ar: "",
        name_en: "",
      },
      isEmpty: false,
      backErrors: {},
      trs: [
        {
          id: 1,
        },
      ],
      activeRow: false,
      nextItemId: 2,
      incrment: 2,
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
    addRow() {
      this.activeRow = true;
      this.trs.push({
        id: (this.nextItemId += this.nextItemId),
      });
      this.incrment++;
      this.nextItemId++;
    },
    deleteRow(index) {
      this.trs.splice(index, 1);
      this.incrment--;
    },
    async newProductTabulation() {
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

          await this.$store.dispatch("storeProductTabulation", {
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
      const code = await this.$store.dispatch("getProductTabulationCode");

      this.formData.code = code.data.data;
    },
  },
};
</script>

<style>
</style>