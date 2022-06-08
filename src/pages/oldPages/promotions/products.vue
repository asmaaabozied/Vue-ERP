<template>
  <div
    class="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded table-product mt-3"
    id="kt_datatable_2"
  >
    <!-- table  -->

    <table class="datatable-table table table-bordered">
      <thead class="datatable-head">
        <tr class="datatable-row" style="left: 0px">
          <th
            data-field="RecordID"
            class="datatable-cell-center datatable-cell text-center"
          >
            <span>#</span>
          </th>
          <th data-field="" class="datatable-cell  end-cell text-center">
            <span style="">{{ $t("action") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("type") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("Products") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("units") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("categories") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("required_quantity") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("offer_quantity") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("price_value") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("max_value") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("discount_type") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("discount_value") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("warehouse") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("free_quantity") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("free_product") }}</span>
          </th>
          <th data-field="" class="datatable-cell">
            <span style="">{{ $t("free_product_quantity") }}</span>
          </th>
        </tr>
      </thead>
      <tbody class="datatable-body">
        <tr
          v-for="(tax, index) in productsPromotion"
          :key="index"
          class="datatable-row datatable-row-even"
        >
          <td class="datatable-cell-center datatable-cell">
            <span style="width: 30px;">{{ index + 1 }}</span>
          </td>
          <td class="text-center end-td ">
            <button
              type="button"
              data-toggle="tooltip"
              title="Remove"
              :disabled="index + 1 == 1 ? '' : disabled"
              class="btn btn-danger btn-option mt-5"
              @click="deleteRow(index)"
            >
              <i class="fa fa-minus-circle"></i>
            </button>
          </td>
          <td class="datatable-cell">
            <div class="">
              <select
                class="form-control"
                @change="checkType($event)"
                :name="`products[${index}][type]`"
              >
                <option selected value="">Choose...</option>
                <option value="quantity">quantity</option>
                <option value="price">price</option>
                <option value="discount">discount</option>
                <option value="gift">gift</option>
              </select>
              <span class="text-danger" v-if="errors[`products.${index}.type`]">
                {{ errors[`products.${index}.type`] }}
              </span>
            </div>
          </td>
          <td class="datatable-cell">
            <div class="">
              <select
                class="form-control"
                :name="`products[${index}][product_id]`"
                @change="selectedProduct($event, index)"
              >
                <option selected value="">Choose...</option>
                <option
                  v-for="product in products"
                  :key="product.id"
                  v-bind:value="product.id"
                >
                  {{ product.name }}
                </option>
              </select>
              <span
                class="text-danger"
                v-if="errors[`products.${index}.product_id`]"
              >
                {{ errors[`products.${index}.product_id`] }}
              </span>
            </div>
          </td>
          <td class="datatable-cell">
            <div class="">
              <select
                class="form-control"
                :name="`products[${index}][unit_id]`"
              >
                <option selected value="">Choose...</option>
                <option
                  v-for="(unit, i) in units[index]"
                  :key="i"
                  v-bind:value="unit.id"
                >
                  {{ unit.name }}
                </option>
              </select>
            </div>
          </td>
          <td class="datatable-cell">
            <div class="">
              <select class="form-control">
                <option selected value="">Choose...</option>
                <option
                  v-for="category in categories"
                  :key="category.id"
                  v-bind:value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
            <span
              class="text-danger"
              v-if="errors[`products.${index}.category_id`]"
            >
              {{ errors[`products.${index}.category_id`] }}
            </span>
          </td>
          <td class="datatable-cell">
            <div class="">
              <input
                type="number"
                class="form-control"
                min="0"
                placeholder="required_quantity"
                :name="`products[${index}][required_quantity]`"
              />
            </div>
            <span
              class="text-danger"
              v-if="errors[`products.${index}.required_quantity`]"
            >
              {{ errors[`products.${index}.required_quantity`] }}
            </span>
          </td>

          <td class="datatable-cell">
            <div class="">
              <input
                type="number"
                class="form-control"
                min="0"
                placeholder="offer_quantity"
                :name="`products[${index}][offer_quantity]`"
              />
            </div>
            <span
              class="text-danger"
              v-if="errors[`products.${index}.offer_quantity`]"
            >
              {{ errors[`products.${index}.offer_quantity`] }}
            </span>
          </td>
          <td class="datatable-cell">
            <div class="">
              <input
                type="number"
                class="form-control"
                min="0"
                placeholder="price_value"
                :name="`products[${index}][price_value]`"
              />
            </div>
            <span
              class="text-danger"
              v-if="errors[`products.${index}.price_value`]"
            >
              {{ errors[`products.${index}.price_value`] }}
            </span>
          </td>
          <td class="datatable-cell">
            <div class="">
              <input
                type="number"
                class="form-control"
                min="0"
                placeholder="max_value"
                :name="`products[${index}][max_value]`"
              />
            </div>
            <span
              class="text-danger"
              v-if="errors[`products.${index}.max_value`]"
            >
              {{ errors[`products.${index}.max_value`] }}
            </span>
          </td>

          <td class="datatable-cell">
            <div class="">
              <select
                class="form-control"
                :name="`products[${index}][discount_type]`"
                :disabled="quantityType || giftType || priceType"
              >
                <option selected value="">Choose...</option>
                <option value="percentage">percentage</option>
                <option value="fixed">fixed</option>
              </select>
              <span
                class="text-danger"
                v-if="errors[`products.${index}.discount_type`]"
              >
                {{ errors[`products.${index}.discount_type`] }}
              </span>
            </div>
          </td>
          <td class="datatable-cell">
            <div class="">
              <input
                type="number"
                class="form-control"
                min="0"
                placeholder="discount_value"
                :name="`products[${index}][discount_value]`"
                :disabled="quantityType || giftType || priceType"
              />
            </div>
            <span
              class="text-danger"
              v-if="errors[`products.${index}.discount_value`]"
            >
              {{ errors[`products.${index}.discount_value`] }}
            </span>
          </td>
          <td class="datatable-cell">
            <div class=""></div>
          </td>
          <td class="datatable-cell">
            <div class="">
              <input
                type="text"
                class="form-control"
                :disabled="priceType || discountType || giftType"
              />
            </div>
          </td>
          <td class="datatable-cell">
            <div class="">
              <select
                class="form-control"
                :name="`products[${index}][free_product]`"
                @change="selectedProduct($event)"
                :disabled="priceType || quantityType || discountType"
              >
                <option selected value="">Choose...</option>
                <option
                  v-for="product in products"
                  :key="product.id"
                  v-bind:value="product.id"
                >
                  {{ product.name }}
                </option>
              </select>
              <span
                class="text-danger"
                v-if="errors[`products.${index}.free_product`]"
              >
                {{ errors[`products.${index}.free_product`] }}
              </span>
            </div>
          </td>

          <td class="datatable-cell">
            <div class="">
              <input
                type="text"
                class="form-control"
                :name="`products[${index}][free_products_quantity]`"
                :disabled="priceType || quantityType || discountType"
              />
            </div>
          </td>
        </tr>
        <tr class="datatable-row datatable-row-even" style="left: 0px;">
          <td class="datatable-cell-center datatable-cell ">
            <span style="width: 30px;">{{ incrment }}</span>
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
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
          <td class="datatable-cell"><span></span></td>
        </tr>
      </tbody>
    </table>

    <!--  -->
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      giftType: false,
      priceType: false,
      discountType: false,
      quantityType: false,
      categories: [],
      products: [],
      units: [],
      incrment: 2,
      productsPromotion: [
        {
          id: 1,
        },
      ],
      nextItemId: 2,
    };
  },
  created() {
    this.getProducts();
    this.getCategories();
  },

  methods: {
    addRow() {
      this.productsPromotion.push({
        id: (this.nextItemId += this.nextItemId),
      });
      this.incrment++;
      this.nextItemId++;
    },
    deleteRow(index) {
      this.productsPromotion.splice(index, 1);
      this.incrment--;
    },
    async getProducts() {
      const Url = { URL: "products" };
      const items = await this.$store.dispatch("fetchProducts", Url);
      this.products = this.$store.getters.getProducts.data;
    },

    async getCategories() {
      try {
        await $axios.get("allCategories").then((res) => {
          this.categories = res.data.data;
        });
      } catch (error) {
        console.log(error);
      }
    },
    selectedProduct(event, $val) {
      const selectItem = this.products.filter((item) => {
        return item.id == event.target.value;
      });
      this.$set(this.units, $val, selectItem[0].units);
    },
    checkType(event) {
      this.giftType = event.target.value == "gift" ? true : false;
      this.priceType = event.target.value == "price" ? true : false;
      this.quantityType = event.target.value == "quantity" ? true : false;
      this.discountType = event.target.value == "discount" ? true : false;
    },
  },
};
</script>

<style></style>
