<template>
  <div v-if="allErrors">
    <div class="alert alert-danger" role="alert">
      <ul>
        <li v-for="(error, index) in allErrors" :key="index">
          <label
            class="error-label"
            @click.prevent="tofocus(`${index}`)"
            :for="`${index}`"
            >{{ error[0] }}</label
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "errors",
  data() {
    return {
      allErrors: this.backErrors,
    };
  },
  props: {
    backErrors: {
      type: Object,
      default: {},
    },
    parentRefs: {
      type: Object,
      default: {},
    },
  },
  computed: {
    listError() {
      return this.backErrors;
    },
  },
  methods: {
    tofocus(id) {
      this.$nextTick(() => this.parentRefs[id].focus());
    },
  },
};
</script>
<style scoped>
.error-label {
  cursor: pointer;
}
</style>