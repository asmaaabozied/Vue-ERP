<template>
  <div>
    <top-bar-card
      :newUrlName="`add-promotions`"
      :submit="newPromotion"
      :model="`promotion`"
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
            <div class="row align-items-center">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <inputs :language="language" :errors="errors" />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <active-toggle :name="`is_active`" />
              </div>
            </div>
            <div class="row align-items-end">
              <div class="col-6">
                <div class="has-float-label">
                  <div class="form-group p-0">
                    <input
                      type="number"
                      name="code"
                      class="form-control"
                      placeholder="code"
                    />
                    <label for="exampleSelectl">{{ $t("code") }}</label>

                    <span class="text-danger" v-if="errors.code">
                      {{ errors.code[0] }}
                    </span>
                  </div>
                </div>
                <div class="has-float-label">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="note"
                      id=""
                      placeholder="message"
                    ></textarea>
                    <label for="" class="col-form-label">
                      {{ $t("message") }}
                    </label>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group has-float-label">
                  <select id="" class="form-control" name="ware_house_id">
                    <option selected value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="wareHouse in wareHouses"
                      :key="wareHouse.id"
                      v-bind:value="wareHouse.id"
                    >
                      {{ wareHouse.name }}
                    </option>
                  </select>
                  <label for="" class="col-form-label">{{
                    $t("wareHouses")
                  }}</label>
                </div>

                <div class="form-group p-0">
                  <input type="date" name="start_date" class="form-control" />
                </div>
                <div class="form-group p-0">
                  <input type="date" name="end_date" class="form-control" />
                </div>
              </div>
              <hr />
            </div>
          </div>

          <Products :errors="errors" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "./products.vue";
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "add-promotions",
  components: { LangTabs, Inputs, Products, UAnimateContainer, UAnimate },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      Promotion: {},
      ware_house_id: null,
      languages: window.$languages,
      formId: "currentForm",
      wareHouses: [],
      active: true,
    };
  },
  created() {
    this.getwareHouses();
  },
  methods: {
    async newPromotion() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const Promotion = { URL: "promotions", data: formData };
        await this.$store.dispatch("storePromotion", Promotion);
      } catch (errors) {
        this.errors = errors;
      }
    },
    changeBt(event) {
      this.active = event.value;
    },
    async getwareHouses() {
      const wareHouseUrl = { URL: "wareHouses" };
      const wareHouses = await this.$store.dispatch(
        "fetchWareHouses",
        wareHouseUrl
      );

      this.wareHouses = this.$store.getters.getWareHouses.data;
    },
  },
};
</script>

<style></style>
