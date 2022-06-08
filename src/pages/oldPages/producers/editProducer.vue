<template>
  <div>
    <top-bar-card
      :newUrlName="`edit-producers`"
      :submit="updateProducer"
      :id="producer.id"
      :editUrlName="`producers.edit`"
      :navigationUrl="`producerNavigation`"
    />
    <div class="card card-custom mb-9 mt-10">
      <div v-if="isEmpty">
        <errors :errors="errors" />
      </div>
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="updateProducer" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>

            <div class="row align-items-end">
              <div class="col-6">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :producer="producer"
                    />
                  </template>
                </lang-tabs>
              </div>

              <div class="col-md-6 col-12 mt-7">
                <active-toggle :active="active" />
              </div>
            </div>

            <hr />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import Errors from "@/components/layouts/errors.vue";
import EditInputs from "./EditInputs.vue";

export default {
  name: "add-producers",
  components: { LangTabs, EditInputs, Errors },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      producer: {},
      isEmpty: false,
      active: {},
      activeAssign: false,
      languages: window.$languages,
    };
  },
  created() {
    this.getProducer();
  },
  methods: {
    async updateProducer() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const producer = {
          URL: "producers/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateProducer", producer);
        document.location.href = "producers";
      } catch (errors) {
        this.errors = errors;
        this.isEmpty = true;
      }
    },
    async getProducer() {
      const producer = { URL: "producers/" + this.$route.params.id };
      const getProducer = await this.$store.dispatch("getProducer", producer);
      this.producer = getProducer.data.data;
      this.active = getProducer.data.data.active;
    },
  },
};
</script>

<style></style>
