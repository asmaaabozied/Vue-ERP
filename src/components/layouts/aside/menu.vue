<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="">
      <b-card-header header-tag="header" class="" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="primary">
          <i class="mr-3 text-dark-50 flaticon2-layers-1"></i>
          {{ $t("sidebar.Cards") }}</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body><CardItems></CardItems> </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="">
      <b-card-header header-tag="header" class="" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="primary"
          ><i class="mr-3 text-dark-50 flaticon2-console"></i>
          {{ $t("sidebar.management") }}</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ManagementItems></ManagementItems>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="">
      <b-card-header header-tag="header" class="" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="primary"
          ><i class="mr-3 text-dark-50 flaticon2-gear"></i
          >{{ $t("sidebar.settings") }}</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <SettingItems></SettingItems>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="">
      <b-card-header header-tag="header" class="" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="primary"
          ><i class="mr-3 text-dark-50 flaticon2-paper"></i
          >{{ $t("sidebar.Invoice") }}</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <OperationItems></OperationItems>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="">
      <b-card-header header-tag="header" class="" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="primary"
          ><i class="mr-3 text-dark-50 flaticon2-notepad"></i
          >{{ $t("sidebar.report") }}</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ReportItems></ReportItems>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import CardItems from "./cardItems.vue";
import ManagementItems from "./managementItems.vue";
import OperationItems from "./operationItems.vue";
import ReportItems from "./reportItems.vue";
import SettingItems from "./settingItems.vue";
export default {
  name: "KTMenu",
  data() {
    return {
      activeId: null,
      showClass: "",
    };
  },
  components: {
    CardItems,
    ManagementItems,
    OperationItems,
    ReportItems,
    SettingItems,
  },
  created() {
    this.routes();
  },
  methods: {
    routes() {
      // const routesArr = this.$router.getRoutes();
      // const test = routesArr.map((route) => {
      //   return route.name == this.$route.name;
      // });

      // console.log(this.$route.name);
    },
  },
};
</script>
<style></style>
