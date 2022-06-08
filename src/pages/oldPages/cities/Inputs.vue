<template>
  <div class="inputs">
    <div class="col-12 p-0 has-float-label">
      <div class="d-flex justify-content-between mt-4">
        <div class="col-lg-12 input-group p-0">
          <input
            type="text"
            class="form-control w-100"
            :name="`name[${language}]`"
            :id="`name[${language}]`"
            :placeholder="`Name`"
            v-on:input="valinput($event)"
            :class="{ [`${addclass}`]: errors[`name.${language}`] }"
            @keyup="chanagClass($event, `name[${language}]`)"
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
        <button
          @click.prevent="clearValueInput(`name[${language}]`)"
          :class="[`${disableButton}`]"
          class="close"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cities-inputs",
  data() {
    return {
      addclass: "is-invalid",
      seenName: "",
      disableButton: "d-none",
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
        // this.addclass = "is-valid";
        this.seenName = "d-none";
      }
    },
    clearValueInput(id) {
      document.getElementById(`${id}`).value = "";
      this.disableButton = "d-none";
    },
    chanagClass(e) {
      if (e.target.value !== "") {
        this.disableButton = "";
      } else {
        this.disableButton = "d-none";
      }
    },
  },
};
</script>
