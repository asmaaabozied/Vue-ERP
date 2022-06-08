<template>
  <div>
    <top-bar-card
      :newUrlName="`add-cards`"
      :submit="updateCard"
      :id="card.id"
      :editUrlName="`edit-cards`"
      :navigationUrl="`cardNavigation`"
    />

    <div class="card card-custom mb-9 mt-10">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form ref="my-form" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row">
              <div class="col-12">
                <lang-tabs :languages="languages">
                  <template v-slot:input="{ language }">
                    <editInputs
                      :language="language"
                      :errors="errors"
                      :card="card"
                    />
                  </template>
                </lang-tabs>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import EditInputs from "./EditInputs.vue";
export default {
  name: "edit-cards",
  components: { LangTabs, EditInputs },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      card: {},
      languages: window.$languages,
    };
  },
  created() {
    this.getCard();
  },
  methods: {
    async updateCard() {
      try {
        var form = document.getElementById("currentForm");
        var formData = new FormData(form);
        formData.append("_method", "PATCH");
        const card = {
          URL: "cards/" + this.$route.params.id,
          data: formData,
        };
        await this.$store.dispatch("updateCard", card);
        document.location.href = "cards";
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getCard() {
      const card = {
        URL: "cards/" + this.$route.params.id,
      };
      const getCards = await this.$store.dispatch("getClassification", card);
      this.card = getCards.data.data;
    },
  },
};
</script>

<style>
</style>