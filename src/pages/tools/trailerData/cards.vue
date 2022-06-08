<template>
  <div
      class="tab-pane fade tab-product-main"
      id="page-cards"
      role="tabpanel"
      aria-labelledby="cards-tab"
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
              href="#collapseThree"
          >
            <i class="flaticon2-layers-2"></i>
            <span> {{ $t("cards") }}</span>
          </a>
        </h4>
      </div>
      <div
          id="collapseThree"
          class="panel-collapse collapse"
          :class="`${dataa}`"
      >
        <div class="panel-body">
          <div class="row">
            <div class="form-group col-12 mb-0">
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
                  id="kt_datatable_2"
                  style
              >
                <table class="datatable-table table table-bordered mb-0">
                  <thead class="datatable-head">
                  <tr class="datatable-row" style="left: 0px">
                    <th
                        data-field="RecordID"
                        class="datatable-cell-center datatable-cell text-center"
                    >
                      <span>#</span>
                    </th>
                    <th
                        data-field
                        class="datatable-cell end-cell text-center"
                    >
                      <span style> {{ $t("action") }} </span>
                    </th>
                    <th data-field class="datatable-cell">
                      <span style>{{ $t("document_issuer_id") }} </span>
                    </th>
                    <th data-field class="datatable-cell">
                      <span style>{{ $t("document_type_id") }} </span>
                    </th>
                    <th data-field class="datatable-cell">
                      <span style>{{ $t("number") }}</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>{{ $t("issue_date") }}</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>{{ $t("expire_date") }}</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>{{ $t("note") }}</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>{{ $t("value") }}</span>
                    </th>
                  </tr>
                  </thead>
                  <tbody class="datatable-body">
                  <tr
                      v-for="(card, index) in formData.cards"
                      :key="card.id"
                      class="datatable-row datatable-row-even"
                  >
                    <td class="datatable-cell-center datatable-cell">
                      <span style="width: 30px">{{ index + 1 }}</span>
                    </td>
                    <td class="text-center end-td">
                      <button
                          type="button"
                          data-toggle="tooltip"
                          @click="deleteRow(index)"
                          title="Remove"
                          :disabled="index + 1 == 1 ? '' : disabled"
                          class="btn btn-danger btn-option"
                      >
                        <i class="fa fa-minus-circle"></i>
                      </button>
                    </td>

                    <td class="datatable-cell">
                      <select
                          class="form-control"
                          v-model="
                            $v.formData.cards[index].document_issuer_id.$model
                          "
                          @input="
                            checkDisabled(
                              formData.cards[index].document_type_id,
                              formData.cards[index].document_issuer_id,
                              formData.cards[index].doc_serial
                            )
                          "
                          :class="{
                            'is-invalid':
                              $v.formData.cards[index].document_issuer_id
                                .$error,
                            'is-vaild':
                              !$v.formData.cards[index].document_issuer_id
                                .$invalid,
                          }"
                          :ref="`doc-${index}`"


                      >
                        <option value disabled selected>Choose</option>
                        <option
                            v-for="documentIsser in documentIssers"
                            v-bind:key="documentIsser.id"
                            :value="documentIsser.id"
                        >
                          {{ documentIsser.name }}
                        </option>
                      </select>
                    </td>

                    <td class="datatable-cell">
                      <select
                          class="form-control"
                          v-model="
                            $v.formData.cards[index].document_type_id.$model
                          "
                          :class="{
                            'is-invalid':
                              $v.formData.cards[index].document_type_id.$error,
                            'is-vaild':
                              !$v.formData.cards[index].document_type_id
                                .$invalid,
                          }"
                          :ref="`doc-${index}`"
                          @input="
                            checkDisabled(
                              formData.cards[index].document_type_id,
                              formData.cards[index].document_issuer_id,
                              formData.cards[index].doc_serial
                            )
                          "
                      >
                        <option value disabled selected>Choose</option>


                        <option
                            v-for="DocumentType in DocumentTypes"
                            v-bind:key="DocumentType.id"
                            :value="DocumentType.id"
                        >
                          {{ DocumentType.name }}
                        </option>
                      </select>
                    </td>
                    <td class="datatable-cell">
                      <input
                          type="number"
                          class="form-control"
                          placeholder="doc_serial"
                          @input="
                            checkDisabled(
                              formData.cards[index].document_type_id,
                              formData.cards[index].document_issuer_id,
                              formData.cards[index].doc_serial
                            )
                          "
                          :class="{
                            'is-invalid':
                              $v.formData.cards[index].doc_serial.$error,
                            'is-vaild':
                              !$v.formData.cards[index].doc_serial.$invalid,
                          }"
                          v-model="$v.formData.cards[index].doc_serial.$model"
                          :id="`doc-${index}`"
                      />

                      <input
                          type="hidden"
                          class="form-control"
                          placeholder="id"
                          v-model="formData.cards[index].id"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="date"
                          :max="formData.cards[index].end_date"
                          v-model="formData.cards[index].start_date"
                          placeholder="start_date"
                          class="form-control"
                          @keyup="chanagClass($event, `ar`)"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="date"
                          :min="formData.cards[index].start_date"
                          v-model="formData.cards[index].end_date"
                          placeholder="end_date"
                          class="form-control"
                          @keyup="chanagClass($event, `ar`)"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="notes"
                          v-model="formData.cards[index].notes"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="value"
                          v-model="formData.cards[index].value"
                      />
                    </td>
                  </tr>
                  <tr class="datatable-row datatable-row-even">
                    <td class="datatable-cell-center datatable-cell">
                      <span style="width: 30px"></span>
                    </td>
                    <td class="text-center end-td">
                      <button
                          @click="addRow()"
                          ref="add-button"
                          type="button"
                          class="btn btn-primary add_new"
                         
                      >
                        <i class="fa fa-plus-circle"></i>
                      </button>
                    </td>
                    <td class="datatable-cell">
                      <span></span>
                    </td>
                    <td class="datatable-cell">
                      <span></span>
                    </td>
                    <td class="datatable-cell">
                      <span></span>
                    </td>
                    <td class="datatable-cell">
                      <span></span>
                    </td>
                    <td class="datatable-cell">
                      <span></span>
                    </td>
                    <td class="datatable-cell">
                      <span></span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {required, requiredIf, requiredUnless} from "@vuelidate/validators";
