<template>
  <div
    class="aside aside-left aside-fixed d-flex flex-column flex-row-auto"
    id="kt_aside"
  >
    <div class="side-bar">
      <!--begin::Brand-->
      <KTBrand></KTBrand>
      <!--end::Brand-->
      <!--begin::Aside Menu-->

      <div
        class="aside-menu-wrapper flex-column-fluid"
        id="kt_aside_menu_wrapper"
      >
        <!--begin::Menu Container-->
        <div
          ref="kt_aside_menu"
          id="kt_aside_menu"
          class="aside-menu my-4"
          data-menu-vertical="1"
          data-menu-dropdown-timeout="500"
        >
          <!--begin::Menu Nav-->
          <perfect-scrollbar
            class="aside-menu scroll"
            style="max-height: 90vh; position: relative"
          >
            <KTMenu></KTMenu>
          </perfect-scrollbar>
          <!-- <KTMenu></KTMenu> -->
          <!--end::Menu Nav-->
        </div>
        <!--end::Menu Container-->
      </div>

      <!--end::Aside Menu-->
    </div>
  </div>
</template>
<script>
import KTMenu from "./menu.vue";
import KTBrand from "./Brand.vue";
export default {
  name: "sideMenu",
  components: { KTMenu, KTBrand },
};
</script>

<style scoped>
.ps {
  height: 70vh;
}
</style>