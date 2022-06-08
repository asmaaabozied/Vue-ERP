<template>
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
    <li class="nav-item active" v-if="!checkHomeRoute">
      <a
        class="nav-link router-link-exact-active router-link-active active"
        id="group-card-tab"
        data-toggle="tab"
        href="#group-card-0"
      >
        <span class="nav-text"> {{ $route.name }} Page </span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    checkHomeRoute() {
      return this.$route.name == "home";
    },
  },
};
</script>

<style>
</style>