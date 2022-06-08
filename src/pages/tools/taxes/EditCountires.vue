<template>
  <div class="row">
    <div class="col-12">
      <!-- table  -->
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
        <table class="datatable-table table table-bordered">
          <thead class="datatable-head">
            <tr class="datatable-row" style="left: 0px">
              <th
                data-field="RecordID"
                class="datatable-cell-center datatable-cell text-center"
              >
                <span>#</span>
              </th>
              <th data-field="" class="datatable-cell end-cell text-center">
                <span style="">{{ $t("action") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style="">{{ $t("Country_name") }} </span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style="">{{ $t("type") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style="">{{ $t("impact") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style="">{{ $t("value") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style="">{{ $t("active_in_country") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style="">{{ $t("active_out_country") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style="">{{ $t("start_date") }}</span>
              </th>
              <th data-field="" class="datatable-cell">
                <span style="">{{ $t("end_date") }}</span>
              </th>
            </tr>
          </thead>
          <tbody class="datatable-body">
            <tr
              v-for="(tax, index) in CountriesTax"
              :key="tax.id"
              class="datatable-row datatable-row-even"
            >
              <td class="datatable-cell-center datatable-cell">
                <span style="width: 30px">{{ index + 1 }}</span>
              </td>
              <td class="text-center end-td">
                <button
                  type="button"
                  data-toggle="tooltip"
                  title="Remove"
                  :disabled="index + 1 == 1 ? '' : disabled"
                  class="btn btn-danger btn-option"
                  @click="deleteRow(index)"
                >
                  <i class="fa fa-minus-circle"></i>
                </button>
              </td>
              <td class="datatable-cell">
                <select
                  v-if="!tax.country_id"
                  class="form-control"
                  v-on:input="valinput($event)"
                  :id="'country-' + index"
                  @change="
                    changeOption(
                      $event,
                      index,
                      `countries[${index}][country_id]`,
                      'country'
                    )
                  "
                  :class="{
                    [`${addclass}`]: errors[`countries.${index}.country_id`],
                  }"
                >
                  <option selected value="">Choose...</option>

                  <option
                    v-for="country in countries.data"
                    :key="country.id"
                    v-bind:value="country.id"
                    :selected="country.id == tax.country_id"
                  >
                    {{ country.name }}
                  </option>
                </select>
                <select
                  v-else
                  class="form-control"
                  :name="`countries[${index}][country_id]`"
                >
                  <option selected value="">Choose...</option>

                  <option
                    v-for="country in countries.data"
                    :key="country.id"
                    v-bind:value="country.id"
                    :selected="country.id == tax.country_id"
                  >
                    {{ country.name }}
                  </option>
                </select>

                <span
                  class="text-danger"
                  v-if="errors[`countries.${index}.country_id`]"
                >
                  {{ errors[`countries.${index}.country_id`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <select
                  :class="'form-control country_' + index"
                  :name="`countries[${index}][type]`"
                  :disabled="!tax.type"
                >
                  <option selected value="">Choose...</option>
                  <!-- <option value="fixed_number">fixed_number</option> -->
                  <option
                    value="percentage"
                    :selected="tax.type == 'percentage'"
                  >
                    percentage
                  </option>
                </select>

                <span
                  class="text-danger"
                  v-if="errors[`countries.${index}.type`]"
                >
                  {{ errors[`countries.${index}.type`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <select
                  :class="'form-control country_' + index"
                  :name="`countries[${index}][impact]`"
                  :disabled="!tax.impact"
                >
                  <option selected value="">Choose...</option>
                  <option value="addition" :selected="tax.impact == 'addition'">
                    addition
                  </option>
                  <option value="discount" :selected="tax.impact == 'discount'">
                    discount
                  </option>
                </select>
                <span
                  class="text-danger"
                  v-if="errors[`countries.${index}.impact`]"
                >
                  {{ errors[`countries.${index}.impact`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <input
                  type="number"
                  :class="'form-control country_' + index"
                  min="0"
                  max="100"
                  placeholder="add_value"
                  :name="`countries[${index}][value]`"
                  :value="tax ? tax.value : ''"
                  :disabled="!tax.value"
                />
                <span
                  class="text-danger"
                  v-if="errors[`countries.${index}.value`]"
                >
                  {{ errors[`countries.${index}.value`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <select
                  :class="'form-control country_' + index"
                  :name="`countries[${index}][active_in_country]`"
                  :disabled="!tax.active_in_country"
                >
                  <option selected value="">Choose...</option>
                  <option value="1" :selected="tax.active_in_country == 1">
                    Active
                  </option>
                  <option value="0" :selected="tax.active_in_country == 0">
                    unActive
                  </option>
                </select>
                <span
                  class="text-danger"
                  v-if="errors[`countries.${index}.active_in_country`]"
                >
                  {{ errors[`countries.${index}.active_in_country`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <select
                  :class="'form-control country_' + index"
                  :name="`countries[${index}][active_out_country]`"
                  :disabled="
                    tax.active_out_country != 0 && tax.active_out_country != 1
                  "
                >
                  <option selected value="">Choose...</option>
                  <option value="1" :selected="tax.active_out_country == 1">
                    Active
                  </option>
                  <option value="0" :selected="tax.active_out_country == 0">
                    unActive
                  </option>
                </select>
                <span
                  class="text-danger"
                  v-if="errors[`countries.${index}.active_out_country`]"
                >
                  {{ errors[`countries.${index}.active_out_country`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <input
                  type="date"
                  :name="`countries[${index}][start_date]`"
                  :class="'form-control country_' + index"
                  :value="tax ? tax.start_date : ''"
                  :disabled="!tax.start_date"
                />
                <span
                  class="text-danger"
                  v-if="errors[`countries.${index}.start_date`]"
                >
                  {{ errors[`countries.${index}.start_date`] }}
                </span>
              </td>
              <td class="datatable-cell">
                <input
                  type="date"
                  :name="`countries[${index}][end_date]`"
                  :class="'form-control country_' + index"
                  :value="tax ? tax.end_date : ''"
                  :disabled="!tax.end_date"
                />
                <span
                  class="text-danger"
                  v-if="errors[`countries.${index}.end_date`]"
                >
                  {{ errors[`countries.${index}.end_date`] }}
                </span>
              </td>
            </tr>
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
      </div>
      <!--  -->
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

    CountriesTax: {},
  },
  data() {
    return {
      CountriesTax: [
        {
          id: 1,
        },
      ],
      activeRow: false,
      nextItemId: 2,
      incrment: 2,
    };
  },
  created() {
    this.getCountries();
  },
  computed: {
    countries() {
      return this.$store.getters.getCountries;
    },
  },
  methods: {
    addRow() {
      this.activeRow = true;
      this.CountriesTax.push({
        id: (this.nextItemId += this.nextItemId),
      });
      this.incrment++;
      this.nextItemId++;
    },
    deleteRow(index) {
      this.CountriesTax.splice(index, 1);
      this.incrment--;
    },
    async getCountries() {
      const countryUrl = { URL: "countries", all: 1 };
      const countries = await this.$store.dispatch(
        "fetchCountries",
        countryUrl
      );
    },
    changeOption(event, $index, $name, $model) {
      var value = event.target.value;
      this.info = value;
      var id = event.target.id;
      var select = document.getElementById(id);
      var disabled_elements = document.getElementsByClassName(
        $model + "_" + $index
      );
      select.name = $name;
      for (var index in disabled_elements) {
        if (disabled_elements[index] != disabled_elements.length) {
          disabled_elements[index].disabled = false;
        }
      }
    },
  },
};
</script>

<style></style>
