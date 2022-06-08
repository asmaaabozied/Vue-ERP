<template>
  <div>
    <top-bar-card
      :newUrlName="`add-priceList`"
      :submit="newPriceList"
      :model="`PriceList`"
      :id="0"
      :navigationUrl="`PriceList`"
      :mainModuel="mainModuel"
      :MainCategory="MainCategory"
      :pageName="$t(`priceList`)"
      :operation="`add`"
      :listUrlName="`priceList`"
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
        <form @submit.prevent="newPriceList" id="PriceList">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("priceList") }}
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
                    :class="{
                      'is-invalid':
                        $v.formData.code.$error || backErrors[`code`],
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
                      >{{ backErrors[`name_ar`] [0]}}</span
                    >
                      

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
                      id="name_en"
                      ref="name_en"
                      :class="{
                        'is-invalid': $v.formData.name_en.$error,
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
                      {{ backErrors[`name_en`][0]}}
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

              <!-- ///////////////////////////////// -->

              <!-- ///////////////////////////////// -->

              <div
                class="col-6 has-float-label"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <label class="col-form-label">
                    {{ $t(`start_date`) }}
                  </label>

                  <span
                    class="text-danger"
                    v-if="backErrors[`start_date`]"
                    :class="seenName"
                    >{{ backErrors[`start_date`][0] }}</span
                  >

                  <input
                    type="date"
                    :max="formData.end_date"
                    v-model="formData.start_date"
                    placeholder="start_date"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                  />

                  <button
                    @click.prevent="clearValueInput(`start_date`, 'button_ar')"
                    id="button_ar"
                    class="close d-none"
                    ref="button_ar"
                  >
                    &times;
                  </button>
                </div>
              </div>
              <div
                class="col-6 has-float-label"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
               >
                <div class="form-group">
                  <label class="col-form-label">
                    {{ $t(`end_date`) }}
                  </label>

                  <span
                    class="text-danger"
                    v-if="backErrors[`end_date`]"
                    :class="seenName"
                    >{{ backErrors[`end_date`][0]}}</span
                  >

                  <input
                    type="date"
                    :min="formData.start_date"
                    v-model="formData.end_date"
                    placeholder="end_date"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                  />

                  <button
                    @click.prevent="clearValueInput(`end_date`, 'button_ar')"
                    id="button_ar_end_date"
                    class="close d-none"
                    ref="button_ar_end_date"
                  >
                    &times;
                  </button>
                </div>
              </div>


              <div
                class="col-3"
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
            <b-modal ref="modal" hide-footer>
              <h5 class="font-weight-bolder text-primary mb-4">
                {{ $t("addPriceList") }}
              </h5>
              <form>
                <div class="col-12 p-0">
                  <div class="form-group has-float-label">
                    <select
                      class="form-control"
                      id=""
                      name="product_id"
                      ref="product"
                       v-on:input="valinput($event)"
                
                       @change="
                    changeOption(
                      $event,
                   
                    )
                  "
                    >
                      <option value disabled selected>
                        {{ $t("Choose") }}
                      </option>
                      <option
                        v-for="product in products"
                        v-bind:key="product.id"
                        :value="product.id"
                      >
                        {{ product.name }}
                      </option>
                    </select>

                    <label for="" class="col-form-label">{{
                      $t("products")
                    }}</label>
                  </div>
                </div>

                <div class="row align-items-end">
                  <div class="col-6">
                    <div class="form-group has-float-label">
                      <select
                        @click="get($event)"
                        class="form-control"
                        id=""
                        name="unit_id"
                        ref="unit"
                      >
                        <option></option>
                        <option
                          v-for="unit in units"
                          v-bind:key="unit.id"
                          :value="unit.id"
                        >
                          {{ unit.name }}
                        </option>
                      </select>
                       
                      <label for="" class="col-form-label">{{
                        $t("units")
                      }}</label>
                    </div>
                  </div>





                  <div class="col-6 has-float-label">
                    <div class="form-group">
                      <input
                        type="number"
                        name="price"
                        placeholder="price"
                        class="form-control"
                        ref="price"
                      />
                      <label for="" class="col-form-label">{{
                        $t("price")
                      }}</label>
                    </div>
                  </div>
                </div>



                <div class="d-flex justify-content-end">
                  <b-button class="w-25 ml-3" secondary @click="hideModal">{{
                    $t("cancel")
                  }}</b-button>
                  <b-button
                    class="w-25 btn-model"
                    disabled
                    @click.prevent="getDataFromModal"
                    >{{ $t("submit") }}</b-button
                  >
                </div>
              </form>
            </b-modal>
            <b-button
              @click="openModel"
              class="btn-primary p-2 btn-model border-0 mb-3"
              >{{ $t("addPriceList") }}</b-button
            >
            <main-table v-model="formData.priceListsDetail" :options="options">
            </main-table>
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
  components: { UAnimateContainer, UAnimate },
  data() {
    return {
      gridClassName: window.$gridClassName,
      mainModuel: "",
      MainCategory: "",
      products: [],
      units: [],
      showModal: false,
      deleteIcon: function (cell, formatterParams, onRendered) {
        return "<i class='la la-trash'></i>";
      },

      formData: {
        code: "",
        is_active: true,
        name_ar: "",
        name_en: "",
        end_date: "",
        start_date: "",
        products_id:"",
        unit_id:"",
        priceListsDetail: [],
      },
      isEmpty: false,
      is_show: "",
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
        end_date: {},
        start_date: {},

        priceListsDetail: [
          {
            product_id: { required },
          },
        ],
        // days_count: {
        //   requiredIfFollowRenewal: requiredIf(
        //     this.formData.follow_renewal == true
        //   ),
        // },
      },
    };
  },

  setup: () => ({ $v: useVuelidate() }),

  mounted() {
    this.getCode();
    this.mainModuel = this.$route.params["mainModule"];
    this.MainCategory = this.$route.params["MainCategory"];
  },
  computed: {
    options() {
      return {
        layout: "fitDataFill",
        movableColumns: true,
        responsiveLayout: "collapse",
        groupBy: "products",
        columns: [
          {
            title: this.$t("product"),
            field: "product_name",
            sorter: "string",
            width: 200,
            editor: false,
            Select: true,
          },

          {
            title: this.$t("unit"),
            field: "unit_name",
            sorter: "string",
            width: 200,
            editor: false,
            Select: true,
          },
          {
            title: this.$t("price"),
            field: "price",
            sorter: "string",
            width: 200,
            editor: false,
          },
          {
            title: this.$t("action"),
            formatter: this.deleteIcon,
            width: 100,
            align: "center",
            cellClick: (e, cell) => {
              this.deleteRow(cell.getRow().getPosition());
            },
          },
        ],
      };
    },
  },
  created() {
    this.getProducts();
    this.getUnits();
  },
  methods: {
    get(e){
      var valueee = e.target.value ;
      return valueee;
    },
    hideModal() {
      this.$refs["modal"].hide();
    },
    openModel() {
      setTimeout(() => {
        this.$refs.modal.show();
      }, 100);
      setTimeout(() => {
        this.$refs.modal.hide();
      }, 200);
      setTimeout(() => {
        this.$refs.modal.show();
      }, 300);
    },
    getDataFromModal() {
      this.formData.priceListsDetail.push({
        product_id: this.$refs["product"].value,
        product_name:
          this.$refs["product"].options[this.$refs["product"].selectedIndex]
            .text,
        unit_id: this.$refs["unit"].value,
        unit_name:
          this.$refs["unit"].options[this.$refs["product"].selectedIndex].text,
        price: this.$refs["price"].value,
      });
      console.log(this.formData);
      this.hideModal();
    },
    async newPriceList() {
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
          await this.$store.dispatch("storePriceList", {
            data: this.formData,
          });
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },
    async getProducts() {
       await this.$store.dispatch("fetchProducts");
      this.products = this.$store.getters.getProducts;     
    },

    async getUnits() {
      await this.$store.dispatch("fetchUnits");
      this.units = this.$store.getters.getUnits.data;
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
    deleteRow(data) {
      this.formData.priceListsDetail.splice(data, 1);
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
      const code = await this.$store.dispatch("getPriceListCode");
      this.formData.code = code.data.data;
    },

     changeOption(event, $index, $model) {
      var value = event.target.value;
      console.log("ahedmed")
      this.info = value;
      var id = event.target.id;
      var select = document.getElementById(id);
      var disabled_elements = document.getElementsByClassName(
        $model + "_" + $index
      );
    },
  },
};
</script>

<style lang="scss">
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
</style>
