<template>
  <div
    class="tab-pane fade show tab-product-main"
    id="customer-info"
    role="tabpanel"
    aria-labelledby="customer-info-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseTwo">
            <i class="flaticon2-tag"></i>
            <span>{{ $t("customer_information") }}</span>
          </a>
        </h4>
      </div>
      <div id="collapseTwo" class="panel-collapse collapse">
        <div class="panel-body">
          <div class="row">
            <div class="col-4">
              <div class="form-group has-float-label">
                <select
                  class="form-control"
                  name="customer_name"
                  v-model="vendor_id"
                  @change="getVendorInfo"
                >
                  <option disabled selected>{{ $t("Choose") }}</option>
                  <option
                    class="form-control"
                    v-for="(vendor, i) in vendors"
                    :value="vendor.id"
                    :key="i"
                  >
                    {{ vendor.name }}
                  </option>
                </select>
                <label>{{ $t("customer_name") }}</label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group has-float-label">
                <input
                  type="text"
                  class="form-control"
                  :value="vendor.name"
                  placeholder="customer"
                  name="customer"
                  readonly
                />
                <label>{{ $t("customer") }}</label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group has-float-label">
                <input
                  type="text"
                  class="form-control"
                  :value="vendor.address"
                  placeholder="address"
                  name="address"
                  readonly
                />
                <label>{{ $t("address") }}</label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group has-float-label">
                <input
                  type="email"
                  class="form-control"
                  :value="vendor.email"
                  placeholder="email"
                  name="email"
                  readonly
                />
                <label>{{ $t("email") }}</label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group has-float-label">
                <input
                  type="text"
                  class="form-control"
                  :value="vendor.phone"
                  placeholder="phone"
                  name="phone"
                  readonly
                />
                <label>{{ $t("phone") }}</label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group has-float-label">
                <input
                  type="text"
                  class="form-control"
                  :value="vendor.mobile"
                  placeholder="mobile number"
                  name="mobile"
                  readonly
                />
                <label>{{ $t("mobile") }}</label>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group has-float-label">
                <input
                  type="text"
                  class="form-control"
                  :value="vendor.fax"
                  placeholder="fax"
                  name="fax"
                  readonly
                />
                <label>{{ $t("fax") }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "../../settings/invoice/Inputs.vue";

export default {
  name: "customerTab",
  components: {
    LangTabs,
    Inputs,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    vendors: {
      type: Array,
    },
  },
  created() {},
  data() {
    return {
      languages: window.languages,
      vendor_id: "",
      vendor: {},
    };
  },
  methods: {
    async getVendorInfo() {
      this.vendor = await this.$store.dispatch("showAccount", {
        data: this.vendor_id,
      });
    },
  },
};
</script>

<style scoped>
</style>