<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-shifts`"
      :submit="updateShift"
      :id="shif.id"
      :editUrlName="`edit-shifts`"
      :navigationUrl="`shifNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateShift" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>

            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs :language="language" :shif="shif" />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 has-float-label">
                <div class="form-group">
                  <input
                    type="text"
                    name="code"
                    id=""
                    placeholder="code"
                    class="form-control"
                    :value="shif.code"
                  />
                  <label for="" class="col-form-label">{{ $t("code") }}</label>
                  <span class="text-danger" v-if="errors.code">
                    {{ errors.code[0] }}
                  </span>
                </div>
              </div>
              <div class="col-md-6 col-12 has-float-label">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="account_id">
                    <option value=""></option>
                    <option
                      v-for="account in accounts.data"
                      :key="account.id"
                      :value="account.id"
                      :selected="account.id == shif.account_id"
                    >
                      {{ account.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                    >account</label
                  >
                  <span class="text-danger" v-if="errors.account_id">
                    {{ errors.account_id[0] }}
                  </span>
                </div>
              </div>
              <div class="col-md-6 col-12 has-float-label">
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <input
                        type="time"
                        name="start_time"
                        :value="shif.start_time"
                        class="form-control"
                      />
                      <label for="" class="col-form-label">{{
                        $t("start_time")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <input
                        type="time"
                        name="end_time"
                        :value="shif.end_time"
                        class="form-control"
                      />
                      <label for="" class="col-form-label">{{
                        $t("end_time")
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
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
  name: "add-shifts",
  components: { LangTabs, EditInputs },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      shif: {},

      // Shif: {},
      activeAssign: false,
      languages: window.$languages,
    };
  },

  created() {
    this.getShif();
    this.getfinancialaccounts();
  },
  mounted() {
    this.initializeDate();
  },
  computed: {
    accounts() {
      return this.$store.getters.getfinancialaccounts;
    },
  },
  methods: {
    async updateShift() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const shift = {
          URL: "/shifts/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateShift", shift);
        document.location.href = "shifts";
      } catch (errors) {
        this.errors = errors;
      }
    },

    async getfinancialaccounts() {
      const accountUrl = { URL: "financialAccounts" };
      const accounts = await this.$store.dispatch(
        "fetchfinancialaccounts",
        accountUrl
      );
    },

    async newShif() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const shif = { URL: "shifts", data: formData };
        await this.$store.dispatch("store", shif);
      } catch (errors) {
        this.errors = errors;
      }
    },

    getShif() {
      $axios
        .get("/shifts/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data.data.id);
          this.shif = response.data.data;
          console.log(this.shif);
        })
        .catch((error) => {});
    },

    initializeDate() {
      $("#hijri-date-input").hijriDatePicker();
    },
  },
};
</script>

<style></style>
