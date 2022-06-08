<template>
  <div class="inputs has-float-label">
    <div class="col-12 p-0">
      <div class="mt-4">
        <div class="form-group m-0">
          <input
            type="text"
            class="form-control"
            :name="`values[${index}][name][${language}]]`"
            :placeholder="`name-${language}`"
            v-on:input="valinput($event)"
            :class="{ [`${addclass}`]: errors[`name.${language}`] }"
          />

          <label for=""> {{ $t("name") }}<span class="text-danger">*</span></label>
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
  name: "options-inputs",
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
    index: {
      type: Number,
      default: 1,
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