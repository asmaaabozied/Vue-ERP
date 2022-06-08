<template>
  <div class="inf0-top-fixed">
    <h5 class="font-weight-bolder text-primary">option values</h5>
    <div class="separator separator-solid my-3"></div>

    <div class="col-12 p-0">
      <table class="table table-striped table-bordered table-hover">
        <tbody
          v-for="(optionvalue, index) in optionvalues"
          :key="optionvalue.id"
        >
          <tr id="option-value-row0">
            <td class="text-left option-left">
              <value-tabs :languages="languages" :index="index">
                <template v-slot:input="{ language }">
                  <editvalue-inputs
                    v-if="optionvalue.names"
                    :language="language"
                    :errors="errors"
                    :index="index"
                    :optionvalue="optionvalue"
                  />
                  <value-inputs
                    v-else
                    :language="language"
                    :errors="errors"
                    :index="index"
                  />
                </template>
              </value-tabs>
            </td>

            <td class="text-center">
              <button
                type="button"
                :disabled="index + 1 == 1 ? '' : disabled"
                @click="deleteRow(index, optionvalue.id)"
                data-toggle="tooltip"
                title="Remove"
                class="btn btn-danger btn-option"
              >
                <i class="fa fa-minus-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td class="text-center">
              <button
                type="button"
                number="0"
                @click="addRow()"
                class="btn btn-primary btn-option"
              >
                <i class="fa fa-plus-circle"></i>
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import editvalueInputs from "./editvalueInputs.vue";
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import ValueInputs from "./valueInputs.vue";
import optionvalues from "./optionvalues.vue";
import ValueTabs from "./valueTabs.vue";

export default {
  components: {
    LangTabs,
    Inputs,
    ValueInputs,
    ValueTabs,
    optionvalues,
    editvalueInputs,
  },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    optionvalues: {
      type: Array,
      default: [
        {
          field: "id",
          sort: true,
          visible: true,
        },
      ],
    },
  },
  data() {
    return {
      date: new Date(),
      addclass: "is-invalid",
      seenName: "",

      optionvalues: [
        {
          id: 1,
        },
      ],
      activeRow: false,
      nextItemId: 2,
    };
  },
  created() {},
  computed: {},
  methods: {
    addRow() {
      this.optionvalues.push({
        id: (this.nextItemId += this.nextItemId),
      });
      this.index++;
      this.nextItemId++;
    },
    deleteRow(index, optionvalue_id) {
      this.optionvalues.splice(index, 1);
      this.$emit("deletedOptionsIds", optionvalue_id);
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
