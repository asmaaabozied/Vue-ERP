<template>
  <div
    class="tab-pane fade tab-product-main"
    id="CurrencyParts"
    role="tabpanel"
    aria-labelledby="#CurrencyParts-tab"
  >
    <div class="panel panel-default">
      <div
        class="panel-heading"
        v-wow="{
          'animation-name': 'fadeInUp',
          'animation-duration': '2s',
        }"
      >
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapseCurrencyParts"
          >
            <i class="flaticon2-layers-2"></i>
            <span>{{ $t("CurrencyParts") }}</span>
          </a>
        </h4>
      </div>
      <div
        id="collapseCurrencyParts"
        class="panel-collapse collapse"
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <!-- start model addCurrencyeX -->
          <b-modal ref="modal" hide-footer>
            <h5 class="font-weight-bolder text-primary mb-4">
              {{ $t("CurrencyParts") }}
            </h5>
            <form>
              <div class="row align-items-end">
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
                      ref="name_ar"
                      @input="checkDisabled()"
                      :placeholder="`Part Name Arabic`"
                    />

                    <label class="col-form-label">
                      {{ $t(`part_name_ar`) }}
                    </label>
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
                      ref="name_en"
                      :placeholder="`Part Name English`"
                      @input="checkDisabled()"
                    />

                    <label class="col-form-label">
                      {{ $t(`part_name_en`) }}
                    </label>
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
                    <input
                      class="form-control"
                      id=""
                      type="number"
                      name="rate"
                      ref="rate"
                      @input="checkDisabled()"
                    />
                    <label for="" class="col-form-label">{{
                      $t("rate")
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
<!--                  <div class="d-flex">-->
<!--                    <active-toggle :formData="formData" class="col p-0" />-->
<!--                  </div>-->
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <b-button class="w-25 ml-3" secondary @click="hideModal">{{
                  $t("cancel")
                }}</b-button>
<!--                <b-button-->
<!--                  class="w-25 btn-model"-->
<!--                  @click.prevent="getDataFromModal"-->
<!--                  >{{ $t("submit") }}</b-button-->
<!--                >-->

                <b-button
                    class="w-25 btn-model"
                    @click.prevent="getDataFromModal"
                    ref="add-button"  :disabled="isDisabled" >{{ $t("submit") }}
                </b-button>
              </div>
            </form>
          </b-modal>
          <b-button
            @click="openModel"
            class="btn-primary p-2 btn-model border-0 mb-3"
            >{{ $t("CurrencyParts") }}</b-button
          >

          <main-table v-model="formData" :options="options"> </main-table>
          <!-- end model  addCurrencyeX-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CurrencyParts",
  props: {
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
    formData:{

    },
  },
  data() {
    return {
      isDisabled: true,
      CurrencyParts: {},
      index: 0,
      isActive: true,
      activeAssign: false,

      active: false,
      showModal: false,
      rows: [],
      deleteIcon: function (cell, formatterParams, onRendered) {
        return "<i class='la la-trash'></i>";
      },
    };
  },
  computed: {
    options() {
      return {
        layout: "fitDataFill",
        movableColumns: true,
        responsiveLayout: "collapse",
        // groupBy: "currency",
        columns: [
          {
            title: this.$t("part_name_ar"),
            field: "name_ar",
            sorter: "string",
            width: 200,
            editor: false,
            Select: true,
          },
          {
            title: this.$t("part_name_en"),
            field: "name_en",
            sorter: "string",
            width: 200,
            editor: false,
            Select: true,
          },

          {
            title: this.$t("rate"),
            field: "rate",
            sorter: "string",
            width: 200,
            editor: false,
            Select: true,
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
        json_fields() {
          return {
            "`${this.$t('action')}`": "name",
            ddd: this.$t("action"),
          };
        },
      };
    },

    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
  },
  created() {
    this.checkDisabled();
  },
  methods: {

    checkDisabled() {

      if (this.$refs["name_ar"].value !== "" && this.$refs["name_en"].value !== "" && this.$refs["rate"].value) {
        this.isDisabled = false;
        this.$refs["add-button"].disabled = this.isDisabled;
      } else {
        this.isDisabled = true;
        this.$refs["add-button"].disabled = this.isDisabled;

      }
    },
    async deleteRow(index) {

      const result = await this.$SwalChecks("You_won't_be_able_to_revert_this");
      if (result.value) {
        this.formData.splice(index, 1);
        this.incrment--;
        // console.log(this.trs);
      }
    },
    hideModal() {
      this.$refs["modal"].hide();
    },

    changeclass() {
      this.active = this.active == true ? false : true;
    },
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

    getDataFromModal() {
      console.log(this.$refs)
      const arrFromModel = {
        name_ar: this.$refs["name_ar"].value,
        name_en: this.$refs["name_en"].value,
        rate: this.$refs["rate"].value,
        // is_active: this.$refs["is_active"].value,
      };
      this.formData.push(arrFromModel);
      this.hideModal();
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

      this.isDisabled = true;
      this.$refs["add-button"].disabled = this.isDisabled;
    },
  },
};
</script>

<style lang="scss">
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
</style>