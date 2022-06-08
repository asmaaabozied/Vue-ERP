<template>
  <div
    class="tab-pane fade tab-product-main"
    id="accounts-items"
    role="tabpanel"
    aria-labelledby="#accounts-items-tab"
  >
    <div class="panel panel-default">
      <div
        class="panel-heading"
        v-wow="{
          'animation-name': 'fadeInUp',
          'animation-duration': '2s',
        }"
      >
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapseeight"
          >
            <i class="flaticon2-layers-2"></i> <span>{{ $t("accounts") }}</span>
          </a>
        </h4>
      </div>
      <div
        id="collapseeight"
        class="panel-collapse collapse"
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <div class="row">
            <div class="col-12">
              <!--begin: Datatable-->

              <div
                class="
                  datatable-bordered
                  datatable-head-custom
                  datatable-default
                  datatable-primary
                  datatable-loaded
                  table-product
                  alternative-table
                "
                style=""
              >
                <table class="datatable-table table table-bordered mt-2">
                  <thead class="datatable-head">
                    <tr class="datatable-row" style="left: 0px">
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("sales_account") }}</span>
                      </th>
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("purchase_account") }}</span>
                      </th>
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("sales_returns_account") }}</span>
                      </th>
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("purchase_returns_account") }}</span>
                      </th>
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("sales_costs") }}</span>
                      </th>
                      <th data-field="RecordID" class="datatable-cell">
                        <span>{{ $t("inventory_account") }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="datatable-body">
                    <tr class="datatable-row datatable-row-even">
                      <td class="datatable-cell">
                        <select class="form-control">
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select class="form-control">
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select class="form-control">
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select class="form-control">
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select class="form-control">
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                        </select>
                      </td>
                      <td class="datatable-cell">
                        <select class="form-control">
                          <option value="">
                            {{ $t("Choose") }}
                          </option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--end: Datatable-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "accounts-inputs",
  props: {
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
  },
  data() {
    return {
      accounts: {},
      index: 0,
      isActive: true,
      activeAssign: false,

      active: false,
    };
  },

  methods: {
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>