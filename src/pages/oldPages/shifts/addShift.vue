<template>
  <div>
    <top-bar-card
      :newUrlName="`add-shifts`"
      :submit="newshift"
      :id="0"
      :editUrlName="`edit-Shifts`"
      :navigationUrl="`Shifts`"
      :model="`Shifts`"
      :mainModuel="`POS`"
      :MainCategory="`cards`"
      :pageName="`Shifts`"
      :operation="`add`"
      :listUrlName="`shifts`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form ref="my-form" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-md-6 col-12 has-float-label">
                <div class="form-group">
                  <input
                    type="text"
                    name="code"
                    id=""
                    placeholder="code"
                    class="form-control"
                  />
                  <label for="" class="col-form-label">{{ "code" }}</label>
                </div>
              </div>

              <div class="col-md-6 col-12 has-float-label">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="account_id">
                    <option value=""></option>
                    <option
                      v-for="account in accounts.data"
                      :key="account.id"
                      v-bind:value="account.id"
                    >
                      {{ account.name }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                    >account</label
                  >
                </div>
              </div>
              <div class="col-md-6 col-12 has-float-label">
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <input
                        type="time"
                        name="start_time"
                        class="form-control"
                      />
                      <label for="" class="col-form-label">{{
                        $t("start_time")
                      }}</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <input type="time" name="end_time" class="form-control" />
                      <label for="" class="col-form-label">{{
                        $t("end_time")
                      }}</label>
                    </div>
                  </div>
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
import Errors from "@/components/layouts/errors.vue";
import Inputs from "./Inputs.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-shifts",
  components: { LangTabs, Inputs, Errors, UAnimateContainer, UAnimate },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      shifts: {},
      languages: window.$languages,
      isEmpty: false,
      addClassCode: "is-invalid",
      seenCode: "",
    };
  },
  created() {
    this.getfinancialaccounts();
  },
  computed: {
    accounts() {
      return this.$store.getters.getfinancialaccounts;
    },
  },
  methods: {
    async newshift() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const shift1 = {
          URL: "shifts",
          data: formData,
        };
        await this.$store.dispatch("storeShift", shift1);
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    async getfinancialaccounts() {
      const accountUrl = { URL: "financialAccounts" };
      const accounts = await this.$store.dispatch(
        "fetchfinancialaccounts",
        accountUrl
      );
    },
    valCode(e) {
      if (e.target.value == "") {
        this.addClassCode = "is-invalid";
        this.seenCode = "";
      } else {
        this.addClassCode = "";
        this.seenCode = "d-none";
      }
    },
  },
};
</script>

<style></style>
