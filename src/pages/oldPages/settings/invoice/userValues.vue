<template>
    <div>
        <div class=" col-12 p-0">
            <div class="border p-3">
                <div class="align-items-end row">
                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_inventory" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_inventory" name="dv[has_inventory]" value="1" unchecked-value="0" v-model="has_inventory" />
                                <span></span>
                                has_inventory
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[inventory_id]" class="form-control has_inventory" :disabled="!has_inventory" >
                                <option selected disabled>
                                    choose_inventory
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_delegate" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_delegate" name="dv[has_employee]" value="1" unchecked-value="0" v-model="has_employee" />
                                <span></span>
                                has_delegate
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[delegate_id]" class="form-control has_delegate" :disabled="!has_employee" >
                                <option selected disabled>choose_employee</option>
                                <option v-for="(employee, i) in invoiceSetting.employees" :value="employee.id" :key="i" >
                                    {{ employee.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_payment_method" class="checkbox checkbox-outline " >
                                <input type="checkbox" id="has_payment_method" name="dv[has_payment_method]" value="1" unchecked-value="0" v-model="has_payment_method" />
                                <span></span>
                                has_payment_method
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[payment_method_id]" class="form-control has_payment_method" :disabled="!has_payment_method" >
                                <option selected disabled>choose_payment_method</option>
                                <option v-for="(payment_method, i) in invoiceSetting.payment_methods" :value="payment_method.id" :key="i" >
                                  {{ payment_method.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_default_price" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_default_price" name="dv[has_default_price]" value="1" unchecked-value="0" v-model="has_default_price" />
                                <span></span>
                                has_default_price
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[default_price_id]" class="form-control has_default_price" :disabled="!has_default_price">
                                <option selected disabled>
                                    default_price
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_cost_center" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_cost_center" name="dv[has_cost_center]" value="1" unchecked-value="0" v-model="has_cost_center"/>
                                <span></span>
                                has_cost_center
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[cost_center_id]" class="form-control has_cost_center" :disabled="!has_cost_center">
                                <option selected disabled>
                                    cost_center
                                </option>
                                <option v-for="(costCenter, i) in invoiceSetting.costCenters" :value="costCenter.id" :key="i">
                                    {{ costCenter.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_project" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_project" name="dv[has_project]" value="1" unchecked-value="0" style="margin-top: 3px" v-model="has_project"/>
                                <span></span>
                                has_project
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[project_id]" class="form-control has_project" :disabled="!has_project">
                                <option selected disabled>
                                    project
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_discount_account" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_discount_account" name="dv[has_discount_account]" value="1" unchecked-value="0" v-model="has_discount_account"/>
                                <span></span>
                                has_discount_account
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[discount_account_id]" class="form-control has_discount_account" :disabled="!has_discount_account">
                                <option selected disabled>
                                    discount_account
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_opposite_discount_account" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_opposite_discount_account" name="dv[has_opposite_discount_account]" value="1" unchecked-value="0" v-model="has_opposite_discount_account"/>
                                <span></span>
                                has_opposite_discount_account
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[opposite_discount_account_id]" class="form-control has_opposite_discount_account" :disabled="!has_opposite_discount_account">
                                <option selected disabled>
                                    opposite_discount_account
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_reference" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_reference" name="dv[has_reference]" value="1" unchecked-value="0" v-model="has_reference"/>
                                <span></span>
                                has_reference
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[reference_id]" class="form-control has_reference" :disabled="!has_reference">
                                <option selected disabled>
                                    reference
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_sale_point" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_sale_point" name="dv[has_sale_point]" value="1" unchecked-value="0" v-model="has_sale_point"/>
                                <span></span>
                                has_sale_point
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[sale_point_id]" class="form-control has_sale_point" :disabled="!has_sale_point">
                                <option selected disabled>
                                    sale_point
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_account" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_account" name="dv[has_account]" value="1" unchecked-value="0" v-model="has_account"/>
                                <span></span>
                                has_account
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[account_id]" class="form-control has_account" :disabled="!has_account">
                                <option selected disabled>
                                    account
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_opposite_account" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_opposite_account" name="dv[has_opposite_account]" value="1" unchecked-value="0" v-model="has_opposite_account"/>
                                <span></span>
                                has_opposite_account
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[opposite_account_id]" class="form-control has_opposite_account" :disabled="!has_opposite_account">
                                <option selected disabled>
                                    opposite_account
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_opposite_account_address" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_opposite_account_address" name="dv[has_opposite_account_address]" value="1" unchecked-value="0" v-model="has_opposite_account_address"/>
                                <span></span>
                                has_opposite_account_address
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[opposite_account_address]" class="form-control has_opposite_account_address" :disabled="!has_opposite_account_address">
                                <option selected disabled>
                                    opposite_account_address
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="checkbox-inline">
                            <label for="has_en_opposite_account_address" class="checkbox checkbox-outline ">
                                <input type="checkbox" id="has_en_opposite_account_address" name="dv[has_en_opposite_account_address]" value="1" unchecked-value="0" v-model="has_en_opposite_account_address"/>
                                <span></span>
                                has_en_opposite_account_address
                            </label>
                        </div>
                    </div>
                    <div class="col-3 mb-2">
                        <div class="form-control p-0 has-float-label">
                            <select name="dv[en_opposite_account_address]" class="form-control has_en_opposite_account_address" :disabled="!has_en_opposite_account_address">
                                <option selected disabled>
                                    en_opposite_account_address
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border p-3 mt-3 position-relative">
                <h5 class="title-box0 text-capitalize">
                    pay type
                </h5>
                <div class="mt-3">
                    <div>
                        <b-card no-body>
                            <b-tabs pills card vertical>
                                <b-tab title="all pay ways" active >
                                    <b-card-text>
                                        <pay-ways />
                                    </b-card-text >
                                </b-tab>
                                <b-tab title="cash"  >
                                    <b-card-text>
                                        <pay-ways />
                                    </b-card-text >
                                </b-tab>
                                <b-tab title="credit" >
                                    <b-card-text>
                                        <pay-ways />
                                    </b-card-text >
                                </b-tab>
                                <b-tab title="installment" >
                                    <b-card-text>
                                        <pay-ways />
                                    </b-card-text >
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PayWays from "././payWays.vue";

export default {
    name: "userValues",
    components: { PayWays },
    props: {
        data: {},
        invoiceSetting: { type: Object },
    },

    data() {
        return {
            has_inventory: false,
            has_employee: false,
            has_payment_method: false,
            has_default_price: false,
            has_cost_center: false,
            has_project: false,
            has_discount_account: false,
            has_opposite_discount_account: false,
            has_reference: false,
            has_sale_point: false,
            has_account: false,
            has_opposite_account: false,
            has_opposite_account_address: false,
            has_en_opposite_account_address: false,
        };
    },
};
</script>
