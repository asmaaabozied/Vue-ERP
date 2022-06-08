<template>
  <div class="inf0-top-fixed">
    <h5
      class="font-weight-bolder text-primary"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }"
    >
      option values
    </h5>
    <div class="separator separator-solid my-3"></div>

    <div
      class="col-12 p-0"
      v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '2s',
      }"
    >
      <table id="option-value" class="table table-bordered">
        <tbody v-for="(tr, index) in trs" :key="index">
          <tr id="option-value-row0">
            <td class="text-center action-td">
              <button
                type="button"
                @click="deleteRow(index)"
                :disabled="index + 1 == 1 ? '' : disabled"
                data-toggle="tooltip"
                title="Remove"
                class="btn btn-danger btn-option"
              >
                <i class="fa fa-minus-circle"></i>
              </button>
            </td>
            <td class="text-left option-left">
              <value-tabs :languages="languages" :index="index">
                <template v-slot:input="{ language }">
                  <value-inputs
                    :language="language"
                    :errors="errors"
                    :index="index"
                  />
                </template>
              </value-tabs>
            </td>
          </tr>
        </tbody>
        <tfoot class="option-td-footer">
          <tr>
            <td class="text-center action-td">
              <button
                type="button"
                number="0"
                @click="addRow()"
                class="btn btn-primary btn-option"
              >
                <i class="fa fa-plus-circle"></i>
              </button>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import LangTabs from "@/components/form/LangTabs.vue";
import Inputs from "./Inputs.vue";
import ValueInputs from "./valueInputs.vue";
import optionvalues from "./optionvalues.vue";
import ValueTabs from "./valueTabs.vue";
export default {
  components: { LangTabs, Inputs, ValueInputs, ValueTabs, optionvalues },
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      date: new Date(),
      addclass: "is-invalid",
      seenName: "",

      trs: [
        {
          id: 1,
        },
      ],
      nextItemId: 2,
    };
  },
  created() {},
  computed: {},
  methods: {
    addRow() {
      this.trs.push({
        id: (this.nextItemId += this.nextItemId),
      });
      this.index++;
      this.nextItemId++;
    },
    deleteRow(index) {
      this.trs.splice(index, 1);
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
