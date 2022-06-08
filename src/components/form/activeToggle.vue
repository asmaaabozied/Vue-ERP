<template>
  <div class="form-group">
    <input type="hidden" v-if="formData" v-model="formData[`${name}`]" ref="is_active" />
    <label class="col-form-label position-relative">{{ $t(`${label}`) }}</label>
    <toggle-button
      @change="changeBt($event)"
      :value="formData[`${name}`]"
      ref="is_active"
      color="#82C7EB"
      :sync="true"
      :labels="{ checked: $t('active'), unchecked: $t('unActive') }"
    />
  </div>
</template>

<script>
export default {
  name: "active-toggle",
  data() {
    return {
      active: this.formData[`${this.name}`],
    };
  },
  props: {
    name: {
      type: String,
      default: "is_active",
    },
    formData: {
      type: Object,
      default: () => ({}),
    },
    label: {
      type: String,
      default: "status",
    },
  },

  methods: {
    changeBt() {
      this.active = this.active == true ? false : true;
      this.formData[`${this.name}`] = this.active;
    },
  },
};
</script>

<style></style>
