<template>
  <div class="inputs">
    <div class="col-12 p-0 has-float-label">
      <div class="d-flex justify-content-between mt-4">
        <div class="col-lg-12 form-group p-0">
          <input
            type="text"
            class="form-control w-100"
            :name="`name[${language}]`"
            :id="`name[${language}]`"
            :placeholder="`plate_code `"
            v-on:input="valinput($event)"
            :class="{ [`${addclass}`]: errors[`name.${language}`] }"
          />
          <label class="col-form-label">
            {{ $t(`${language}.plate_code`) }}</label
          >

          <span
            class="text-danger"
            v-if="errors[`name.${language}`]"
            :class="seenName"
          >
            {{ errors[`name.${language}`][0] }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "discountVendorContracts-inputs",
  data() {
    return {
      addclass: "is-invalid",
      seenName: "",
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
  },
  methods: {
    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenName = "";
      } else {
        this.addclass = "";
        this.seenName = "d-none";
      }
    },
  },
};
</script>
