<template>
  <div
      class="tab-pane fade tab-product-main"
      id="page-covers"
      role="tabpanel"
      aria-labelledby="covers-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4
            class="panel-title"
            @click.prevent="changeclass"
            :class="[{ active: active }, `${addactive}`]"
        >
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapsefour">
            <i class="flaticon2-layers-2"></i>
            <span>{{ $t("cover") }}</span>
          </a>
        </h4>
      </div>
      <div id="collapsefour" class="panel-collapse collapse" :class="`${dataa}`">
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
                    <!-- <th data-field class="datatable-cell end-cell text-center">
                      <span style>action</span>
                    </th> -->

                    <th data-field class="datatable-cell">
                      <span style> {{ $t("start_serial") }}</span>
                    </th>
                    <th data-field class="datatable-cell">
                      <span style> {{ $t("size") }}</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style> {{ $t("type") }}</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style>{{ $t("date") }}</span>
                    </th>
                    <th data-field class="datatable-cell">
                      <span style> {{ $t("description") }}</span>
                    </th>
                    <th data-field class="datatable-cell">
                      <span style>  {{ $t("state") }}</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style> {{ $t("date") }}</span>
                    </th>




                    <th data-field class="datatable-cell">
                      <span style> {{ $t("quantity") }}</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style> {{ $t("name") }}</span>
                    </th>

                    <th data-field class="datatable-cell">
                      <span style> {{ $t("product_name") }}</span>
                    </th>
                    <th data-field class="datatable-cell">
                      <span style> {{ $t("notes") }}</span>
                    </th>

                  </tr>
                  </thead>
                  <tbody class="datatable-body">
                  <tr
                      v-for="(tr, index) in covers"
                      :key="index"
                      class="datatable-row datatable-row-even"
                  >
                    <td class="datatable-cell-center datatable-cell">
                      <span style="width: 30px;">{{ index + 1 }}</span>
                    </td>
                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="issue place"
                          v-bind:value="tr.serial_no"

                          :name="`cards[${index}][serial_no]`"
                      />
                    </td>


                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="cover"
                          v-bind:value="tr.size"

                          :name="`cards[${index}][size]`"
                      />
                    </td>




                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="serial number"
                          v-bind:value="tr.type"

                          :name="`cards[${index}][type]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="size "
                          v-bind:value="tr.wheel_date"

                          :name="`cards[${index}][wheel_date]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="description"
                          v-bind:value="tr.description"

                          :name="`cards[${index}][description]`"
                      />
                    </td>

                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="kind cover"
                          v-bind:value="tr.state"

                          :name="`cards[${index}][state]`"
                      />
                    </td>


                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="status"
                          v-bind:value="tr.prod_date"

                          :name="`cards[${index}][prod_date]`"
                      />
                    </td>




                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="note"
                          v-bind:value="tr.guaranty_qty"

                          :name="`cards[${index}][guaranty_qty]`"
                      />
                    </td>


                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="wareHouse_name"
                          v-bind:value="tr.wareHouse_name"

                          :name="`cards[${index}][wareHouse_name]`"
                      />
                    </td>
                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="wheel_name_en"
                          v-bind:value="tr.product_name"

                          :name="`cards[${index}][product_name]`"
                      />
                    </td>
                    <td class="datatable-cell">
                      <input
                          type="text"
                          class="form-control"
                          placeholder="date made"
                          v-bind:value="tr.notes"

                          :name="`cards[${index}][notes]`"
                      />
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
export default {
  name: "editCoverInput",
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

    addclassshow: {
      type: Object,
      default: null
    },
    covers:{},
    testTrs: {},

  },
  data() {
    return {

      covers: [
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




  },
  computed: {


  },
  methods: {
    addRow() {
      this.covers.push({
        id: (this.nextItemId += this.nextItemId)
      });
      this.incrment++;

      this.nextItemId++;
    },
    deleteRow(index) {
      this.covers.splice(index, 1);
      this.incrment--;
    },

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
    },

  }
};
</script>

<style></style>
