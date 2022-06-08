<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`add-employees`"
      :submit="updateEmployee"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateEmployee" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-2 img-upload-box">
                <img v-if="url" :src="url" width="100%" height="100%" />

                <input
                  type="file"
                  name="image"
                  class="form-control"
                  @change="onFileChange"
                />
              </div>
              <div class="col-10 p-0">
                <div
                  class="d-flex justify-content-between mt-4 align-items-end"
                >
                  <div class="col-6">
                    <lang-tabs :languages="languages">
                      <template v-slot:input="{ language }">
                        <inputs
                          :language="language"
                          :errors="errors"
                          :employee="employee"
                        />
                      </template>
                    </lang-tabs>
                    <div class="col mb-3 p-0">
                      <label
                        for="exampleSelectl"
                        class="col-form-label position-relative"
                        >{{ $t("status") }}</label
                      >

                      <toggle-button
                        @change="changeBt"
                        :value="active"
                        color="#82C7EB"
                        :sync="true"
                        :labels="{ checked: 'Active', unchecked: 'Un Active' }"
                      />
                    </div>
                  </div>

                  <div class="col-6 mt-4">
                    <div class="has-float-label">
                      <div class="form-group p-0">
                        <input
                          type="text"
                          name="address"
                          class="form-control"
                          placeholder="address"
                          :value="employee.address"
                        />
                        <label for="exampleSelectl"> {{ $t("address") }}</label>

                        <span class="text-danger" v-if="errors.address">
                          {{ errors.address[0] }}
                        </span>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group p-0">
                        <input
                          type="text"
                          name="company"
                          class="form-control"
                          placeholder="company"
                          :value="employee.company"
                        />
                        <label for="exampleSelectl"> {{ $t("company") }}</label>

                        <span class="text-danger" v-if="errors.company">
                          {{ errors.company[0] }}
                        </span>
                      </div>
                    </div>
                    <div class="has-float-label">
                      <div class="form-group p-0">
                        <input
                          type="number"
                          name="code"
                          class="form-control"
                          placeholder="code"
                          :value="employee.code"
                        />
                        <label for="exampleSelectl"> {{ $t("code") }}</label>

                        <span class="text-danger" v-if="errors.code">
                          {{ errors.code[0] }}
                        </span>
                      </div>
                    </div>

                    <div class="form-group p-0 mb-0 has-float-label">
                      <select class="form-control" name="gender">
                        <option selected value=""></option>
                        <option
                          value="male"
                          :selected="employee.gender == 'male'"
                        >
                          {{ $t("male") }}
                        </option>
                        <option
                          value="female"
                          :selected="employee.gender == 'female'"
                        >
                          {{ $t("female") }}
                        </option>
                      </select>
                      <label for="" class="col-form-label">
                        {{ $t("gender") }}</label
                      >

                      <span class="text-danger" v-if="errors.gender">
                        {{ errors.gender[0] }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div :class="`add-tabs w-100 sub-tabs ${gridClassName}`">
              <ul class="nav nav-tabs0" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="data-tab"
                    data-toggle="tab"
                    href="#page-data"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-contract"></i>
                    </span>
                    <span class="nav-text"> {{ $t("data") }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="cards-tab"
                    data-toggle="tab"
                    href="#page-cards"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-contract"></i>
                    </span>
                    <span class="nav-text"> {{ $t("cards") }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="dependents-tab"
                    data-toggle="tab"
                    href="#page-dependents"
                  >
                    <span class="nav-icon">
                      <i class="flaticon2-contract"></i>
                    </span>
                    <span class="nav-text"> {{ $t("dependents") }}</span>
                  </a>
                </li>
              </ul>

              <div class="tab-content main-tab-content" id="myTabContent">
                <data-inputs :errors="errors" :employee="employee" />
                <cards :cards_new="cards_new" />
                <dependents :errors="errors" :dependent_news="dependent_news" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="col-12 d-flex justify-content-between">
                <div class="col mt-lg-12 form-group">
                  <label for="exampleSelectl"> {{ $t("Upload_Files") }}</label>

                  <file-upload></file-upload>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ImageUploader from "vue-image-upload-resize";

import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import DataInputs from "./dataInputs.vue";
import Cards from "./cards.vue";
import dependents from "./dependents.vue";
import FileUpload from "@/components/form/fileUpload";

export default {
  name: "add-currencies",

  components: {
    LangTabs,
    Inputs,
    DataInputs,
    Cards,
    dependents,
    FileUpload,
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      employee: {},
      cards_new: {},
      dependent_news: {},
      languages: window.$languages,
      imageError: true,
      active: false,
      gridClassName: window.$gridClassName,
      url: "",
    };
  },

  created() {
    this.getEmployee();
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    async updateEmployee() {
      try {
        console.log("updated");
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PUT");
        const employee = {
          URL: "/employees/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateEmployee", employee);
      } catch (errors) {
        this.errors = errors;
      }
    },

    changeBt() {
      this.active = this.active == true ? false : true;
    },
    changeGrid(event) {
      this.gridClassName = event;
    },

    getEmployee() {
      $axios
        .get("/employees/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data.data.id);
          this.employee = response.data.data;
          this.cards_new = this.employee.cards;
          this.dependent_news = this.employee.dependents;
          this.url = this.employee.image;
        })
        .catch((error) => {});
    },
  },
};
</script>

<style>
</style>