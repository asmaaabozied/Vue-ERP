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
            <i class="flaticon2-layers-2"></i> <span>Accounts</span>
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
                  datatable
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
                  <tbody class="datatable-body">
                    <tr
                      class="datatable-row datatable-row-even"
                      v-for="(tr, index) in trs"
                      :key="tr.index"
                    >
                      <td class="datatable-cell">
                        <span>
                          {{ tr }}
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <span>
                          <select
                            class="form-control"
                            v-model="input[index]"
                            :id="'account-' + index"
                            @change="
                              changeOption(
                                $event,
                                index,
                                'accounts[' + index + '][account_id]',
                                'account'
                              )
                            "
                          >
                            <option value="" disabled selected>
                              {{ $t("Choose") }}
                            </option>
                            <option
                              v-for="account in accounts.data"
                              :key="account.id"
                              v-bind:value="account.id"
                            >
                              {{ account.name }}
                            </option>
                          </select>
                          <input
                            v-if="input[index]"
                            type="hidden"
                            :class="'form-control account_' + index"
                            disabled
                            :name="'accounts[' + index + '][type]'"
                            v-bind:value="tr"
                          />
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
    errors: {
      type: Object,
      default: () => ({}),
    },
    changeOption: {
      type: Function,
    },
  },
  data() {
    return {
      accounts: {},
      index: 0,
      isActive: true,
      activeAssign: false,
      input: [],
      trs: [
        "sales_account",
        "sales_returns_account",
        "purchase_account",
        "purchase_returns_account",
        "sales_costs",
        "inventory_account",
      ],
      active: false,
    };
  },
  created() {
    this.getAccounts();
  },

  methods: {
    getAccounts() {
      $axios
        .get(`/accounts`)
        .then((response) => {
          this.accounts = response.data;
        })
        .catch((error) => {});
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>
