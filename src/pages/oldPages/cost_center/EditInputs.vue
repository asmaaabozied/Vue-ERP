<template>
  <div class="inputs">
    <div class="col-12 p-0 has-float-label">
      <div class="mt-4 d-flex justify-content-between">
        <div class="col-lg-12 form-group p-0">
          <input
            type="text"
            class="form-control"
            :name="`name[${language}]`"
            :id="`name[${language}]`"
            :placeholder="`name`"
            :value="costCenter ? costCenter.names[language] : ''"
          />
          <label class="col-form-label"> {{ $t(`${language}.name`) }}</label>
          <span class="text-danger" v-if="errors[`name.${language}`]">
            {{ errors[`name.${language}`][0] }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "costCenter-inputs",
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
    costCenter: {
      type: Object,
      default: null,
    },
  },
};
</script>