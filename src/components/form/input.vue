<template>
  <div class="row">
    <div
      class="col-lg-6 has-float-label position-relative"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }"
    >
      <div class="form-group">
        <input
          type="text"
          class="form-control w-100"
          :name="`name_ar`"
          id="name_ar"
          ref="name_ar"
          v-model="formData.name_ar"
          :placeholder="`Name`"
          v-on:input="valinput($event)"
          :class="{ [`${addclass}`]: backErrors[`name_ar`] }"
          @keyup="chanagClass($event, `ar`)"
        />

        <label class="col-form-label">
          {{ $t(`ar.name`) }}<span class="text-danger0">*</span></label
        >
        <span
          class="text-danger"
          v-if="backErrors[`name_ar`]"
          :class="seenName"
        >
          {{ backErrors[`name_ar`][0] }}
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
    <div
      class="col-lg-6 has-float-label position-relative"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }"
    >
      <div class="form-group">
        <input
          type="text"
          class="form-control w-100"
          :name="`name_en`"
          id="name_en"
          ref="name_en"
          v-model="formData.name_en"
          :placeholder="`Name`"
          v-on:input="valinput($event)"
          :class="{ [`${addclass}`]: backErrors[`name_en`] }"
          @keyup="chanagClass($event, `en`)"
        />

        <label class="col-form-label">
          {{ $t(`en.name`) }} <span class="text-danger0">*</span></label
        >
        <span
          class="text-danger"
          v-if="backErrors[`name_en`]"
          :class="seenName"
        >
          {{ backErrors[`name_en`][0] }}
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
    <!-- </div> -->
  </div>
</template>
<script>
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "name-inputs",
  data() {
    return {
      addclass: "is-invalid",
      seenName: "",
    };
  },
  components: { UAnimateContainer, UAnimate },
  props: {
    backErrors: {
      type: Object,
      default: () => ({}),
    },
    formData: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    window.addEventListener("load", this.chanagClassUpdate());
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
      if (e.target.value !== "" || this.formData[`name_${id}`]) {
        document.getElementById(`button_${id}`).classList.remove(`d-none`);
      } else {
        document.getElementById(`button_${id}`).classList.add(`d-none`);
      }
    },
    chanagClassUpdate() {
      if (this.formData.name_ar !== "" || this.formData.name_en !== "") {
        document.getElementById(`button_ar`).classList.remove(`d-none`);
        document.getElementById(`button_en`).classList.remove(`d-none`);
      }
    },
  },
};
</script>
