import Vue from "vue";
import i18n from "../locales/i18n";
import Vuex from "vuex";

import City from "./Modules/Old/City";
import Shift from "./Modules/Old/Shift";
import InvoiceSettingGroup from "./Modules/Old/InvoiceSettingGroup";
import FixedAssetCat from "./Modules/Old/FixedAssetCat";
import DiscountVendorContract from "./Modules/Old/DiscountVendorContract";
import Branch from "./Modules/Old/Branch";
import CostWay from "./Modules/Old/CostWay";
import ProductType from "./Modules/Old/ProductType";
import SubCategory from "./Modules/Old/SubCategory";
import Discount from "./Modules/Old/Discount";
import Employee from "./Modules/Old/Employee";
// import Guarantee from "./Modules/Old/Guarantee";
import Classification from "./Modules/Old/Classification";
import Option from "./Modules/Old/Option";
import Account from "./Modules/Old/Account";
import Voucher from "./Modules/Old/Voucher";
import Producer from "./Modules/Old/Producer";
import CostCenter from "./Modules/Old/CostCenter";
import VendorContract from "./Modules/Old/VendorContract";
import Customnotification from "./Modules/Old/Customnotification";
import Auth from "./Modules/Old/Auth";
import InvoiceSetting from "./Modules/Old/InvoiceSetting";
import Purchase from "./Modules/Old/Invoice";
import Card from "./Modules/Old/Card";
import PointOfSale from "./Modules/Old/PointOfSale";
import Log from "./Modules/Old/Log";
import Promotion from "./Modules/Old/Promotion";
import PaymentWay from "./Modules/Old/PaymentWay";
import FinancialAccount from "./Modules/Old/FinancialAccount";
import DelecateCommission from "./Modules/Old/DelecateCommission";
import Commission from "./Modules/Old/Commission";
import GetCategory from "./Modules/Old/GetCategory";
import InvoiceInstallment from "./Modules/Old/InvoiceInstallment";
import Trailer from "./Modules/Old/Trailer";

// Warehouse
import Tabulation from "./Modules/Warehouse/Tabulation";
import Product from "./Modules/Warehouse/Product";
import Category from "./Modules/Warehouse/Category";
import WareHouse from "./Modules/Warehouse/WareHouse";
import Determinant from "./Modules/Warehouse/Determinant";
import PriceList from "./Modules/Warehouse/PriceList";
import ProductTabulation from "./Modules/Warehouse/ProductTabulation";
import Tag from "./Modules/Warehouse/Tag";
import Guarantee from "./Modules/Warehouse/Guarantee";
import Unit from "./Modules/Warehouse/Unit";


// FixedAssets
import AssetGroup from "./Modules/FixedAssets/AssetGroup";
import AssetStatus from "./Modules/FixedAssets/AssetStatus";

// POS
import SellingPoint from "./Modules/POS/SellingPoint";
import Member from "./Modules/POS/Member";
import Period from "./Modules/POS/Period";
// tools
import District from "./Modules/Tools/District";
import CarData from "./Modules/Tools/CarData";
import taxes from "./Modules/Tools/taxes";
import PaymentType from "./Modules/Tools/PaymentType";
import trailerWheels from "./Modules/Tools/trailerWheels";
import CarClassification from "./Modules/Tools/CarClassification";
import trailerData from "./Modules/Tools/trailerData";
import trailerDocumentType from "./Modules/Tools/trailerDocumentType";
import carDocumentType from "./Modules/Tools/carDocumentType";
import carTypes from "./Modules/Tools/carTypes";
import trailerTypes from "./Modules/Tools/trailerTypes";
import carWheels from "./Modules/Tools/carWheels";
import CarStatus from "./Modules/Tools/CarStatus";
import DocumentIssuer from "./Modules/Tools/DocumentIssuer";
import Currency from "./Modules/Tools/Currency";
import Country from "./Modules/Tools/Country";
import Supplier from "./Modules/Tools/Supplier";
import Customer from "./Modules/Warehouse/Customer";
import Nationality from "./Modules/Tools/Nationality";


