<template>
  <div class="inputs has-float-label">
    <div class="col-12 p-0">
      <div class="mt-4 justify-content-between">
        <div class="col-lg-12 form-group p-0">
          <input
            type="text"
            class="form-control"
            :name="`name[${language}]`"
            :id="`name[${language}]`"
            :placeholder="`Name`"
            :value="account ? account.names[language] : ''"
            :class="{ [`${className}`]: errors[`name.${language}`] }"
            @keydown="changeInputName"
          />

          <label class="col-form-label"> {{ $t(`${language}.name`) }}</label>
          <span
            class="text-danger text-valid"
            v-if="errors[`name.${language}`]"
            :class="errorMsgName"
          >
            {{ errors[`name.${language}`][0] }}
          </span>
        </div>
        <div class="col-lg-12 form-group p-0">
          <input
            type="text"
            class="form-control"
            :name="`address_details[${language}]`"
            :id="`address[${language}]`"
            :placeholder="`address_details`"
            :value="account ? account.addresses[language] : ''"
            :class="{ [`${classAddressDetails}`]: errors[`name.${language}`] }"
            @keydown="changeInputAddress"
          />
          <label class="col-form-label"> {{ $t(`${language}.address`) }}</label>
          <span
            class="text-danger text-valid"
            v-if="errors[`address_details.${language}`]"
            :class="errorMsgAddressDetails"
          >
            {{ errors[`address_details.${language}`][0] }}
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
    account: {
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