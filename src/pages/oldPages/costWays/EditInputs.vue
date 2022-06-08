<template>
  <div class="inputs">
    <div class="col-12 p-0 has-float-label">
      <div class="d-flex justify-content-between mt-4">
        <div class="col-lg-12 input-group p-0 ">
          <input
                  type="text"
                  class="form-control w-100"
                  :name="`name[${language}]`"
                  :id="`name[${language}]`"
                  :placeholder="`Name`"
                  :value="costWay ? costWay.names[language] : ''"
          />
          <label class="col-form-label "> Name </label>
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
    name: "costWays-inputs",
    props: {
      errors: {
        type: Object,
        default: () => ({}),
      },
      language: {
        type: String,
        default: "en",
      },
      costWay: {
        type: Object,
        default: null,
      },
    },
  };
</script>