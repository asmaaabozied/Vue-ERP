<template>
  <div>
    <top-bar-card
      @onChangeGrid="changeGrid"
      :newUrlName="`add-products`"
      :submit="newProduct"
      :model="`product`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newProduct" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}.
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div
                class="col-2"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="img-upload-box">
                  <img v-if="url" :src="url" width="100%" height="100%" />

                  <input
                    type="file"
                    name="image"
                    class="form-control w-100"
                    @change="onFileChange"
                  />
                </div>
              </div>
              <div
                class="col-10 p-0"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div
                  class="d-flex justify-content-between mt-4 align-items-end"
                >
                  <div
                    class="col-6"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group has-float-label">
                      <select class="form-control" name="category_id">
                        <option value=""></option>
                        <option>category</option>
                      </select>
                      <label for="exampleSelectl" class="col-form-label">{{
                        $t("categories")
                      }}</label>
                    </div>
                    <div class="row">
                      <div
                        class="col has-float-label"
                        v-wow="{
                          'animation-name': 'fadeInUp',
                          'animation-duration': '1s',
                        }"
                      >
                        <div class="form-group m-0">
                          <input
                            type="numper"
                            name="parcode"
                            placeholder="parcode"
                            class="form-control"
                            aria-describedby="emailHelp"
                          />
                          <label for="inputState" class="col-form-label"
                            >parcode</label
                          >
                        </div>
                      </div>
                      <div
                        class="col has-float-label"
                        v-wow="{
                          'animation-name': 'fadeInUp',
                          'animation-duration': '1s',
                        }"
                      >
                        <div class="form-group m-0">
                          <input
                            type="numper"
                            name="code"
                            placeholder="code"
                            class="form-control"
                          />
                          <label for="inputState" class="col-form-label">{{
                            $t("code")
                          }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between mt-4 align-items-end"
                >
                  <div
                    class="col-md-6"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="has-float-label">
                      <div class="form-group stock-select">
                        <div class="input-group">
                          <input
                            class="form-control"
                            type="text"
                            id="warehouse-search"
                          />
                          <label class="col-form-label">{{
                            $t("warehouse")
                          }}</label>

                          <div>
                            <p>warehouse</p>
                          </div>
                          <b-button>Search</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-6"
                    v-wow="{
                      'animation-name': 'fadeInUp',
                      'animation-duration': '1s',
                    }"
                  >
                    <div class="form-group has-float-label">
                      <select class="form-control" name="unit_id">
                        <option selected disabled value=""></option>

                        <option>unit</option>
                      </select>
                      <label class="col-form-label"
                        >{{ $t("units")
                        }}<span class="text-danger">*</span></label
                      >
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
                      id="general2-tab"
                      data-toggle="tab"
                      href="#page-general2"
                    >
                      <span class="nav-icon">
                        <i class="flaticon2-gear"></i>
                      </span>
                      <span class="nav-text">{{ $t("attachments") }}</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="data-tab"
                      data-toggle="tab"
                      href="#data-data"
                    >
                      <span class="nav-icon">
                        <i class="flaticon2-gear"></i>
                      </span>
                      <span class="nav-text">{{ $t("data") }}</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="units-tab"
                      data-toggle="tab"
                      href="#units-data"
                    >
                      <span class="nav-icon">
                        <i class="flaticon2-gear"></i>
                      </span>
                      <span class="nav-text">{{ $t("units") }}</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="alternative-items-tab"
                      data-toggle="tab"
                      href="#alternative-items"
                    >
                      <span class="nav-icon">
                        <i class="flaticon2-layers-2"></i>
                      </span>
                      <span class="nav-text">{{
                        $t("alternative_items")
                      }}</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="accounts-items-tab"
                      data-toggle="tab"
                      href="#accounts-items"
                    >
                      <span class="nav-icon">
                        <i class="flaticon2-gear"></i>
                      </span>
                      <span class="nav-text">{{ $t("accounts") }}</span>
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
                  <general-inputs
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                  />
                  <data-inputs
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                  />
                  <units
                    :errors="errors"
                    :price="price"
                    :selectUnit="selectUnit"
                    :dataa="dataa"
                    :addactive="addactive"
                    :changeOption="changeOption"
                    :selected_unit="selected_unit"
                  />

                  <alternatives
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                    :changeOption="changeOption"
                  />

                  <accounts
                    :errors="errors"
                    :dataa="dataa"
                    :addactive="addactive"
                    :changeOption="changeOption"
                  />
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
// import Alternatives from "./alternative.vue";
// import generalInputs from "./generalInputs.vue";
// import FileUpload from "@/components/form/fileUpload";
// import units from "./units.vue";
// import accounts from "./accounts.vue";
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-products",
  components: {
    DataInputs,
    units,
    Alternatives,
    generalInputs,
    FileUpload,

    accounts,
    Errors,
    UAnimateContainer,
    UAnimate,
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      url: "assets/default_product_image.png",

      gridClassName: "product_list",

      active: false,

      dataa: "",
      addactive: "",
      isEmpty: false,
    };
  },

  methods: {
    showwdata: function () {
      this.dataa = "show";
      this.addactive = "active";
    },
    hidedata: function () {
      this.dataa = "";
      this.addactive = "";
    },

    changeGrid(event) {
      this.gridClassName = event;
    },
  },
};
</script>

<style></style>
