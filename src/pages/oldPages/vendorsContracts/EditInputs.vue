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
            :value="vendorsContract ? vendorsContract.names[language] : ''"
          />
          <label class="col-form-label"> {{ $t(`${language}.name`) }}</label>
          <span class="text-danger" v-if="errors[`name.${language}`]">
            {{ errors[`name.${language}`][0] }}
          </span>
        </div>
      </div>
    </div>

    <div class="col-lg-12 form-group p-0 mb-0">
      <textarea
        type="text"
        class="form-control"
        :name="`notes[${language}]`"
        :id="`notes[${language}]`"
        :placeholder="`notes`"
        :value="vendorsContract ? vendorsContract.all_notes[language] : ''"
      ></textarea>
      <label class="col-form-label"> {{ $t(`${language}.notes`) }}</label>

      <span class="text-danger" v-if="errors[`${language}.notes`]">
        {{ errors[`${language}.notes`][0] }}
      </span>
    </div>
  </div>
</template>


<script>
export default {
  name: "categories-inputs",
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    language: {
      type: String,
      default: "en",
    },
    vendorsContract: {
      type: Object,
      default: null,
    },
  },
};
</script>