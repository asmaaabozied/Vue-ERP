<template>
  <div
      class="tab-pane fade tab-product-main active"
      id="covers-tab"
      role="tabpanel"
      aria-labelledby="covers-tab"
  >

    <div class="panel panel-default">
      <div class="panel-heading">
        <h4
            class="panel-title"
            @click.prevent="changeclass"
            :class="[{ active: active }, `${addactive}`]"
        >
          <a
              data-toggle="collapse"
              data-parent=".tab-pane"
              href="#collapsefour"
          >
            <i class="flaticon2-contract"></i>
            <span>
            {{ $t("cover") }}
            </span>
          </a>
        </h4>
      </div>
      <div
          id="collapsefour"
          class="panel-collapse collapse"
          :class="`${dataa}`"
      >
        <div class="panel-body"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cover",

  props: {
    errors: {
      type: Object,
      default: () => ({}),
      dataa: {
        type: String,
      },
      addactive: {
        type: String,
      },
    },
  },
  data() {
    return {
      carCard: {},
      languages: window.$languages,
      gridClassName: window.$gridClassName,
      isEmpty: false,
      active: false,
    };
  },
  created() {},
  computed: {},
  mounted() {
    
  },
  methods: {
    // async newCarCard() {
    //   try {
    //     var form = document.getElementById("currentForm");
    //     var formData = new FormData(form);
    //     const carCard = { URL: "carCards", data: formData };
    //     await this.$store.dispatch("storeCarCard", carCard);
    //     document.location.href = "carCards";
    //   } catch (errors) {
    //     if (errors) {
    //       this.errors = errors;
    //       this.isEmpty = true;
    //     }
    //   }
    // },
    changeGrid(event) {
      this.gridClassName = event;
    },

    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>
