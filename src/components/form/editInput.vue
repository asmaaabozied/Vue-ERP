<template>
  <div class="row">
    <div class="col-lg-6 has-float-label position-relative">
      <div class="form-group">
        <input
          type="text"
          class="form-control w-100"
          :name="`name_ar`"
          :id="`name_ar`"
          :placeholder="`Name`"
          v-on:input="valinput($event)"
          :class="{ [`${addclass}`]: errors[`name_ar`] }"
          @keyup="chanagClass($event, `ar`)"
          v-model="data.name_ar"
        />

        <label class="col-form-label">
          {{ $t(`ar.name`) }}<span class="text-danger0">*</span></label
        >
        <span class="text-danger" v-if="errors[`name_ar`]" :class="seenName">
          {{ errors[`name_ar`][0] }}
        </span>
        <button
          @click.prevent="clearValueInput(`ar`)"
          id="button_ar"
          class="close d-none"
        >
          &times;
        </button>
      </div>
    </div>
    <div class="col-lg-6 has-float-label position-relative">
      <div class="form-group">
        <input
          type="text"
          class="form-control w-100"
          :name="`name_en`"
          :id="`name_en`"
          :placeholder="`Name`"
          v-on:input="valinput($event)"
          :class="{ [`${addclass}`]: errors[`name_en`] }"
          @keyup="chanagClass($event, `en`)"
          v-model="data.name_en"
        />

        <label class="col-form-label">
          {{ $t(`en.name`) }}<span class="text-danger0">*</span></label
        >
        <span class="text-danger" v-if="errors[`name_en`]" :class="seenName">
          {{ errors[`name_en`][0] }}
        </span>
        <button
          @click.prevent="clearValueInput(`en`)"
          id="button_en"
          class="close d-none"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "name-inputs",
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
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    valinput(e) {
      if (e.target.value == "") {
        this.addclass = "is-invalid";
        this.seenName = "";
      } else {
        this.seenName = "d-none";
      }
    },
    clearValueInput(id) {
      document.getElementById(`name_${id}`).value = "";
      document.getElementById(`button_${id}`).classList.add("d-none");
    },
    chanagClass(e, id) {
      if (e.target.value !== "") {
        document.getElementById(`button_${id}`).classList.remove(`d-none`);
      } else {
        document.getElementById(`button_${id}`).classList.add(`d-none`);
      }
    },
  },
};
</script>
