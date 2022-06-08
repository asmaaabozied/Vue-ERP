<template>
  <div>
    <div
      class="card card-custom gutter-b mt-6 mb-5"
      style="margin-bottom: 7% !important"
    >
      <div class="card-header">
        <div class="card-title">
          <h3 class="card-label">
            Operations
            <small>on warehouses</small>
          </h3>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-6 text-center">
            <dropdown class="m-auto w-50">
              <template slot="btn"
                ><img :src="url" class="w-50" />
                <h6>purchases</h6></template
              >
              <template slot="body">
                <ul>
                  <li><a href="#">purchases</a></li>
                  <li><a href="#">Purchase orders</a></li>
                  <li><a href="#">invoice1</a></li>
                  <li><a href="#">invoice2</a></li>
                  <li>
                    <dropdown
                      :trigger="'hover'"
                      :role="'sublist'"
                      :align="'right'"
                    >
                      <template slot="btn">Sublist right</template>
                      <template slot="body">
                        <ul>
                          <!-- <li>Custom subitem</li> -->
                          <dropdown
                            :trigger="'hover'"
                            :role="'sublist'"
                            :align="'right'"
                          >
                            <template slot="btn">Sublist right</template>
                            <template slot="body"
                              ><ul>
                                <li><a href="#">purchases</a></li>
                                <li><a href="#">Purchase orders</a></li>
                              </ul></template
                            >
                          </dropdown>
                        </ul>
                      </template>
                    </dropdown>
                  </li>
                  <li><a href="#">invoice6</a></li>
                </ul>
              </template>
            </dropdown>
          </div>
          <div class="col-6 text-center">
            <dropdown class="m-auto w-50">
              <template slot="btn"
                ><img :src="url2" class="w-50" />
                <h6>purchase returns</h6></template
              >
              <template slot="body">
                <ul>
                  <li><a href="#">purchases</a></li>
                  <li><a href="#">Purchase orders</a></li>
                  <li><a href="#">invoice1</a></li>
                  <li><a href="#">invoice2</a></li>
                  <li>
                    <dropdown
                      :trigger="'hover'"
                      :role="'sublist'"
                      :align="'right'"
                    >
                      <template slot="btn">Sublist right</template>
                      <template slot="body">
                        <ul>
                          <!-- <li>Custom subitem</li> -->
                          <dropdown
                            :trigger="'hover'"
                            :role="'sublist'"
                            :align="'right'"
                          >
                            <template slot="btn">Sublist right</template>
                            <template slot="body"
                              ><ul>
                                <li><a href="#">purchases</a></li>
                                <li><a href="#">Purchase orders</a></li>
                              </ul></template
                            >
                          </dropdown>
                        </ul>
                      </template>
                    </dropdown>
                  </li>
                  <li><a href="#">invoice6</a></li>
                </ul>
              </template>
            </dropdown>
          </div>
          <div class="col-12 text-center">
            <dropdown class="m-auto w-40">
              <template slot="btn">
                <img :src="url3" class="w-40" />
                <h6>beginning inventory</h6>
              </template>

              <template slot="body">
                <ul>
                  <li><a href="#">purchases</a></li>
                  <li><a href="#">Purchase orders</a></li>
                  <li><a href="#">invoice1</a></li>
                  <li><a href="#">invoice2</a></li>
                  <li>
                    <dropdown
                      :trigger="'hover'"
                      :role="'sublist'"
                      :align="'right'"
                    >
                      <template slot="btn">Sublist right</template>
                      <template slot="body">
                        <ul>
                          <!-- <li>Custom subitem</li> -->
                          <dropdown
                            :trigger="'hover'"
                            :role="'sublist'"
                            :align="'right'"
                          >
                            <template slot="btn">Sublist right</template>
                            <template slot="body"
                              ><ul>
                                <li><a href="#">purchases</a></li>
                                <li><a href="#">Purchase orders</a></li>
                              </ul></template
                            >
                          </dropdown>
                        </ul>
                      </template>
                    </dropdown>
                  </li>
                  <li><a href="#">invoice6</a></li>
                </ul>
              </template>
            </dropdown>
          </div>
          <div class="col-6 text-center">
            <dropdown class="m-auto w-50">
              <template slot="btn"
                ><img :src="url4" class="w-50" />
                <h6>sales</h6></template
              >
              <template slot="body">
                <ul>
                  <li><a href="#">purchases</a></li>
                  <li><a href="#">Purchase orders</a></li>
                  <li><a href="#">invoice1</a></li>
                  <li><a href="#">invoice2</a></li>
                  <li>
                    <dropdown
                      :trigger="'hover'"
                      :role="'sublist'"
                      :align="'right'"
                    >
                      <template slot="btn">Sublist right</template>
                      <template slot="body">
                        <ul>
                          <!-- <li>Custom subitem</li> -->
                          <dropdown
                            :trigger="'hover'"
                            :role="'sublist'"
                            :align="'right'"
                          >
                            <template slot="btn">Sublist right</template>
                            <template slot="body"
                              ><ul>
                                <li><a href="#">purchases</a></li>
                                <li><a href="#">Purchase orders</a></li>
                              </ul></template
                            >
                          </dropdown>
                        </ul>
                      </template>
                    </dropdown>
                  </li>
                  <li><a href="#">invoice6</a></li>
                </ul>
              </template>
            </dropdown>
          </div>
          <div class="col-6 text-center">
            <dropdown class="m-auto w-50">
              <template slot="btn"
                ><img :src="url5" class="w-50" />
                <h6>sales returns</h6></template
              >
              <template slot="body">
                <ul>
                  <li><a href="#">purchases</a></li>
                  <li><a href="#">Purchase orders</a></li>
                  <li><a href="#">invoice1</a></li>
                  <li><a href="#">invoice2</a></li>
                  <li>
                    <dropdown
                      :trigger="'hover'"
                      :role="'sublist'"
                      :align="'right'"
                    >
                      <template slot="btn">Sublist right</template>
                      <template slot="body">
                        <ul>
                          <!-- <li>Custom subitem</li> -->
                          <dropdown
                            :trigger="'hover'"
                            :role="'sublist'"
                            :align="'right'"
                          >
                            <template slot="btn">Sublist right</template>
                            <template slot="body"
                              ><ul>
                                <li><a href="#">purchases</a></li>
                                <li><a href="#">Purchase orders</a></li>
                              </ul></template
                            >
                          </dropdown>
                        </ul>
                      </template>
                    </dropdown>
                  </li>
                  <li><a href="#">invoice6</a></li>
                </ul>
              </template>
            </dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "bp-vuejs-dropdown";

export default {
  name: "invoice-settings-index",
  components: { Dropdown },
  props: {
    errors: {},
  },
  data() {
    return {
      pageUrl: "invoice/invoice_settings_index",
      url: "assets/p1.png",
      url2: "assets/p2.png",
      url3: "assets/p3.png",
      url4: "assets/p4.png",
      url5: "assets/p5.png",
    };
  },

  computed: {},
  methods: {},
};
</script>
<style>
.bp-dropdown__body ul {
  padding: 0;
  list-style: none;
}
.bp-dropdown__body ul li {
  padding: 6px;
  text-transform: capitalize;
  text-align: start;
}
.bp-dropdown__body ul li a {
  color: #004890;
}
.bp-dropdown .bp-dropdown__btn {
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  /* margin-bottom: 4%; */
}
.bp-dropdown__body ul li:hover {
  background: #ecebec;
}
.bp-dropdown__body {
  padding: 2px;
  width: 160px;
}
.bp-dropdown__icon {
  width: 20px;
  height: 20px;
}
.w-15 {
  width: 17%;
}
.w-20 {
  width: 20%;
}
</style>