// ==========================Temps========================
import Accounts from "./Modules/Temps/Account";
import Employees from "./Modules/Temps/Employee";
import CostCenters from "./Modules/Temps/CostCenter";
import Groups from "./Modules/Temps/Group";


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    welcomeMSG: "",
    token: "",
    user: "",
  },
  // -----------------------------------------------------------------

  // -----------------------------------------------------------------
  mutations: {
    setAuthToken(state, token) {
      state.token = token;
    },

    setCurrentUser(state, user) {
      state.user = user;
    },
    destroyToken(state) {
      state.token = null;
      state.user = null;
      state.permissions = null;
      window.permissions = null;
    },
  },
  // -----------------------------------------------------------------
  getters: {
    loggedin(state) {
      if (state.token != null) {
        if (state.token != undefined) {
          if (state.token != "") {
            return true;
          }
        }
      }
      state.token = null;
      return false;
    },
    getToken(state) {
      return state.token;
    },
  },
  actions: {
    swalSuccess(vuexContext, text) {
      Swal.fire({
        type: "success",
        text: text,
      });
    },

    swalAddSuccess(vuexContext, text) {
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: text ? i18n.t(`${text}`) : i18n.t("saved"),
        showConfirmButton: false,
        padding: "1em",
        color: "#716add",

        background: "#fff url(/images/trees.png)",
        timer: 2000,
        showClass: {
          popup: "animate__animated animate__fadeInLeft",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
      });
    },
    SwalNotDeleted(vuexContext, text) {
      return Swal.fire({
        title: "Warrning",
        text: text,
        confirmButtonColor: "#cd2b1b",
        confirmButtonText: "ok",
        icon: "warning",
      });
    },
  },
  // -----------------------------------------------------------------

  modules: {
    ProductTabulation:ProductTabulation,
    Country: Country,
    City: City,
    District: District,
    Branch: Branch,
    Unit: Unit,
    InvoiceSettingGroup: InvoiceSettingGroup,
    FixedAssetCat: FixedAssetCat,
    Determinant: Determinant,
    CarData: CarData,
    PriceList: PriceList,
    DiscountVendorContract: DiscountVendorContract,
    taxes: taxes,
    CostWay: CostWay,
    Category: Category,
    SubCategory: SubCategory,
    ProductType: ProductType,
    Discount: Discount,
    Currency: Currency,
    Employee: Employee,
    Guarantee: Guarantee,
    Product: Product,
    Classification: Classification,
    WareHouse: WareHouse,
    Option: Option,
    Account: Account,
    Voucher: Voucher,
    Producer: Producer,
    CostCenter: CostCenter,
    InvoiceSetting: InvoiceSetting,
    Purchase: Purchase,
    VendorContract: VendorContract,
    Customnotification: Customnotification,
    Card: Card,
    PointOfSale: PointOfSale,
    Log: Log,
    Tabulation: Tabulation,
    Promotion: Promotion,
    PaymentWay: PaymentWay,
    FinancialAccount: FinancialAccount,
    DelecateCommission: DelecateCommission,
    Commission: Commission,
    GetCategory: GetCategory,
    InvoiceInstallment: InvoiceInstallment,
    Trailer: Trailer,
    Shift: Shift,
    AssetGroup: AssetGroup,
    carTypes: carTypes,
    trailerTypes: trailerTypes,
    carWheels: carWheels,
    trailerWheels: trailerWheels,
    CarStatus: CarStatus,
    CarClassification: CarClassification,
    DocumentIssuer: DocumentIssuer,
    AssetStatus: AssetStatus,
    SellingPoint: SellingPoint,
    Member: Member,
    Period: Period,
    trailerData: trailerData,
    trailerDocumentType: trailerDocumentType,
    carDocumentType: carDocumentType,
    PaymentType: PaymentType,
    Tag: Tag,
    Supplier:Supplier,
    Accounts:Accounts,
    Employees:Employees,
    CostCenters:CostCenters,
    Groups:Groups,
    Customer:Customer,
    Nationality: Nationality
  },
});
