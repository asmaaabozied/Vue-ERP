<template>
  <ul>
    <li>
      <router-link to="/settings/invoice/create">
        <i className="menu-bullet menu-bullet-dot"><span></span></i>
        <span className="menu-text">{{ $t("sidebar.Invoice") }} </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SettingItems",
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
</style>