import {UAnimateContainer, UAnimate} from "vue-wow";

export default {
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
    language: {
      type: String,
      default: "en",
    },
    formData: {type: Object},
    addclassshow: {
      type: Object,
      default: null,
    },
    isEmpty: false,
    backErrors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      documentIssers: [],
      DocumentTypes: [],
      nextItemId: 2,
      incrment: 2,
      languages: window.$languages,
      gridClassName: window.$gridClassName,
      active: false,
      valArr: [],
    };
  },
  setup: () => ({$v: useVuelidate()}),

  validations() {
    return {
      formData: {
        cards: this.valCards(),
      },
    };
  },
  created() {
    this.getDocumentIssers();
    this.getDocumentType();
    this.checkDisabled();
  },
  mounted() {
    this.valCards();
  },
  computed: {},
  methods: {
    addRow() {
      this.formData.cards.push({
        doc_serial: "",
        document_issuer_id: "",
        document_type_id: "",
        end_date: "",
        notes: "",
        start_date: "",
        value: "",
      });
      this.incrment++;
      this.nextItemId++;
      this.valCards();
      this.$refs["add-button"].disabled = true;
    },
    checkDisabled(document, issuer, serial) {
      if (document !== "" && issuer !== "" && serial !== "") {
        this.$refs["add-button"].disabled = false;
      } else {
        this.$refs["add-button"].disabled = true;
      }
    },
    deleteRow(index) {
      this.formData.cards.splice(index, 1);
      this.valArr.splice(index, 1);

      this.incrment--;
    },

    async getDocumentIssers() {
      await this.$store.dispatch("fetchDocumentIssuer");
      this.documentIssers = this.$store.getters.getDocumentIssuer.data;

    },
    valCards() {
      let valArr = [];
      this.formData.cards.forEach((element, index) => {
        valArr.push({
          document_issuer_id: {
            requiredIfDocumentTypeId: requiredIf(this.formData.cards[index].document_type_id != ""),
            requiredIfDocSerial: requiredIf(this.formData.cards[index].doc_serial != ""),
          },
          document_type_id: {
            requiredIfDocumentissuerId: requiredIf(this.formData.cards[index].document_issuer_id != ""),
            requiredIfDocSerial: requiredIf(this.formData.cards[index].doc_serial != ""),
          },

          doc_serial: {
            requiredIfDocumentTypeId: requiredIf(this.formData.cards[index].document_type_id != ""),
            requiredIfDocumentissuerId: requiredIf(this.formData.cards[index].document_issuer_id != ""),
          },
        });
      });
      return valArr;
    },
    async getDocumentType() {
      await this.$store.dispatch("fetchTrailerDocumentTypes");
      this.DocumentTypes = this.$store.getters.getTrailerDocumentTypes.data;
    },
    getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
    validatorName() {
      if (
          this.formData.plate_number_en == "" ||
          this.formData.plate_number_ar == ""
      ) {
        return true;
      }
      return false;
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


     /**
     *
     * to add and remove class d-none
     */
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