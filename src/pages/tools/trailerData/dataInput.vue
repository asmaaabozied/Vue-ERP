<template>
  <div
    class="tab-pane fade tab-product-main active show"
    id="carcard-data"
    role="tabpanel"
    aria-labelledby="carcard-tab"
  >
    <div class="panel panel-default">
      <div
        class="panel-heading"
        v-wow="{
          'animation-name': 'fadeInUp',
          'animation-duration': '2s',
        }"
      >
        <h4
          class="panel-title"
          @click.prevent="changeclass"
          :class="[{ active: active }, `${addactive}`]"
        >
          <a
            data-toggle="collapse"
            data-parent=".tab-pane"
            href="#collapseOneone"
          >
            <i class="flaticon2-contract"></i>
            <span>{{ $t("Data") }}</span>
          </a>
        </h4>
      </div>

      <div
        id="collapseOneone"
        class="panel-collapse collapse"
        :class="`${dataa}`"
      >
        <div class="panel-body">
          <div class="row">
            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  v-model="formData.base_size"
                  placeholder="base_size"
                  class="form-control"
                  :class="{ [``]: errors.base_size }"
                />
                <label for class="col-form-label">{{ $t("baseSize") }}</label>

                <span
                  class="text-danger"
                  v-if="backErrors[`base_size`]"
                  :class="seenName"
                  @keyup="chanagClass($event, `ar`)"
                >
                  {{ backErrors[`base_size`][0] }}
                </span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  v-model="formData.secret_no"
                  placeholder="secret_no"
                  class="form-control"
                  @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("secretNo") }}</label>

                <span
                  class="text-danger"
                  v-if="backErrors[`secret_no`]"
                  :class="seenName"
                >
                  {{ backErrors[`secret_no`][0] }}
                </span>
              </div>
            </div>

            

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="number"
                  v-model="formData.chassis_no"
                  placeholder="chassis_no"
                  class="form-control"
                  @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("chassis_no") }}</label>
                <span
                  class="text-danger"
                  v-if="backErrors[`chassis_no`]"
                  :class="seenName"
                >
                  {{ backErrors[`chassis_no`][0] }}
                </span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input
                  list="browsers"
                  name="color"
                  v-model="formData.color"
                  class="form-control"
                />
                <datalist id="browsers">
                  <option
                    v-for="vehicleitem in rows1"
                    :key="vehicleitem.id"
                    v-bind:value="vehicleitem.color"
                  ></option>
                </datalist>

                <label for="exampleSelectl" class="col-form-label">{{
                  $t("color")
                }}</label>
                <span
                  class="text-danger"
                  v-if="backErrors[`color`]"
                  :class="seenName"
                >
                  {{ backErrors[`color`][0] }}
                </span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input
                  list="browserss"
                  name="model"
                  v-model="formData.model"
                  class="form-control"
                />
                <datalist id="browserss">
                  <option
                    v-for="vehicleitem in rows1"
                    :key="vehicleitem.id"
                    v-bind:value="vehicleitem.model"
                  ></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{
                  $t("model")
                }}</label>
                <span
                  class="text-danger"
                  v-if="backErrors[`model`]"
                  :class="seenName"
                >
                  {{ backErrors[`model`][0] }}
                </span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input
                  list="browseres"
                  name="model"
                  v-model="formData.vtype"
                  class="form-control"
                />
                <datalist id="browseres">
                  <option
                    v-for="vehicleitem in rows1"
                    :key="vehicleitem.id"
                    v-bind:value="vehicleitem.vtype"
                  ></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{
                  $t("type")
                }}</label>
                <span
                  class="text-danger"
                  v-if="backErrors[`vtype`]"
                  :class="seenName"
                >
                  {{ backErrors[`vtype`][0] }}
                </span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">

                <select class="form-control" v-model="formData.vehicle_kind" @keyup="chanagClass($event, `ar`)">
                  <option selected value></option>

                  <option value="1"
                          :selected="formData.vehicle_kind ==1"
                  >{{ $t("inside") }}
                  </option>
                  <option value="0" :selected="formData.vehicle_kind == 0">{{ $t("outside") }}</option>
                </select>
                <label for class="col-form-label">{{ $t("vehicleKind") }}</label>

                <span
                    class="text-danger"
                    v-if="backErrors[`vehicle_kind`]"
                    :class="seenName"
                >
                      {{ backErrors[`vehicle_kind`][0] }}
                    </span>


              </div>


            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input
                  list="browess"
                  name="vclass"
                  v-model="formData.vclass"
                  class="form-control"
                />
                <datalist id="browess">
                  <option
                    v-for="vehicleitem in rows1"
                    :key="vehicleitem.id"
                    v-bind:value="vehicleitem.vclass"
                  ></option>
                </datalist>

                <label for="exampleSelectl" class="col-form-label">{{
                  $t("class")
                }}</label>
                <span
                  class="text-danger"
                  v-if="backErrors[`vclass`]"
                  :class="seenName"
                >
                  {{ backErrors[`vclass`][0] }}
                </span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input
                  list="browes"
                  name="base_type"
                  v-model="formData.base_type"
                  class="form-control"
                />
                <datalist id="browes">
                  <option
                    v-for="vehicleitem in rows1"
                    :key="vehicleitem.id"
                    v-bind:value="vehicleitem.base_type"
                  ></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{
                  $t("Base_type")
                }}</label>
                <span
                  class="text-danger"
                  v-if="backErrors[`base_type`]"
                  :class="seenName"
                >
                  {{ backErrors[`base_type`][0] }}
                </span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="date"
                  v-model="formData.renew_date"
                  placeholder="renew_date"
                  class="form-control"
                  @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{
                  $t("form_renewal_date")
                }}</label>
                <span
                  class="text-danger"
                  v-if="errors.renew_date"
                  :class="seenCode"
                  >{{ errors.renew_date[0] }}</span
                >
              </div>
            </div>

           

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                  type="text"
                  v-model="formData.ext_code"
                  placeholder="extCode"
                  class="form-control"
                  @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("extra_code") }}</label>
                <span
                  class="text-danger"
                  v-if="backErrors[`ext_code`]"
                  :class="seenName"
                >
                  {{ backErrors[`ext_code`][0] }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "data-input",

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    rows1: {},
    rows2: {},
    rows3: {},
    rows4: {},
    rows5: {},
    rows6: {},

    dataa: {
      type: String,
    },
    addactive: {
      type: String,
    },
    backErrors: {
      type: Object,
      default: () => ({}),
    },
    formData: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      languages: window.$languages,
      gridClassName: window.$gridClassName,
      active: false,
    };
  },
  setup: () => ({ $v: useVuelidate() }),
       
  created() {
    },
  computed: {
    
  },

  methods: {
    
    getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    },
    changeclass() {
      this.active = this.active == true ? false : true;
    },

    chanagClass(e, id) {
      if (e.target.value !== "") {
        this.$refs[`button_${id}`].classList.remove(`d-none`);
      } else {
        this.$refs[`button_${id}`].classList.add(`d-none`);
      }
    },
  },
};
</script>

<style></style>
