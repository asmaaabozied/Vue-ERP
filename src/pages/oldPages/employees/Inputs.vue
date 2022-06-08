<template>
  <div class="inputs has-float-label">
    <div class="d-flex justify-content-between mt-4">
      <div class="col form-group input-group p-0">
        <input
          type="text"
          class="form-control"
          :name="`first_name[${language}]`"
          :id="`first_name[${language}]`"
          :placeholder="`first_name`"
          v-on:input="valFname($event)"
          :class="{ [`${classFname}`]: errors[`first_name.${language}`] }"
          :pattern="`[a-zA-Z]+`"
        />
        <label class="col-form-label">
          {{ $t(`${language}.first_name`) }}</label
        >

        <span
          class="text-danger"
          v-if="errors[`first_name.${language}`]"
          :class="seenFname"
        >
     
        </span>
      </div>
      <div class="col form-group input-group p-0">
        <input
          type="text"
          class="form-control"
          :name="`middle_name[${language}]`"
          :id="`middle_name[${language}]`"
          :placeholder="`middle_name`"
          v-on:input="valMidel"
          :class="{ [`${classMname}`]: errors[`first_name.${language}`] }"
        />
        <label class="col-form-label">
          {{ $t(`${language}.middle_name`) }}</label
        >

        <span
          class="text-danger"
          v-if="errors[`middle_name.${language}`]"
          :class="seenMname"
        >
         
        </span>
      </div>
      <div class="col form-group input-group p-0">
        <input
          type="text"
          class="form-control"
          :name="`third_name[${language}]`"
          :id="`third_name[${language}]`"
          :placeholder="`third_name`"
        />
        <label class="col-form-label">
          {{ $t(`${language}.third_name`) }}</label
        >

        <span class="text-danger" v-if="errors[`third_name.${language}`]">
          {{ errors[`third_name.${language}`][0] }}
        </span>
      </div>
    </div>
    <div class="col form-group input-group p-0">
      <input
        type="text"
        class="form-control"
        :name="`last_name[${language}]`"
        :id="`last_name[${language}]`"
        :placeholder="`last_name`"
      />
      <label class="col-form-label"> {{ $t(`${language}.last_name`) }}</label>

      <span class="text-danger" v-if="errors[`last_name.${language}`]">
        {{ errors[`last_name.${language}`][0] }}
      </span>
    </div>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        :name="`title[${language}]`"
        :id="`title[${language}]`"
        :placeholder="`title`"
      />
      <label class="col-form-label"> {{ $t(`${language}.title`) }}</label>

      <span class="text-danger" v-if="errors[`title.${language}`]">
        {{ errors[`title.${language}`][1] }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "countries-inputs",
  data() {
    return {
      classFname: "is-invalid",
      seenFname: "",
      classMname: "is-invalid",
      seenMname: "",
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
    employee: {
      type: Object,
      default: null,
    },
  },
  methods: {
    valFname(e) {
      if (e.target.value == "") {
        this.classFname = "is-invalid";
        this.seenFname = "";
      } else {
        this.classFname = "is-valid";
        this.seenFname = "d-none";
      }
    },
    valMidel(e) {
      if (e.target.value == "") {
        this.classMname = "is-invalid";
        this.seenMname = "";
      } else {
        this.classMname = "is-valid";
        this.seenMname = "d-none";
      }
    },
  },
};
</script>
