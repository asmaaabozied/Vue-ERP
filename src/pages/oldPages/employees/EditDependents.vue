<template>
  <div
    class="tab-pane fade show tab-product-main"
    id="page-dependents"
    role="tabpanel"
    aria-labelledby="dependents-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseTwo">
            <i class="flaticon2-contract"></i> <span>dependents</span>
          </a>
        </h4>
      </div>
      <div id="collapseTwo" class="panel-collapse collapse" :class="`${dataa}`">
        <div class="panel-body">
          <!--                    v-for="(tr, index) in trs" :key="tr.id"-->

          <div class="row align-items-center">
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
                style=""
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
                        data-field=""
                        class="datatable-cell end-cell text-center"
                      >
                        <span style="">{{ $t("action") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("name_dependent") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("number_dependent") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("latin_name") }} </span>
                      </th>

                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("relation") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("passport_number") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("family_compensation") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("age") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("tax") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("birthday_dependent") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style="">
                          {{ $t("passport_issuance_date") }}
                        </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("passport_expiry_date") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("social_status") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("gender_dependent") }} </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="datatable-body">
                    <tr
                      v-for="(dependent_new, index) in dependent_news"
                      :key="dependent_new.id"
                      class="datatable-row datatable-row-even"
                    >
                      <td class="datatable-cell-center datatable-cell">
                        <span style="width: 30px">{{ index + 1 }}</span>
                      </td>
                      <td class="text-center end-td">
                        <button
                          type="button"
                          data-toggle="tooltip"
                          @click="deleteRow(index)"
                          :disabled="index + 1 == 1 ? '' : disabled"
                          title="Remove"
                          class="btn btn-danger btn-option mt-5"
                        >
                          <i class="fa fa-minus-circle"></i>
                        </button>
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="text"
                          :name="`dependents[${index}][name_dependent]`"
                          class="form-control"
                          :value="dependent_new.name_dependent"
                          placeholder="name_dependent"
                        />
                        <!-- <label for="exampleSelectl">name_dependent</label> -->

                        <span class="text-danger" v-if="errors.name_dependent">
                          {{ errors.name_dependent[0] }}
                        </span>
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="text"
                          :name="`dependents[${index}][number_dependent]`"
                          class="form-control"
                          :value="dependent_new.number_dependent"
                          placeholder="number_dependent"
                        />
                        <!-- <label for="exampleSelectl">number_dependent</label> -->

                        <span
                          class="text-danger"
                          v-if="errors.number_dependent"
                        >
                          {{ errors.number_dependent[0] }}
                        </span>
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="text"
                          :name="`dependents[${index}][latin_name]`"
                          class="form-control"
                          :value="dependent_new.latin_name"
                          placeholder="latin_name"
                        />
                        <!-- <label for="exampleSelectl">latin_name</label> -->

                        <span class="text-danger" v-if="errors.latin_name">
                          {{ errors.latin_name[0] }}
                        </span>
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="text"
                          :name="`dependents[${index}][relation]`"
                          class="form-control"
                          :value="dependent_new.relation"
                          placeholder="relation"
                        />
                        <!-- <label for="exampleSelectl">relation</label> -->

                        <span class="text-danger" v-if="errors.relation">
                          {{ errors.relation[0] }}
                        </span>
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="number"
                          :name="`dependents[${index}][passport_number]`"
                          class="form-control"
                          :value="dependent_new.passport_number"
                          placeholder="passport_number"
                        />
                        <!-- <label for="exampleSelectl">passport_number</label> -->

                        <span class="text-danger" v-if="errors.passport_number">
                          {{ errors.passport_number[0] }}
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="text"
                          :name="`dependents[${index}][family_compensation]`"
                          class="form-control"
                          :value="dependent_new.family_compensation"
                          placeholder="family_compensation"
                        />
                        <!-- <label for="exampleSelectl">family_compensation</label> -->

                        <span
                          class="text-danger"
                          v-if="errors.family_compensation"
                        >
                          {{ errors.family_compensation[0] }}
                        </span>
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="number"
                          :name="`dependents[${index}][age]`"
                          class="form-control"
                          :value="dependent_new.age"
                          placeholder="age"
                        />
                        <!-- <label for="exampleSelectl">age</label> -->

                        <span class="text-danger" v-if="errors.age">
                          {{ errors.age[0] }}
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <select
                          class="form-control"
                          :name="`dependents[${index}][tax]`"
                        >
                          <option selected value=""></option>
                          <option value="1" :selected="dependent_new.tax == 1">
                            Active
                          </option>
                          <option value="0" :selected="dependent_new.tax == 0">
                            NonActive
                          </option>
                        </select>
                        <!-- <label for="exampleSelectl">tax</label> -->

                        <span class="text-danger" v-if="errors.tax">
                          {{ errors.tax[0] }}
                        </span>
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="date"
                          :name="`dependents[${index}][birthday_dependent]`"
                          class="form-control"
                          :value="dependent_new.birthday_dependent"
                          placeholder="birthday_dependent"
                        />
                        <!-- <label for="exampleSelectl">birthday_dependent</label> -->

                        <span
                          class="text-danger"
                          v-if="errors.birthday_dependent"
                        >
                          {{ errors.birthday_dependent[0] }}
                        </span>
                      </td>

                      <td class="datatable-cell">
                        <input
                          type="date"
                          :name="`dependents[${index}][passport_issuance_date]`"
                          class="form-control"
                          :value="dependent_new.passport_issuance_date"
                          placeholder="passport_issuance_date"
                        />
                        <!-- <label for="exampleSelectl"
                          >passport_issuance_date</label
                        > -->

                        <span
                          class="text-danger"
                          v-if="errors.passport_issuance_date"
                        >
                          {{ errors.passport_issuance_date[0] }}
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <input
                          type="date"
                          :name="`dependents[${index}][passport_expiry_date]`"
                          class="form-control"
                          :value="dependent_new.passport_expiry_date"
                          placeholder="passport_expiry_date"
                        />
                        <!-- <label for="exampleSelectl">passport_expiry_date</label> -->

                        <span
                          class="text-danger"
                          v-if="errors.passport_expiry_date"
                        >
                          {{ errors.passport_expiry_date[0] }}
                        </span>
                      </td>

                      <td class="datatable-cell">
                        <select
                          class="form-control"
                          :name="`dependents[${index}][social_status]`"
                        >
                          <option selected value=""></option>
                          <option
                            value="married"
                            :selected="dependent_new.social_status == 'married'"
                          >
                            married
                          </option>
                          <option
                            value="single"
                            :selected="dependent_new.social_status == 'single'"
                          >
                            single
                          </option>
                        </select>
                        <!-- <label for="exampleSelectl">social_status</label> -->

                        <span class="text-danger" v-if="errors.social_status">
                          {{ errors.social_status[0] }}
                        </span>
                      </td>
                      <td class="datatable-cell">
                        <select
                          class="form-control"
                          :name="`dependents[${index}][gender_dependent]`"
                        >
                          <option selected value=""></option>
                          <option
                            value="female"
                            :selected="
                              dependent_new.gender_dependent == 'female'
                            "
                          >
                            female
                          </option>
                          <option
                            value="male"
                            :selected="dependent_new.gender_dependent == 'male'"
                          >
                            male
                          </option>
                        </select>
                        <!-- <label for="exampleSelectl">gender_dependent</label> -->
                        <span
                          class="text-danger"
                          v-if="errors.gender_dependent"
                        >
                          {{ errors.gender_dependent[0] }}
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
                          class="btn btn-primary btn-option"
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
                    </tr>
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
    language: {
      type: String,
      default: "en",
    },

    addactive: {
      type: String,
      dependent_news: {},
    },
  },
  data() {
    return {
      status_card: false,
      dependent_news: [
        {
          id: 1,
        },
      ],
      nextItemId: 2,
      active: false,
    };
  },
  created() {
    // console.log(this.props.dependent);
  },
  methods: {
    addRow() {
      this.dependent_news.push({
        id: (this.nextItemId += this.nextItemId),
      });
    },
    deleteRow(index) {
      this.dependent_news.splice(index, 1);
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },
  },
};
</script>

<style></style>
