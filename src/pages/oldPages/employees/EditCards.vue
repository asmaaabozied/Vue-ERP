<template>
  <div
    class="tab-pane fade tab-product-main show"
    id="page-cards"
    role="tabpanel"
    aria-labelledby="cards-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapseThree"
          >
            <i class="flaticon2-layers-2"></i> <span>{{ $t("cards") }}</span>
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
            <div class="form-group col-12">
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
                <table class="table table-bordered">
                  <thead class="datatable-head">
                    <tr class="datatable-row" style="left: 0px">
                      <th data-field="" class="datatable-cell">
                        <span style="">{{ $t("card_name") }} </span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("number") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("issue_place") }}</span>
                      </th>

                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("issue_date") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("expire_date") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("note") }}</span>
                      </th>
                      <th data-field="" class="datatable-cell">
                        <span style=""> {{ $t("value") }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="items">
                    <tr v-for="(card, index) in cards_new" :key="card.id">
                      <td class="text-start">
                        <div class="">
                          <select
                            class="form-control"
                            :name="`cards[${index}][card_id]`"
                          >
                            <option
                              v-for="card in cards.data"
                              :key="card.id"
                              v-bind:value="card.id"
                            >
                              {{ card.name }}
                            </option>
                          </select>
                        </div>
                      </td>

                      <td>
                        <div class="">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="number"
                            :name="`cards[${index}][number]`"
                            :value="card ? card.number : ''"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Issue_place"
                            :name="`cards[${index}][issue_place]`"
                            :value="card ? card.issue_place : ''"
                          />
                        </div>
                      </td>

                      <td>
                        <div class="">
                          <input
                            type="date"
                            class="form-control"
                            placeholder="	Issue_date"
                            :name="`cards[${index}][issue_date]`"
                            :value="card ? card.issue_date : ''"
                          />
                        </div>
                      </td>

                      <td>
                        <div class="">
                          <input
                            type="date"
                            class="form-control"
                            placeholder="Expire_date"
                            :value="card ? card.expire_date : ''"
                            :name="`cards[${index}][expire_date]`"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="">
                          <input
                            type="text"
                            :name="`cards[${index}][note]`"
                            class="form-control"
                            :value="card ? card.note : ''"
                          />
                        </div>
                      </td>

                      <td>
                        <div class="">
                          <input
                            type="number"
                            :name="`cards[${index}][value]`"
                            class="form-control"
                            :value="card ? card.value : ''"
                          />
                        </div>
                      </td>

                      <td>
                        <div class="">
                          <input
                            type="number"
                            :name="`cards[${index}][value]`"
                            class="form-control"
                            :value="card ? card.value : ''"
                          />
                        </div>
                      </td>
                      <td class="text-center">
                        <button
                          type="button"
                          data-toggle="tooltip"
                          @click="deleteRow(index)"
                          title="Remove"
                          :disabled="index + 1 == 1 ? '' : disabled"
                          class="btn btn-danger btn-option mt-5"
                        >
                          <i class="fa fa-minus-circle"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>

                  <tr>
                    <td class="datatable-cell-center datatable-cell">
                      <span style="width: 30px"></span>
                    </td>
                    <td class="text-center">
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
                  </tr>
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
    cards_new: {},
    addclassshow: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      status_card: false,
      cards_new: [
        {
          id: 1,
        },
      ],
      nextItemId: 2,
    };
  },
  created() {
    this.getResults();
  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
  },
  methods: {
    addRow() {
      this.status_card = true;
      this.cards_new.push({
        id: (this.nextItemId += this.nextItemId),
      });
    },
    deleteRow(index) {
      this.cards_new.splice(index, 1);
    },
    async getResults() {
      const cardUrl = { URL: "cards" };
      const cards = await this.$store.dispatch("fetchCards", cardUrl);
      console.log(cards);
    },
  },
};
</script>

<style></style>
