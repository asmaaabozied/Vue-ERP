<template>
  <div class="inputs has-float-label">
    <div class="col-12 p-0 has-float-label">
      <div class="mt-4  justify-content-between">
        <div class="col-lg-12 form-group p-0 ">

          <input
                  type="text"
                  class="form-control"
                  :name="`name[${language}]`"
                  :id="`name[${language}]`"
                  :placeholder="`Name`"
                  :value="category ? category.names[language] : ''"
          />
          <label for="exampleInputEmail1"  class=" col-form-label "> Name </label>
          <span class="text-danger" v-if="errors[`name.${language}`]">
            {{ errors[`name.${language}`][0] }}
          </span>
        </div>
      </div>
    </div>
    <div class="col-lg-12 form-group p-0 ">



      <input
              type="text"
              class="form-control"
              :name="`description[${language}]`"
              :id="`description[${language}]`"
              :placeholder="`description`"

              :value="category ? category.descriptions[language] : ''"


      >
      <label for="exampleInputEmail1" class=" col-form-label "> description </label>
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
                  :value="category ? category.all_notes[language] : ''"

          ></textarea>
      <label for="exampleInputEmail1" class=" col-form-label "> notes </label>
      <span class="text-danger" v-if="errors[`${language}.notes`]">
            {{ errors[`${language}.notes`][0] }}
          </span>

    </div>

  </div>
</template>


<script>
  export default {
    name: "categories-inputs",
    props: {
      errors: {
        type: Object,
        default: () => ({}),
      },
      language: {
        type: String,
        default: "en",
      },
      category: {
        type: Object,
        default: null,
      },
    },
  };
</script>