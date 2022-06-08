<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`add-employees`"
      :submit="updateEmployee"
      :id="employee.id"
      :editUrlName="`edit-employees`"
      :navigationUrl="`employeeNavigation`"
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
                        <editInputs
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
                        >Status</label
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
                        <label for="exampleSelectl">{{ $t("address") }} </label>

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
                    <span class="nav-text">{{ $t("dependents") }}</span>
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
                  :employee="employee"
                  :dataa="dataa"
                  :addactive="addactive"
                />
                <div v-if="cards_new.length > 0">
                  <editCards :cards_new="cards_new" />
                </div>
                <div v-else>
                  <cards :dataa="dataa" :addactive="addactive" />
                </div>
                <div v-if="dependent_news.length > 0">
                  <editDependents
                    :errors="errors"
                    :dependent_news="dependent_news"
                    :dataa="dataa"
                    :addactive="addactive"
                  />
                </div>
                <div v-else>
                  <dependents :dataa="dataa" :addactive="addactive" />
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
import DataInputs from "./dataInputs.vue";
import Cards from "./cards.vue";
import EditCards from "./EditCards.vue";
import dependents from "./dependents.vue";
import EditDependents from "./EditDependents.vue";
import FileUpload from "@/components/form/fileUpload";

export default {
  name: "add-currencies",
  components: {
    LangTabs,
    EditInputs,
    DataInputs,
    Cards,
    EditCards,
    EditDependents,
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
      dataa: "",
      addactive: "",
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
        document.location.href = "employees";
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
    showwdata: function () {
      this.dataa = "show";
      this.addactive = "active";
    },
    hidedata: function () {
      this.dataa = "";
      this.addactive = "";
    },
    getEmployee() {
      $axios
        .get("/employees/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data.data.id);
          this.employee = response.data.data;

          // if (this.employee.cards.length >0) {

          this.cards_new = this.employee.cards;
          // }else{
          //         this.cards_new = this.cards_new;
          //
          //     }
          if (this.employee.dependents.length > 0) {
            this.dependent_news = this.employee.dependents;
          } else {
            this.dependent_news = this.dependent_news;
          }
          this.url = this.employee.image;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
