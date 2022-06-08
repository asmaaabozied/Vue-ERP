<template>
  <div class="inputs has-float-label">
    <div class="col-12 p-0 has-float-label">
      <div class="mt-4 justify-content-between">
        <div class="col-lg-12 form-group p-0">
          <input
            type="text"
            class="form-control"
            :name="`name[${language}]`"
            :id="`name[${language}]`"
            :placeholder="`Name`"
            v-on:input="valinput($event)"
            :class="{ [`${addclass}`]: errors[`name.${language}`] }"
          />
          <label class="col-form-label"> {{ $t(`${language}.name`) }}</label>
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
    <div class="col-lg-12 form-group p-0">
      <input
        type="text"
        class="form-control"
        :name="`description[${language}]`"
        :id="`description[${language}]`"
        :placeholder="`description`"
      />
      <label for="exampleInputEmail1" class="col-form-label">
        description
      </label>
      <span class="text-danger" v-if="errors[`description.${language}`]">
        {{ errors[`description.${language}`][0] }}
      </span>
    </div>
    <div class="col-lg-12 form-group p-0 mb-0">
      <textarea
        type="text"
        class="form-control"
        :name="`notes[${language}]`"
        :id="`notes[${language}]`"
        :placeholder="`notes`"
      ></textarea>
      <label for="exampleInputEmail1" class="col-form-label"> notes </label>
      <span class="text-danger" v-if="errors[`${language}.notes`]">
        {{ errors[`${language}.notes`][0] }}
      </span>
    </div>
  </div>
</template>


<script>
export default {
  name: "categories-inputs",
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