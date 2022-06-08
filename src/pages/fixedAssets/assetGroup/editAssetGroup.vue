<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-assetGroup`"
      :submit="updateAssetGroup"
      :id="formData.id"
      :editUrlName="`edit-assetGroup`"
      :listUrlName="`assetGroups`"
      :navigationUrl="`asset-group`"
      :model="`assetGroups`"
      :mainModuel="`tools`"
      :MainCategory="`cards`"
      :pageName="`assetGroups`"
      :operation="`edit`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div v-if="isEmpty">
        <errors :backErrors="backErrors" />
      </div>

      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateAssetGroup" id="assetGroups">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("assets_groups") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div
                class="col-md-6 col-12 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="string"
                    class="form-control"
                    name="code"
                    ref="code"
                    :class="{
                      'is-invalid':
                        $v.formData.code.$error || backErrors[`code`],
                    }"
                    v-model="$v.formData.code.$model"
                    placeholder="Code"
                    id="code"
                    @keyup="chanagClass($event, `code`)"
                  />
                  <label for="" class="col-form-label">
                    {{ $t("code") }}
                  </label>
                  <button
                    @click.prevent="clearValueInput(`code`)"
                    id="button_code"
                    class="close"
                    ref="button_code"
                  >
                    &times;
                  </button>
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
                  <select class="form-control" v-model="formData.account_id">
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="account in accounts"
                      :key="account.id"
                      v-bind:value="account.id"
                    >
                      {{ account.name_ar }}
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                    >account</label
                  >
                </div>

                <!-- This Field Should Come From Branch Id -->
                <!-- <input type="hidden" value="1" name="branch_id" /> -->
              </div>

              <div
                class="col-lg-6 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control w-100"
                    :class="{
                      'is-invalid': $v.formData.name_ar.$error,
                    }"
                    :name="`name_ar`"
                    id="name_ar"
                    ref="name_ar"
                    v-model="$v.formData.name_ar.$model"
                    :placeholder="`Name`"
                    @keyup="chanagClass($event, `ar`)"
                  />

                  <label class="col-form-label">
                    {{ $t(`ar.name`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <span
                    class="text-danger"
                    v-if="backErrors[`name_ar`]"
                    :class="seenName"
                  >
                    {{ backErrors[`name_ar`][0] }}
                  </span>

                  <button
                    @click.prevent="clearValueInput(`name_ar`, 'button_ar')"
                    id="button_ar"
                    class="close d-none"
                    ref="button_ar"
                  >
                    &times;
                  </button>
                </div>
              </div>
              <div
                class="col-lg-6 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control w-100"
                    :class="{
                      'is-invalid': $v.formData.name_en.$error,
                    }"
                    :name="`name_en`"
                    id="name_en"
                    ref="name_en"
                    v-model="$v.formData.name_en.$model"
                    :placeholder="`Name`"
                    v-on:input="valinput($event)"
                    @keyup="chanagClass($event, `en`)"
                  />

                  <label class="col-form-label">
                    {{ $t(`en.name`) }}
                    <span class="text-danger0">*</span></label
                  >
                  <span
                    class="text-danger"
                    v-if="backErrors[`name_en`]"
                    :class="seenName"
                  >
                    {{ backErrors[`name_en`][0] }}
                  </span>

                  <button
                    @click.prevent="clearValueInput(`name_en`, 'button_en')"
                    id="button_en"
                    class="close d-none"
                    ref="button_en"
                  >
                    &times;
                  </button>
                </div>
              </div>

              <div class="col-6">
                <div class="form-group has-float-label">
                  <select
                    class="form-control"
                    :class="{
                      'is-invalid': $v.formData.group_id.$error,
                    }"
                    v-model="$v.formData.group_id.$model"
                  >
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="group in groups"
                      :key="group.id"
                      v-bind:value="group.id"
                    >
                      {{ group.name_ar }}
                    </option>
                  </select>
                  <label for="" class="col-form-label">
                    {{ $t("group") }} <span>*</span>
                  </label>
                  <span
                    class="text-danger"
                    v-if="backErrors[`group_id`]"
                    :class="seenName"
                  >
                    {{ backErrors[`group_id`][0] }}
                  </span>
                </div>
              </div>

              <div class="col">
                <div class="form-group has-float-label">
                  <select class="form-control" v-model="formData.relate_with">
                    <option
                      :selected="formData.relate_with == 'Without'"
                      value="Without"
                    >
                      Without
                    </option>
                    <option
                      :selected="formData.relate_with == 'Account'"
                      value="Account"
                    >
                      Account
                    </option>
                    <option
                      :selected="formData.relate_with == 'Car'"
                      value="Car"
                    >
                      Car
                    </option>
                    <option
                      :selected="formData.relate_with == 'Trailer'"
                      value="Trailer"
                    >
                      Trailer
                    </option>
                    <option
                      :selected="formData.relate_with == 'Account With Car'"
                      value="Account With Car"
                    >
                      Account With Car
                    </option>
                    <option
                      :selected="formData.relate_with == 'Account With Trailer'"
                      value="Account With Trailer"
                    >
                      Account With Trailer
                    </option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">{{
                    $t("relate_with")
                  }}</label>
                </div>
              </div>

              <div
                class="col-lg-6 has-float-label position-relative"
                v-wow="{
                  'animation-name': 'fadeInUp',
                  'animation-duration': '1s',
                }"
              >
                <div class="form-group">
                  <textarea
                    ref="notes"
                    id="notes"
                    v-model="formData.notes"
                    class="form-control w-100"
                    @keyup="chanagClass($event, `notes`)"
                    cols="30"
                    rows="5"
                    :placeholder="$t('notes')"
                  ></textarea>
                  <label class="col-form-label">
                    {{ $t("notes") }}
                  </label>
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
import { useVuelidate } from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";

export default {
  name: "edit-assetGroup",
  components: {},

  data() {
    return {
      formData: {},
      backErrors: {},
      isEmpty: false,
    };
  },

  validations() {
    return {
      formData: {
        name_ar: {
          requiredIfNameAr: requiredIf(this.formData.name_en == ""),
        },
        name_en: {
          requiredIfNameEn: requiredIf(this.formData.name_ar == ""),
        },
        code: { required },
        group_id: { required },
      },
    };
  },

  setup: () => ({ $v: useVuelidate() }),

  created() {
    this.getAssetGroup();
    console.log(this.formData);
  },
  mounted() {
    this.getGroups();
    this.getAccounts();
  },
  computed: {
    groups() {
      return this.$store.getters.getTempGroups.data;
    },
    accounts() {
      return this.$store.getters.getTempAccounts.data;
    },
  },

  methods: {
    async updateAssetGroup() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.$v);
        return;
      } else {
        try {
          this.formData.name_ar = this.formData.name_ar
            ? this.formData.name_ar
            : this.formData.name_en;
          this.formData.name_en = this.formData.name_en
            ? this.formData.name_en
            : this.formData.name_ar;

          const params = {
            Id: this.$route.params.id,
            data: this.formData,
          };

          await this.$store.dispatch("updateAssetGroup", params);
        } catch (errors) {
          this.backErrors = errors;
          this.isEmpty = true;
        }
      }
    },

    clearValueInput(inputId, buttonId) {
      this.formData[`${inputId}`] = "";
      this.$refs[`${buttonId}`].classList.add("d-none");
    },

    async getAssetGroup() {
      const getAssetGroup = await this.$store.dispatch("getAssetGroup", {
        Id: this.$route.params.id,
      });
      this.formData = getAssetGroup.data.data;
      console.log(this.formData);
    },

    chanagClass(e, id) {
      if (e.target.value !== "") {
        this.$refs[`button_${id}`].classList.remove(`d-none`);
      } else {
        this.$refs[`button_${id}`].classList.add(`d-none`);
      }
    },

    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenName = "";
      } else {
        this.seenName = "d-none";
      }
    },

    // ===================Temp===================

    async getGroups() {
      await this.$store.dispatch("fetchGroups");
    },

    async getAccounts() {
      await this.$store.dispatch("fetchAccounts");
    },
    // ===================End Temp===================
  },
};
</script>

<style></style>
