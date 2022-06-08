<template>

  <b-modal id="modal-lg" size="lg" title="search" @ok="submitModal()">


                          <div>
  <b-button v-b-toggle.collapse-1 variant="primary">setting </b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>

                                    <div class="search-way row">

                                            <div class="form-group col-md-4 col-12">
                                                <label class="title-search">Search Way</label>
                                                <div class="mt-4">
                                                    <div class="radio-list">
                                                        <label class="radio radio-outline radio-primary">
                                                        <input type="radio" class="search_way" value="founded">
                                                        <span></span>where founded</label>
                                                        <label class="radio radio-outline radio-primary">
                                                        <input type="radio" class="search_way" value="identical">
                                                        <span></span>identical</label>
                                                        <label class="radio radio-outline radio-primary ">
                                                        <input type="radio" class="search_way" value="at_beginning">
                                                        <span></span>at the beginning</label>
                                                        <label class="radio radio-outline radio-primary ">
                                                            <input type="radio" class="search_way" value="at_end">
                                                            <span></span>at the end</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="form-group col-md-4 col-12">
                                                <label class="title-search">Search In</label>
                                                <div class="mt-4">
                                                    <div class="radio-list" id="warehouse-cols">
                                                
                                                <label v-for="(column,index) in columns" class="radio radio-outline radio-primary">
                                                        <input type="checkbox" class="columns_search" :value="column" >
                                                    <span></span>{{column}}</label>
                                                                                                      
                                                                                                        </div>

                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 col-12">
                                                <label class="title-search">view columns</label>
                                                <div class="mt-4">
                                                    <div class="radio-list" id="ware-search-cols">
                                                    <label class="radio radio-outline radio-primary" v-for="(column,index) in columns">
                                                        <input type="checkbox" class="columns_view" :value="column">
                                                    <span></span>{{column}}</label>
                                                                                                       
                                                                                                        </div>

                                                </div>
                                            </div>
                                    </div>
                                    <div class="col-12 text-end p-0 ">
                                        <button type="button" @click="submitSetting()" class="btn btn-primary mb-2 mt-5">Save</button>
                                    </div>

      
    </b-card>
  </b-collapse>
</div>

                            <div class="card-body pr-0 pl-0 pt-2 pb-2">
                             <div class="form-group">
                              <div class="input-icon">

                               <input type="text" class="form-control"  id="internal_search" ref="searchbar" :value="search_key" @keyup="search(model,table,'internal_search')" />
                               <span><i class="flaticon2-search-1 icon-md"></i></span>
                              </div>
                             </div>
                            </div>
                           <div class="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded table-search"
                           id="kt_datatable_2" style="">
                           <table class="datatable-table">
                               <thead class="datatable-head">
                                   <tr class="datatable-row" style="left: 0px;">
                                        <th data-field="id" class="datatable-cell-center datatable-cell datatable-cell-check"></th>
                                       
                                                <th v-for="(column_view,index) in columns_view" class="datatable-cell " :key="index"><span style=""> {{column_view}} </span></th>
                                                <th v-if="!columns_view" data-field="employee_id" class="datatable-cell "><span style=""> Name </span></th>
                                        
                                   </tr>
                                    <tr class="datatable-row" style="left: 0px;" v-for="result  in results" :key="result">
                                        <td><input type="checkbox" :value="result.id" @click="addValues($event,result)"></td>
                                        <td v-for="column_view in columns_view"  :key="column_view"><span v-if="column_view == 'name'">{{result['name']['en']}}</span><span v-else>{{result[column_view]}}</span></td>
                                    </tr>


                               </thead>
                               <tbody class="datatable-body " id = "modal-table">







                               </tbody>
                           </table>
                           </div>












          </b-modal>

</template>
    <script>
    export default {
        name: "search",
        props:{
            errors: {
                type: Object,
                default: () => ({}),
            },
            search_setting:{},
            columns: {
                type: Array,
                default: () => [],
            },
            model :{
                type: String,
                default:() => ''
            },
            results :{},
            search_key:'',
            columns_view : {
                type: Array,
                default: () => [],
            },
            columns_search : {
                type: Array,
                default: () => [],
            },
            search : {
                type : Function
            }
            
           
        },
        data() {
            return {
                selected_data : [],
                selected_objects : []
            }
        },
        components: {
           
        },
        created() {
        },
       
        methods: {

        submitSetting(){
            var ways = document.getElementsByClassName('search_way');
            var search_way;
            for(var i = 0; i < ways.length; i++){
                if(ways[i].checked){
                    search_way = ways[i].value;
                }
            }

            var columns_view = document.getElementsByClassName('columns_view');
            var selected_columns_view = [];
            for(var i = 0; i < columns_view.length; i++){
                if(columns_view[i].checked){
                    selected_columns_view.push(columns_view[i].value);
                }
            }

            var columns_search = document.getElementsByClassName('columns_search');
            var selected_columns_search = [];
            for(var i = 0; i < columns_search.length; i++){
                if(columns_view[i].checked){
                    selected_columns_search.push(columns_search[i].value);
                }
            }

            $axios
            .post(`search-setting`,{
                'model':this.model,
                'columns':selected_columns_search,
                'columns_view': selected_columns_view,
                'search_way': search_way
            })
            .then((response) => {
                 Swal.fire(
                    "Search settings have been Saved",
                    "success"
                );
            })

            



        },
        addValues(e, res){
            var value = e.target.value;
            if(this.selected_data.includes(value)){
                this.selected_data.splice(this.selected_data.indexOf(value), 1);
                this.selected_objects.splice(this.selected_objects.indexOf(res), 1);
            }else{
                this.selected_data.push(value);
                this.selected_objects.push(res);
            }

        },
        submitModal(){
            document.getElementById('warehouse_data').value = this.selected_data;
        },
        },


    }
       

        
    </script>