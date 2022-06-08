<template>
  <div
      class="tab-pane fade tab-product-main"
      id="currencyExchenge"
      role="tabpanel"
      aria-labelledby="#currencyExchenge-tab"
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
              href="#collapseeight"
          >
            <i class="flaticon2-layers-2"></i>
            <span>{{ $t("currencyExchenge") }}</span>
          </a>
        </h4>
      </div>
      <div
          id="collapseeight"
          class="panel-collapse collapse"
          :class="`${dataa}`"
      >
        <div class="panel-body">
          <!-- start model addCurrencyeX -->
          <b-modal ref="modal" hide-footer>
            <h5 class="font-weight-bolder text-primary mb-4">
              {{ $t("addCurrencyeX") }}
            </h5>
            <form>
              <div class="row align-items-end">
                <div class="col-12">
                  <div class="form-group has-float-label">
                    <select
                        class="form-control"
                        name="to_currency_id"
                        ref="to_currency_id"
                        @input="checkDisabled()"
                    >
                      <option></option>
                      <option
                          v-for="currency in currencies"
                          v-bind:key="currency.id"
                          :value="currency.id"
                      >
                        {{ currency.name }}
                      </option>
                    </select>
                    <label for="" class="col-form-label">{{
                        $t("currencies")
                      }}</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group has-float-label">
                    <input
                        class="form-control"
                        id=""
                        type="number"
                        name="exchange_rate"
                        ref="exchange_rate"

                        @input="checkDisabled()"

                    />
                    <label for="" class="col-form-label">{{
                        $t("ExchangeRate")
                      }}</label>
                  </div>
                </div>
                <div class="col-6 has-float-label">
                  <div class="form-group">
                    <input
                        type="date"
                        name="exchange_date"
                        placeholder="ExchangeDate"
                        class="form-control"
                        ref="exchange_date"

                        @input="checkDisabled()"
                    />
                    <label for="" class="col-form-label">{{
                        $t("ExchangeDate")
                      }}</label>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <b-button class="w-25 ml-3" secondary @click="hideModal">{{
                    $t("cancel")
                  }}
                </b-button>
                <b-button
                    class="w-25 btn-model"
                    :disabled="isDisabled"
                    @click.prevent="getDataFromModal"
                    ref="add-button">{{ $t("submit") }}
                </b-button
                >

              </div>
            </form>
          </b-modal>
          <b-button
              @click="openModel"

              class="btn-primary p-2 btn-model border-0 mb-3"
          >{{ $t("addCurrencyeX") }}
          </b-button
          >

          <main-table v-model="formData" :options="options"></main-table>
          <!-- end model  addCurrencyeX-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useVuelidate} from "@vuelidate/core";
import {required, requiredIf} from "@vuelidate/validators";
import {UAnimateContainer, UAnimate} from "vue-wow";

export default {
  components: {UAnimateContainer, UAnimate},


  name: "CurrencyExchange",
  props: {
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
    formData: {},
  },
  data() {
    return {
      // formData: {
      //   arr: [],
      // },
      isDisabled: true,
      currencies: [],
      exchange_date: {},
      currencyExchenge: {},
      to_currency_id: {},
      exchange_rate: {},
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
        groupBy: "currency_name",
        columns: [

          {
            title: this.$t("name"),
            field: "currency_name",
            sorter: "string",
            width: 200,
            editor: false,
            Select: true,
          },

          {
            title: this.$t("ExchangeRate"),
            field: "exchange_rate",
            sorter: "string",
            width: 200,
            editor: false,
            Select: true,
          },
          {
            title: this.$t("ExchangeDate"),
            field: "exchange_date",
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
    this.getCurrencies();
    this.checkDisabled();

  },
  methods: {
    checkDisabled() {

      if (this.$refs["to_currency_id"].value !== "" && this.$refs["exchange_rate"].value !== "" && this.$refs["exchange_date"].value) {
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

    getDataFromModal() {

      if (this.$refs["to_currency_id"].value !== "" && this.$refs["exchange_rate"].value !== "" && this.$refs["exchange_date"].value) {

        this.$refs["add-button"].disabled = false;

        this.formData.push({
          to_currency_id: this.$refs["to_currency_id"].value,
          currency_name:
          this.$refs["to_currency_id"].options[this.$refs["to_currency_id"].selectedIndex]
              .text,
          exchange_rate: this.$refs["exchange_rate"].value,
          exchange_date: this.$refs["exchange_date"].value,
        });


        this.hideModal();
      } else {


      }


    },

    async getCurrencies() {
      await this.$store.dispatch("fetchCurrencies");
      this.currencies = this.$store.getters.getCurrencies.data;


    },
    hideModal() {
      this.$refs["modal"].hide();
    },

    changeclass() {
      this.active = this.active == true ? false : true;
    },
    disabledFieldInput() {
      this.$refs["add-button"].disabled = true;

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