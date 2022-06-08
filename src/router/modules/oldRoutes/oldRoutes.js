import Pages from "@/pages";
export default [{
        path: "/cities/:id",
        name: "show-cities",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/cities/showCity.vue"),
        },
    },


    {
        path: "/subCategories/edit/:id",
        name: "edit-subCategories",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/subCategories/editCategory.vue"),
        },
    },

    {
        path: "/subCategories/:id",
        name: "show-subCategories",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/subCategories/showCategory.vue"),
        },
    },
    {
        path: "/discounts",
        name: "discounts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/discounts/index.vue"),
        },
    },
    {
        path: "/discounts/create",
        name: "add-discounts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/discounts/addDiscount.vue"),
        },
    },
    {
        path: "/discounts/edit/:id",
        name: "edit-discounts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/discounts/editDiscount.vue"),
        },
    },
    {
        path: "/discounts/:id",
        name: "show-discounts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/discounts/showDiscount.vue"),
        },
    },

    {
        path: "/productTypes/edit/:id",
        name: "edit-productTypes",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/productTypes/editProductType.vue"),
        },
    },

    {
        path: "/priceSettings/create",
        name: "add-priceSettings",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/priceSettings/addPriceSetting.vue"),
        },
    },

    {
        path: "/accounts/:id",
        name: "show-accounts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/accounts/showAccount.vue"),
        },
    },

    {
        path: "/logs",
        name: "logs",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/logs/index.vue"),
        },
    },



    {
        path: "/Customnotification",
        name: "Customnotification",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/customnotifications/index.vue"),
        },
    },
    {
        path: "/Customnotification/create",
        name: "add_Customnotification",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/customnotifications/addCustomnotification.vue"
                ),
        },
    },

    {
        path: "/Customnotification/edit/:id",
        name: "edit-Customnotification",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/customnotifications/editCustomnotification.vue"
                ),
        },
    },

    {
        path: "/Customnotification/:id",
        name: "show-Customnotification",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/customnotifications/showCustomnotification.vue"
                ),
        },
    },

    {
        path: "/vendorsContracts",
        name: "vendorsContracts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/vendorsContracts/index.vue"),
        },
    },

    {
        path: "/vendorsContracts/create",
        name: "add_vendorsContracts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/vendorsContracts/addVendorContract.vue"),
        },
    },

    {
        path: "/vendorsContracts/:id",
        name: "show-vendorsContracts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/vendorsContracts/showVendorContract.vue"),
        },
    },

    {
        path: "/vendorsContracts/edit/:id",
        name: "edit-vendorsContracts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/vendorsContracts/editVendorContract.vue"),
        },
    },

    {
        path: "/Tabulations",
        name: "Tabulations",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/tabulations/index.vue"),
        },
    },
    {
        path: "/Tabulations/create",
        name: "add_Tabulations",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/tabulations/addTabulations.vue"),
        },
    },
    {
        path: "/Tabulations/edit/:id",
        name: "edit-Tabulations",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/tabulations/editTabulations.vue"),
        },
    },
    {
        path: "/Tabulations/:id",
        name: "show-Tabulations",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/tabulations/showTabulations.vue"),
        },
    },

    {
        path: "/cards",
        name: "cards",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/cards/index.vue"),
        },
    },
    {
        path: "/cards/create",
        name: "add-cards",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/cards/addCard.vue"),
        },
    },
    {
        path: "/cards/edit/:id",
        name: "edit-cards",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/cards/editCard.vue"),
        },
    },
    {
        path: "/cards/:id",
        name: "show-cards",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/cards/showCard.vue"),
        },
    },

    {
        path: "/promotions",
        name: "promotions",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/promotions/index.vue"),
        },
    },
    {
        path: "/promotions/create",
        name: "add-promotions",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/promotions/create.vue"),
        },
    },

    {
        path: "/paymentWays",
        name: "paymentWays",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/paymentways/index.vue"),
        },
    },
    {
        path: "/paymentWays/create",
        name: "add-paymentWays",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/paymentways/addPaymentWays.vue"),
        },
    },

    {
        path: "/paymentWays/edit/:id",
        name: "edit-paymentWays",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/paymentways/editPaymentWays.vue"),
        },
    },

    {
        path: "/paymentWays/:id",
        name: "show-paymentWays",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/paymentways/showPaymentWays.vue"),
        },
    },

    {
        path: "/delegateCommissions",
        name: "delegateCommissions",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/delecatecommissions/index.vue"),
        },
    },
    {
        path: "/delegateCommissions/create",
        name: "add-delegateCommissions",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/delecatecommissions/addDelecateCommissions.vue"
                ),
        },
    },
    {
        path: "/statementDelivered/create",
        name: "add-StatementDelivered",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/statementDelivered/addStatementDelivered.vue"),
        },
    },

    {
        path: "/delegateCommissions/edit/:id",
        name: "edit-delegateCommissions",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/delecatecommissions/editDelecateCommissions.vue"
                ),
        },
    },

    {
        path: "/delegateCommissions/:id",
        name: "show-delegateCommissions",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/delecatecommissions/showDelecateCommissions.vue"
                ),
        },
    },
    {
        path: "/invoiceInstallment/create",
        name: "add-invoiceInstallment",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/invoiceInstallment/add.vue"),
        },
    },

    {
        path: "/invoiceInstallment/edit/:id",
        name: "edit-invoiceInstallment",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/invoiceInstallment/edit.vue"),
        },
    },
    {
        path: "/invoiceInstallment/:id",
        name: "show-invoiceInstallment",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/invoiceInstallment/show.vue"),
        },
    },
    {
        path: "/invoiceInstallment",
        name: "invoiceInstallment",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/invoiceInstallment/index.vue"),
        },
    },
    {
        path: "/invoiceSettingGroups",
        name: "invoiceSettingGroups",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/invoiceSettingGroups/index.vue"),
        },
    },
    {
        path: "/invoiceSettingGroups/create",
        name: "add-invoiceSettingGroups",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/invoiceSettingGroups/addInvoiceSettingGroup.vue"
                ),
        },
    },
    {
        path: "/invoiceSettingGroups/edit/:id",
        name: "edit-invoiceSettingGroups",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/invoiceSettingGroups/editInvoiceSettingGroup.vue"
                ),
        },
    },
    {
        path: "/discountVendorContracts/edit/:id",
        name: "edit-discountVendorContracts",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/discountVendorContracts/editDiscountVendorContract.vue"
                ),
        },
    },
    {
        path: "/invoiceSettingGroups/:id",
        name: "show-invoiceSettingGroups",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/invoiceSettingGroups/showInvoiceSettingGroup.vue"
                ),
        },
    },

    {
        path: "/discountVendorContracts",
        name: "discountVendorContracts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/discountVendorContracts/index.vue"),
        },
    },
    {
        path: "/discountVendorContracts/create",
        name: "add-discountVendorContracts",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/discountVendorContracts/addDiscountVendorContract.vue"
                ),
        },
    },
    {
        path: "/discountVendorContracts/:id",
        name: "show-discountVendorContracts",
        components: {
            default: Pages,
            pageContent: () =>
                import (
                    "@/pages/oldPages/discountVendorContracts/editDiscountVendorContract.vue"
                ),
        },
    },

    {
        path: "/shifts",
        name: "shifts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/shifts/index.vue"),
        },
    },
    {
        path: "/shifts/create",
        name: "add-shifts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/shifts/addShift.vue"),
        },
    },

    {
        path: "/shifts/edit/:id",
        name: "edit-shifts",
        components: {
            default: Pages,
            pageContent: () =>
                import ("@/pages/oldPages/shifts/editShif.vue"),
        },
    },
];