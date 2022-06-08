<template>
  <div>
    <top-bar-card
      :newUrlName="`add_Customnotification`"
      :submit="newCustomnotifications"
      :id="0"
      :editUrlName="`edit-Customnotification`"
      :navigationUrl="`customNotificationNavigation`"
      :model="`customnotification`"
    />

    <div
      class="card card-custom mb-9 mt-10"
      v-wow="{
        'animation-name': 'fadeInRight',
        'animation-duration': '.6s',
      }"
    >
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="newCustomnotifications" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6 has-float-label">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="title"
                    placeholder="title"
                    v-on:input="valTitle($event)"
                    :class="{ [`${classTitle}`]: errors.title }"
                  />
                  <label for="" class="col-form-label">{{ $("title") }}</label>
                  <span
                    class="text-danger"
                    v-if="errors.title"
                    :class="seenTitle"
                  >
                    {{ errors.title[0] }}
                  </span>
                </div>

                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    name="action"
                    :class="{ [`${addaCtion}`]: errors.action }"
                    v-on:click="valaCtion($event)"
                  >
                    <option selected value="">{{ $("Choose") }}</option>
                    <option value="Add">{{ $("Add") }}</option>
                    <option value="Update">{{ $("Update") }}</option>
                    <option value="Delete">{{ $("Delete") }}</option>
                  </select>
                  <label for="" class="col-form-label">
                    {{ $("action") }}</label
                  >
                  <span
                    class="text-danger"
                    v-if="errors.action"
                    :class="seenaCtion"
                  >
                    {{ errors.action[0] }}
                  </span>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col has-float-label">
                    <div class="form-group has-float-label">
                      <select
                        class="form-control"
                        name="model"
                        :class="{ [`${addModel}`]: errors.model }"
                        v-on:click="valModel($event)"
                      >
                        <option selected value="">Choose</option>
                        <option v-for="model in allModels" v-bind:value="model">
                          {{ model }}
                        </option>
                      </select>
                      <label for="" class="col-form-label">
                        {{ $("model") }}</label
                      >
                      <span
                        class="text-danger"
                        v-if="errors.model"
                        :class="seenModel"
                      >
                        {{ errors.model[0] }}
                      </span>
                    </div>
                  </div>
                  <div class="col">
                    <div class="has-float-label">
                      <v-select
                        v-model="type"
                        :options="types"
                        multiple
                      ></v-select>
                      <label for="" class="col-form-label">{{
                        $("type")
                      }}</label>
                    </div>
                  </div>
                </div>
                <div class="form-group has-float-label text-area0">
                  <textarea
                    type="text"
                    class="form-control"
                    name="message"
                    placeholder="message"
                    v-on:input="valMessage($event)"
                    :class="{ [`${classMessage}`]: errors.title }"
                  ></textarea>
                  <label for="" class="col-form-label"
                    >{{ $("message") }}
                  </label>

                  <span
                    class="text-danger"
                    v-if="errors.message"
                    :class="seenMessage"
                  >
                    {{ errors.message[0] }}
                  </span>
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
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "add_Customnotification",
  components: {
    LangTabs,
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
      customnotification: {},
      languages: window.languages,
      model: "",
      type: [],
      allModels: [],
      types: ["database", "mail"],
      isEmpty: false,
      classTitle: "is-invalid",
      seenTitle: "",
      classMessage: "is-invalid",
      seenMessage: "",
      addModel: "is-invalid",
      seenModel: "",
      addaCtion: "is-invalid",
      seenaCtion: "",
      typesSeleced: [],
    };
  },
  created() {
    this.getAllModels();
  },

  methods: {
    async newCustomnotifications() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        let type = this.type;
        for (var i = 0; i < type.length; i++) {
          formData.append("type[]", type[i]);
        }

        const customnotification = {
          URL: "customnotifications",
          data: formData,
        };
        await this.$store.dispatch(
          "storeCustomnotifications",
          customnotification
        );
        document.location.href = "customnotification";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    getAllModels() {
      $axios
        .get("/custom-notifications/getModels")
        .then((response) => {
          this.allModels = response.data;
        })
        .catch((error) => {});
    },
    valTitle(e) {
      if (e.target.value == "") {
        this.classTitle = "is-invalid";
        this.seenTitle = "";
      } else {
        this.classTitle = "is-valid";
        this.seenTitle = "d-none";
      }
    },
    valMessage(e) {
      if (e.target.value == "") {
        this.classMessage = "is-invalid";
        this.seenMessage = "";
      } else {
        this.classMessage = "is-valid";
        this.seenMessage = "d-none";
      }
    },
    valModel(e) {
      if (e.target.value == "") {
        this.addModel = "is-invalid";
        this.seenModel = "";
      } else {
        this.addModel = "is-valid";
        this.seenModel = "d-none";
      }
    },
    valaCtion(e) {
      if (e.target.value == "") {
        this.addaCtion = "is-invalid";
        this.seenaCtion = "";
      } else {
        this.addaCtion = "is-valid";
        this.seenaCtion = "d-none";
      }
    },
    executeLoader(selectedItems) {
      this.typesSeleced = [...new Set(selectedItems.map((item) => item.name))];
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style></style>
