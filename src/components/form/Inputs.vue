<template>
  <div class="inputs">
    <div class="row">
      <div class="col-md-12 has-float-label">
        <div class="form-group">
          
          <input
            type="text"
            class="form-control"
            :name="`${language}[title]`"
            :id="`${language}[title]`"
          />
          <label for="exampleInputEmail1" class=" col-form-label "> Title </label>
          <!-- <input-errors :errors="errors[`${language}.title`]" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inputErrors from './inputErrors.vue';
export default {
  name: "companies-inputs", 
  props: {
    errors: {
      type: Object,
      default: () => ({})
    },
    language: {
      type: String,
      default: "en"
    },
  }
};
</script>