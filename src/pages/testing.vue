<template>
  <div>
    <top-bar-card :newUrlName="`add-taxes`" />
    <div class="card card-custom mb-9 mt-10 gutter-b">
      <main-table v-model="dados" :options="options"> </main-table>

      <!--begin::Header-->
      <!-- <div class="card-header"></div> -->
      <!--end::Header-->
      <!-- <name-input :errors="errors" />

      <edit-input :errors="errors" :data="city" /> -->
    </div>
    <!-- <div>
      <Select2
        v-model="myValue"
        :options="myOptions"
        :settings="{ settingOption: value, settingOption: value }"
        @change="myChangeEvent($event)"
        @select="mySelectEvent($event)"
      />
    </div> -->
    <!-- <div>
      <label class="typo__label">Tagging</label>
      <multiselect
        v-model="value"
        tag-placeholder="Add this as new tag"
        placeholder="Search or add a tag"
        label="name"
        track-by="code"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addTag"
      ></multiselect>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "testing",
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    city: {
      type: Object,
      default: () => ({ name_ar: "testing", name_en: "testing" }),
    },
  },
  data() {
    return {
      editIcon: function (cell, formatterParams, onRendered) {
        return "<i class='fa fa-print'></i>";
      },
      deleteIcon: function (cell, formatterParams, onRendered) {
        return "<i class='fa fa-print'></i>";
      },
      dados: [
        {
          id: 1,
          name: "Teste",
          age: 13,
        },
        {
          name: "Teste2",
          age: 25,
        },
        {
          name: "Teste2",
          age: 25,
        },
      ],
    };
  },
  computed: {
    options() {
      return {
        layout: "fitData",
        pagination: "local",
        paginationSize: 6,
        paginationSizeSelector: [3, 6, 8, 10],
        movableColumns: true,
        columns: [
          {
            title: this.$t("name"),
            field: "name",
            sorter: "string",
            width: 200,
            editor: false,
            Select :true,
          },
          {
            title: "Age",
            field: "age",
            sorter: "string",
            width: 200,
            editor: false,
          },
          {
            title: "test",
            field: "age",
            sorter: "string",
            width: 200,
            editor: false,
          },
          {
            formatter: this.editIcon,
            align: "center",
            title: "Edit",
            headerSort: false,
            cellClick: (e, cell) => {
              this.$router.push({
                name: "edit-wareHouses",
                params: { id: cell.id },
              });
            },
          },
          {
            formatter: "buttonCross",
            align: "center",
            title: "del",
            headerSort: false,
            cellClick: (e, cell) => {
              this.delete(cell);
            },
          },
        ],
      };
    },
  },
  methods: {
    myChangeEvent(val) {
      console.log(val);
    },
    mySelectEvent({ id, text }) {
      console.log({ id, text });
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },

    async delete(id) {
      try {
        const result = this.$SwalChecks("You_won't_be_able_to_revert_this");
        if (result.value) {
          await this.$store.dispatch("deleteWareHouse", id);
          this.rows = this.rows.filter((wareHouse) => {
            return wareHouse.id != id;
          });
        }
      } catch (errors) {
        this.errors = errors;
      }
    },
  },
};
</script>
<style lang="scss">
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
</style>
