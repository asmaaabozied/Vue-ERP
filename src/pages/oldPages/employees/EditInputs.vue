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
          :value="employee ? employee.first_names[language] : ''"
          :pattern="`[a-zA-Z]+`"
        />
        <label class="col-form-label">
          {{ $t(`${language}.first_name`) }}</label
        >
        <span class="text-danger" v-if="errors[`first_name.${language}`]">
          {{ errors[`first_name.${language}`][0] }}
        </span>
      </div>
      <div class="col form-group input-group p-0">
        <input
          type="text"
          class="form-control"
          :name="`middle_name[${language}]`"
          :id="`middle_name[${language}]`"
          :placeholder="`middle_name`"
          :value="employee ? employee.middle_names[language] : ''"
        />
        <label class="col-form-label">
          {{ $t(`${language}.middle_name`) }}</label
        >
        <span class="text-danger" v-if="errors[`middle_name.${language}`]">
          {{ errors[`middle_name.${language}`][0] }}
        </span>
      </div>
      <div class="col form-group input-group p-0">
        <input
          type="text"
          class="form-control"
          :name="`third_name[${language}]`"
          :id="`third_name[${language}]`"
          :placeholder="`third_name`"
          :value="employee ? employee.third_names[language] : ''"
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
        :value="employee ? employee.last_names[language] : ''"
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
        :value="employee ? employee.titles[language] : ''"
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
  name: "employees-inputs",
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
};
</script>