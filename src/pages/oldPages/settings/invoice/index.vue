<template>
  <div>
    <top-bar-card :newUrlName="`invoice_setting`" />
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
              showUrlName="show-countries"
            ></show-action>
            <edit-action
              :id="props.row.id"
              editUrlName="edit-countries"
            ></edit-action>
            <delete-action :id="props.row.id" @delete="Delete"></delete-action>
          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
      </vue-good-table>

      <!--begin: Datatable-->
      <div class="card-body">
        <!--begin: Datatable-->
        <div
          class="
            datatable
            datatable-bordered
            datatable-head-custom
            datatable-default
            datatable-primary
            datatable-scroll
            datatable-loaded
          "
          id="kt_datatable_2"
          style=""
        >
          <table class="datatable-table">
            <thead class="datatable-head">
              <tr class="datatable-row" style="left: 0px">
                <th
                  data-field="id"
                  class="
                    datatable-cell-center datatable-cell datatable-cell-check
                  "
                >
                  <span style=""
                    ><label class="checkbox checkbox-single checkbox-all"
                      ><input type="checkbox" />&nbsp;<span></span></label
                  ></span>
                </th>
                <th data-field="name" class="datatable-cell">
                  <span style="">name</span>
                </th>
                <th class="datatable-cell">
                  <span style="">invoice_type</span>
                </th>
                <th class="datatable-cell"><span style="">prefix</span></th>
                <th class="datatable-cell">
                  <span style="">start_serial</span>
                </th>
                <th class="datatable-cell">
                  <span style="">is_taxed</span>
                </th>
                <th class="datatable-cell">
                  <span style="">currency</span>
                </th>
                <th class="datatable-cell">
                  <span style="">cost_center</span>
                </th>
                <th data-field="Actions" class="datatable-cell">
                  <span style="">actions</span>
                </th>
              </tr>
            </thead>
            <tbody class="datatable-body">
              <tr
                class="datatable-row datatable-row-even ins{invoiceSetting.id}"
                v-for="(invoiceSetting, i) in invoiceSettings"
                :key="i"
                style="left: 0px"
              >
                <td
                  class="
                    datatable-cell-center datatable-cell datatable-cell-check
                  "
                >
                  <span style="">
                    <label class="checkbox checkbox-single">
                      <input type="checkbox" value="" />&nbsp;
                      <span></span>
                    </label>
                  </span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoiceSetting.name }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoiceSetting.invoice_type }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoiceSetting.prefix }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoiceSetting.start_serial }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoiceSetting.is_taxed }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoiceSetting.currency_id }}</span>
                </td>
                <td class="datatable-cell">
                  <span>{{ invoiceSetting.cost_center_id }}</span>
                </td>
                <td class="datatable-cell">
                  <span style="overflow: visible; position: relative">
                    <div class="dropdown dropdown-inline">
                      <a
                        href="javascript:;"
                        class="btn btn-sm btn-clean btn-icon mr-2"
                        data-toggle="dropdown"
                      >
                        <span class="svg-icon svg-icon-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24"></rect>
                              <path
                                d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                fill="#000000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </a>
                      <div
                        class="
                          dropdown-menu dropdown-menu-sm dropdown-menu-right
                        "
                      >
                        <ul class="navi flex-column navi-hover py-2">
                          <li
                            class="
                              navi-header
                              font-weight-bolder
                              text-uppercase
                              font-size-xs
                              text-primary
                              pb-2
                            "
                          >
                            Choose an action:
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon"
                                ><i class="la la-print"></i
                              ></span>
                              <span class="navi-text">Print</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon"
                                ><i class="la la-copy"></i
                              ></span>
                              <span class="navi-text">Copy</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon"
                                ><i class="la la-file-excel-o"></i
                              ></span>
                              <span class="navi-text">Excel</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon"
                                ><i class="la la-file-text-o"></i
                              ></span>
                              <span class="navi-text">CSV</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon"
                                ><i class="la la-file-pdf-o"></i
                              ></span>
                              <span class="navi-text">PDF</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <router-link
                      :to="{
                        name: 'invoice_setting.edit',
                        params: { id: invoiceSetting.id },
                      }"
                      class="btn btn-sm btn-clean btn-icon mr-2"
                      title="Edit details"
                    >
                      <span class="svg-icon svg-icon-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <path
                              d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                              fill="#000000"
                              fill-rule="nonzero"
                              transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                            ></path>
                            <rect
                              fill="#000000"
                              opacity="0.3"
                              x="5"
                              y="20"
                              width="15"
                              height="2"
                              rx="1"
                            ></rect>
                          </g>
                        </svg>
                      </span>
                    </router-link>

                    <router-link
                      @click.native.prevent="
                        deleteInvoiceSetting(invoiceSetting.id)
                      "
                      to=""
                      class="btn btn-sm btn-clean btn-icon"
                      title="Delete"
                    >
                      <span class="svg-icon svg-icon-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              fill="#000000"
                              fill-rule="nonzero"
                            ></path>
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              fill="#000000"
                              opacity="0.3"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </router-link>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--end: Datatable-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "invoice_setting",
  data() {
    return {
      page: 1,
      perPage: 20,
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
    this.getInvoiceSettings();
  },
  computed: {
    invoiceSettings() {
      return this.$store.getters.getInvoiceSettings;
    },
    visibleFields() {
      return this.columns.filter((field) => field.visible);
    },
  },
  methods: {
    async getInvoiceSettings(page = 1, per_page = null) {
      const invoiceSettingUrl = {
        URL: "settings/invoice",
        page,
        per_page: per_page,
      };
      const invoiceSettings = await this.$store.dispatch(
        "fetchInvoiceSettings",
        invoiceSettingUrl
      );
    },

    deleteInvoiceSetting(id) {
      $axios
        .delete("/settings/invoice/" + id)
        .then((response) => {
          this.getInvoiceSettings();
        })
        .catch((error) => {});
    },
  },
};
</script>
