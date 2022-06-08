<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-discountVendorContracts`"
      :submit="updateDiscountVendorContract"
      :id="discountVendorContract.id"
      :editUrlName="`edit-discountVendorContracts`"
      :navigationUrl="`invoiceGroupNavigation`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateDiscountVendorContract" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-4">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :discountVendorContract="discountVendorContract"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-4 col-12 mt-7">
                <active-toggle />
              </div>

              <div class="col-md-6 col-12 mt-7 has-float-label">
                <div class="form-group m-0">
                  <input
                    type="number"
                    name="code"
                    id=""
                    placeholder="code"
                    class="form-control"
                    :value="discountVendorContract.code"
                  />
                  <label for="" class="col-form-label">{{ $t("code") }}</label>
                  <span class="text-danger" v-if="errors.code">
                    {{ errors.code[0] }}
                  </span>
                </div>
              </div>

              <div class="form-group p-0 mb-0 has-float-label">
                <select class="form-control" name="account">
                  <option selected value=""></option>
                  <option
                    value="second_account"
                    :selected="
                      discountVendorContract.account == 'second_account'
                    "
                  >
                    {{ $t("second_account") }}
                  </option>
                  <option
                    value="first_account"
                    :selected="
                      discountVendorContract.account == 'first_account'
                    "
                  >
                    {{ $t("first_account") }}
                  </option>
                </select>
                <label for="" class="col-form-label">{{ $t("account") }}</label>

                <span class="text-danger" v-if="errors.account">
                  {{ errors.account[0] }}
                </span>
              </div>

              <div class="col-md-6 col-12 mt-7"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import EditInputs from "./EditInputs.vue";
export default {
  name: "add-discountVendorContracts",
  components: {
    LangTabs,
    EditInputs,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      discountVendorContract: {},
      languages: window.$languages,
    };
  },
  created() {
    this.getDiscountVendorContract();
    this.getCities();
  },

  computed: {
    cities() {
      return this.$store.getters.getCities;
    },
  },
  methods: {
    async updateDiscountVendorContract() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const discountVendorContract = {
          URL: "discountVendorContracts/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch(
          "updateDiscountVendorContract",
          discountVendorContract
        );
        document.location.href = "discountVendorContracts";
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getDiscountVendorContract() {
      const discountVendorContract = {
        URL: "discountVendorContracts/" + this.$route.params.id,
      };
      const getDiscountVendorContract = await this.$store.dispatch(
        "getDiscountVendorContract",
        discountVendorContract
      );
      this.discountVendorContract = getDiscountVendorContract.data.data;
    },
    async getCities() {
      const cityUrl = {
        URL: "cities",
        all: 1,
      };
      const cities = await this.$store.dispatch("fetchCities", cityUrl);
    },
  },
};
</script>

<style>
</style>
