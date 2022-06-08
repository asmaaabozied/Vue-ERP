<template>
  <div>
    <div class="main-tabs">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            :class="{ active: checkHomeRoute }"
            id="home-tab"
            data-toggle="tab"
            href="#home"
          >
            <span class="nav-text">Home</span>
          </router-link>
        </li>

        <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
          <router-link
            :to="{ name: tab }"
            class="nav-link"
            id="group-card-tab"
            data-toggle="tab"
            :class="{ active: selected == tab }"
            :href="`#group-card-${index}`"
          >
            <span class="nav-text"> {{ tab }} </span>
            <span class="tab-closer" @click="closeTab(tab)">&times;</span>
          </router-link>
        </li>
      </ul>
      <div class="tab-content mt-5" id="myTabContent">
        <first-tab></first-tab>
        <div
          v-for="(tab, index) in tabs"
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
  </div>
</template>

<script>
import firstTab from "@/components/layouts/firstTab";
import holderTab from "@/components/layouts/holderTab.vue";
import sideMenu from "./aside/sideMenu.vue";

export default {
  data() {
    return {
      selected: "",
      last: "",
      counter: 0,
      tabs: [],
    };
  },
  components: {
    firstTab,
    holderTab,
    sideMenu,
  },

  computed: {
    checkHomeRoute() {
      return this.$route.name == "home";
    },
    currentRouteName() {
      const routeName = this.$route.name;
      this.tabs.push(routeName);
      this.tabs = [...new Set(this.tabs)];
      this.last = this.selected;
      this.selected = routeName;
      return routeName;
    },
  },
  methods: {
    select(tab) {
      this.last = this.selected;
      this.selected = tab;
      if (!this.last) {
        this.last = this.selected;
      }
      // this.go(tab);
    },
    close(tab, $event) {
      $event.preventDefault();
      $event.stopPropagation();
      const index = this.tabs.findIndex((item) => tab === item);

      this.tabs.splice(index, 1);
      const last = this.tabs.find((item) => this.last === item);
      if (last) {
        this.select(last);
      } else {
        this.$router.push({ name: "home" });
      }
    },
    closeTab(x) {
       
      for (let i = 0; i < this.tabs.length; i += 1) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
      const last = this.tabs.find((item) => this.last === item);
      if (last) {
        this.select(last);
      } else {
        this.$router.push({ name: "home" });
      }
    },
    go(tab) {
      this.$router.push(tab);
    },
  },
};
</script>

<style>
</style>