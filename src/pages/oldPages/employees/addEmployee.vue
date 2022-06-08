<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`add-employees`"
      :submit="newEmployee"
      :id="0"
      :editUrlName="`edit-employees`"
      :navigationUrl="`employeeNavigation`"
      :model="`employee`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <div v-if="isEmpty">
          <errors :errors="errors" />
        </div>
        <form @submit.prevent="newEmployee" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-2">
                <div class="img-upload-box">
                  <img v-if="url" :src="url" width="100%" height="100%" />

                  <input
                    type="file"
                    name="image"
                    class="form-control"
                    @change="onFileChange"
                  />
                </div>
              </div>
              <div class="col-10 p-0">
                <div
                  class="d-flex justify-content-between mt-4 align-items-end"
                >
                  <div class="col-6">
                    <lang-tabs :languages="languages">
                      <template v-slot:input="{ language }">
                        <inputs :language="language" :errors="errors" />
                      </template>
                    </lang-tabs>
                    <div class="col mb-3 p-0">
                      <active-toggle />
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
                        />
                        <label for="exampleSelectl">{{ $t("address") }}</label>

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
                        />
                        <label for="exampleSelectl">{{ $t("company") }}</label>

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
                        />
                        <label for="exampleSelectl">{{ $t("code") }}</label>

                        <span class="text-danger" v-if="errors.code">
                          {{ errors.code[0] }}
                        </span>
                      </div>
                    </div>

                    <div class="form-group p-0 mb-0 has-float-label">
                      <select class="form-control" name="gender">
                        <option selected value=""></option>
                        <option value="male">{{ $t("male") }}</option>
                        <option value="female">{{ $t("female") }}</option>
                      </select>
                      <label for="" class="col-form-label">{{
                        $t("gender")
                      }}</label>

                      <span class="text-danger" v-if="errors.gender">
                        {{ errors.gender[0] }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                    <span class="nav-text">{{ $t("data") }}</span>
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
                    <span class="nav-text">{{ $t("cards") }}</span>
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
                <div class="btn-collapse">
                  <button @click.prevent="showwdata">
                    {{ $t("Collapse_All") }}
                  </button>
                  |
                  <button @click.prevent="hidedata">
                    {{ $t("Expand_All") }}
                  </button>
                </div>
                <data-inputs
                  :errors="errors"
                  :dataa="dataa"
                  :addactive="addactive"
                />
                <cards :dataa="dataa" :addactive="addactive" />

                <dependents
                  :errors="errors"
                  :dataa="dataa"
                  :addactive="addactive"
                />
              </div>
            </div>
          </div>
          <div class="row"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import FileUpload from "@/components/form/fileUpload";
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import Errors from "@/components/layouts/errors.vue";
import DataInputs from "./dataInputs.vue";
import Cards from "./cards.vue";
import dependents from "./dependents.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "add-currencies",

  components: {
    LangTabs,
    Inputs,
    DataInputs,
    Cards,
    dependents,
    Errors,
    UAnimateContainer,
    UAnimate,
    // FileUpload
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
      languages: window.$languages,
      imageError: true,
      active: false,
      gridClassName: window.$gridClassName,
      url: "assets/blank.png",
      dataa: "",
      addactive: "",
      isEmpty: false,
    };
  },
  computed: {},
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    showwdata: function () {
      this.dataa = "show";
      this.addactive = "active";
    },
    hidedata: function () {
      this.dataa = "";
      this.addactive = "";
    },
    async newEmployee() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        const employee = {
          URL: "employees",
          data: formData,
        };
        await this.$store.dispatch("storeEmployee", employee);
        document.location.href = "employees";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },

    changeGrid(event) {
      this.gridClassName = event;
    },
  },
};
</script>
