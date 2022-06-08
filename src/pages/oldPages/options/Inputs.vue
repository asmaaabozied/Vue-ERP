<template>
  <div class="inputs has-float-label">
    <div class="col-12 p-0">
      <div class="mt-4">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            :name="`name[${language}]`"
            :id="`name[${language}]`"
            :placeholder="`Name`"
            v-on:input="valinput($event)"
            :class="{ [`${addclass}`]: errors[`name.${language}`] }"
          />
          <label class="col-form-label"> {{ $t(`${language}.name`) }} <span class="text-danger">*</span></label>
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

    <div class="has-float-label">
      <div class="form-group m-0">
        <textarea
          type="text"
          autofocus
          class="form-control"
          :name="`description[${language}]`"
          :id="`description[${language}]`"
          :placeholder="`description`"
          :value="option ? option.descriptions[language] : ''"
        ></textarea>

        <label class="col-form-label">
          {{ $t(`${language}.description`) }}</label
        >
        <span class="text-danger" v-if="errors[`description.${language}`]">
          {{ errors[`description.${language}`][0] }}
        </span>
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
    option: {
      type: Object,
      default: null,
    },
  },
  methods: {
    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenName = "";
      } else {
        this.addclass = "is-valid";
        this.seenName = "d-none";
      }
    },
  },
};
</script>
