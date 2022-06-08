<template>
  <div
    class="tab-pane fade tab-product-main"
    id="page-productTabulationDetail"
    role="tabpanel"
    aria-labelledby="productTabulationDetail-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapseThree"
          >
            <i class="flaticon2-layers-2"></i>
            <span>productTabulationDetail</span>
          </a>
        </h4>
      </div>
      <div
        id="collapseThree"
        class="panel-collapse collapse"
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <div class="row">
            <div class="form-group col-12 mb-0">
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
                id="kt_datatable_2"
                style
              >
                <table class="datatable-table table table-bordered mb-0">
                  <thead class="datatable-head">
                    <tr class="datatable-row" style="left: 0px">
                      <th
                        data-field="RecordID"
                        class="datatable-cell-center datatable-cell text-center"
                      >
                        <span>#</span>
                      </th>
                      <th
                        data-field
                        class="datatable-cell end-cell text-center"
                      >
                        <span style>action</span>
                      </th>

                   

                      <th data-field class="datatable-cell">
                        <span style>{{ $t("product") }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="datatable-body">
                    <tr
                      v-for="(card, index) in formData.productTabulationDetail"
                      :key="card.id"
                      class="datatable-row datatable-row-even"
                    >
                      <td class="datatable-cell-center datatable-cell">
                        <span style="width: 30px">{{ index + 1 }}</span>
                      </td>

                      <!-- ///////////// -->

                      <td class="text-center end-td">
                        <button
                          type="button"
                          data-toggle="tooltip"
                          @click="deleteRow(index)"
                          title="Remove"
                          :disabled="index + 1 == 1 ? '' : disabled"
                          class="btn btn-danger btn-option"
                        >
                          <i class="fa fa-minus-circle"></i>
                        </button>
                      </td>

                   

                     
                      <!-- ///////////// -->

                      <!-- <td class="datatable-cell">
                          <select
                            class="form-control "
                            v-model="
                              formData.priceListsDetail[index].product_id
                            "
                            :name="`priceListsDetail[${index}][product_id]`"
                          >
                            <option selected value></option>
                            <option value="1">Group.NO.1</option>
                            <option value="2">Group.NO.2</option>
                            <option value="3">Group.NO.3</option>
                            <option value="4">Group.NO.4</option>
                            <option value="5">Group.NO.5</option>
                          </select>
                      </td> -->

                       <td class="datatable-cell">
                        <div class>
                          <select class="form-control"  v-model="formData.productTabulationDetail[index].product_id" :name="`productTabulationDetail[${index}][product_id]`">
                            <option
                            v-for="product in products"
                            v-bind:key="product.id"
                            :value="product.id"
                          >
                            {{ product.name }}
                          </option>
                          </select>
                        </div>
                      </td>



                    



                    </tr>

                    <!-- /////////////// ازود رو -->

                    <tr class="datatable-row datatable-row-even">
                      <td class="datatable-cell-center datatable-cell">
                        <span style="width: 30px"></span>
                      </td>
                      <td class="text-center end-td">
                        <button
                          @click="addRow()"
                          type="button"
                          class="btn btn-primary add_new"
                        >
                          <i class="fa fa-plus-circle"></i>
                        </button>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                      <td class="datatable-cell">
                        <span></span>
                      </td>
                    </tr>

                    <!-- /////////////// ازود رو -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
    language: {
      type: String,
      default: "en",
    },
    formData: { type: Object },
    addclassshow: {
      type: Object,
      default: null,
    },

    addclassshow: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      status_card: false,
      trs: [
        {
          id: 1,
        },
      ],
      nextItemId: 2,
      active: false,
      incrment: 2,
    };
  },
  created() {
    
   
    this.getProducts();
   
  

  },
  computed: {
    
     products() {
      return this.$store.getters.getProducts;
    },
     units() {
      return this.$store.getters.getUnits;
    },
  },
  methods: {
    addRow() {
      //////////////////

      this.formData.productTabulationDetail.push({
       
        product_id: "",
      });

      //////////////////

      this.incrment++;

      this.nextItemId++;
    },
    //////////////////

    deleteRow(index) {
      this.formData.productTabulationDetail.splice(index, 1);
      this.incrment--;
     // console.log(this.trs);
    },
    //////////////////

    changeclass() {
      this.active = this.active == true ? false : true;
    },
    methodevent() {
      this.$emit("methodevent");
    },
    methodactive() {
      if (this.addactive == "") {
        this.addactive == active;
      } else {
        this.addactive == "";
      }
    },

     async getProducts() {
      const productUrl = { URL: "products" };
      const products = await this.$store.dispatch(
        "fetchProducts",
        productUrl
      );
      console.log("ahmed ",this.products);
      
     
    },

    
     
  },
};
</script>

<style></style>
