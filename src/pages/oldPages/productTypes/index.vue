<template>
  <div>
    <top-bar-card :newUrlName="`add-productTypes`" />
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
            { field: 'name', type: 'asc' },
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
              showUrlName="show-productTypes"
            ></show-action>
            <edit-action
              :id="props.row.id"
              editUrlName="edit-productTypes"
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
  name: "productTypes",
  data() {
    return {
      languages: window.$languages,

      url: `http://127.0.0.1:8000/api/productTypes/export`,
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
          field: "name",
          visible: true,
        },
        {
          label: this.$t("status"),
          field: "active",
          tdClass: this.tdClassFunc,
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
    productTypes() {
      return this.$store.getters.getProductTypes;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
  },
  methods: {
    async getResults() {
      const productTypeUrl = { URL: "productTypes", all: 1 };
      const productTypes = await this.$store.dispatch(
        "fetchProductTypes",
        productTypeUrl
      );

      this.rows = this.$store.getters.getProductTypes.data;
    },

    async Delete(productType_id) {
      try {
        const result = await this.$SwalChecks(
          "You_won't_be_able_to_revert_this"
        );
        if (result.value) {
          const URL = "productTypes/" + productType_id;
          await this.$store.dispatch("deleteProductType", URL);
          this.rows = this.rows.filter((productType) => {
            return productType.id != productType_id;
          });
        }
      } catch (errors) {
        this.errors = errors;
      }
    },

    tdClassFunc(row) {
      return row.active !== true ? "red-class" : "green-class";
    },
  },
};
</script>
