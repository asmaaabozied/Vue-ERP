<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-options`"
      :submit="updateOption"
      :id="option.id"
      :editUrlName="`edit-options`"
      :navigationUrl="`optionNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateOption" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <edit-inputs
                      :language="language"
                      :errors="errors"
                      :option="option"
                    />
                  </template>
                </lang-tabs>
              </div>
              <div class="col-md-6 col-12 mt-7">
                <div class="form-group has-float-label">
                  <select class="form-control" name="type">
                    <option value="" disabled>{{ $t("choose_type") }}</option>
                    <option value="text" :selected="option.type == 'text'">
                      {{ $t("text") }}
                    </option>
                    <option value="number" :selected="option.type == 'number'">
                      {{ $t("number") }}
                    </option>
                    <option
                      value="choose_yes_no"
                      :selected="option.type == 'choose_yes_no'"
                    >
                      {{ $t("Choose_yes_or_no") }}
                    </option>
                    <option value="date" :selected="option.type == 'date'">
                      {{ $t("date") }}
                    </option>
                    <option
                      value="choose_menu"
                      :selected="option.type == 'choose_menu'"
                    >
                      {{ $t("Choose_menu") }}
                    </option>
                  </select>
                  <label for="exampleSelectl"> {{ $t("type") }}</label>
                  <span class="text-danger" v-if="errors.type">
                    {{ errors.type[0] }}
                  </span>
                </div>

                <active-toggle :active="active" />
              </div>
            </div>
          </div>
          <div class="separator separator-solid my-3"></div>
          <div v-if="optionvalues.length > 0">
            <edit-option-values
              @deletedOptionsIds="deleteOptions($event)"
              :optionvalues="optionvalues"
            />
          </div>
          <div v-else>
            <edit-option-values @deletedOptionsIds="deleteOptions($event)" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ValueInputs from "./valueInputs.vue";
import optionvalues from "./optionvalues.vue";
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import EditInputs from "./EditInputs.vue";
import editValueInputs from "./editvalueInputs.vue";
import editOptionValues from "./editOptionValues.vue";
import ValueTabs from "./valueTabs.vue";

export default {
  name: "edit-options",
  components: {
    LangTabs,
    Inputs,
    editValueInputs,
    ValueInputs,
    ValueTabs,
    optionvalues,
    editOptionValues,
    EditInputs,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      option: {},
      active: {},
      optionvalues: {},
      deletedOptionsIds: [],
      languages: window.$languages,
    };
  },

  created() {
    this.optionId = this.$route.params.id;
    this.getoption();
  },
  methods: {
    async updateOption() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("ids", this.deletedOptionsIds);
        console.log(formData.append("ids", this.deletedOptionsIds));
        formData.append("_method", "PUT");
        const option = {
          URL: "/options/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateOption", option);
        document.location.href = "options";
      } catch (errors) {
        this.errors = errors;
      }
    },
    deleteOptions(option_Id) {
      this.deletedOptionsIds.push(option_Id);
    },
    getoption() {
      $axios
        .get("/options/" + this.optionId)
        .then((response) => {
          this.option = response.data.data;
          this.optionvalues = response.data.data.values;
          this.active = response.data.data.active;
          console.log(this.active);
        })
        .catch((error) => {});
    },
  },
};
</script>

<style></style>