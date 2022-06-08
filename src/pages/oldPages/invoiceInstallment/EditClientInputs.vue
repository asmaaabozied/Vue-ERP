<template>
  <div class="inputs has-float-label">
    <div class="col-12 p-0">
      <div class="mt-4 justify-content-between">
        <div class="col-lg-12 form-group p-0">
          <input
            type="text"
            class="form-control"
            :name="`agent_name[${language}]`"
            :id="`agent_name[${language}]`"
            :placeholder="`agent_name`"
            :value="showinvoiceinstallmet ? showinvoiceinstallmet.agent_names[language] : ''"
            :class="{ [`${className}`]: errors[`agent_name.${language}`] }"
            @keydown="changeInputName"
          />
          <label class="col-form-label"> {{ $t(`${language}.name`) }}</label>
          <span
            class="text-danger text-valid"
            v-if="errors[`agent_name.${language}`]"
            :class="errorMsgName"
          >
            {{ errors[`agent_name.${language}`][0] }}
          </span>
        </div>
        <div class="col-lg-12 form-group p-0">
          <input
            type="text"
            class="form-control"
            :name="`agent_address[${language}]`"
            :id="`agent_address[${language}]`"
            :placeholder="`agent_address`"
            :value="showinvoiceinstallmet ? showinvoiceinstallmet.agent_addresss[language] : ''"
            :class="{
              [`${classAddressDetails}`]: errors[`agent_address.${language}`],
            }"
            @keydown="changeInputAddress"
          />

          <label class="col-form-label"> {{ $t(`${language}.address`) }}</label>
          <span
            class="text-danger text-valid"
            v-if="errors[`agent_address.${language}`]"
            :class="errorMsgAddressDetails"
          >
            {{ errors[`agent_address.${language}`][0] }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wareHouses-inputs",
  data() {
    return {
      className: "is-invalid",
      errorMsgName: "",
      classAddressDetails: "is-invalid",
      errorMsgAddressDetails: "",
    };
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    language: {
      type: String,
      default: "en",
    },
    showinvoiceinstallmet: {
      type: Object,
      default: null,
    },
  },
  methods: {
    changeInputName() {
      this.className = "";
      this.errorMsgName = "d-none";
    },
    changeInputAddress() {
      this.classAddressDetails = "";
      this.errorMsgAddressDetails = "d-none";
    },
  },
};
</script>