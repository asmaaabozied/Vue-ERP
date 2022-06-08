<template>
  <div>
    <top-bar-card :newUrlName="`edit-vouchers`" />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateVoucher" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :voucher="voucher"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group m-0 has-float-label">
                  <select id="" class="form-control" name="type">
                    <option value="">{{ $t("Choose") }}</option>
                    <option :selected="(voucher.type = 'in')" value="in">
                      {{ $t("In") }}
                    </option>
                    <option :selected="(voucher.type = 'out')" value="out">
                      {{ $t("out") }}
                    </option>
                  </select>
                  <label for="" class="col-form-label">{{ $t("type") }}</label>
                </div>
              </div>
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
  name: "edit-vouchers",
  components: { LangTabs, EditInputs },

  data() {
    return {
      voucher: {},
      languages: window.$languages,

      errors: {},
    };
  },
  created() {
    this.voucherId = this.$route.params.id;
    this.getvoucher();
  },

  methods: {
    async updateVoucher() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const voucher = {
          URL: "/vouchers/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateVoucher", voucher);
        document.location.href = "vouchers";
      } catch (errors) {
        this.errors = errors;
      }
    },
    getvoucher() {
      $axios
        .get("/vouchers/" + this.voucherId)
        .then((response) => {
          console.log(response.data.data.id);
          this.voucher = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style></style>
