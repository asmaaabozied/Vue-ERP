<template>
  <ul>
    <li>
      <!--rania add this -->
      <router-link to="/invoice/invoice_settings_index">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text"
          >{{ $t("sidebar.invoice_settings_index") }}
        </span>
      </router-link>
    </li>
    <li>
      <router-link to="/invoice/purchase/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.Purchase") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/invoice/purchase_order/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.Purchase_Order") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/invoice/purchase_returns/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.Purchase_Returns") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/invoice/beginning_inventory/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.Beginning_Inventory") }} </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "OperationItems",
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
</style>