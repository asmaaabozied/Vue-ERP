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
            <span> {{ $t("Data") }}</span>
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
                    type="date"
                    v-model="formData.prod_date"
                    placeholder="prod_date"

                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("prodDate") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`prod_date`]"
                    :class="seenName"
                >
                      {{ backErrors[`prod_date`][0] }}
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

                <input list="browsers" name="color" v-model="formData.color" class="form-control"/>
                <datalist id="browsers">
                  <option
                      v-for="vehicleitem in rows1"
                      :key="vehicleitem.id"
                      v-bind:value="vehicleitem.color"
                  ></option>
                </datalist>


                <label for="exampleSelectl" class="col-form-label">{{ $t("color") }}</label>
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

                <input list="browserss" name="model" v-model="formData.model" class="form-control"/>
                <datalist id="browserss">
                  <option
                      v-for="vehicleitem in rows1"
                      :key="vehicleitem.id"
                      v-bind:value="vehicleitem.model"
                  ></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("model") }}</label>
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

                <input list="browseres" name="model" v-model="formData.vtype" class="form-control"/>
                <datalist id="browseres">
                  <option
                      v-for="vehicleitem in rows1"
                      :key="vehicleitem.id"
                      v-bind:value="vehicleitem.vtype"
                  ></option>
                </datalist>
                <label for="exampleSelectl" class="col-form-label">{{ $t("type") }}</label>
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
                <input list="browess" name="vclass" v-model="formData.vclass" class="form-control"/>
                <datalist id="browess">
                  <option
                      v-for="vehicleitem in rows1"
                      :key="vehicleitem.id"
                      v-bind:value="vehicleitem.vclass"
                  ></option>
                </datalist>

                <label for="exampleSelectl" class="col-form-label">{{ $t("class") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`vclass`]"
                    :class="seenName"
                >
                      {{ backErrors[`vclass`][0] }}
                    </span>
              </div>
            </div>

            <!--            <div class="col-3">-->
            <!--              <div class="form-group has-float-label">-->
            <!--                <input list="browes" name="base_type"  v-model="formData.base_type" class="form-control"/>-->
            <!--                <datalist id="browes">-->
            <!--                  <option-->
            <!--                      v-for="vehicleitem in rows1"-->
            <!--                      :key="vehicleitem.id"-->
            <!--                      v-bind:value="vehicleitem.base_type"-->
            <!--                  ></option>-->
            <!--                </datalist>-->
            <!--                <label for="exampleSelectl" class="col-form-label">{{ $t("Base_type") }}</label>-->
            <!--                <span-->
            <!--                    class="text-danger"-->
            <!--                    v-if="backErrors[`base_type`]"-->
            <!--                    :class="seenName"-->
            <!--                >-->
            <!--                      {{ backErrors[`base_type`][0] }}-->
            <!--                    </span>-->
            <!--              </div>-->
            <!--            </div>-->


            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    name="tank_cap1"
                    v-model="formData.tank_cap1"
                    placeholder="lower_tank_size"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("lower_tank_size") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`tank_cap1`]"
                    :class="seenName"
                >
                      {{ backErrors[`tank_cap1`][0] }}
                    </span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    v-model="formData.tank_cap2"
                    placeholder="tank_cap2"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("top_tank_size") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`tank_cap2`]"
                    :class="seenName"
                >
                      {{ backErrors[`tank_cap2`][0] }}
                    </span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    v-model="formData.weight"
                    placeholder="weight"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("weight") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`weight`]"
                    :class="seenName"
                >
                      {{ backErrors[`weight`][0] }}
                    </span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="text"
                    v-model="formData.allowed_ex_liter"
                    placeholder="allowed_ex_liter"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("allowedExLiter") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`allowed_ex_liter`]"
                    :class="seenName"
                >
                      {{ backErrors[`allowed_ex_liter`][0] }}
                    </span>
              </div>
            </div>
            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    v-model="formData.purchase_price"
                    placeholder="purchasePrice"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("Purchase_value") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`purchase_price`]"
                    :class="seenName"
                >
                      {{ backErrors[`purchase_price`][0] }}
                    </span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    v-model="formData.current_value"
                    placeholder="current_value"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("current_value") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`current_value`]"
                    :class="seenName"
                >
                      {{ backErrors[`current_value`][0] }}
                    </span>
              </div>
            </div>


            <div class="col-3 has-float-label">
              <div class="form-group has-float-label">



                  <input list="browserees" name="base_type" v-model="formData.base_type" class="form-control"/>
                  <datalist id="browserees">
                    <option
                        v-for="vehicleitem in rows1"
                        :key="vehicleitem.id"
                        v-bind:value="vehicleitem.base_type"
                    ></option>
                  </datalist>

                <label for class="col-form-label">{{ $t("baseType") }}</label>

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
                    type="number"
                    v-model="formData.fuel_ratio"
                    placeholder="fuel_ratio"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("fuel_liter_coefficient") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`fuel_ratio`]"
                    :class="seenName"
                >
                      {{ backErrors[`fuel_ratio`][0] }}
                    </span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    v-model="formData.oil_ratio"
                    placeholder="oil_ratio"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("Oil_change_parameter") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`oil_ratio`]"
                    :class="seenName"
                >
                      {{ backErrors[`oil_ratio`][0] }}
                    </span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    v-model="formData.trans_license"
                    placeholder="trans_license"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("Transportation_license_number") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`trans_license`]"
                    :class="seenName"
                >
                      {{ backErrors[`trans_license`][0] }}
                    </span>
              </div>
            </div>

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="number"
                    v-model="formData.GPS_device"
                    placeholder="GPS_device"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("GPS_device_number") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`GPS_device`]"
                    :class="seenName"
                >
                      {{ backErrors[`GPS_device`][0] }}
                    </span>
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

            <div class="col-3 has-float-label">
              <div class="form-group">
                <input
                    type="text"
                    v-model="formData.notes"
                    placeholder="notes"
                    class="form-control"
                    @keyup="chanagClass($event, `ar`)"
                />
                <label for class="col-form-label">{{ $t("notes") }}</label>
                <span
                    class="text-danger"
                    v-if="backErrors[`notes`]"
                    :class="seenName"
                >
                      {{ backErrors[`notes`][0] }}
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

import {useVuelidate} from "@vuelidate/core";

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
  
  created() {
    this.getVehicleType();
    this.getVehicleDataItems();
  },
  computed: {
    vehicleData() {
      return this.$store.getters.getVehicleData;
    }
  },

  methods: {

    async getVehicleDataItems() {
      const VehicleDataUrl = {URL: "vehicle-data?vtype=1", all: 1};
      const vehicleData = await this.$store.dispatch("fetchVehicleData", VehicleDataUrl);
      const DataItem = this.$store.getters.getVehicleData.data;

      this.rows1 = this.getUniqueListBy(DataItem, 'color');
      console.log("here");
      console.log(this.rows1);
    },


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
    async getVehicleType() {
      await this.$store.dispatch("fetchcarTypes");
      this.VehicleTypes = this.$store.getters.getcarTypes.data;

    },


  },
};
</script>

<style></style>
