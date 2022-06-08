<template>
  <div class="tab-pane fade tab-product-main" id="page-data" role="tabpanel">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseTwo">
            <i class="flaticon2-gear"></i> <span>{{ $t("data") }}</span>
          </a>
        </h4>
      </div>

      <div id="collapseTwo" class="panel-collapse collapse" :class="`${dataa}`">
        <div class="panel-body">
          <div class="row">ddddd</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dataTab",

  props: {
    data: {},
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
  },
  data() {
    return {
      isActive: true,
      active: false,
    };
  },
  methods: {
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>

<style scoped></style>
