<template>
  <div>
    <top-bar-card
      :listUrlName="`wareHouses`"
      :newUrlName="`add-wareHouses`"
      :MainCategory="`cards`"
      :pageName="`Warehouse`"
      :operation="`list`"
      :delete_action="`deleteWareHouse`"
      :ids="this.ids"
    />
    <div class="card card-custom mb-9 mt-10 gutter-b">
      <!-- <export-excel :data="rows" :fields="json_fields">
        Download Data
        <img src="download_icon.png" />
      </export-excel> -->
      <!--begin::Header-->

      <!--end::Header-->
      <main-table v-model="rows" :options="options"> </main-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "wareHouses",

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
            title: this.$t("column_code"),
            field: "code",
            sorter: "string",
            width: 200,
            editor: false,
            Select: true,
            headerFilter: "input",
            headerFilter: true,
          },
          {
            title: this.$t("name"),
            field: "name",
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
                name: "edit-carWheels",
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
              this.ids.push(row.getData().id) ;
              this.Delete();
            },
          },
        ],
      };
    },

    json_fields() {
      return {
        "`${this.$t('action')}`": "name",
        ddd: this.$t("action"),
      };
    },
    wareHouses() {
      this.rows = this.$store.getters.getWareHouses.data;
      return this.$store.getters.getWareHouses;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
    assiginRow() {
      this.rows = this.$store.getters.getWareHouses.data;
    },
  },
  methods: {
    selectedIds(id) {
      if (this.ids.includes(id)) {
        this.ids = this.ids.filter((item) => {
          return item != id;
        });
      } else {
        this.ids.push(id);
      }
    },
    selectedIdsWithChecked: function (id) {
      if (this.ids.includes(id)) {
        return true;
      } else {
        this.ids.push(id);
      }
    },
    async getResults() {
      await this.$store.dispatch("fetchWareHouses");
      this.rows = this.$store.getters.getWareHouses.data;
    },

    async Delete() {
      try {
        const result = await this.$SwalChecks(
          "You_won't_be_able_to_revert_this"
        );
        if (result.value) {
          let params = {
            ids: this.ids,
            listUrlName: this.listUrlName,
          };
          await this.$store.dispatch("deleteWareHouse", params);
          this.rows = this.rows.filter((wareHouse) => {
            return wareHouse.id != id;
          });
        }
      } catch (errors) {
        this.errors = errors;
      }
    },
  },
};
</script>
<style lang="scss">
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
</style>
