<template>
  <div>
    <div
      class="tab-pane fade tab-product-main"
      id="pay-condition"
      role="tabpanel"
      aria-labelledby="pay-condition-tab"
    >
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a
              data-toggle="collapse"
              data-parent=".tab-pane"
              href="#collapseThree"
            >
              <i class="flaticon2-contract"></i> <span>pay conditions </span>
            </a>
          </h4>
        </div>
        <div id="collapseThree" class="panel-collapse collapse">
          <div class="panel-body">
            <div class="row">
              <div class="form-group col-12 mb-0">
                <div
                  class="
          datatable0 datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded table-product
                                       "
                  id="kt_datatable_2"
                >
                  <table class="datatable-table table table-bordered">
                    <thead class="datatable-head">
                      <tr class="datatable-row" style="left: 0px;">
                        <th
                          data-field="RecordID"
                          class="datatable-cell-center datatable-cell text-center"
                        >
                          <span>#</span>
                        </th>
                        <th
                          data-field=""
                          class="datatable-cell  end-cell text-center"
                        >
                          <span style="">action</span>
                        </th>
                        <th class="datatable-cell ">
                          <span style="">amount</span>
                        </th>
                        <th class="datatable-cell ">
                          <span style="">rate</span>
                        </th>
                        <th class="datatable-cell ">
                          <span style="">date</span>
                        </th>
                        <th class="datatable-cell ">
                          <span style="">notes</span>
                        </th>
                        <th class="datatable-cell ">
                          <span style="">mark</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="datatable-body ">
                      <tr class="datatable-row datatable-row-even">
                        <td class="datatable-cell-center datatable-cell">
                          <span style="width: 30px;">{{ index + 1 }}</span>
                        </td>
                        <td class="text-center end-td ">
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
                        <td class="datatable-cell ">
                          <input type="number" class="form-control" />
                        </td>
                        <td class="datatable-cell ">
                          <input type="text" class="form-control" />
                        </td>
                        <td class="datatable-cell ">
                          <input type="text" class="form-control" />
                        </td>
                        <td class="datatable-cell ">
                          <input type="date" class="form-control" />
                        </td>
                        <td class="datatable-cell ">
                          <input type="text" class="form-control" />
                        </td>
                      </tr>
                      <tr class="datatable-row datatable-row-odd">
                        <td class="datatable-cell-center datatable-cell"></td>
                        <td class="text-center end-td">
                          <button
                            @click="addRow()"
                            type="button"
                            class="btn btn-primary add_new"
                          >
                            <i class="fa fa-plus-circle"></i>
                          </button>
                        </td>
                        <td class="datatable-cell ">
                          <input type="text" class="form-control" />
                        </td>
                        <td class="datatable-cell ">
                          <input type="text" class="form-control" />
                        </td>
                        <td class="datatable-cell ">
                          <input type="text" class="form-control" />
                        </td>
                        <td class="datatable-cell ">
                          <input type="text" class="form-control" />
                        </td>
                        <td class="datatable-cell ">
                          <input type="text" class="form-control" />
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
  </div>
</template>
<script>
export default {
  name: "payConditions",
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

    addclassshow: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      nextItemId: 2,
      active: false,
      incrment: 2,
      index: 0,
    };
  },
  methods: {
    addRow() {
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
  },
};
</script>
