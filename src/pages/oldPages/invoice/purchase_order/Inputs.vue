<template>
  <div class="inputs">
    <div class="col-12 p-0 has-float-label">
      <div class="mt-4 d-flex justify-content-between">
        <div class="col form-group">
          <label class="col-form-label"> {{ $t(`${language}.name`) }}</label>
          <input
            type="text"
            class="form-control"
            :name="`name[${language}]`"
            :id="`name[${language}]`"
            :value="invoiceSetting ? invoiceSetting.names[language] : ''"
          />
          <span class="text-danger" v-if="errors[`name.${language}`]">
            {{ errors[`name.${language}`][0] }}
          </span>
        </div>
        <div class="col form-group"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "invoiceSetting-inputs",
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    language: {
      type: String,
      default: "en",
    },
    invoiceSetting: {
      type: Object,
      default: null,
    },
  },
};
</script>