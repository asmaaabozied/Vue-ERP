<template>
  <div>
    <top-bar-card :newUrlName="`add-employees`" />
    <div class="card card-custom mb-9 mt-10 gutter-b">
      <!--begin::Header-->
      <div class="card-header">
        <div class="dropdown ml-auto">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="flaticon2-gear"></i> {{ $t("Settings") }}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <label
              v-for="field in columns"
              :key="field.key"
              class="
                form-check form-check-custom form-check-solid
                me-10
                dropdown-item
                mb-0
              "
            >
              <input
                class="h-15px w-15px"
                :disabled="visibleFields.length == 2 && field.visible"
                v-model="field.visible"
                type="checkbox"
                inline
              />
              <span class="form-check-label fw-bold pl-3">{{
                field.label
              }}</span>
            </label>
          </div>
        </div>
      </div>
      <!--end::Header-->

      <vue-good-table
        :columns="visibleFields"
        :rows="rows"
        :fixed-header="true"
        theme="polar-bear"
        :search-options="{
          enabled: true,
        }"
        :sort-options="{
          enabled: true,
          initialSortBy: [
            { field: 'first_name', type: 'asc' },
            { field: 'id', type: 'asc' },
          ],
        }"
        :pagination-options="{
          enabled: true,
        }"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <show-action
              :id="props.row.id"
              showUrlName="show-employees"
            ></show-action>
            <edit-action
              :id="props.row.id"
              editUrlName="edit-employees"
            ></edit-action>
            <delete-action :id="props.row.id" @delete="Delete"></delete-action>
          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "employees",
  data() {
    return {
      languages: window.$languages,

      url: `http://127.0.0.1:8000/api/employees/export`,
      lang: "ar",
      columns: [
        {
          label: this.$t("id"),
          field: "id",
          sort: true,
          uniqueId: true,
          visible: true,
        },
        {
          label: this.$t("First Name"),
          type: "String",
          field: "first_name",
          visible: true,
        },
        {
          label: this.$t("Middle Name"),
          type: "String",
          field: "middle_name",
          visible: true,
        },

        {
          label: this.$t("created_at"),
          field: "created_at",
          visible: true,
        },
        {
          label: "Actions",
          field: "actions",
          visible: true,
        },
      ],
      rows: [],
    };
  },
  created() {
    this.getResults();
  },
  computed: {
    employees() {
      return this.$store.getters.getEmployees;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
  },
  methods: {
    async getResults() {
      const employeeUrl = { URL: "employees", all: 1 };
      const employees = await this.$store.dispatch(
        "fetchEmployees",
        employeeUrl
      );
      this.rows = this.$store.getters.getEmployees.data;
    },

    async Delete(id) {
      try {
        const result = await this.$SwalChecks(
          "You_won't_be_able_to_revert_this"
        );
        if (result.value) {
          const URL = "employees/" + id;
          await $axios.delete(URL).then((response) => {
            this.rows = this.rows.filter((employee) => {
              return employee.id != id;
            });
          });
        }
      } catch (errors) {
        this.errors = errors;
      }
    },
  },
};
</script>