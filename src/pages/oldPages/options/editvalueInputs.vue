<template>
  <div class="inputs has-float-label">
    <div class="col-12 p-0">
      <div class="mt-4">
        <div class=" form-group m-0">
          
          <input
            type="text"
            class="form-control"
            :name="`values[${index}][name][${language}]]`"
            :value="optionvalue ? optionvalue.names[language] : ''"
            :placeholder="`name-${language}`"
          />
          <input type="hidden" :name="`values[${index}][id]`"  :value="optionvalue.id"/>


          <label for="exampleInputEmail1"> Name </label>
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
  name: "options-inputs",
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    language: {
      type: String,
      default: "en",
    },
    index:{
      type:Number,
      default:1
    },
    optionvalue: {
      type: Object,
      default: null,
    },
  },
};
</script>