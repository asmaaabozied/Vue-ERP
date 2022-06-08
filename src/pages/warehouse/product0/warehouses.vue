<template>
  <div
    class="tab-pane fade show tab-product-main"
    id="stock-data"
    role="tabpanel"
    aria-labelledby="stock-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '2s',
      }">
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapseFour"
          >
            <i class="flaticon2-console"></i> <span>{{ $t("Stock") }}</span>
          </a>
        </h4>
      </div>
      <div id="collapseFour" class="panel-collapse collapse">
        <div class="panel-body">
          <div class="row">
            <div class="col-12">
              <!--begin: Datatable-->

              <div
                class="
                  datatable
                  datatable-bordered
                  datatable-head-custom
                  datatable-default
                  datatable-primary
                  datatable-loaded
                  table-product
                  alternative-table
                "
                style=""
              >
                <table class="table table-bordered mt-2">
                  <thead class="datatable-head">
                    <tr class="datatable-row" style="left: 0px">
                      <th></th>
                      <th data-field="name" class="datatable-cell">
                        <span style="">{{ $t("warehouse_name") }}</span>
                      </th>
                      <th data-field="main-price" class="datatable-cell">
                        <span style="">{{ $t("quantity") }}</span>
                      </th>

                      <th data-field="" class="datatable-cell">
                        <span style=""></span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="datatable-body">
                    <tr
                      class="datatable-row datatable-row-even"
                      v-for="(warehouse, index) in product.warehouses"
                      :key="index"
                      style="left: 0px"
                    >
                      <td class="datatable-cell">
                        <p>{{ index + 1 }}</p>
                      </td>
                      <td class="datatable-cell">
                        <span>
                          <h5>{{ warehouse.name }}</h5>
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <span>
                          <p>{{ warehouse.quantity }}</p>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--end: Datatable-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stock-inputs",

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    product: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      selectedIndex: 0,
      isActive: true,
      activeAssign: false,
      trs: [
        {
          id: "",
        },
      ],
    };
  },

  computed: {},
  mounted() {
    this.selectTab(0);
  },
  methods: {},
};
</script>

<style>
</style>