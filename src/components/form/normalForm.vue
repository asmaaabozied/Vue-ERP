<template>
  <form id="currentForm">
     
      <lang-tabs>
         
      </lang-tabs>
      <div class="row">
        <div class="col-md-6">
          <button type="submit" class="btn btn-success w-100 m-2">
            Save
          </button>
        </div>
        <div class="col-md-6">
          <button type="button" class="btn btn-danger w-100 m-2">
            Cancel
          </button>
        </div>
      </div>
     
  </form>
</template>

<script>
import Inputs from "./Inputs";
import LangTabs from "./LangTabs";
export default {
  name: "car-model-form",
  components:{Inputs,LangTabs},
  props: {
    errors: {
      type: Object,
      default: () => ({})
    },

  },
  methods: {
    sentForm(e) {
      // Here put your axios
    },
  }
};
</script>
