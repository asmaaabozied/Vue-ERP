<template>
    <div>
        <top-bar-card
        :newUrlName="`add-assetStatus`"
        :mainModuel="`tools`"
        :MainCategory="`cards`"
        :pageName="`asset_status`"
        :operation="`list`"
        />

        <div class="card card-custom mb-9 mt-10 gutter-b p-3">
            <main-table v-model="rows" :options="options"> </main-table>
        </div>
    </div>
</template>

<script>
export default {
  name: "asset-status",
  data() {
    return {
      editIcon: function (cell, formatterParams, onRendered) {
        return "<i class='la la-edit la-lg'></i>";
      },
      deleteIcon: function (cell, formatterParams, onRendered) {
        return "<i class='la la-trash'></i>";
      },
      rows: [],
      ids: [],
    };
  },
  created() {
    this.getResults();
  },

  computed: {
    options() {
      return {
        layout: "fitDataFill",
        pagination: "local",
        paginationSize: 10,
        paginationSizeSelector: [3, 6, 8, 10],
        movableColumns: true,
        responsiveLayout: "collapse",
        // selectable: true,
        // rowSelected: function (row) {
        //   row.update({ is_selected: true });
        //   row.getTable().redraw();
        // },
        // rowDeselected: function (row) {
        //   row.update({ is_selected: false });
        //   row.getTable().redraw();
        // },

        columns: [
          {
            formatter: "responsiveCollapse",
            width: 30,
            minWidth: 30,
            hozAlign: "center",
            resizable: false,
            headerSort: false,
            headerFilter: "input",
            headerFilter: true,
          },
          // {
          //   formatter: "rowSelection",
          //   titleFormatter: "rowSelection",
          //   hozAlign: "center",
          //   headerSort: false,
          // },
          {
            title: `<input type="checkbox" class="select-all-row"   />`,
            field: "is_selected",
            headerSort: false,
            formatter: (cell, row) => {
              return `<input type="checkbox" id="check_${
                cell.getRow().getData().id
              }" class="select-row" onclick="this.checked=!this.checked" />`;
            },
            cellClick: (cell, row) => {
              if ($(`#check_${row.getData().id}`).prop("checked")) {
                $(`#check_${row.getData().id}`).prop("checked", false);
              } else {
                $(`#check_${row.getData().id}`).prop("checked", true);
              }
              this.selectedIds(row.getData().id);
            },
            headerClick: (e, column) => {
              if (
                column.getTable().getSelectedRows().length !==
                column.getTable().getDataCount()
              ) {
                $(".select-row").prop("checked", true);
                column.getTable().selectRow();
                let obj = column.getTable().getSelectedRows();
                Object.keys(obj).forEach((key) => {
                  this.selectedIdsWithChecked(obj[key].getData().id);
                });
              } else {
                $(".select-row").prop("checked", false);
                column.getTable().deselectRow();
                this.ids = [];
              }
            },
          },
          {
            title: this.$t("id"),
            field: "id",
            sorter: "string",
            width: 200,
            editor: false,
            Select: true,
            headerFilter: "input",
            headerFilter: true,
          },

          {
            title: this.$t("column_code"),
            field: "code",
            sorter: "string",
            width: 200,
            editor: false,
            Select: true,
            headerFilter: "input",
            headerFilter: true,
            // bottomCalc: "sum",
          },
          {
            title: this.$t("name"),
            field: "name_en",
            sorter: "string",
            width: 200,
            editor: false,
            headerFilter: "input",
            headerFilter: true,
          },

          {
            title: this.$t("created_at"),
            field: "created_at",
            sorter: "string",
            width: 200,
            editor: false,
            headerFilter: "input",
            headerFilter: true,
          },
          {
            formatter: this.editIcon,
            align: "center",
            title: this.$t("edit"),
            headerSort: false,
            cellClick: (e, row) => {
              this.$routeLink.push({
                name: "edit-assetStatus",
                params: { id: row.getData().id },
              });
            },
          },

          {
            formatter: this.deleteIcon,
            // formatter: "buttonCross",
            align: "center",
            title: this.$t("delete"),
            headerSort: false,
            cellClick: (e, row) => {
              this.deleteAssetStatus(row.getData().id);
            },
          },
        ],
        rowClick: (e, row) => {
          // this.selectedIds(row.getData().id);
          // row.toggleSelect();
        },
      };
    },

    json_fields() {
      return {
        "`${this.$t('action')}`": "name",
        ddd: this.$t("action"),
      };
    },
    AssetStatus() {
      this.rows = this.$store.getters.getAssetStatus.data;
      return this.$store.getters.getAssetStatus;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
    assiginRow() {
      this.rows = this.$store.getters.getAssetStatus.data;
    },
  },
  methods: {
    async getResults() {
      await this.$store.dispatch("fetchAssetStatus");
      this.rows = this.$store.getters.getAssetStatus.data;
      console.log(this.rows);
    },

    async deleteAssetStatus(id) {
      const result = await this.$SwalChecks("You_won't_be_able_to_revert_this");
      if (result.value) {
        await this.$store.dispatch("deleteAssetStatus", id);
        this.rows = this.rows.filter((item) => {
          return item.id != id;
        });
      }
    },
  },
};
</script>
<style lang="scss">
    @import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
</style>
