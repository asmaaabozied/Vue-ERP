<template>
  <div>
    <!-- begin::Main -->
    <!--begin::Header Mobile-->
    <mobile-header></mobile-header>
    <!--end::Header Mobile-->
    <div class="d-flex flex-column flex-root">
      <!--begin::Header-->
      <nav-bar></nav-bar>
      <!--end::Header-->
      <!--begin::Page-->
      <!-- <div class="main-tabs">
        <main-tabs></main-tabs>
        <div class="tab-content mt-5" id="myTabContent">
          <first-tab></first-tab>
          <holder-tab></holder-tab> -->
      <!--begin::Footer-->

      <!--end::Footer-->
      <!-- </div> -->
      <!--end::Page-->
      <!-- </div> -->
      <!-- <all-tabs></all-tabs> -->

      <!-- start all tabs -->

      <div class="main-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <!-- <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              :class="{ active: checkHomeRoute }"
              id="home-tab"
              data-toggle="tab"
              href="#home"
            >
              <span class="nav-text">{{ $t(`routesName.home`) }} </span>
            </router-link>
          </li> -->

          <li
            class="nav-item"
            v-for="(tab, index) in currentRouteName"
            :key="index"
          >
            <router-link
              v-if="tab == `home`"
              :to="{ name: tab }"
              class="nav-link"
              id="group-card-tab"
              data-toggle="tab"
              :class="{ active: selected == tab }"
              :href="`#home`"
            >
              <span class="nav-text"> {{ $t(`routesName.${tab}`) }} </span>
            </router-link>

            <router-link
              v-else
              :to="{ name: tab }"
              class="nav-link"
              id="group-card-tab"
              data-toggle="tab"
              :class="{ active: selected == tab }"
              :href="`#group-card-${index}`"
            >
              <span class="nav-text"> {{ $t(`routesName.${tab}`) }} </span>
              <span class="tab-closer" @click.prevent="closeTab(tab)"
                >&times;</span
              >
            </router-link>
          </li>
        </ul>
        <div class="tab-content mt-5" id="myTabContent">
          <first-tab></first-tab>
          <div
            v-for="(tab, index) in currentRouteName"
            :key="index"
            class="tab-pane fade"
            :class="{ 'show active': selected == tab }"
            :id="`group-card-${index}`"
            role="tabpanel"
            aria-labelledby="group-card-tab"
          >
            <div class="d-flex flex-row flex-column-fluid page">
              <!--begin::Aside-->
              <side-menu></side-menu>
              <!--end::Aside-->
              <!--begin::Wrapper-->
              <div
                class="d-flex flex-column flex-row-fluid wrapper"
                id="kt_wrapper"
              >
                <!--begin::Container-->

                <div class="container">
                  <router-view name="pageContent" />
                </div>
                <!--end::Container-->
              </div>
              <!--end::Wrapper-->
            </div>
          </div>
          <!--begin::Footer-->

          <!--end::Footer-->
        </div>
        <!--end::Page-->
      </div>

      <!-- end all tabs -->
      <main-footer></main-footer>
      <!--end::Main-->
    </div>
  </div>
</template>

<script>
import navBar from "@/components/layouts/navBar";
import mainTabs from "@/components/layouts/mainTabs";
import firstTab from "@/components/layouts/firstTab";
import holderTab from "@/components/layouts/holderTab.vue";
import mainFooter from "@/components/layouts/footer";
import mobileHeader from "@/components/layouts/mobileHeader";
import AllTabs from "@/components/layouts/AllTabs";
import sideMenu from "@/components/layouts/aside/sideMenu.vue";
export default {
  name: "index",
  data() {
    return {
      selected: "",
      last: "",
      counter: 0,
      tabs: ["home"],
    };
  },
  components: {
    navBar,
    mainTabs,
    firstTab,
    holderTab,
    mainFooter,
    mobileHeader,
    AllTabs,
    sideMenu,
  },
  computed: {
    checkHomeRoute() {
      return this.$route.name == "home";
    },
    currentRouteName() {
      const routeName = this.$route.name;

      let subRoute = "";
      if (!routeName.includes("add") || !routeName.includes("edit")) {
        subRoute = routeName.split("-").pop();
      } else {
        subRoute = routeName;
      }
      this.tabs = this.tabs.filter((value) => !value.includes(`${subRoute}`));

      this.tabs.push(routeName);
      this.tabs = [...new Set(this.tabs)];
      this.last = this.selected;
      this.selected = routeName;

      return this.tabs;
    },
  },

  methods: {
    select(tab) {
      this.selected = tab;
      this.last = this.selected;
      if (!this.last) {
        this.last = this.selected;
      }
      this.go(tab);
    },

    closeTab(x) {
      let itemIndex = 0;
      for (let i = 0; i < this.tabs.length; i += 1) {
        if (this.tabs[i] == x) {
          itemIndex = i - 1;
          this.tabs.splice(i, 1);
        }
      }
      if (this.selected == x) {
        if (itemIndex > 0) {
          this.select(this.tabs[itemIndex]);
        } else {
          this.select(this.tabs[0]);
        }
      }
    },
    go(tab) {
      this.$router.push({ name: tab });
    },
  },
};
</script>
