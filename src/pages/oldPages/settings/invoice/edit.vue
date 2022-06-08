<!--<template>-->
<!--    <div class="card card-custom mb-9 mt-10">-->
<!--        <div class="card-header flex-wrap border-0 pb-0">-->

<!--            <div class="card-title mb-7">-->
<!--                <h3 class="card-label">cost_center</h3>-->
<!--            </div>-->

<!--            <div class="add-tabs w-100 sub-tabs">-->

<!--                <form @submit.prevent="updateCostCenter" id="cost_center_form" autocomplete="off" method="PUT" action="#">-->
<!--                    <div class="tab-content" id="myTabContent">-->

<!--                        <div class="tab-pane fade active show" id="page-general" role="tabpanel"-->
<!--                             aria-labelledby="page-g-tab">-->

<!--                            <div class="tab-content" id="myTabContent-general">-->
<!--                                <lang-tabs :languages="languages">-->
<!--                                    <template v-slot:input="{ language }">-->
<!--                                        <inputs :language="language" :errors="errors" :costCenter="costCenter"/>-->
<!--                                    </template>-->
<!--                                </lang-tabs>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="form-group row" style="padding: 20px">-->
<!--                            <div class=" col-lg-9">-->
<!--                                <label class="col-lg-12 col-form-label">parent</label>-->
<!--                                <div class="col-lg-12 input-group p-0">-->
<!--                                    <select name="cost_center_id" class="form-control has_sale_point" required>-->
<!--                                        <option selected disabled>parent</option>-->
<!--                                        <option v-for="(cc, i) in costCenters" :value="cc.id" :key="i"-->
<!--                                                :selected="cc.id === costCenter.cost_center_parent_id" >{{ cc.name }}</option>-->
<!--                                    </select>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="form-group row" style="padding: 20px">-->
<!--                            <div class=" col-lg-9">-->
<!--                                <label class="col-lg-12 col-form-label">opening_expenses</label>-->
<!--                                <div class="col-lg-12 input-group p-0">-->
<!--                                    <input type="number" class="form-control" placeholder="opening_expenses" name="opening_expenses"-->
<!--                                       :value="costCenter.opening_expenses">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="form-group row" style="padding: 20px">-->
<!--                            <div class=" col-lg-9">-->
<!--                                <label class="col-lg-12 col-form-label">opening_returns</label>-->
<!--                                <div class="col-lg-12 input-group p-0">-->
<!--                                    <input type="number" class="form-control" placeholder="opening_returns" name="opening_returns"-->
<!--                                        :value="costCenter.opening_returns">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="form-group row" style="padding: 20px">-->
<!--                            <div class=" col-lg-9">-->
<!--                                <label class="col-lg-12 col-form-label">expected_costs</label>-->
<!--                                <div class="col-lg-12 input-group p-0">-->
<!--                                    <input type="number" class="form-control" placeholder="expected_costs" name="expected_costs"-->
<!--                                        :value="costCenter.expected_costs">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="form-group row" style="padding: 20px">-->
<!--                            <div class=" col-lg-9">-->
<!--                                <label class="col-lg-12 col-form-label">expected_returns</label>-->
<!--                                <div class="col-lg-12 input-group p-0">-->
<!--                                    <input type="number" class="form-control" placeholder="expected_returns" name="expected_returns"-->
<!--                                        :value="costCenter.expected_returns">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="form-group row" style="padding: 20px">-->
<!--                            <div class=" col-lg-3">-->
<!--                                <div class=" input-group p-0">-->
<!--                                    <input type="hidden" name="is_active" value="0">-->
<!--                                    <input type="checkbox" id="is_active" name="is_active" :value="costCenter.is_active"-->
<!--                                           :checked="costCenter.is_active" style="margin-top: 3px">-->
<!--                                    <label for="is_active" class="col-form-label p-0">is_active</label>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="col-12 text-start p-0 ">-->
<!--                            <button type="submit" class="btn btn-primary mb-2 mt-5">Save</button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </form>-->
<!--            </div>-->
<!--            &lt;!&ndash;end::Form&ndash;&gt;-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import LangTabs from "@/components/form/LangTabs.vue";-->
<!--import Inputs from "./EditInputs.vue";-->

<!--export default {-->
<!--    name: "cost_center.edit",-->
<!--    components: { LangTabs, Inputs },-->
<!--    props: {-->
<!--        errors: {-->
<!--            type: Object,-->
<!--            default: () => ({}),-->
<!--        },-->
<!--    },-->
<!--    data() {-->
<!--        return {-->
<!--            costCenter: {},-->
<!--            costCenters: [],-->
<!--            languages: window.languages,-->
<!--        };-->
<!--    },-->
<!--    created() {-->
<!--        this.costCenterId = this.$route.params.id;-->
<!--        this.getCostCenter();-->
<!--        this.getCostCenters()-->
<!--    },-->
<!--    methods: {-->
<!--        async updateCostCenter() {-->
<!--            try {-->
<!--                var form = document.getElementById("cost_center_form");-->
<!--                var formData = new FormData(form);-->
<!--                formData.append("_method", "PUT");-->
<!--                const costCenter = { URL: "cost_center/" + this.costCenterId, data: formData };-->
<!--                await this.$store.dispatch("updateCostCenter", costCenter);-->
<!--            } catch (errors) {-->
<!--                this.errors = errors;-->
<!--            }-->
<!--        },-->
<!--        getCostCenter() {-->
<!--            $axios.get('/cost_center/' +  this.costCenterId)-->
<!--                .then( response => {-->
<!--                    this.costCenter = response.data.data;-->
<!--                } )-->
<!--                .catch( error => {-->
<!--                     -->
<!--                } )-->
<!--        },-->
<!--        getCostCenters() {-->
<!--            $axios.get('/cost_center')-->
<!--                .then( response => {-->
<!--                    this.costCenters = response.data.data;-->
<!--                } )-->
<!--                .catch( error => {-->
<!--                     -->
<!--                } )-->
<!--        }-->
<!--    },-->
<!--};-->
<!--</script>-->