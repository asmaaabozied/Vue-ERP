<template>
  <div>
    <top-bar-card :newUrlName="`add-StatementDelivered`" />

    <div class="card card-custom mb-9 mt-10" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '.6s',
      }">
      <div class="card-header flex-wrap border-0 pb-0 d-block">
        <form @submit.prevent="" id="currentForm">
          <div class="inf0-top-fixed">
            <h5 class="font-weight-bolder text-primary">
              {{ $t("general_info") }}
            </h5>
            <div class="separator separator-solid my-3"></div>
            <div class="row align-items-end">
              <div class="col-6 has-float-label" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }">
                <div class="form-group">
                  <input
                    type="number"
                    name="Delivery-No."
                    id=""
                    placeholder="Delivery No."
                    class="form-control"
                  />
                  <label for="" class="col-form-label">Delivery No.</label>
                </div>
              </div>
              <div class="col-6" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }">
                <div class="form-group has-float-label">
                  <input
                    type="date"
                    name="date"
                    id=""
                    placeholder="Date"
                    class="form-control"
                  />
                  <label for="exampleSelectl" class="col-form-label"
                    >date</label
                  >
                </div>
              </div>
              <div class="col-6" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="Emplayee">
                    <option value=""></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                    >Emplayee</label
                  >
                </div>
              </div>
              <div class="col-6" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }">
                <div class="form-group has-float-label">
                  <select class="form-control" id="" name="cost-center">
                    <option value=""></option>
                    <option>gggg</option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                    >cost center</label
                  >
                </div>
              </div>
              <div class="col-6" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }">
                <div class="form-group has-float-label">
                  <select class="form-control" id="">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                    >store</label
                  >
                </div>
              </div>
              <div class="col-6" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }">
                <div class="form-group has-float-label">
                  <select class="form-control" id="">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                    >car type</label
                  >
                </div>
              </div>
              <div class="col-6" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }">
                <div class="form-group has-float-label">
                  <select class="form-control" id="">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label">car</label>
                </div>
              </div>
              <div class="col-6" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }">
                <div class="form-group has-float-label">
                  <select class="form-control" id="">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                    >trailer</label
                  >
                </div>
              </div>
              <div class="col-6" v-wow="{
        'animation-name': 'fadeInUp',
        'animation-duration': '1s',
      }">
                <div class="form-group has-float-label">
                  <select class="form-control" id="">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <label for="exampleSelectl" class="col-form-label"
                    >default driver</label
                  >
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { UAnimateContainer, UAnimate } from "vue-wow";
export default {
  name: "add-StatementDelivered",
  components: {UAnimateContainer,
    UAnimate,},

  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style></style>
