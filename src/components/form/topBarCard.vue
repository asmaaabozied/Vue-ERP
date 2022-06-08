<template>
  <div class="breadcrumb-header d-flex flex-wrap wrapper">
    <!--begin::Breadcrumb-->
    <ul
      class="
        breadcrumb breadcrumb-transparent breadcrumb-dot
        font-weight-bold
        p-0
        my-2
        font-size-sm
      "
    >
      <li class="breadcrumb-item">
        <a class="text-muted">
          <i class="icon-lg la la-home"></i> {{ $t(`${mainModuel}`) }}
        </a>
        <i class="icon-xl fas fa-chevron-right"></i>
      </li>

      <li v-if="MainCategory" class="breadcrumb-item">
        <a class="text-muted"> {{ $t(`${MainCategory}`) }}</a>
        <i class="icon-xl fas fa-chevron-right"></i>
      </li>
      <li v-if="pageName" class="breadcrumb-item">
        <a class="text-muted"> {{ $t(`${pageName}`) }}</a>
        <i class="icon-xl fas fa-chevron-right"></i>
      </li>
      <li v-if="operation" class="breadcrumb-item">
        <a class="text-muted"> {{ $t(`nav.${operation}`) }}</a>
      </li>
    </ul>
    <div
      class="
        container-fluid0
        d-flex
        align-items-center
        justify-content-between
        flex-wrap flex-sm-nowrap
        p-0
        ml-auto
        my-2
      "
    >
      <!--begin::Toolbar-->
      <div class="d-flex align-items-center Pagination-top">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap"
        >
          <div class="d-flex flex-wrap py-2">
            <span
              @click="navigate('first')"
              class="btn btn-icon btn-sm double-arrow-back"
            >
              <i class="ki ki-bold-double-arrow-back icon-xs"></i>
            </span>
            <span
              href="#"
              @click="navigate('previous')"
              class="btn btn-icon btn-sm arrow-back"
            >
              <i class="ki ki-bold-arrow-back icon-xs"></i>
            </span>

            <span
              class="btn btn-icon btn-sm border-0 btn-hover-primary active"
              >{{ id }}</span
            >

            <span
              @click="navigate('next')"
              class="btn btn-icon btn-sm arrow-next"
            >
              <i class="ki ki-bold-arrow-next icon-xs"></i>
            </span>
            <span
              @click="navigate('last')"
              class="btn btn-icon btn-sm double-arrow-next"
            >
              <i class="ki ki-bold-double-arrow-next icon-xs"></i>
            </span>
          </div>
        </div>
      </div>
      <!--end::Toolbar-->
    </div>
    <div class="subheaderpage py-2 subheader-solid" id="kt_subheader">
      <div class="subheader-box">
        <div
          class="
            align-items-center
            d-flex
            flex-sm-nowrap flex-wrap
            justify-content-between
          "
        >
          <!-- <slot name="links"></slot> -->
          <!--begin::Toolbar-->
          <div class="d-flex align-items-center">
            <router-link
              :to="{ name: `${listUrlName}` }"
              class="btn btn-outline-primary mr-1"
              tag="button"
            >
              {{ $t("nav.list") }}
              <i class="icon-lg la la-th-list"></i>
            </router-link>
            <div>
              <button
                type="submit"
                @click.prevent="submit"
                class="btn btn-outline-primary mr-1"
                :id="model + '-add'"
                :disabled="disabledAdd"
              >
                {{ $t("nav.add") }}
                <i class="icon-lg la la-plus-circle"></i>
              </button>

              <button
                type="submit"
                class="btn btn-outline-primary mr-1"
                @click.prevent="submit"
                :id="model + '-update'"
                :disabled="disabledEdit"
              >
                {{ $t("nav.update") }}
                <i class="icon-lg la la-redo-alt"></i>
              </button>
            </div>

            <router-link
              :to="{ name: `${newUrlName}` }"
              class="btn btn-outline-primary mr-1"
              :disabled="checkActiveRoute"
              tag="button"
            >
              {{ $t("nav.New") }}
              <i class="icon-lg la la-plus-circle"></i>
            </router-link>

            <a href="#" class="btn btn-outline-primary mr-1">
              {{ $t("nav.Copy") }}
              <i class="icon-lg la la-copy"></i>
            </a>
            <a href="#" class="btn btn-outline-primary mr-1">
              {{ $t("nav.print") }}
              <i class="icon-lg la la-print"></i>
            </a>

            <button
              type="submit"
              class="btn btn-outline-primary mr-1"
              @click="DeleteAction"
              :id="model + '-delete'"
            >
              {{ $t("nav.delete") }}
              <i class="icon-lg la la-trash"></i>
            </button>

            <!-- <a href="#" class="btn btn-outline-primary mr-1">
              {{ $t("nav.delete") }}
              <i class="icon-lg la la-trash"></i>
            </a> -->
            <div class="dropdown dropdown-inline mr-2">
              <a
                href="#"
                class="btn btn-outline-primary mr-1 dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ $t("nav.export") }}
                <i class="icon-lg la la-file-export"></i>
              </a>

              <!--begin::Dropdown Menu-->
              <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <!--begin::Navigation-->
                <ul class="navi flex-column navi-hover py-2">
                  <li
                    class="
                      navi-header
                      font-weight-bolder
                      text-uppercase
                      font-size-sm
                      text-primary
                      pb-2
                    "
                  >
                    {{ $t("nav.Choose an option:") }}
                  </li>
                  <li class="navi-item">
                    <a href="#" class="navi-link">
                      <span class="navi-icon">
                        <i class="la la-print"></i>
                      </span>
                      <span class="navi-text">{{ $t("nav.print") }}</span>
                    </a>
                  </li>

                  <li class="navi-item">
                    <a href="#" class="navi-link">
                      <span class="navi-icon">
                        <i class="la la-file-excel-o"></i>
                      </span>
                      <span class="navi-text">{{ $t("nav.Excel") }}</span>
                    </a>
                  </li>
                  <li class="navi-item">
                    <a href="#" class="navi-link">
                      <span class="navi-icon">
                        <i class="la la-file-text-o"></i>
                      </span>
                      <span class="navi-text">{{ $t("nav.CSV") }}</span>
                    </a>
                  </li>
                  <li class="navi-item">
                    <a href="#" class="navi-link">
                      <span class="navi-icon">
                        <i class="la la-file-pdf-o"></i>
                      </span>
                      <span class="navi-text">{{ $t("nav.PDF") }}</span>
                    </a>
                  </li>
                </ul>
                <!--end::Navigation-->
              </div>
            </div>
            <a href class="btn btn-outline-primary mr-1">
              {{ $t("nav.more") }}
              <i class="icon-lg la la-ellipsis-v"></i>
            </a>

            <!--end::Entry-->
          </div>
          <!--end::Content-->
          <div class="d-flex align-items-center right-side-box">
            <div class="mr-2 pt-2">
              <span class="symbol symbol-35 symbol-light-success">
                <img src="assets/media/users/default.jpg" />
              </span>
            </div>
            <div class="input-icon mr-1">
              <input
                type="text"
                class="form-control"
                :placeholder="$t('nav.Search')"
              />
              <span>
                <i class="flaticon2-search-1 icon-md"></i>
              </span>
            </div>
            <div class="dropdown dropdown-inline mr-2">
              <a
                class="btn btn-light dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ $t("nav.Settings") }}
                <i
                  class="text-dark-50 flaticon2-settings"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></i>
              </a>
              <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <!--begin::Navigation-->
                <ul class="navi flex-column navi-hover">
                  <div class="shop-topbar-wrapper">
                    <div class="shop-topbar-left">
                      <ul class="view-mode">
                        <li :class="actived">
                          <a
                            id="product_list"
                            @click.prevent="addClassGrid('product_list')"
                            data-view="product-list"
                          >
                            <span class="svg-icon svg-icon-primary svg-icon-2x">
                              <!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Layout\Layout-top-panel-5.svg-->
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <rect x="0" y="0" width="24" height="24" />
                                  <path
                                    d="M3,4 L20,4 C20.5522847,4 21,4.44771525 21,5 L21,7 C21,7.55228475 20.5522847,8 20,8 L3,8 C2.44771525,8 2,7.55228475 2,7 L2,5 C2,4.44771525 2.44771525,4 3,4 Z M10,10 L20,10 C20.5522847,10 21,10.4477153 21,11 L21,13 C21,13.5522847 20.5522847,14 20,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M10,16 L20,16 C20.5522847,16 21,16.4477153 21,17 L21,19 C21,19.5522847 20.5522847,20 20,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,17 C9,16.4477153 9.44771525,16 10,16 Z"
                                    fill="#000000"
                                  />
                                  <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    x="2"
                                    y="10"
                                    width="5"
                                    height="10"
                                    rx="1"
                                  />
                                </g>
                              </svg>
                              <!--end::Svg Icon--> </span
                            >{{ $t("nav.ListView") }}
                          </a>
                        </li>
                        <li :class="actives">
                          <a
                            id="product_grid"
                            @click.prevent="addClassGrid('product_grid')"
                            data-view="product-grid"
                          >
                            <span class="svg-icon svg-icon-primary svg-icon-2x">
                              <!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Layout\Layout-top-panel-3.svg-->
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <rect x="0" y="0" width="24" height="24" />
                                  <path
                                    d="M3,4 L20,4 C20.5522847,4 21,4.44771525 21,5 L21,7 C21,7.55228475 20.5522847,8 20,8 L3,8 C2.44771525,8 2,7.55228475 2,7 L2,5 C2,4.44771525 2.44771525,4 3,4 Z M3,10 L13,10 C13.5522847,10 14,10.4477153 14,11 L14,19 C14,19.5522847 13.5522847,20 13,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,11 C2,10.4477153 2.44771525,10 3,10 Z"
                                    fill="#000000"
                                  />
                                  <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    x="16"
                                    y="10"
                                    width="5"
                                    height="10"
                                    rx="1"
                                  />
                                </g>
                              </svg>
                              <!--end::Svg Icon--> </span
                            >{{ $t("nav.GridView") }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
                <!--end::Navigation-->
              </div>
            </div>
          </div>
        </div>

        <!--end::Wrapper-->
      </div>
      <!--end::Page-->
    </div>
    <!--end::Breadcrumb-->
  </div>
</template>

<script>
export default {
  name: "topBarCard",

  props: {
    newUrlName: {
      type: String,
      default: "",
    },
    listUrlName: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: null,
    },
    submit: {
      type: Function,
    },
    navigationUrl: {
      type: String,
      default: "",
    },
    editUrlName: {
      type: String,
      default: "",
    },
    model: {
      type: String,
      default: "",
    },
    mainModuel: {
      type: String,
      default: "warehouses",
    },
    MainCategory: {
      type: String,
      default: "",
    },
    pageName: {
      type: String,
      default: "",
    },
    operation: {
      type: String,
      default: "",
    },
    delete_action: {
      type: String,
      default: "",
    },
    ids: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      Classclassname: "",
      actives: "",
      actived: "active",
      disabledAdd: true,
      disabledEdit: true,
      tetet: "",
    };
  },
  computed: {
    checkActiveRoute() {
      return this.$route.name == this.newUrlName;
    },
  },
  mounted() {
    this.checkAddRoute();
    this.checkEditRoute();
    this.checkIndexRoute();
  },
  methods: {
    submitItem() {
      this.$eventHub.$emit("submit-item");
    },

    addClassGrid(className) {
      this.$emit("onChangeGrid", className);
      if (className == "product_grid") {
        this.actives = "active";
        this.actived = "";
      } else {
        this.actived = "active";
        this.actives = "";
      }
    },

    changeClass(event) {
      this.Classclassname = event;
    },
    removeClassGrid() {
      let el = document.querySelectorAll(".nav-tabs0");
      el.classList.remove("mystyle");
    },
    checkAddRoute() {
      if (this.$route.name == this.newUrlName) {
        this.disabledAdd = false;
      }
    },
    checkEditRoute() {
      if (this.$route.name == this.editUrlName) {
        this.disabledEdit = false;
      }
    },
    // checkIndexRoute() {
    //     if (this.$route.name == this.listUrlName) {
    //         this.disabledAdd = true
    //         this.disabledEdit = true

    //     }
    // },
    navigate(state) {
      $axios
        .get(`${this.navigationUrl}/navigation/${this.id}`, {
          params: { case: state },
        })
        .then((res) => {
          if (res.data.status == 404) {
            this.$router.push({ name: `404Error` });
          } else if (res.data.status == 422) {
            vuexContext.dispatch("SwalNotDeleted", res.data.message);
          } else {
            this.$router.push({
              name: this.editUrlName,
              params: { id: res.data.data.id },
            });
            if (this.id != 0) {
              this.$router.go();
            }
          }
        })
        .catch((error) => {
          throw error;
        });
    },
    async DeleteAction() {
      const result = await this.$SwalChecks("You_won't_be_able_to_revert_this");
      if (result.value) {
        let params = {
          ids: this.ids,
          listUrlName: this.listUrlName,
        };
        await this.$store.dispatch(this.delete_action, params);
      }
    },
  },
};
</script>

<style></style>
