<template>
  <div
    class="tab-pane fade tab-product-main"
    id="page-determinantsDetails"
    role="tabpanel"
    aria-labelledby="determinantsDetails-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseThree">
            <i class="flaticon2-layers-2"></i>
            <span>DeterminantsDetails</span>
          </a>
        </h4>
      </div>
      <div id="collapseThree" class="panel-collapse collapse" :class="`${dataa}`">
        <div class="panel-body">
          <div class="row">
            <div class="form-group col-12 mb-0">
              <div
                class="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded table-product alternative-table"
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
                      <th data-field class="datatable-cell end-cell text-center">
                        <span style>action</span>
                      </th>

                      <th data-field class="datatable-cell">
                        <span style>{{ $t("name_ar") }}</span>
                      </th>

                      <th data-field class="datatable-cell">
                        <span style>{{ $t("name_en") }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="datatable-body">
                    <tr
                      v-for="(card, index) in formData.determinantsDetail"
                      :key="card.id"
                      class="datatable-row datatable-row-even"
                    >
                      <td class="datatable-cell-center datatable-cell">
                        <span style="width: 30px;">{{ index + 1 }}</span>
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
                        <input
                          type="text"
                          class="form-control"
                          placeholder="name_ar"
                          v-model="formData.determinantsDetail[index].name_ar"
                          :name="`determinantsDetail[${index}][name_ar]`"
                        />
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="name_en"
                          v-model="formData.determinantsDetail[index].name_en"
                          :name="`determinantsDetail[${index}][name_en]`"
                        />
                      </td>

                     
                    </tr>

                    <!-- /////////////// ازود رو -->

                    <tr class="datatable-row datatable-row-even">
                      <td class="datatable-cell-center datatable-cell">
                        <span style="width: 30px;"></span>
                      </td>
                      <td class="text-center end-td">
                        <button @click="addRow()" type="button" class="btn btn-primary add_new">
                          <i class="fa fa-plus-circle"></i>
                        </button>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                    </tr>

                    <!-- /////////////// ازود رو -->
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
export default {
  props: {
    errors: {
      type: Object,
      default: () => ({})
    },
    dataa: {
      type: String
    },
    addactive: {
      type: String
    },
    language: {
      type: String,
      default: "en"
    },
    formData: { type: Object },
    addclassshow: {
      type: Object,
      default: null
    },

    addclassshow: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      status_card: false,
      trs: [
        {
          id: 1
        }
      ],
      nextItemId: 2,
      active: false,
      incrment: 2
    };
  },
  created() {
    this.getResults();
  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    }
  },
  methods: {
    addRow() {
      //////////////////

      this.formData.determinantsDetail.push({
        name_ar: "",
        name_en: "",
      });

      //////////////////

      this.incrment++;

      this.nextItemId++;
    },
    //////////////////

    deleteRow(index) {
      this.formData.determinantsDetail.splice(index, 1);
      this.incrment--;
      console.log(this.trs);
    },
    //////////////////

    changeclass() {
      this.active = this.active == true ? false : true;
    },
    methodevent() {
      this.$emit("methodevent");
    },
    methodactive() {
      if (this.addactive == "") {
        this.addactive == active;
      } else {
        this.addactive == "";
      }
    }
  }
};
</script>

<style></style>
