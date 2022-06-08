import Vue from "vue";
import i18n from "../../../locales/i18n";
Vue.prototype.$loader = () => {
  return Vue.$loading.show({
    color: "#007bff",
    loader: "spinner",
    width: 64,
    height: 64,
    backgroundColor: "#000000",
  });
};
Vue.prototype.getBack = () => {
  history.go(-1);
};
Vue.prototype.$SwalChecks = (warningText) => {
  return Swal.fire({
    title:  i18n.t("Are_you_sure"),
    text: i18n.t(`${warningText}`),
    type: "warning",
    confirmButtonColor: "#cd2b1b",
    showCancelButton: true,
    confirmButtonText:i18n.t("Yes") ,
    cancelButtonText:i18n.t("No") ,
    icon: "question",
    iconHtml: "؟",
  });
};


Vue.prototype.$success = () => {
  return Swal.fire(
    "Changes Saved",
    "The WareHouse details have been added",
    "success"
  );
};
