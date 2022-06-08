<template>
  <div>
    <top-bar-card
      :newUrlName="`add-nationalities`"
      :editUrlName="`edit-nationalities`"
      :model="`nationality`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="`nationalities`"
      :listUrlName="`nationalities`"
      :operation="`list`"
      :delete_action="`deleteNationality`"
      :ids="this.ids"
    />

    <div class="card card-custom mb-9 mt-10 gutter-b p-3">
      <main-table v-model="rows" :options="options"></main-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "nationalities",
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
              if (this.ids.length <= 1) {
                    $(".la-trash").show();
                    $(".la-trash").removeClass('disabled');
                    $(".la-edit").show();
                    $(".la-edit").removeClass('disabled');
              } else {
                    $(".la-trash").hide();
                    $(".la-trash").addClass("disabled");
                    $(".la-edit").hide();
                    $(".la-edit").addClass("disabled");
              }
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
             if (this.ids.length <= 1) {
                $(".la-trash").show();
                $(".la-trash").removeClass('disabled');
              } else {
                  $(".la-trash").hide();
                $(".la-trash").addClass("disabled");
              }
            },
          },
          // {
          //     title: this.$t("id"),
          //     field: "id",
          //     sorter: "string",
          //     width: 200,
          //     editor: false,
          //     Select: true,
          //     headerFilter: "input",
          //     headerFilter: true,
          // },

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
                if (! $(".la-edit").hasClass('disabled')) {
                    this.$routeLink.push({
                        name: "edit-nationalities",
                        params: { id: row.getData().id },
                    });
                }
              
            },
          },

          {
            formatter: this.deleteIcon,
            align: "center",
            title: this.$t("delete"),
            headerSort: false,
            cellClick: (e, row) => {
                if (! $(".la-trash").hasClass('disabled')) {
                    this.ids.push(row.getData().id);
                    this.deleteNationality();
                }
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
    nationalities() {
      this.rows = this.$store.getters.getNationalities.data;
      return this.$store.getters.getNationalities;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
    assiginRow() {
      this.rows = this.$store.getters.getNationalities.data;
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
      await this.$store.dispatch("fetchNationalities");
      this.rows = this.$store.getters.getNationalities.data;
    },

    async deleteNationality() {
      const result = await this.$SwalChecks("You_won't_be_able_to_revert_this");
      let params = {
        ids: this.ids,
        listUrlName: this.listUrlName,
      };
      if (result.value) {
        await this.$store.dispatch("deleteNationality", params);
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
