
<template>
  <div>
    <top-bar-card
      :newUrlName="`edit_Customnotification`"
      :submit="newCustomnotifications"
      :id="customnotification.id"
      :editUrlName="`edit-Customnotification`"
      :navigationUrl="`customNotificationNavigation`"
    />
    <div class="card card-custom mb-9 mt-10">
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
                    :value="customnotification.title"
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
                  <select class="form-control" name="action">
                    <option selected value="">Choose</option>
                    <option
                      value="Add"
                      :selected="customnotification.action == 'Add'"
                    >
                      {{ $("Add") }}
                    </option>
                    <option
                      value="Update"
                      :selected="customnotification.action == 'Update'"
                    >
                      {{ $("Update") }}
                    </option>
                    <option
                      value="Delete"
                      :selected="customnotification.action == 'Delete'"
                    >
                      {{ $("Delete") }}
                    </option>
                  </select>
                  <label for="" class="col-form-label">
                    {{ $("action") }}</label
                  >
                  <span class="text-danger" v-if="errors.action">
                    {{ errors.action[0] }}
                  </span>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col has-float-label">
                    <div class="form-group has-float-label">
                      <select class="form-control" name="model">
                        <option selected value="">{{ $("Choose") }}</option>
                        <option
                          v-for="model in allModels"
                          v-bind:value="model"
                          :selected="model == customnotification.model"
                        >
                          {{ model }}
                        </option>
                      </select>
                      <label for="" class="col-form-label">{{
                        $("model")
                      }}</label>
                      <span class="text-danger" v-if="errors.model">
                        {{ errors.model[0] }}
                      </span>
                    </div>
                  </div>
                  <div class="col">
                    <div class="has-float-label">
                      <v-select
                        v-model="customnotification.type"
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
                    :value="customnotification.message"
                    placeholder="message"
                    v-on:input="valMessage($event)"
                    :class="{ [`${classMessage}`]: errors.title }"
                  ></textarea>
                  <label for="" class="col-form-label">{{
                    $("message")
                  }}</label>
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
import Options from "../options/index";
export default {
  name: "edit_Customnotification",
  components: { Options, LangTabs },
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
      typesSeleced: [],
    };
  },
  created() {
    this.customnotificationId = this.$route.params.id;
    this.getCustomnotification();
    this.getAllModels();
  },
  methods: {
    async newCustomnotifications() {
      try {
        console.log("updated");
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        let type = this.type;
        for (var i = 0; i < type.length; i++) {
          formData.append("type[]", type[i]);
        }
        formData.append("_method", "PUT");
        const customnotification = {
          URL: "/custom-notifications/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch(
          "updateCustomnotifications",
          customnotification
        );
        document.location.href = "customnotification";
      } catch (errors) {
        this.errors = errors;
      }
    },
    getAllModels() {
      $axios
        .get("/customnotifications/getModels")
        .then((response) => {
          this.allModels = response.data;
        })
        .catch((error) => {});
    },
    getCustomnotification() {
      console.log("data");
      $axios
        .get("/customnotifications/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data.data.id);
          this.customnotification = response.data.data;
        })
        .catch((error) => {});
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
