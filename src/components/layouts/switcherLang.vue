<template>
  <div>
    <div class="dropdown">
      <!--begin::Toggle-->
      <div
        class="topbar-item"
        data-toggle="dropdown"
        data-offset="10px,0px"
        aria-expanded="false"
      >
        <div class="btn btn-clean btn-dropdown mr-3">
          <img class="h-20px w-20px rounded-sm" :src="selected" alt="" />
          <span class="navi-text"> {{ $t(namelang) }}</span>
        </div>
      </div>
      <!--end::Toggle-->
      <!--begin::Dropdown-->
      <div
        class="
          dropdown-menu
          p-0
          m-0
          dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-right
        "
        style=""
      >
        <!--begin::Nav-->
        <ul class="navi navi-hover">
          <!--begin::Item-->
          <li class="navi-item">
            <a @click.prevent="changeLang('ar')" class="navi-link">
              <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/133-saudi-arabia.svg" alt="" />
              </span>
              <span class="navi-text">{{ $t("arabic") }}</span>
            </a>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li class="navi-item active">
            <a @click.prevent="changeLang('en')" class="navi-link">
              <span class="symbol symbol-20 mr-3">
                <img
                  src="assets/media/svg/flags/226-united-states.svg"
                  alt=""
                />
              </span>
              <span class="navi-text">{{ $t("english") }}</span>
            </a>
          </li>

          <!--end::Item-->
        </ul>

        <!--end::Nav-->
      </div>
      <!--end::Dropdown-->
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitcherLang",
  data() {
    return {
      selected: "assets/media/svg/flags/226-united-states.svg",
      dir: "rtl",
      namelang: "arabic",
    };
  },
  created() {
    window.addEventListener("load", this.switchLocale);
  },
  methods: {
    switchLocale() {
      this.$i18n.locale = localStorage.getItem("locale")
        ? localStorage.getItem("locale")
        : "ar";
      if (this.$i18n.locale === "ar") {
        this.selected = "assets/media/svg/flags/133-saudi-arabia.svg";

        window.document
          .getElementsByTagName("head")[0]
          .insertAdjacentHTML(
            "beforeend",
            '<link rel="stylesheet" href="assets/css/style-custom.rtl.css" />'
          );
      } else {
        this.dir = "ltr";
        this.namelang = "english";
        this.selected = "assets/media/svg/flags/226-united-states.svg";
      }
      // bus.$emit("lang", this.$i18n.locale);
      localStorage.setItem("locale", this.$i18n.locale);
    },

    changeLang(lang) {
      const loader = this.$loader();
      try {
        $axios
          .get(`/languages/${lang}`)
          .then((response) => {
            if (response.data.status) {
              localStorage.setItem("locale", response.data.lang);
              this.selected = response.data.lang;
              window.location.reload();
              this.$i18n.change(response.data.lang);
            }
          })
          .catch((error) => {
            throw error.response.data.errors;
          });
      } catch (error) {}
    },
  },
};
</script>

<style>
select {
  width: 150px;
  line-height: 49px;
  height: 38px;
  font-size: 22px;
  outline: 0;
  margin-bottom: 15px;
}
</style>
