<template>
  <ul class="">
    <li>
      <router-link to="/countries/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.countries") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/taxes/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.taxes") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/cities/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text"> {{ $t("sidebar.cities") }}</span>
      </router-link>
    </li>
    <li>
      <!-- <router-link to="/districts/create">
        {{ $t("sidebar.districts") }}
      </router-link> -->
      <router-link to="/districts/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text"> {{ $t("sidebar.districts") }}</span>
      </router-link>
    </li>
    <li>
      <router-link to="/statementDelivered/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.Statement_Delivered") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/branches/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.branches") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/vouchers/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.vouchers") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/guarantees/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.guarantees") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/cost_center/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.cost_center") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/employees/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.employees") }} </span>
      </router-link>
    </li>

    <li>
      <router-link to="/pointOfSales/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.pointOfSales") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/carTypes/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.carTypes") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/carWheels/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.carWheels") }} </span>
      </router-link>
    </li>

    
     <li>
      <router-link to="/trailerTypes/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.trailerTypes") }} </span>
      </router-link>
    </li>
     <li>
      <router-link to="/trailerWheels/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.trailerWheels") }} </span>
      </router-link>
    </li>

    

    <li>
      <router-link to="/currencies/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.currencies") }} </span>
      </router-link>
    </li>

    <li>
      <router-link to="/discounts/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.discounts") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/options/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.options") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/Tabulations/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.Tabulations") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/categories/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.categories") }} </span>
      </router-link>
    </li>
    <!-- <li>
            <router-link to="/subCategories/create">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text">{{ $t("sidebar.subCategories") }}  </span>
            </router-link>
        </li> -->
    <li>
      <router-link to="/units/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.units") }} </span>
      </router-link>
    </li>

    <li>
      <router-link to="/classifications/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.classifications") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/accounts/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.accounts") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/producers/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.producers") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/cards/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.employee_cards") }} </span>
      </router-link>
    </li>

    <li>
      <router-link to="/warehouses/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.warehouses") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/products/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.products") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/invoiceSettingGroups/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.invoiceSettingGroups") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/fixedAssetCats/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.fixedAssetCategory") }} </span>
      </router-link>
    </li>

    <li>
      <router-link to="/trailers/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.Trailers") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/carCards/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.CarCard") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/trailerData/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ $t("sidebar.trilerData") }} </span>
      </router-link>
    </li>
    <li>
      <router-link to="/discountVendorContracts/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text"
          >{{ $t("sidebar.discountVendorContract") }}
        </span>
      </router-link>
    </li>
    <li>
      <router-link to="/CarStatus/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text"
          >CarStatus
        </span>
      </router-link>
    </li>
    <li>
      <router-link to="/DocumentIssuer/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text"
          >DocumentIssuer
        </span>
      </router-link>
      <router-link to="/vehicleData/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text"
          >vehicleData
        </span>
      </router-link>
    </li>

    <li>
      <router-link to="/asset-group/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ "assetGroups" }} </span>
      </router-link>
    </li>
     <li>
      <router-link to="/asset-status/create">
        <i class="menu-bullet menu-bullet-dot"><span></span></i>
        <span class="menu-text">{{ "assetStatus" }} </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CardItems",
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
.active {
  color: green;
}
</style>
