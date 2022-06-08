<template>
  <div class="d-flex flex-column flex-row-fluid wrapper fixed-bottom">
    <div class="footer bg-white d-flex flex-lg-column p-2" id="kt_footer">
      <!--begin::Container-->
      <div
        class="
          container-fluid
          d-flex
          flex-column flex-md-row
          align-items-center
          justify-content-between
        "
      >
        <!--begin::Copyright-->
        <div class="text-dark order-2 order-md-1">
          <span class="text-muted  mr-2">©{{ new Date().getFullYear() }}</span>
          <a href="#" target="_blank" class="text-dark-75 text-hover-primary"
            >Malaz-ERP</a
          >
        </div>
        <!--end::Copyright-->
        <!--begin::Nav-->
        <div class="nav nav-dark">
          <span class="date-footer">{{currentDateTime()}}</span>
        </div>
        <!--end::Nav-->
      </div>
      <!--end::Container-->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    currentDateTime() {
      // const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const current = new Date();
      const date = current.toLocaleDateString(undefined, options);//en-date
      // const date = current.toLocaleDateString('ar-EG', options); //ar-date
      const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    
      const dateTime = date +'  ||  '+ "Time >> " + time ;
      
      
      return dateTime;
    }
  }
};
</script>


<style>
</style>