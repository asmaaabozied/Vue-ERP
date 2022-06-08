<template>
  <div
    class="tab-pane fade"
    :class="{ 'show active': !checkHomeRoute }"
    id="group-card-0"
    role="tabpanel"
    aria-labelledby="group-card-tab"
  >
    <div class="d-flex flex-row flex-column-fluid page">
      <!--begin::Aside-->
      <side-menu></side-menu>
      <!--end::Aside-->
      <!--begin::Wrapper-->
      <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
        <!--begin::Container-->

        <div class="container">
          <router-view name="pageContent" />
        </div>
        <!--end::Container-->
      </div>
      <!--end::Wrapper-->
    </div>
  </div>
</template>

<script>
import sideMenu from "./aside/sideMenu";
import TopBarCard from "../form/topBarCard.vue";
export default {
  computed: {
    checkHomeRoute() {
      return this.$route.name == "home";
    },
  },
  components: { sideMenu, TopBarCard },
};
</script>

