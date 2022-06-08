<template>
  <ul>
    <li>
      <router-link to="/vendorsContracts/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.vendorsContracts") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/shifts/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.shifts") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/customnotification/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.customnotification") }} </span>
      </router-link>
    </li>

    <li>
      <router-link to="/currency_converter">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.currency_converter") }} </span>
      </router-link>
    </li>

    <li>
      <router-link to="/promotions/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.promotions") }} </span>
      </router-link>
    </li>

    <li>
      <router-link to="/paymentWays/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.PaymentWay") }}</span>
      </router-link>
    </li>
    <li>
      <router-link to="/delegateCommissions/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.DelegateCommission") }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ManagementItems",
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style></style>
