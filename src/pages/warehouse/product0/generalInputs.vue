<template>
  <div
    class="tab-pane fade show tab-product-main active"
    id="page-general2"
    role="tabpanel"
    aria-labelledby="general2-tab"
  >
    <div class="panel panel-default">
      <div
        class="panel-heading"
        v-wow="{
          'animation-name': 'fadeInUp',
          'animation-duration': '2s',
        }"
      >
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">
            <i class="flaticon2-gear"></i> <span>{{ $t("attachments") }}</span>
          </a>
        </h4>
      </div>
      <div id="collapseOne" class="panel-collapse collapse" :class="`${dataa}`">
        <div class="panel-body">
          <div class="row">
            <div class="col-12">
              <div class="form-group has-float-label">
                <label for="exampleSelectl" class="img-upload">{{
                  $t("upload_image_product")
                }}</label>

                <file-upload></file-upload>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from "@/components/form/fileUpload";
export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      active: false,
      incrment: 2,
    };
  },

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
  },
  created() {
    this.getWareHouses();
    this.getResults();
  },
  computed: {
    units() {
      return this.$store.getters.getUnits;
    },
    wareHouses() {
      return this.$store.getters.getWareHouses;
    },
  },
  methods: {
    async getResults(page = 1) {
      const unitUrl = {
        URL: "units",
        page,
      };
      const units = await this.$store.dispatch("fetchUnits", unitUrl);
    },
    async getWareHouses(page = 1) {
      const warehouseUrl = {
        URL: "wareHouses",
        page,
      };
      const warehouses = await this.$store.dispatch(
        "fetchWareHouses",
        warehouseUrl
      );
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>

<style></style>
