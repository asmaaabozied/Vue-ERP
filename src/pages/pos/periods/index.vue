<template>
  <div>
    <top-bar-card :newUrlName="`add-periods`" />
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
            <i class="flaticon2-gear"></i> {{ $t("settings") }}
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
            { field: 'name_ar', type: 'asc' },
            { field: 'name_en', type: 'asc' },
            { field: 'code', type: 'asc' },
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
              showUrlName="showPeriod"
            ></show-action>
            <edit-action
              :id="props.row.id"
              editUrlName="edit-periods"
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
  name: "periods",
  data() {
    return {
      //   languages: window.$languages,

      url: `http://127.0.0.1:8000/api/periods/export`,
      lang: "ar",
      columns: [
        {
          label: this.$t("code"),
          field: "code",
          sort: true,
          uniqueId: true,
          visible: true,
        },
        {
          label: this.$t("branches"),
          field: "branche_id",
          sort: true,
          uniqueId: true,
          visible: true,
        },
        {
          label: this.$t("account"),
          field: "account_id",
          sort: true,
          uniqueId: true,
          visible: true,
        },
        {
          label: this.$t("ar.name"),
          type: "String",
          field: "name_ar",
          visible: true,
        },
        {
          label: this.$t("en.name"),
          type: "String",
          field: "name_en",
          visible: true,
        },
        {
          label: this.$t("from_time"),
          type: "String",
          field: "from_time",
          visible: true,
        },
        {
          label: this.$t("to_time"),
          type: "String",
          field: "to_time",
          visible: true,
        },
        {
          label: this.$t("created_at"),
          field: "created_at",
          visible: true,
        },
        {
          label: this.$t("action"),
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
    Period() {
      return this.$store.getters.getPeriod;
    },

    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
  },
  methods: {
    async getResults() {
      await this.$store.dispatch("fetchPeriod");
      this.rows = this.$store.getters.getPeriod.data;
      console.log(this.rows);
    },

    async Delete(id) {
      const result = await this.$SwalChecks("You_won't_be_able_to_revert_this");
      if (result.value) {
        await this.$store.dispatch("deletePeriod", id);
        this.rows = this.rows.filter((item) => {
          return item.id != id;
        });
      }
    },
  },
};
</script>
