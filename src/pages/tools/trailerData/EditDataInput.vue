<template>
  <div
      class="tab-pane fade tab-product-main active show"
      id="carcard-data"
      role="tabpanel"
      aria-labelledby="carcard-tab"
  >
    <div class="panel panel-default">
      <div class="panel-heading" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '2s',
      }">
        <h4
            class="panel-title"
            @click.prevent="changeclass"
            :class="[{ active: active }, `${addactive}`]"
        >
          <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOneone">
            <i class="flaticon2-contract"></i>
            <span>Data</span>
          </a>
        </h4>
      </div>

      <div id="collapseOneone" class="panel-collapse collapse" :class="`${dataa}`">
        <div class="panel-body">
          <div class="row">
            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="base_size"
                    :value="vehicleData.base_size"
                    id
                    placeholder="base_size"
                    class="form-control"
                    v-on:input="valCode($event)"
                    :class="{ [``]: errors.base_size }"
                />
                <label for class="col-form-label">{{ $t("baseSize") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.base_size"
                    :class="seenCode"
                >{{ errors.base_size[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="secret_no"
                    :value="vehicleData.secret_no"
                    placeholder="secret_no"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("secretNo") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.secret_no"
                    :class="seenCode"
                >{{ errors.secret_no[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="date"
                    name="prod_date"
                    :value="vehicleData.prod_date"
                    placeholder="prod_date"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("prodDate") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.prod_date"
                    :class="seenCode"
                >{{ errors.prod_date[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="chassis_no"
                    id
                    :value="vehicleData.chassis_no"
                    placeholder="chassis_no"
                    class="form-control"
                    v-on:input="valCode($event)"
                    :class="{
                    [``]: errors.chassis_no,
                  }"
                />
                <label for class="col-form-label">{{ $t("car_chassis_number") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.chassis_no"
                    :class="seenCode"
                >{{ errors.chassis_no[0] }}</span>
              </div>
            </div>


            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="color" class="form-control" :value="vehicleData.color" />
                <datalist id="browsers1">
                  <option v-for="car in rows1" :key="car.id" v-bind:value="car.color"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("color") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>


            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="model" class="form-control"  :value="vehicleData.model"/>
                <datalist id="browsers1">
                  <option v-for="car in rows2" :key="car.id" v-bind:value="car.model"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("model") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="vtype" class="form-control" :value="vehicleData.vtype"/>
                <datalist id="browsers1">
                  <option v-for="car in rows3" :key="car.id" v-bind:value="car.type"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("type") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="vehicle_kind" class="form-control" :value="vehicleData.vehicle_kind"/>
                <datalist id="browsers1">
                  <option v-for="car in rows4" :key="car.id" v-bind:value="car.vehicle_kind"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("vehicleKind") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="vclass" class="form-control" :value="vehicleData.vclass"/>
                <datalist id="browsers1">
                  <option v-for="car in rows5" :key="car.id" v-bind:value="car.class"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("class") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>

            <div class="col-3">
              <div class="form-group has-float-label">
                <input list="browsers1" name="base_type" class="form-control" :value="vehicleData.base_type"/>
                <datalist id="browsers1">
                  <option v-for="car in rows6" :key="car.id" v-bind:value="car.Base_type"></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("Base_type") }}</label>
                <span class="text-danger"></span>
              </div>
            </div>


            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="tank_cap1"
                    :value="vehicleData.tank_cap1"
                    id
                    placeholder="lower_tank_size"
                    class="form-control"
                    v-on:input="valCode($event)"
                    :class="{
                    [``]: errors.tank_cap1,
                  }"
                />
                <label for class="col-form-label">{{ $t("lower_tank_size") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.tank_cap1"
                    :class="seenCode"
                >{{ errors.tank_cap1[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="tank_cap2"
                    :value="vehicleData.tank_cap2"
                    id
                    placeholder="tank_cap2"
                    class="form-control"
                    v-on:input="valCode($event)"
                    :class="{
                    [``]: errors.tank_cap2,
                  }"
                />
                <label for class="col-form-label">{{ $t("top_tank_size") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.tank_cap2"
                    :class="seenCode"
                >{{ errors.tank_cap2[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="weight"
                    :value="vehicleData.weight"
                    id
                    placeholder="weight"
                    class="form-control"
                    v-on:input="valCode($event)"
                    :class="{ [``]: errors.weight }"
                />
                <label for class="col-form-label">{{ $t("weight") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.weight"
                    :class="seenCode"
                >{{ errors.weight[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="text"
                    name="allowed_ex_liter"
                    :value="vehicleData.allowed_ex_liter"
                    id
                    placeholder="allowed_ex_liter"
                    class="form-control"
                    v-on:input="valCode($event)"
                    :class="{
                    [``]: errors.allowed_ex_liter,
                  }"
                />
                <label for class="col-form-label">{{ $t("allowedExLiter") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.allowed_ex_liter"
                    :class="seenCode"
                >{{ errors.allowed_ex_liter[0] }}</span>
              </div>
            </div>


            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="date"
                    name="purchase_date"
                    :value="vehicleData.purchase_date"
                    placeholder="purchaseDate"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("date_purchase") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.purchase_date"
                    :class="seenCode"
                >{{ errors.purchase_date[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="purchase_price"
                    :value="vehicleData.purchase_price"
                    placeholder="purchasePrice"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("Purchase_value") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.purchase_price"
                    :class="seenCode"
                >{{ errors.purchase_price[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="current_value"
                    :value="vehicleData.current_value"
                    placeholder="current_value"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("current_value") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.current_value"
                    :class="seenCode"
                >{{ errors.current_value[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="date"
                    name="renew_date"
                    :value="vehicleData.renew_date"
                    placeholder="renew_date"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("form_renewal_date") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.renew_date"
                    :class="seenCode"
                >{{ errors.renew_date[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group has-float-label">
                <select class="form-control" name="base_type">
                  <option selected value></option>

                  <option value="first">first</option>
                  <option value="second">second</option>
                </select>
                <label for class="col-form-label">baseType</label>

                <span class="text-danger" v-if="errors.base_type">
                  {{
                    errors.base_type[0]
                  }}
                </span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="fuel_ratio"
                    :value="vehicleData.fuel_ratio"
                    placeholder="fuel_ratio"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("fuel_liter_coefficient") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.fuel_ratio"
                    :class="seenCode"
                >{{ errors.fuel_ratio[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="oil_ratio"
                    :value="vehicleData.oil_ratio"
                    placeholder="oil_ratio"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("Oil_change_parameter") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.oil_ratio"
                    :class="seenCode"
                >{{ errors.oil_ratio[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="trans_license"
                    :value="vehicleData.trans_license"
                    placeholder="trans_license"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("Transportation_license_number") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.trans_license"
                    :class="seenCode"
                >{{ errors.trans_license[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="GPS_device"
                    :value="vehicleData.GPS_device"
                    placeholder="GPS_device"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("GPS_device_number") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.GPS_device"
                    :class="seenCode"
                >{{ errors.GPS_device[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="text"
                    name="ext_code"
                    :value="vehicleData.ext_code"
                    placeholder="extCode"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("extra_code") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.ext_code"
                    :class="seenCode"
                >{{ errors.ext_code[0] }}</span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="text"
                    name="notes"
                    :value="vehicleData.notes"
                    placeholder="notes"
                    class="form-control"

                />
                <label for class="col-form-label">{{ $t("notes") }}</label>
                <span
                    class="text-danger"
                    v-if="errors.notes"
                    :class="seenCode"
                >{{ errors.notes[0] }}</span>
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
  name: "data-input",

  props: {
    vehicleData: {
      type: Object,
      default: null,
    },
    errors: {
      type: Object,
      default: () => ({})
    },
    rows1: {},
    rows2: {},
    rows3: {},
    rows4: {},
    rows5: {},
    rows6: {},

    dataa: {
      type: String
    },
    addactive: {
      type: String
    }
  },

  data() {
    return {
      languages: window.$languages,
      gridClassName: window.$gridClassName,
      active: false
    };
  },

  created() {

  },
  computed: {},

  methods: {
    changeclass() {
      this.active = this.active == true ? false : true;
    }
  }
};
</script>

<style></style>
