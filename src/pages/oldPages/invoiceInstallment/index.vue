<template>
  <div>
    <top-bar-card :newUrlName="`add-invoiceInstallment`" />
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
            { field: 'agent_name', type: 'asc' },
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
              showUrlName="show-invoiceInstallment"
            ></show-action>
            <edit-action
              :id="props.row.id"
              editUrlName="edit-invoiceInstallment"
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
  name: "discounts",
  data() {
    return {
      languages: window.$languages,

      url: `http://127.0.0.1:8000/api/invoiceInstallment/export`,
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
          label: this.$t("name"),
          type: "String",
          field: "agent_name",
          visible: true,
        },
        {
          label: this.$t("start_date"),
          type: "String",
          field: "start_date",
          visible: true,
        },
        {
          label: this.$t("phone"),
          type: "String",
          field: "agent_phone",
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
    invoiceinstallments() {
      return this.$store.getters.getInvoiceInstallments;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
  },
  methods: {
    async getResults(page = 1) {
      const invoiceinstallmentUrl = { URL: "invoiceinstallments", page };
      const invoiceinstallments = await this.$store.dispatch(
        "fetchInvoiceInstallments",
        invoiceinstallmentUrl
      );
      this.rows = this.$store.getters.getInvoiceInstallments.data;
    },

    async Delete(id) {
      try {
        const result = await this.$SwalChecks(
          "You_won't_be_able_to_revert_this"
        );
        if (result.value) {
          const URL = "invoiceinstallments/" + id;
          await $axios.delete(URL).then((response) => {
            this.rows = this.rows.filter((invoice) => {
              return invoice.id != id;
            });
          });
        }
      } catch (errors) {
        this.errors = errors;
      }
    },

    export() {
      try {
        $axios.get("invoiceinstallments/export").then(() => {});
      } catch (errors) {
        console.log("error");
      }
    },
  },
};
</script>
