<template>
  <div
    class="tab-pane fade show tab-product-main default_values-tab"
    id="page-default_values"
    role="tabpanel"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapsefour"
          >
            <i class="flaticon2-gear"></i>
            <span>{{ $t("default_values") }}</span>
          </a>
        </h4>
      </div>

      <div
        id="collapsefour"
        class="panel-collapse collapse"
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <section>
            <div>
              <b-card no-body>
                <b-tabs pills card vertical>
                  <b-tab title="user1" active>
                    <b-card-text>
                      <userValues :invoiceSetting="invoiceSetting" />
                    </b-card-text>
                  </b-tab>
                  <b-tab title="user2">
                    <b-card-text>
                      <userValues :invoiceSetting="invoiceSetting" />
                    </b-card-text>
                  </b-tab>
                  <b-tab title="user3">
                    <b-card-text>
                      <userValues :invoiceSetting="invoiceSetting" />
                    </b-card-text>
                  </b-tab>
                </b-tabs>
              </b-card>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userValues from "././userValues.vue";

export default {
  name: "defaultValuesTab",
  components: { userValues },

  props: {
    data: {},
    invoiceSetting: { type: Object },
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
  },

  data() {
    return {
      has_inventory: false,
      has_employee: false,
      has_payment_method: false,
      has_default_price: false,
      has_cost_center: false,
      has_project: false,
      has_discount_account: false,
      has_opposite_discount_account: false,
      has_reference: false,
      has_sale_point: false,
      has_account: false,
      has_opposite_account: false,
      has_opposite_account_address: false,
      has_en_opposite_account_address: false,
      isActive: true,
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

<style scoped></style>
