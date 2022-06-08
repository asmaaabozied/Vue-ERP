<template>
    <div class="inputs has-float-label">
	 
        <div class="col-12 p-0 has-float-label">
            <div class="mt-4  justify-content-between">
                <div class="col-lg-12 form-group p-0 ">
                    <input type="text" class="form-control"
                           v-on:input="valinput($event)"
                           :class="{ [`${addclass}`] :errors[`name.${language}`]}"
                           :name="`name[${language}]`" :id="`name[${language}]`" :placeholder="`name`" :value="account ? account.names[language] : ''" />
                    <label class=" col-form-label "> {{$t(`${language}.name`)}}</label>
                    <span class="text-danger" v-if="errors[`name.${language}`]" :class="seenName">
            {{ errors[`name.${language}`][0] }}
          </span>
                </div>
            </div>
        </div>
         <div class="col-lg-12 form-group p-0">

            <input type="text" class="form-control"

                   :name="`address[${language}]`" :id="`address[${language}]`" :placeholder="`address`" :value="account ? account.addresses[language] : ''"></input>
            <label class=" col-form-label "> {{ $t('address') }} </label>
            <span class="text-danger" v-if="errors[`address.${language}`]">
                {{ errors[`address.${language}`][0] }}
            </span>
        </div>

        <div class="col-lg-12 form-group p-0">

            <textarea type="text" class="form-control" :name="`notes[${language}]`" :id="`notes[${language}]`" :placeholder="`notes`" :value="account ? account.all_notes[language] : ''"></textarea>
            <label class=" col-form-label "> {{ $t('notes') }} </label>
            <span class="text-danger" v-if="errors[`${language}.notes`]">
                {{ errors[`${language}.notes`][0] }}
            </span>
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
    account: {
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