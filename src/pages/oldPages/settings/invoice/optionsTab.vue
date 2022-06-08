<template>
  <div
    class="tab-pane fade tab-product-main show"
    id="page-options"
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
            href="#collapseThree"
          >
            <i class="flaticon2-gear"></i> <span>options</span>
          </a>
        </h4>
      </div>

      <div
        id="collapseThree"
        class="panel-collapse collapse "
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <div class="form-group row">
            <div class=" col-lg-9">
              <label class=" col-form-label">select_default_currency</label>
              <div class="col-lg-12 input-group p-0 has-float-label">
                <select name="currency_id" class="form-control" required>
                  <option disabled selected>select_default_currency</option>
                  <option
                    v-for="(currency, i) in invoiceSetting.currencies"
                    :value="currency.id"
                    :key="i"
                    >{{ currency.name }}
                  </option>
                </select>
                <span class="text-danger" v-if="errors['currency_id']">
                  {{ errors["currency_id"] }}
                </span>
              </div>
            </div>
            <div class=" col-lg-9">
              <label class=" col-form-label">select_cost_center</label>
              <div class="col-lg-12 input-group p-0 has-float-label">
                <select name="cost_center_id" class="form-control" required>
                  <option disabled selected>select_cost_center</option>
                  <option
                    v-for="(costCenter, i) in invoiceSetting.costCenters"
                    :value="costCenter.id"
                    :key="i"
                    >{{ costCenter.name }}
                  </option>
                </select>
                <span class="text-danger" v-if="errors['cost_center_id']">
                  {{ errors["cost_center_id"] }}
                </span>
              </div>
            </div>
            <div class=" col-lg-9 has-float-label">
              <label class=" col-form-label">payment_due_days</label>
              <div class="col-lg-12 input-group p-0">
                <input
                  type="number"
                  name="payment_due_days"
                  class="form-control"
                  value="0"
                />
                <span class="text-danger" v-if="errors['payment_due_days']">
                  {{ errors["payment_due_days"] }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "optionsTab",

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
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
